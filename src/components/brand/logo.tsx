import { cn } from "@/lib/utils";

export function SkyryseMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-primary", className)}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M3.2 5.4 12.4 19.2V27.4h7.2V19.2L28.8 5.4l-5.2-3.2L16 14.2 8.4 2.2 3.2 5.4z"
      />
    </svg>
  );
}

export function SkyryseWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-8 items-center justify-center rounded-md bg-secondary">
        <SkyryseMark className="size-5" />
      </div>
      <div className="leading-none">
        <div className="font-display text-base font-semibold tracking-tight">
          <span className="text-primary">SKY</span>
          <span className="text-foreground">RYSE</span>
        </div>
        {!compact ? (
          <div className="mt-0.5 font-mono text-2xs uppercase tracking-mark text-muted-foreground">
            BMS · QM-001 G
          </div>
        ) : null}
      </div>
    </div>
  );
}
