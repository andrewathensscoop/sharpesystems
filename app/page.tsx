import type { Metadata } from "next";
import Image from "next/image";
import { CalEmbed } from "@/components/ui/CalEmbed";
import { LogoCarousel } from "@/components/agency/LogoCarousel";
import { AgencyNavbar } from "@/components/agency/Navbar";

const BRAND = "Sharpe Systems";
const CITY = "Georgia";

export const metadata: Metadata = {
  title: `${BRAND} — Website Design & Marketing Systems For ${CITY} Businesses`,
  description: `Cut the bullsh*t. Marketing isn't rocket science. Simple systems for ${CITY} businesses at $297/mo. No contracts.`,
};

const builtFor = [
  { label: "Contractors", img: "/agency/trades/contractors.jpg" },
  { label: "Landscapers", img: "/agency/trades/landscapers.jpg" },
  { label: "Pressure Washing", img: "/agency/trades/pressure-washing.jpg" },
  { label: "Pest Control", img: "/agency/trades/pest-control.jpg" },
  { label: "Restaurants", img: "/agency/trades/restaurants.jpg" },
  { label: "Spas & Salons", img: "/agency/trades/spas-salons.jpg" },
  { label: "Roofing", img: "/agency/trades/roofing.jpg" },
  { label: "HVAC", img: "/agency/trades/hvac.jpg" },
  { label: "Plumbing", img: "/agency/trades/plumbing.jpg" },
  { label: "Electricians", img: "/agency/trades/electricians.jpg" },
  { label: "Handyman", img: "/agency/trades/handyman.jpg" },
  { label: "Painters", img: "/agency/trades/painters.jpg" },
  { label: "Auto Repair", img: "/agency/trades/auto-repair.jpg" },
  { label: "Cleaning Services", img: "/agency/trades/cleaning-services.jpg" },
  { label: "Gyms & Fitness", img: "/agency/trades/gyms-fitness.jpg" },
  { label: "Home Builders", img: "/agency/trades/home-builders.jpg" },
  { label: "Real Estate", img: "/agency/trades/real-estate.jpg" },
  { label: "Pet Services", img: "/agency/trades/pet-services.jpg" },
  { label: "Decks & Patios", img: "/agency/trades/decks-patios.jpg" },
  { label: "General Contractors", img: "/agency/trades/general-contractors.jpg" },
];

const features = [
  {
    name: "Functional Website",
    tagline: "Get a website that instantly turns leads into text conversations that go DIRECTLY to your phone.",
    mockup: "/agency/screenshots/athens-plumbing-site.png",
    benefits: [
      { h: "Actually Get Found Online", p: "If a customer googles your business and can't find you, that might be awkward... Don't worry, we won't let that happen." },
      { h: "Showcase Your Best Reviews", p: "We all have one or two bad reviews... That doesn't mean your customers need to see them." },
      { h: "Mobile Friendly", p: "87% of people visit websites on their phone. We'll make sure your business looks extra sexy on mobile." },
    ],
  },
  {
    name: "5-Star Magic Review Funnel",
    tagline: "\"Sure I'll leave you a review\", but the truth is people forget. We'll 'gently' remind them for a few weeks until they remember.",
    mockup: "/agency/screenshots/review-funnel.png",
    benefits: [
      { h: "5-Star Reviews Only", p: "You can't make everyone happy, but our magic funnel sure can. Five stars, every time." },
      { h: "Automatic Follow-Up Reminders", p: "\"Sure I'll leave you a review\", but the truth is people forget. We'll 'gently' remind them for a few weeks until they remember." },
      { h: "Ask For Reviews In One Click", p: "As promised, we keep it simple. If you're confused, we're fired and extremely embarrassed." },
    ],
  },
  {
    name: "Missed Call Text Back",
    tagline: "Everyone misses calls, but not everyone texts back. Be the one who does. Outshine your competition.",
    mockup: "/agency/screenshots/missed-call-textback.png",
    benefits: [
      { h: "No More Lost Leads", p: "On a job site and can't answer the phone? No problem, we'll fire off a text and start the conversation for you." },
      { h: "Show Customers You Care", p: "Your ex didn't like it when you missed their calls — neither do your customers. At least send a text so they know you care." },
      { h: "Be available 24/7", p: "Missed a call after hours? No worries, we'll make sure everyone feels loved even while you're getting your beauty sleep." },
    ],
  },
  {
    name: "One-Click Marketing Campaigns",
    tagline: "You know it, and we know it... Referrals and repeat customers are the best. Let's get you both!",
    mockup: "/agency/screenshots/marketing-campaign.png",
    benefits: [
      { h: "Done For You", p: "Again... let's keep it simple. Activate our pre-built marketing campaigns with just one click." },
      { h: "Referral Campaigns", p: "We know it and you know it... You do good work, and your customers love you. Let's remind them to tell their friends." },
      { h: "Marketing Campaigns At Your Fingertips", p: "Just click a button and we'll take care of the rest. No need to hire a marketing team." },
    ],
  },
  {
    name: "On-Site SEO",
    tagline: "\"Rank number one on Google in a week!\" Just kidding, SEO takes time...",
    mockup: "/agency/screenshots/google-maps-results.png",
    benefits: [
      { h: "Qualified Leads", p: "Sounds better than paying $50 for a lead that doesn't even pick up the phone, right?" },
      { h: "Stop Paying For Unqualified Leads", p: "Like mom always said, quality over quantity. Do we agree with her on this?" },
      { h: "Organic Acquisition System", p: "Create your own qualified leads instead of paying for tire kickers." },
    ],
  },
];

