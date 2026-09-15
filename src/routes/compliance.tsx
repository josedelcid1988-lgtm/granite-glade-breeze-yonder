import { createFileRoute, Link } from "@tanstack/react-router";
import { complianceMatrix } from "@/data/ops";
import { getDocument } from "@/data/documents";

export const Route = createFileRoute("/compliance")({ component: CompliancePage });

function CompliancePage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="font-mono text-xs uppercase tracking-mark text-primary">QM-001 Appendix A</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">AS9100D and 14 CFR Part 21</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Skyryse is an applicant for or holder of a PMA under 14 CFR part 21 subpart K. The quality system required by 21.307 is described in QM-001 as required by 21.308. Certificate of registration is issued by Perry Johnson Registrars, Inc. under a campus scheme.
        </p>
      </header>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">AS9100D</th>
              <th className="px-4 py-3 font-medium">14 CFR 21.137</th>
              <th className="px-4 py-3 font-medium">QMS document</th>
            </tr>
          </thead>
          <tbody>
            {complianceMatrix.map((row) => (
              <tr key={row.as9100} className="border-t border-border">
                <td className="px-4 py-3 align-top">{row.as9100}</td>
                <td className="px-4 py-3 align-top text-muted-foreground">{row.cfr}</td>
                <td className="px-4 py-3 align-top">
                  <div className="flex flex-wrap gap-2">
                    {row.documents.map((id) => {
                      const d = getDocument(id);
                      return d ? (
                        <Link
                          key={id}
                          to="/documents/$docId"
                          params={{ docId: id }}
                          className="font-mono text-xs text-primary hover:underline"
                        >
                          {d.number}
                        </Link>
                      ) : (
                        <span key={id} className="font-mono text-xs">
                          {id}
                        </span>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="rounded-xl border border-border bg-card p-5">
        <h2 className="font-display text-lg font-semibold">Appendix B — certificate</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          The AS9100D certificate of registration issued by Perry Johnson Registrars, Inc. is held in PDM with QM-001. Page 2 lists sites under the campus scheme. The certificate is valid only while surveillance is maintained. A change in status is notified to customers within two business days of receiving notification from the registrar (QM-001 §11.4).
        </p>
      </section>
    </div>
  );
}
