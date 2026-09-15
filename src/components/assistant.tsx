import { useState } from "react";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { askQualityAssistant } from "@/lib/chat";
import { retrieveContext } from "@/data/search";
import { useBms } from "@/lib/store";
import type { ChatMessage } from "@/lib/store";

const starters = [
  "What do I do if I find a quality escape?",
  "How do I raise an NCR on a failed incoming lot?",
  "Which procedure covers 8130-3 signatures?",
  "Why is Stage 5 first pass yield at risk?",
  "Walk me through contract review before I accept an order.",
];

export function Assistant() {
  const { chatOpen, setChatOpen } = useBms();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);

  async function send(text: string) {
    const question = text.trim();
    if (!question || pending) return;
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: "user", content: question };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setPending(true);
    try {
      const context = retrieveContext(question);
      const result = await askQualityAssistant({ data: { question, context } });
      const content = result.ok ? result.text : result.error;
      setMessages((m) => [...m, { id: `a-${Date.now()}`, role: "assistant", content }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          content: "The assistant could not be reached. Open the procedure named on the process map, or try again.",
        },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setChatOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift tap-scale"
        aria-label="Open quality assistant"
      >
        <MessageCircle className="size-5" />
      </button>
      <Sheet open={chatOpen} onOpenChange={setChatOpen}>
        <SheetContent className="w-full max-w-md">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />
              Quality assistant
            </SheetTitle>
            <SheetDescription>
              Answers from QM-001 Rev G, the procedures, and the nine-stage architecture. Not a substitute for the released document in PDM.
            </SheetDescription>
          </SheetHeader>
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-3 overflow-y-auto px-6 py-4">
              {messages.length === 0 ? (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Ask a real question, or start here:</p>
                  {starters.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => void send(s)}
                      className="block w-full rounded-lg border border-border bg-secondary px-3 py-2 text-left text-sm hover:border-primary/40"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              ) : (
                messages.map((m) => (
                  <div
                    key={m.id}
                    className={
                      m.role === "user"
                        ? "ml-8 rounded-lg bg-primary/15 px-3 py-2 text-sm"
                        : "mr-4 rounded-lg border border-border bg-secondary px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap"
                    }
                  >
                    {m.content}
                  </div>
                ))
              )}
              {pending ? (
                <p className="text-xs text-muted-foreground">Looking through the QMS…</p>
              ) : null}
            </div>
            <form
              className="border-t border-border p-4"
              onSubmit={(e) => {
                e.preventDefault();
                void send(input);
              }}
            >
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about a procedure, metric, escape, or audit…"
                rows={3}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send(input);
                  }
                }}
              />
              <div className="mt-2 flex justify-end">
                <Button type="submit" size="sm" disabled={pending || !input.trim()}>
                  <Send className="size-3.5" />
                  Send
                </Button>
              </div>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