const pricingFeatures = [
  "Functional Website",
  "Automated Lead Follow Up",
  "Missed Call Text Back",
  "5-Star Magic Review Funnel",
  "One-Click Marketing Campaigns",
  "On-Site SEO",
];

const faqs = [
  {
    q: "When am I going to start seeing results?",
    a: `This will completely depend on what else you're doing for advertising, how long you've been in business, the quality of your work, and of course that you commit to using our system. If you think you're going to close your eyes and pay us $297/month to solve all your problems, we're probably not the right fit for you. We cannot stress this enough... you have to be doing multiple forms of advertising. ${BRAND} is meant to provide you a simple, yet extremely effective foundational marketing system to help grow and expand your business. We're here to build your online business foundation, not perform miracles.\n\n"Explain how you help me grow my business"\n\nSure...\n\n1. Do you believe having more 5 star reviews will attract more customers?\n\n2. Do you believe that being able to be found online and having a professional website that actually works will help you convert more leads into paying customers?\n\n3. Do you believe that instantly following up with incoming leads will make you look more professional, therefore leading to more business?\n\n4. Do you believe making sure you're making the most of every customer you work with by putting them into automated re-marketing campaigns will make them more likely to work with you again?\n\n5. Do you believe offering discounts for friends of your past customers will increase the number of referrals you get?\n\n6. Do you believe using automation and AI could free you from repeating the same basic tasks in your business, therefore giving you more time for other things?\n\n7. Do you believe having these systems in place is important to grow your business?\n\nIf you believe any of those things can grow your business, that's exactly what we can help you with.`,
  },
  {
    q: "Why is your pricing so cheap?",
    a: "Our only interest is keeping you for 10+ years. We believe the best way to do that is to be priced affordably. We believe if we don't overcharge and provide you with excellent service, you'll never have a reason to leave.",
  },
  {
    q: `What happens if I decide to cancel my membership with ${BRAND}?`,
    a: "We'll be extremely sad to see you go, but after a good cry we'll bounce back. However, you will lose access to all the features we set up for you.",
  },
  {
    q: "Why should I spend on a website when word of mouth is already pulling in business?",
    a: "We might be a bit biased, but here's the deal: if each of your customers brings in about $500 a year, getting just 2-4 new customers from your website will pay off. We know you'll see great value from your site. It will help you attract new customers, make it easier for existing customers to refer you, allow you to run ads if you want, and attract bigger clients who value professionalism.",
  },
];

/* ── Heading utility ── */
const h = "font-[family-name:var(--font-agency-heading)] font-extrabold tracking-tight";

/* ── Phone mockup — images already have iPhone frame ── */
function PhoneMockup({ type }: { type: string }) {
  return (
    <div className="flex justify-center">
      <Image
        src={type}
        alt="Feature screenshot"
        width={400}
        height={800}
        className="w-[340px] md:w-[430px] h-auto"
      />
    </div>
  );
}

