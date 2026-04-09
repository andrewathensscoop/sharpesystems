import Image from "next/image";

const logos = [
  { name: "twilio", src: "/agency/logos/twilio.svg" },
  { name: "zapier", src: "/agency/logos/zapier.svg" },
  { name: "Google Ads", src: "/agency/logos/google-ads.svg" },
  { name: "Google Search Console", src: "/agency/logos/google-search-console.svg" },
  { name: "Stripe", src: "/agency/logos/stripe.svg" },
  { name: "Google", src: "/agency/logos/google.svg" },
  { name: "Meta", src: "/agency/logos/meta.svg" },
  { name: "OpenAI", src: "/agency/logos/openai.svg" },
  { name: "Mailgun", src: "/agency/logos/mailgun.svg" },
  { name: "Semrush", src: "/agency/logos/semrush.svg" },
  { name: "Google Analytics", src: "/agency/logos/google-analytics.svg" },
  { name: "Lead Connector", src: null },
];

export function LogoCarousel() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
      {logos.map((logo) => (
        <div key={logo.name} className="flex items-center gap-2.5 shrink-0">
          {logo.src && (
            <Image
              src={logo.src}
              alt=""
              width={28}
              height={28}
              className="w-7 h-7 object-contain brightness-0 invert opacity-70"
            />
          )}
          <span className="text-white/60 font-[family-name:var(--font-agency-heading)] font-extrabold text-[17px] md:text-[20px] tracking-tight whitespace-nowrap">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  );
}
