"use client";

const stages = [
  { name: "New Inquiry",          leads: 4,  highlighted: false },
  { name: "Pending Confirmation", leads: 7,  highlighted: true  },
  { name: "Viewing Confirmed",    leads: 3,  highlighted: false },
  { name: "Viewing Completed",    leads: 5,  highlighted: false },
  { name: "Active Buyer",         leads: 2,  highlighted: false },
  { name: "Deal Closed",          leads: 1,  highlighted: false },
];

export default function PipelineMockup() {
  return (
    <div className="relative">
      {/* Radial glow behind the card */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[12px]"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(77,143,255,0.12) 0%, transparent 70%)",
          transform: "scale(1.5)",
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Border-beam card */}
      <div
        className="relative border-beam-surface rounded-[8px]"
        style={{ zIndex: 1 }}
      >
        <div className="bg-[#272A34] rounded-[7px]">
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ borderBottom: "1px solid #31343F" }}
          >
            <span
              className="text-[#80859A]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              Agent Pipeline
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: "#31343F" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "#31343F" }} />
              <span className="w-2 h-2 rounded-full bg-[#4D8FFF] animate-pulse-dot" />
            </div>
          </div>

          {/* Stages */}
          <div>
            {stages.map((stage, i) => (
              <div
                key={stage.name}
                className={`flex items-center justify-between px-4 py-2.5${
                  stage.highlighted ? " animate-stage-pulse" : ""
                }`}
                style={{
                  borderBottom: i < stages.length - 1 ? "1px solid #31343F" : "none",
                  borderLeft: stage.highlighted ? "2px solid #4D8FFF" : "2px solid transparent",
                  background: stage.highlighted ? "rgba(77,143,255,0.055)" : "transparent",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: stage.highlighted ? "#4D8FFF" : "#3D4050" }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "11px",
                      color: stage.highlighted ? "#E8EAF2" : "#80859A",
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
                    padding: "2px 8px",
                    border: stage.highlighted ? "1px solid #4D8FFF" : "1px solid #31343F",
                    color: stage.highlighted ? "#4D8FFF" : "#80859A",
                    background: stage.highlighted ? "rgba(77,143,255,0.08)" : "transparent",
                  }}
                >
                  {stage.leads} leads
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3" style={{ borderTop: "1px solid #31343F" }}>
            {[
              { value: "22",   label: "Active Leads",  accent: true  },
              { value: "<1s",  label: "Response Time", accent: false },
              { value: "100%", label: "Automated",     accent: false },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-3 px-2 gap-0.5"
                style={i < 2 ? { borderRight: "1px solid #31343F" } : {}}
              >
                <span
                  className="leading-none"
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "22px",
                    color: stat.accent ? "#4D8FFF" : "#E8EAF2",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-center leading-tight"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "8px",
                    color: "#80859A",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