export default function AgencyLandingPage() {
  return (
    <div className="bg-agency-bg text-agency-text">
      <AgencyNavbar />

      {/* Spacer for fixed nav */}
      <div className="h-16" />

      {/* ── 1. HERO — full-bleed, taller ── */}
      <section className="bg-white min-h-[calc(100vh-4rem)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <p className="text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-accent mb-6">
                {BRAND}
              </p>
              <h1 className={`${h} text-[3rem] md:text-[4.25rem] lg:text-[5rem] leading-[1.02] text-agency-text mb-8`}>
                Website Design &amp; Marketing Systems For {CITY} Businesses.
              </h1>
              <p className="text-agency-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Cut the bullsh*t. Marketing isn&apos;t rocket science. No agency... (including ours) has the miracle solution to all your problems. We&apos;ll give you the tools to win but you need to commit to using them!
              </p>
              <a
                href="#schedule"
                className="inline-flex items-center px-10 py-4 bg-agency-accent text-white text-base font-sans font-bold hover:bg-agency-accent-hover transition-colors rounded"
              >
                Book A Call →
              </a>
              <p className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-agency-muted mt-12 mb-4">
                Trusted by
              </p>
              <div className="flex items-center gap-10 md:gap-14 flex-wrap">
                {[
                  { src: "/logos/logo-1.png", alt: "Burney Wealth Management", invert: true },
                  { src: "/logos/sushi-one.png", alt: "Sushi One" },
                  { src: "/logos/bobalicious-cafe.png", alt: "SSG", invert: true },
                  { src: "/logos/ups.png", alt: "UPS" },
                  { src: "/logos/body-temple-spa.png", alt: "The Body Temple Spa" },
                ].map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={36}
                    className={`object-contain h-12 w-auto grayscale opacity-40${logo.invert ? " invert" : ""}`}
                  />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end">
              <PhoneMockup type="/agency/screenshots/athens-plumbing-site.png" />
            </div>
          </div>
        </div>
      </section>

      <div className="h-1.5 bg-agency-accent" />

      {/* ── 2. BUSINESSES WE SERVE — full-bleed, stronger overlay ── */}
      <section className="bg-agency-text py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-14">
            <h2 className={`${h} text-4xl md:text-5xl lg:text-6xl text-white`}>
              Serving all these businesses and more...
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {builtFor.map((b) => (
              <div
                key={b.label}
                className="relative h-32 overflow-hidden group rounded-lg border border-white/10 hover:border-agency-accent transition-colors"
              >
                <Image
                  src={b.img}
                  alt={b.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 brightness-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20 transition-colors" />
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

      <div className="h-1.5 bg-agency-accent" />

      {/* ── 3. FEATURES — wider container, more spacing ── */}
      <section id="features" className="py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <p className="text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-accent mb-4">
              Features
            </p>
            <h2 className={`${h} text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-agency-text mb-5`}>
              Simple systems that actually work.
            </h2>
            <p className="text-agency-muted text-lg md:text-xl leading-relaxed">
              No degrees required, just a business to run.
            </p>
          </div>

          <div className="space-y-32 md:space-y-44">
            {features.map((feature, i) => (
              <div
                key={feature.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""
                }`}
              >
                <PhoneMockup type={feature.mockup} />

                <div>
                  <h3 className={`${h} text-3xl md:text-[2.75rem] lg:text-5xl leading-[1.1] text-agency-text mb-6`}>
                    {feature.name}
                  </h3>
                  <p className="text-agency-muted text-lg md:text-xl leading-relaxed mb-10">
                    {feature.tagline}
                  </p>
                  <div className="space-y-6 mb-10">
                    {feature.benefits.map((b) => (
                      <div key={b.h}>
                        <p className="font-sans font-bold text-base text-agency-text mb-1">
                          {b.h}
                        </p>
                        <p className="text-[15px] text-agency-muted leading-relaxed">{b.p}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#schedule"
                    className="inline-flex items-center px-6 py-3 bg-agency-accent text-white text-sm font-sans font-bold hover:bg-agency-accent-hover transition-colors rounded"
                  >
                    Get a Demo →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1.5 bg-agency-accent" />

      {/* ── 4. PRICING — full-bleed, bigger $297, badge ── */}
      <section id="pricing" className="bg-agency-text py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
          <p className="text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-accent mb-4">
            Pricing
          </p>
          <h2 className={`${h} text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-4`}>
            Everything you need.
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-14">
            One plan. No contracts. Cancel anytime.
          </p>

          <div className="bg-white/[0.04] border-2 border-agency-accent/40 rounded-2xl p-10 md:p-14 max-w-xl mx-auto relative">
            {/* Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="bg-agency-accent text-white text-xs font-sans font-bold uppercase tracking-[0.15em] px-6 py-2.5 rounded-full shadow-lg">
                Everything You Need
              </div>
            </div>

            <div className="mb-10 mt-4">
              <span className={`${h} text-7xl md:text-[7rem] lg:text-[8rem] text-white leading-none`}>$297</span>
              <span className="text-white/40 text-2xl md:text-3xl font-sans">/mo</span>
            </div>
            <div className="space-y-5 text-left mb-12 max-w-sm mx-auto">
              {pricingFeatures.map((f) => (
                <div key={f} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-agency-accent flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">&#10003;</span>
                  </div>
                  <span className="text-white text-lg font-sans">{f}</span>
                </div>
              ))}
            </div>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center w-full px-8 py-5 bg-agency-accent text-white text-lg font-sans font-bold hover:bg-agency-accent-hover transition-colors rounded-lg"
            >
              Book A Call →
            </a>
            <p className="text-white/30 text-sm mt-4">No contracts. Cancel anytime. Seriously.</p>
          </div>
        </div>
      </section>

      <div className="h-1.5 bg-agency-accent" />

      {/* ── 5. PROCESS — bigger step circles, more room ── */}
      <section className="bg-white py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-accent mb-4">
              Process
            </p>
            <h2 className={`${h} text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-agency-text`}>
              What working with us looks like...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                n: "1",
                t: "Demo Call (15 mins)",
                p: "It's actually a sales call, we just didn't want to scare you. But seriously... we'll answer all your questions, show you any features you have questions about, and show you the system live.",
              },
              {
                n: "2",
                t: "We build your system (7–10 days)",
                p: "Fill out a basic onboarding form with your business details. After we have the correct information, we'll get to work on building your new website & marketing system.",
              },
              {
                n: "3",
                t: "Launch Call (25 mins)",
                p: "We'll walk you through your new website & marketing system, answer any questions you have, and show you how \"everything\" works... And by everything, we're really just talking about pressing two buttons.",
              },
            ].map((step) => (
              <div key={step.n} className="text-center px-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-agency-accent text-white flex items-center justify-center font-sans font-extrabold text-3xl mb-8">
                  {step.n}
                </div>
                <h3 className={`${h} text-2xl md:text-[1.65rem] text-agency-text mb-4`}>{step.t}</h3>
                <p className="text-agency-muted text-base leading-relaxed">{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
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
                <div className="px-6 pb-6 text-agency-muted text-base leading-relaxed whitespace-pre-line">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER LOGOS — full-bleed ── */}
      <section className="bg-agency-text py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
          <h2 className={`${h} text-3xl md:text-5xl text-white mb-12`}>
            Just so you know we&apos;re legit, we partner with...
          </h2>
          <LogoCarousel />
        </div>
      </section>

      {/* ── 7. BOTTOM CTA (red) ── */}
      <section className="bg-agency-accent py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className={`${h} text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8`}>
            Want to schedule a time to talk?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10">
            See everything we do to help you grow your business so you can implement it yourself or let us do it for you.
          </p>
          <a
            href="#schedule"
            className="inline-flex items-center px-14 py-5 bg-white text-agency-accent text-lg font-sans font-bold hover:bg-agency-bg transition-colors rounded"
          >
            Book A Call →
          </a>
        </div>
      </section>

      {/* ── CAL.COM EMBED ── */}
      <section id="schedule" className="bg-white py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[12px] font-sans font-bold uppercase tracking-[0.25em] text-agency-accent mb-4">
            Schedule
          </p>
          <h2 className={`${h} text-3xl md:text-5xl text-agency-text mb-3`}>
            Book A Call
          </h2>
          <p className="text-agency-muted text-lg mb-10">
            Pick a time that works. 15 minutes, no pressure, and we&apos;ll actually show you the product instead of just talking about it.
          </p>
          <div style={{ height: "700px" }}>
            <CalEmbed
              calLink="andrew-sharpe-wvhyar/sharpe-systems-demo-call"
              namespace="agency-demo"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-agency-text">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className={`${h} text-3xl text-white mb-3`}>{BRAND}</p>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
                Simple marketing systems that help {CITY} businesses get more customers, more reviews, and more repeat business.
              </p>
              <a
                href="#schedule"
                className="inline-flex items-center px-6 py-3 bg-agency-accent text-white text-sm font-sans font-bold hover:bg-agency-accent-hover transition-colors rounded"
              >
                Book A Call →
              </a>
            </div>
            <div className="lg:col-span-3">
              <p className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-white/30 mb-5">Products</p>
              <div className="flex flex-col gap-3 text-sm text-white/60">
                <a href="#features" className="hover:text-white transition-colors">Functional Website</a>
                <a href="#features" className="hover:text-white transition-colors">5-Star Review Funnel</a>
                <a href="#features" className="hover:text-white transition-colors">Missed Call Text Back</a>
                <a href="#features" className="hover:text-white transition-colors">Marketing Campaigns</a>
                <a href="#features" className="hover:text-white transition-colors">On-Site SEO</a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-white/30 mb-5">Company</p>
              <div className="flex flex-col gap-3 text-sm text-white/60">
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                <a href="#schedule" className="hover:text-white transition-colors">Book A Demo</a>
                <a href="mailto:hello@sharpesystems.com" className="hover:text-white transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
