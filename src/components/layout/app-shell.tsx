import { type ReactNode, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  BookOpen,
  ClipboardCheck,
  FileStack,
  GitBranch,
  LayoutDashboard,
  LifeBuoy,
  Menu,
  Search,
  ShieldCheck,
  Ticket,
} from "lucide-react";
import { SkyryseWordmark } from "@/components/brand/logo";
import { Assistant } from "@/components/assistant";
import { CommandPalette } from "@/components/command-palette";
import { JiraDialog } from "@/components/jira-dialog";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useBms } from "@/lib/store";

const nav = [
  { href: "/", label: "Process map", icon: GitBranch },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/documents", label: "Documents", icon: FileStack },
  { href: "/manual", label: "Quality manual", icon: BookOpen },
  { href: "/capa", label: "NCR / CAPA", icon: Ticket },
  { href: "/audits", label: "Audits", icon: ClipboardCheck },
  { href: "/compliance", label: "Compliance", icon: ShieldCheck },
  { href: "/integrations", label: "Systems", icon: Activity },
  { href: "/guidance", label: "Guidance", icon: LifeBuoy },
] as const;

function NavLinks({ onGo }: { onGo?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="flex flex-col gap-0.5">
      {nav.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            to={item.href}
            onClick={onGo}
            className={cn(
              "flex h-10 items-center gap-3 rounded-md px-3 text-sm",
              active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
            )}
          >
            <Icon className="size-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const { setCommandOpen, openJira } = useBms();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-border bg-card/80 px-3 py-4 md:flex">
        <Link to="/" className="mb-6 px-1">
          <SkyryseWordmark />
        </Link>
        <NavLinks />
        <p className="mt-auto px-3 pt-6 font-mono text-2xs uppercase tracking-mark text-muted-foreground">
          AS9100D · 14 CFR 21
        </p>
      </aside>

      <header className="sticky top-0 z-20 flex h-14 items-center gap-2 border-b border-border bg-background/90 px-3 backdrop-blur md:ml-56 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
        <Link to="/" className="md:hidden">
          <SkyryseWordmark compact />
        </Link>
        <button
          type="button"
          onClick={() => setCommandOpen(true)}
          className="ml-auto flex h-10 min-w-0 flex-1 items-center gap-2 rounded-md border border-border bg-secondary px-3 text-sm text-muted-foreground md:max-w-sm md:flex-none"
        >
          <Search className="size-4 shrink-0" />
          <span className="truncate">Search procedures, stages, CAPA</span>
          <kbd className="ml-auto hidden font-mono text-2xs text-muted-foreground sm:inline">⌘K</kbd>
        </button>
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:inline-flex"
          onClick={() =>
            openJira({
              issueType: "Internal Discrepancy",
              summary: "",
              description: "",
              source: "Header",
            })
          }
        >
          <Ticket className="size-4" />
          Jira
        </Button>
      </header>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 p-4">
          <div className="mb-6 mt-2">
            <SkyryseWordmark />
          </div>
          <NavLinks onGo={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>

      <main className="md:ml-56">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">{children}</div>
      </main>

      <CommandPalette />
      <JiraDialog />
      <Assistant />
    </div>
  );
}
