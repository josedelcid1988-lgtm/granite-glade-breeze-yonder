import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SkyryseMark } from "@/components/brand/logo";
import { useBms } from "@/lib/store";

export function Welcome() {
  const { tourDone, setTourDone, setChatOpen } = useBms();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <Dialog open={ready && !tourDone} onOpenChange={(o) => { if (!o) setTourDone(true); }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-secondary">
            <SkyryseMark className="size-6" />
          </div>
          <DialogTitle>Skyryse BMS</DialogTitle>
          <DialogDescription>
            Interactive Quality Management System aligned to QM-001 Rev G, AS9100D and 14 CFR Part 21 Subpart K.
          </DialogDescription>
        </DialogHeader>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Click any process box for the procedure, SOP, form and a Jira ticket.</li>
          <li>Dashboard carries the live stage metrics — dormant means not yet first delivery or first flight release, not a miss.</li>
          <li>The assistant answers from this QMS. PDM remains the system of record.</li>
        </ul>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button onClick={() => setTourDone(true)}>Start on the map</Button>
          <Button variant="secondary" asChild onClick={() => setTourDone(true)}>
            <Link to="/guidance">Open guidance</Link>
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setTourDone(true);
              setChatOpen(true);
            }}
          >
            Ask the assistant
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
