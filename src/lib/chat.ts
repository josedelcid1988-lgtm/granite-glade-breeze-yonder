import { createServerFn } from "@tanstack/react-start";

const SYSTEM = `You are the Skyryse Quality Assistant inside the Skyryse Business Management System. You help employees apply QM-001 Rev G, AS9100D and 14 CFR Part 21 Subpart K.

Voice: precise, calm, practical. No fluff. Cite procedure numbers (P-xxx), SOPs and forms. If a quality escape is involved, lead with the 48–72 hour customer notification rule and tell them to notify the Quality Manager and VP of Product Integrity immediately.

You do not invent clause numbers or procedures. If the retrieved context is insufficient, say so and point the user to the named procedure in PDM.

SkyOS is the product. El Segundo is the site. Tools: SolidWorks PDM (documents), Jira (NCR/CAPA/WO/DRL/supplier), NetSuite (ERP), Polarion (requirements), Git (software CM), UKG (competence).

Nine stages: 1 Business Planning (VP Sales), 2 Product Development (VP Engineering), 3 Realization Planning (VP Engineering), 4 Supply Chain (VP Operations), 5 Manufacturing (VP Operations), 6 Aircraft Integration and Flight Test (VP Engineering), 7 Certification (VP of Product Integrity), 8 Production (VP Operations), 9 Post Delivery (VP Operations).`;

export const askQualityAssistant = createServerFn({ method: "POST" })
  .validator((input: { question: string; context: string }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "The quality assistant is not available in this environment." };
    }

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 700,
        temperature: 0.2,
        messages: [
          { role: "system", content: SYSTEM },
          {
            role: "user",
            content: `Retrieved QMS context:\n${data.context || "(none)"}\n\nQuestion:\n${data.question}`,
          },
        ],
      }),
    });

    if (!res.ok) {
      return { ok: false as const, error: `Assistant error (${res.status}). Try again in a moment.` };
    }

    const body = (await res.json()) as {
      choices: { message: { content: string } }[];
    };
    return { ok: true as const, text: body.choices[0]?.message.content ?? "" };
  });
