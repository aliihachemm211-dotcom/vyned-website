"use client";

const messages = [
  { text: "Hi, I saw your listing for the 2BR in Dubai Marina...", from: "lead" },
  { text: "Your viewing for Palm Jumeirah has been confirmed for Thursday 4PM ✓", from: "vyned" },
  { text: "Following up on your viewing yesterday — were you interested?", from: "vyned" },
  { text: "Congratulations! Please leave us a review on Property Finder", from: "vyned" },
  { text: "Still looking in Business Bay? We have 3 new listings in your budget", from: "vyned" },
  { text: "Is the 2BR in Marina Gate still available?", from: "lead" },
  { text: "Reminder: Your viewing at Dubai Marina is tomorrow at 4:00 PM ✓", from: "vyned" },
  { text: "Hi! I'm interested in the listing you posted on Property Finder", from: "lead" },
  { text: "Your viewing has been rescheduled to Friday 2PM — confirmed ✓", from: "vyned" },
];

function Bubble({ text, from }: { text: string; from: "lead" | "vyned" }) {
  const isVyned = from === "vyned";
  return (
    <div
      className="flex-shrink-0 flex flex-col gap-1.5 rounded-[10px] px-4 py-3"
      style={{
        background: isVyned ? "rgba(77,143,255,0.1)" : "rgba(49,52,63,0.5)",
        border: `1px solid ${isVyned ? "rgba(77,143,255,0.22)" : "#31343F"}`,
        maxWidth: "280px",
        minWidth: "200px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-dm-mono)",
          fontSize: "8.5px",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: isVyned ? "#4D8FFF" : "#3D4050",
        }}
      >
        {isVyned ? "VYNED" : "LEAD"}
      </span>
      <p
        className="leading-relaxed"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "13px",
          color: isVyned ? "#E8EAF2" : "#80859A",
          lineHeight: 1.45,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function MessageMarquee() {
  /* Triple the array so the seamless-loop translateX(-1/3) always has content */
  const items = [...messages, ...messages, ...messages];

  return (
    <section
      className="overflow-hidden"
      style={{
        background: "#272A34",
        borderTop: "1px solid #31343F",
        paddingTop: "36px",
        paddingBottom: "36px",
      }}
    >
      {/* Eyebrow */}
      <div className="max-w-6xl mx-auto px-6 mb-6 flex items-center gap-4">
        <span
          className="text-[#80859A]"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em" }}
        >
          Live system messages
        </span>
        <div className="h-px flex-1" style={{ background: "#31343F" }} />
        <span
          className="flex items-center gap-1.5"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "9px", color: "#22c55e", textTransform: "uppercase", letterSpacing: "0.14em" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-live" />
          Running
        </span>
      </div>

      {/* Faded edges + scrolling track */}
      <div
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex gap-3 marquee-track" style={{ width: "max-content" }}>
          {items.map((msg, i) => (
            <Bubble key={i} text={msg.text} from={msg.from as "lead" | "vyned"} />
          ))}
        </div>
      </div>
    </section>
  );
}
