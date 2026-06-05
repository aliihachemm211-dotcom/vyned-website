"use client";

const stages = [
  { name: "New Inquiry",          leads: 4,  color: "#4D8FFF",  highlighted: false },
  { name: "Pending Confirmation", leads: 7,  color: "#4D8FFF",  highlighted: true  },
  { name: "Viewing Confirmed",    leads: 3,  color: "#22c55e",  highlighted: false },
  { name: "Viewing Completed",    leads: 5,  color: "#f59e0b",  highlighted: false },
  { name: "Active Buyer",         leads: 2,  color: "#a855f7",  highlighted: false },
  { name: "Deal Closed",          leads: 1,  color: "#10b981",  highlighted: false },
];

export default function PipelineMockup() {
  return (
    <div className="relative">
      {/* Soft radial glow behind card */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(77,143,255,0.06) 0%, transparent 70%)",
          transform: "scale(1.6)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Card — border beam applied */}
      <div className="relative border-beam-surface rounded-[12px]" style={{ zIndex: 1 }}>
        <div
          className="bg-[#1a1d26] rounded-[11px]"
          style={{
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.25), 0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* ── Top bar ── */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ borderBottom: "1px solid #272A34" }}
          >
            <span
              className="text-[#80859A]"
              style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em" }}
            >
              Agent Pipeline
            </span>
            <div className="flex items-center gap-3">
              {/* Window dots */}
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: "#2a2d38" }} />
                <span className="w-2 h-2 rounded-full" style={{ background: "#2a2d38" }} />
                <span className="w-2 h-2 rounded-full" style={{ background: "#2a2d38" }} />
              </div>
              {/* Live indicator */}
              <div className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse-live"
                  style={{ background: "#22c55e" }}
                />
                <span
                  style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#22c55e", letterSpacing: "0.14em", textTransform: "uppercase" }}
                >
                  Live
                </span>
              </div>
            </div>
          </div>

          {/* ── Stage rows ── */}
          {stages.map((stage, i) => (
            <div
              key={stage.name}
              className={`flex items-center justify-between px-4 py-2.5 transition-all${
                stage.highlighted ? " animate-stage-pulse" : ""
              }`}
              style={{
                borderBottom: i < stages.length - 1 ? "1px solid rgba(49,52,63,0.6)" : "none",
                borderLeft: stage.highlighted ? "3px solid #4D8FFF" : "3px solid transparent",
                background: stage.highlighted ? "rgba(77,143,255,0.08)" : "transparent",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: stage.highlighted ? stage.color : stage.color + "60" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "11px",
                    color: stage.highlighted ? "#E8EAF2" : "#80859A",
                    letterSpacing: "0.02em",
                  }}
                >
                  {stage.name}
                </span>
              </div>
              <span
                className="rounded"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "10px",
                  padding: "2px 7px",
                  border: stage.highlighted ? "1px solid rgba(77,143,255,0.5)" : "1px solid #31343F",
                  color: stage.highlighted ? "#4D8FFF" : "#3D4050",
                  background: stage.highlighted ? "rgba(77,143,255,0.08)" : "transparent",
                }}
              >
                {stage.leads}
              </span>
            </div>
          ))}

          {/* ── THIS MONTH divider ── */}
          <div
            className="flex items-center gap-3 px-4 py-2"
            style={{ borderTop: "1px solid rgba(49,52,63,0.6)", borderBottom: "1px solid rgba(49,52,63,0.6)" }}
          >
            <div className="h-px flex-1" style={{ background: "#2a2d38" }} />
            <span
              style={{ fontFamily: "var(--font-dm-mono)", fontSize: "8px", color: "#3D4050", textTransform: "uppercase", letterSpacing: "0.2em" }}
            >
              This Month
            </span>
            <div className="h-px flex-1" style={{ background: "#2a2d38" }} />
          </div>

          {/* ── Stats ── */}
          <div className="grid grid-cols-3">
            {[
              { value: "22",   label: "Active Leads",  accent: true  },
              { value: "<1s",  label: "Response Time", accent: false },
              { value: "100%", label: "Automated",     accent: false },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-3 px-2 gap-0.5"
                style={i < 2 ? { borderRight: "1px solid rgba(49,52,63,0.6)" } : {}}
              >
                <span
                  className="leading-none"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "24px",
                    color: stat.accent ? "#4D8FFF" : "#E8EAF2",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-center leading-tight"
                  style={{ fontFamily: "var(--font-dm-mono)", fontSize: "7.5px", color: "#3D4050", textTransform: "uppercase", letterSpacing: "0.12em" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* ── Last updated ── */}
          <div
            className="px-4 py-2"
            style={{ borderTop: "1px solid rgba(49,52,63,0.6)" }}
          >
            <span
              style={{ fontFamily: "var(--font-dm-mono)", fontSize: "8.5px", color: "#2a2d38" }}
            >
              Last updated: just now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
