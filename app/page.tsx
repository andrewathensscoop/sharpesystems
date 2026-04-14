import type { Metadata } from "next";
import Image from "next/image";
import { CalEmbed } from "@/components/ui/CalEmbed";
import { AgencyNavbar } from "@/components/agency/Navbar";

const BRAND = "Sharpe Systems";

export const metadata: Metadata = {
  title: `${BRAND}: AI Voice Agent That Answers Your Phone 24/7`,
  description:
    "Never miss another call. Our AI voice agent answers every call, books appointments, qualifies leads, and transfers emergencies to you, day and night.",
};

/* ── Heading utility ── */
const h =
  "font-[family-name:var(--font-agency-heading)] font-extrabold tracking-tight";

/* ── CSS phone frame ── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[300px] md:w-[340px]">
      <div className="relative aspect-[9/19] bg-[#0a0a14] rounded-[2.75rem] p-3 shadow-2xl ring-1 ring-black/20">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20" />
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-agency-text to-[#0f0f1f]">
          {children}
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-2 text-white text-[11px] font-sans font-semibold">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="w-3.5 h-1.5 rounded-[1px] bg-white/80" />
        <span className="w-3.5 h-1.5 rounded-[1px] bg-white/80" />
        <span className="w-4 h-2 rounded-sm border border-white/80 ml-1" />
      </span>
    </div>
  );
}

/* ── Screen 1: Hero, incoming call answered ── */
function ScreenIncomingCall() {
  return (
    <div className="flex flex-col h-full">
      <StatusBar />
      <div className="flex-1 flex flex-col items-center justify-between px-6 pt-10 pb-8 text-white">
        <div className="text-center">
          <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-white/40 mb-2">
            Sharpe Systems AI
          </p>
          <p className="text-[13px] text-white/60 font-sans">Incoming call</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative mb-5">
            <div className="absolute inset-0 rounded-full bg-agency-accent/30 animate-ping" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-agency-accent to-[#8a1e27] flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className={`${h} text-[22px] mb-1`}>(706) 555-0142</p>
          <p className="text-[13px] text-white/50 font-sans">Athens, GA</p>
        </div>

        <div className="w-full">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[12px] font-sans text-green-400 uppercase tracking-wider font-bold">
              Answered by AI · 00:23
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Mute", "Keypad", "Speaker"].map((l) => (
              <div
                key={l}
                className="bg-white/10 rounded-xl py-2 text-center text-[10px] font-sans text-white/70"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 2: Feature 1, live transcript ── */
function ScreenTranscript() {
  const turns = [
    { who: "ai", t: "Thanks for calling Athens Plumbing. How can I help?" },
    { who: "caller", t: "Hi, my sink won't drain. Can someone come out?" },
    { who: "ai", t: "I can help. What day works best this week?" },
    { who: "caller", t: "Thursday morning if possible." },
    { who: "ai", t: "Thursday 9:30am is open. Should I book it?" },
  ];
  return (
    <div className="flex flex-col h-full">
      <StatusBar />
      <div className="px-5 pt-6 pb-3 border-b border-white/10">
        <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-white/40 mb-1">
          Live Call
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p className="text-[13px] font-sans text-white font-semibold">
            In progress · 01:07
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-4 py-5 space-y-3">
        {turns.map((turn, i) => (
          <div
            key={i}
            className={`flex ${turn.who === "ai" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[82%] px-3.5 py-2 rounded-2xl text-[12px] font-sans leading-snug ${
                turn.who === "ai"
                  ? "bg-white/10 text-white rounded-bl-md"
                  : "bg-agency-accent text-white rounded-br-md"
              }`}
            >
              {turn.t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Screen 3: Feature 2, calendar booking ── */
function ScreenCalendar() {
  const slots = [
    { t: "8:00 AM", state: "open" },
    { t: "9:30 AM", state: "booked" },
    { t: "11:00 AM", state: "open" },
    { t: "1:00 PM", state: "new" },
    { t: "2:30 PM", state: "open" },
    { t: "4:00 PM", state: "open" },
  ];
  return (
    <div className="flex flex-col h-full">
      <StatusBar />
      <div className="px-5 pt-6 pb-4 border-b border-white/10">
        <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-white/40 mb-1">
          Calendar
        </p>
        <p className={`${h} text-white text-xl`}>Thu, Apr 16</p>
      </div>
      <div className="px-4 py-4 flex gap-2 overflow-hidden">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div
            key={i}
            className={`flex-1 text-center py-2 rounded-lg text-[11px] font-sans ${
              i === 3
                ? "bg-agency-accent text-white font-bold"
                : "bg-white/5 text-white/60"
            }`}
          >
            <div>{d}</div>
            <div className="text-[13px] font-bold">{13 + i}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 px-4 space-y-2 overflow-hidden">
        {slots.map((s, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[12px] font-sans ${
              s.state === "new"
                ? "bg-agency-accent/20 border border-agency-accent text-white"
                : s.state === "booked"
                  ? "bg-white/10 text-white/50 line-through"
                  : "bg-white/5 text-white/70"
            }`}
          >
            <span className="font-semibold">{s.t}</span>
            {s.state === "new" && (
              <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-agency-accent animate-pulse" />
                New booking
              </span>
            )}
            {s.state === "booked" && (
              <span className="text-[10px] uppercase tracking-wider">Booked</span>
            )}
          </div>
        ))}
      </div>
      <div className="mx-4 mb-4 mt-3 p-3 bg-white/5 border border-white/10 rounded-xl">
        <p className="text-[11px] font-sans text-white/50 uppercase tracking-wider mb-1">
          Just booked
        </p>
        <p className="text-[12px] font-sans text-white font-semibold">
          Mike D. · Sink drain repair · 1:00 PM
        </p>
      </div>
    </div>
  );
}

/* ── Screen 4: Feature 3, smart transfer ── */
function ScreenTransfer() {
  return (
    <div className="flex flex-col h-full">
      <StatusBar />
      <div className="px-5 pt-6 pb-4 border-b border-white/10">
        <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-white/40 mb-1">
          Notifications
        </p>
      </div>
      <div className="flex-1 px-4 py-5 space-y-3">
        <div className="bg-agency-accent/15 border border-agency-accent rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-agency-accent animate-pulse" />
            <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-agency-accent">
              Transferring now
            </p>
          </div>
          <p className={`${h} text-white text-[15px] mb-1`}>
            Emergency detected
          </p>
          <p className="text-[12px] text-white/70 font-sans leading-snug">
            Caller said &ldquo;burst pipe.&rdquo; Forwarding to your cell
            (706) ***-5678.
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/40 mb-2">
            2 min ago · Handled by AI
          </p>
          <p className="text-[13px] text-white font-sans font-semibold mb-0.5">
            Sarah K., booked appointment
          </p>
          <p className="text-[11px] text-white/50 font-sans">
            Thursday 9:30am · routine service
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/40 mb-2">
            18 min ago · Handled by AI
          </p>
          <p className="text-[13px] text-white font-sans font-semibold mb-0.5">
            James L., FAQ answered
          </p>
          <p className="text-[11px] text-white/50 font-sans">
            Asked about Saturday hours
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Feature data ── */
const features = [
  {
    name: "Every Call Answered. Even at 2AM.",
    body:
      "Your AI receptionist picks up every call your team misses. It greets callers, asks what they need, and handles it. Booking an appointment, answering questions about your hours and pricing, or taking a message. No hold music. No voicemail box. No customer calling the next name on Google instead.",
    Screen: ScreenTranscript,
  },
  {
    name: "Appointments Booked On the Spot",
    body:
      "The AI checks your calendar in real time and books callers into open slots during the conversation. They get a confirmation text immediately. You get a new customer on your schedule without lifting a finger. No phone tag. No back-and-forth texts. Booked and confirmed before they hang up.",
    Screen: ScreenCalendar,
  },
  {
    name: "Big Calls Go Straight to Your Cell",
    body:
      "Not every call should be handled by AI. When someone has an emergency, a complaint, or a high-value job, the AI transfers the call to your cell instantly. You stay in control of what matters. The AI handles the other 90% so you don't have to.",
    Screen: ScreenTransfer,
  },
];

const whatYouGet = [
  "Custom AI voice agent trained on YOUR business",
  "24/7 inbound call answering",
  "Appointment booking to your calendar",
  "Lead qualification (name, number, what they need)",
  "FAQ answering (hours, pricing, services, location)",
  "Smart call transfers to your cell",
  "After-hours custom greeting",
  "Monthly call summary report",
];

const socialProof = [
  { label: "Restaurant", img: "/agency/trades/restaurants.jpg" },
  { label: "Salon", img: "/agency/trades/spas-salons.jpg" },
  { label: "Contractor", img: "/agency/trades/contractors.jpg" },
  { label: "Real Estate", img: "/agency/trades/real-estate.jpg" },
  { label: "HVAC", img: "/agency/trades/hvac.jpg" },
  { label: "Auto Repair", img: "/agency/trades/auto-repair.jpg" },
];

const processSteps = [
  {
    n: "1",
    t: "Book a Demo (15 min)",
    p: "We walk you through a live demo so you can hear exactly how the AI sounds on a real call. No slides. No pitch deck. Just the product.",
  },
  {
    n: "2",
    t: "We Build Your Agent (24-48 hrs)",
    p: "Send us your services, FAQs, hours, and calendar. We build and test your custom agent before anything goes live.",
  },
  {
    n: "3",
    t: "Never Miss a Call Again",
    p: "Your AI answers every call your team can't get to. You get a monthly report showing exactly how many calls it handled and how many appointments it booked.",
  },
];

const faqs = [
  {
    q: "Will it sound like a robot?",
    a: "The voice tech in 2026 is nothing like old \u201Cpress 1 for sales\u201D IVR systems. Response time is under half a second and callers rarely realize they're talking to AI. We'll play it live on your demo call.",
  },
  {
    q: "What if I want my staff to answer first?",
    a: "We set it up so your phone rings 3 times. If your team grabs it, great. If they're busy or it's after hours, AI picks up. You never miss a call either way.",
  },
  {
    q: "What happens if the AI can't answer a question?",
    a: "It says \u201CGreat question. Let me connect you with the team\u201D and either transfers the call live or takes a message. It never makes up information.",
  },
  {
    q: "Is there a contract?",
    a: "No. Month-to-month. Cancel anytime. We share pricing on the demo call.",
  },
  {
    q: "How long does setup take?",
    a: "48 hours from the time you send us your business info. We handle everything.",
  },
  {
    q: "What types of businesses does this work for?",
    a: "Any business that gets phone calls. Restaurants, salons, dentists, law firms, contractors, real estate agents, medical offices, home services. If customers call you, this works.",
  },
];

export default function VoiceAILandingPage() {
  return (
    <div className="bg-agency-bg text-agency-text">
      <AgencyNavbar />
      <div className="h-16" />

      {/* ── HERO ── */}
      <section className="bg-white min-h-[calc(100vh-4rem)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <p className="text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-accent mb-6">
                {BRAND}
              </p>
              <h1
                className={`${h} text-[2.75rem] md:text-[4rem] lg:text-[4.75rem] leading-[1.02] text-agency-text mb-8`}
              >
                Never Miss Another Call. AI Answers Your Phone 24/7.
              </h1>
              <p className="text-agency-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Right now, someone is calling your business. Nobody&apos;s
                picking up. They&apos;re calling your competitor instead. Our
                AI voice agent makes sure that never happens again. Booking
                appointments, answering questions, and qualifying leads around
                the clock.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center px-10 py-4 bg-agency-accent text-white text-base font-sans font-bold hover:bg-agency-accent-hover transition-colors rounded"
                >
                  Book a Demo →
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-10 py-4 border-2 border-agency-text text-agency-text text-base font-sans font-bold hover:bg-agency-text hover:text-white transition-colors rounded"
                >
                  See How It Works
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end">
              <PhoneFrame>
                <ScreenIncomingCall />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1.5 bg-agency-accent" />

      {/* ── STAT / PROOF ── */}
      <section className="bg-agency-text py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2
            className={`${h} text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8`}
          >
            The average local business misses{" "}
            <span className="text-agency-accent">6 out of 10</span> phone calls.
          </h2>
          <p className="text-white/60 text-lg md:text-2xl leading-relaxed">
            Every missed call is a customer calling your competitor instead.
          </p>
        </div>
      </section>

      <div className="h-1.5 bg-agency-accent" />

      {/* ── HOW IT WORKS / FEATURES ── */}
      <section id="features" className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="space-y-32 md:space-y-44">
            {features.map((feature, i) => {
              const Screen = feature.Screen;
              return (
                <div
                  key={feature.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""
                  }`}
                >
                  <PhoneFrame>
                    <Screen />
                  </PhoneFrame>

                  <div>
                    <h3
                      className={`${h} text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-agency-text mb-6`}
                    >
                      {feature.name}
                    </h3>
                    <p className="text-agency-muted text-lg md:text-xl leading-relaxed mb-10">
                      {feature.body}
                    </p>
                    <a
                      href="#schedule"
                      className="inline-flex items-center px-6 py-3 bg-agency-accent text-white text-sm font-sans font-bold hover:bg-agency-accent-hover transition-colors rounded"
                    >
                      Book a Demo →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-1.5 bg-agency-accent" />

      {/* ── WHAT YOU GET ── */}
      <section id="pricing" className="bg-agency-text py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
          <p className="text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-accent mb-4">
            What You Get
          </p>
          <h2
            className={`${h} text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-4`}
          >
            One system. Every call handled.
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-14">
            One AI agent. Built for your business. Ready in 48 hours.
          </p>

          <div className="bg-white/[0.04] border-2 border-agency-accent/40 rounded-2xl p-10 md:p-14 max-w-xl mx-auto relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="bg-agency-accent text-white text-xs font-sans font-bold uppercase tracking-[0.15em] px-6 py-2.5 rounded-full shadow-lg">
                Everything You Need
              </div>
            </div>

            <div className="space-y-5 text-left mb-12 mt-4 max-w-md mx-auto">
              {whatYouGet.map((f) => (
                <div key={f} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-agency-accent flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">
                      &#10003;
                    </span>
                  </div>
                  <span className="text-white text-base md:text-lg font-sans">
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center w-full px-8 py-5 bg-agency-accent text-white text-lg font-sans font-bold hover:bg-agency-accent-hover transition-colors rounded-lg"
            >
              Book a Demo →
            </a>
            <p className="text-white/30 text-sm mt-4">
              Month-to-month. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1.5 bg-agency-accent" />

      {/* ── PROCESS ── */}
      <section className="bg-white py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-accent mb-4">
              Process
            </p>
            <h2
              className={`${h} text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-agency-text`}
            >
              Live in 48 hours. Here&apos;s how.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {processSteps.map((step) => (
              <div key={step.n} className="text-center px-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-agency-accent text-white flex items-center justify-center font-sans font-extrabold text-3xl mb-8">
                  {step.n}
                </div>
                <h3
                  className={`${h} text-2xl md:text-[1.65rem] text-agency-text mb-4`}
                >
                  {step.t}
                </h3>
                <p className="text-agency-muted text-base leading-relaxed">
                  {step.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section className="bg-white py-16 md:py-20 border-b border-agency-border">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
          <p className="text-center text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-muted mb-10">
            Trusted by local businesses and growing
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {socialProof.map((b) => (
              <div
                key={b.label}
                className="relative h-32 overflow-hidden group rounded-lg border border-agency-border hover:border-agency-accent transition-colors"
              >
                <Image
                  src={b.img}
                  alt={b.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <span className="font-sans font-bold text-[13px] text-white text-center px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {b.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-agency-bg py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className={`${h} text-4xl md:text-6xl text-agency-text`}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border-2 border-agency-border bg-white"
                open={i === 0}
              >
                <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4">
                  <span className={`${h} text-lg md:text-xl text-agency-text`}>
                    {faq.q}
                  </span>
                  <span className="text-agency-accent text-3xl leading-none shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-agency-muted text-base leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA (red) ── */}
      <section className="bg-agency-accent py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2
            className={`${h} text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8`}
          >
            Every hour without this, you&apos;re losing calls.
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10">
            Book a 15-minute demo. See exactly how it works for your business.
          </p>
          <a
            href="#schedule"
            className="inline-flex items-center px-14 py-5 bg-white text-agency-accent text-lg font-sans font-bold hover:bg-agency-bg transition-colors rounded"
          >
            Book a Demo →
          </a>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="schedule" className="bg-white py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-accent mb-4">
            Schedule
          </p>
          <h2
            className={`${h} text-3xl md:text-5xl text-agency-text mb-3`}
          >
            Book a Demo
          </h2>
          <p className="text-agency-muted text-lg mb-10">
            Pick a 15-minute slot. We&apos;ll show you exactly what your
            callers would hear.
          </p>
          <div style={{ height: "700px" }}>
            <CalEmbed
              calLink="andrew-sharpe-wvhyar/sharpe-systems-demo-call"
              namespace="voice-ai-demo"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-agency-text">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <p className={`${h} text-3xl text-white mb-3`}>{BRAND}</p>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
                AI voice agents that answer every call, book appointments, and
                never take a day off.
              </p>
              <a
                href="#schedule"
                className="inline-flex items-center px-6 py-3 bg-agency-accent text-white text-sm font-sans font-bold hover:bg-agency-accent-hover transition-colors rounded"
              >
                Book a Demo →
              </a>
            </div>
            <div className="lg:col-span-3">
              <p className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-white/30 mb-5">
                Product
              </p>
              <div className="flex flex-col gap-3 text-sm text-white/60">
                <a href="#features" className="hover:text-white transition-colors">
                  How It Works
                </a>
                <a href="#pricing" className="hover:text-white transition-colors">
                  What You Get
                </a>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8">
            <p className="text-white/30 text-xs font-sans">
              © {new Date().getFullYear()} {BRAND}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
