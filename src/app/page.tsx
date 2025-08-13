/*
  JHub Landing Page — React + Tailwind + Framer Motion + Lucide Icons
  -------------------------------------------------------------------
  • Brand colors: #6ABAB1 (mint-teal) and black
  • Drop your provided screenshots into /public/images with these names (or update the list below):
      - jhub-1.jpg  (IMG_9720.jpg)
      - jhub-2.jpg  (IMG_9723.jpg)
      - jhub-3.jpg  (IMG_9724.jpg)
      - jhub-4.jpg  (IMG_9722.jpg)
      - jhub-5.jpg  (IMG_9721.jpg)
  • Works in Next.js or Vite. Ensure Tailwind is set up. 
  • This file exports a single default component you can mount at "/".
*/

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPinned,
  CalendarDays,
  Ticket,
  Handshake,
  Bell,
  MessageSquare,
  Globe2,
  ShieldCheck,
  Users,
  Heart,
  Star,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";

type ImageItem = { src: string; alt: string };

const screenshots: ImageItem[] = [
  { src: "/images/jhub-1.jpg", alt: "JHub Welcome + Hero" },
  { src: "/images/jhub-2.jpg", alt: "Events Map and Card" },
  { src: "/images/jhub-3.jpg", alt: "Tickets UI" },
  { src: "/images/jhub-4.jpg", alt: "Notifications" },
  { src: "/images/jhub-5.jpg", alt: "Home Feed + My Events" },
];

// Small utility components ----------------------------------------------------
function Section({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6ABAB1]/30 blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#6ABAB1]/40 bg-[#6ABAB1]/15 px-3 py-1 text-xs font-medium text-[#6ABAB1] backdrop-blur">
      {children}
    </span>
  );
}

function FeatureCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="group relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-black/50 p-6 shadow-sm backdrop-blur hover:shadow-md"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6ABAB1]/15 ring-1 ring-[#6ABAB1]/30">
      <Icon className="h-6 w-6 text-[#6ABAB1]" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-white/70">{children}</p>
  </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold text-white sm:text-4xl">{value}</div>
      <div className="text-xs uppercase tracking-wide text-white/70">{label}</div>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-white/80">
      <Check className="mt-0.5 h-4 w-4 flex-none text-[#6ABAB1]" />
      <span>{children}</span>
    </li>
  );
}

// Page -----------------------------------------------------------------------
export default function JHubLanding() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#6ABAB1] via-[#6bbfb6] to-[#2f6f69] text-white">
      {/* Floating brand gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-10%] h-80 w-80 rounded-full bg-[#6ABAB1]/25 blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-96 w-96 rounded-full bg-black/30 blur-[90px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 text-white backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src="/images/logo.PNG" alt="JHub Logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold">JHub</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
            <a href="#mission" className="text-sm text-white/80 hover:text-white">Mission</a>
            <a href="#founders" className="text-sm text-white/80 hover:text-white">Founders</a>
            <a href="#screens" className="text-sm text-white/80 hover:text-white">Screenshots</a>
            <a href="#pricing" className="text-sm text-white/80 hover:text-white">Pricing</a>
            <a href="#faq" className="text-sm text-white/80 hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#join"
              className="hidden rounded-full bg-[#6ABAB1] px-4 py-2 text-sm font-medium text-black shadow-sm hover:opacity-90 md:inline-flex"
            >
              Join the Community
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-white hover:bg-black/60"
            >
              Contact <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <Section id="top" className="pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge>THE PREMIER JEWISH SOCIAL EVENTS PLATFORM</Badge>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Connect Jewish life, everywhere.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              JHub helps Jews around the world discover events, build community, and stay connected. From challah bakes to learning sessions and holiday gatherings—organize, manage, and meet up, all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6ABAB1] px-6 py-3 text-sm font-semibold text-black shadow hover:bg-[#58a89f]"
              >
                Join the Community <Users className="h-4 w-4" />
              </a>
              <a
                href="#orgs"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-3 text-sm font-semibold text-white hover:bg-black/60"
              >
                For Organizations <Handshake className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat value="950+" label="Communities" />
              <Stat value="12k+" label="Events Hosted" />
              <Stat value="70+" label="Countries" />
            </div>
          </div>

          {/* Phone mock/gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[#6ABAB1]/40 blur-2xl" />
            <div className="relative rounded-[2.25rem] border border-white/10 bg-black/40 p-3 shadow-xl backdrop-blur">
              <div className="aspect-[9/19] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black">
                {/* simple carousel */}
                <Carousel images={screenshots} />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FEATURE GRID */}
      <Section id="features" className="bg-[#6ABAB1]">
        <div className="mb-12 flex items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">A modern platform for Jewish life</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Beautiful on mobile. Powerful for organizers. Safe for communities.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Globe2 className="h-5 w-5 text-[#6ABAB1]" />
            <span className="text-sm text-white/70">Global-first, local-friendly</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={MapPinned} title="Discovery Map & Feed">
            Explore events nearby or worldwide with an interactive map and personalized recommendations.
          </FeatureCard>
          <FeatureCard icon={Ticket} title="Smart Tickets & Check‑in">
            Seamless RSVP, QR tickets, and on‑site check‑in. Works for free or paid events.
          </FeatureCard>
          <FeatureCard icon={CalendarDays} title="Jewish Calendar Aware">
            Holiday timing, candle‑lighting reminders, and Shabbat‑friendly defaults out of the box.
          </FeatureCard>
          <FeatureCard icon={Bell} title="Real‑time Notifications">
            Never miss a gathering: follows, mentions, and event updates arrive instantly.
          </FeatureCard>
          <FeatureCard icon={MessageSquare} title="Community Chat & Photos">
            Share moments, ask questions, and keep the conversation going before and after events.
          </FeatureCard>
          <FeatureCard icon={ShieldCheck} title="Trust & Safety">
            Verified organizers, report tools, and moderation settings keep communities safe and welcoming.
          </FeatureCard>
        </div>
      </Section>

      {/* MISSION */}
      <Section id="mission" className="bg-gradient-to-b from-[#6ABAB1] to-[#2f6f69]">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Badge>OUR MISSION</Badge>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Connecting Jews from around the world</h2>
            <p className="mt-4 text-white/80">
              JHub exists to strengthen Jewish life by making it effortless to discover, join, and build community. Whether you’re traveling abroad, new in town, or leading a local organization, JHub bridges people, places, and traditions—one event at a time.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ListItem>Inclusive of all backgrounds and levels of observance</ListItem>
              <ListItem>Designed with Shabbat & holiday respect in mind</ListItem>
              <ListItem>Empowers grassroots groups and major institutions</ListItem>
              <ListItem>Celebrates culture, learning, and connection</ListItem>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-white">What JHub does</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#6ABAB1]" />
                  <span className="font-medium">For Attendees</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>• Personalized event discovery</li>
                  <li>• One‑tap RSVP & wallet tickets</li>
                  <li>• Save events to your calendar</li>
                  <li>• Follow friends & communities</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="flex items-center gap-3">
                  <Handshake className="h-5 w-5 text-[#6ABAB1]" />
                  <span className="font-medium">For Organizations</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>• Event creation & team roles</li>
                  <li>• Ticketing, check‑in, analytics</li>
                  <li>• Member management & CRM export</li>
                  <li>• Branded community pages</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-xl bg-[#6ABAB1]/15 p-4 text-sm text-white/80">
              <p className="flex items-center gap-2"><Heart className="h-4 w-4 text-[#6ABAB1]"/> A portion of proceeds supports Jewish cultural and humanitarian initiatives.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* MEET THE CO-FOUNDERS */}
      <Section id="founders" className="bg-gradient-to-b from-[#2f6f69] to-[#6ABAB1]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Meet the Co-Founders</h2>
          <p className="mt-3 text-white/70">The vision behind JHub</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Shua */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-black/40 p-8 shadow-sm backdrop-blur text-center"
          >
            <div className="relative mx-auto w-32 h-32 mb-6">
              <img 
                src="/images/Shua.jpg" 
                alt="Shua - Co-Founder" 
                className="w-full h-full object-cover rounded-full border-4 border-[#6ABAB1]/30"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Shua</h3>
            <p className="text-[#6ABAB1] font-medium mb-4">Co-Founder & CEO</p>
            <p className="text-white/80 text-sm leading-relaxed">
              Shua brings years of experience in community building and technology leadership. 
              With a background in product development and a passion for connecting Jewish communities worldwide, 
              he envisions JHub as the bridge that brings together Jews from all walks of life. 
              His expertise in scaling platforms and understanding user needs drives JHub's mission 
              to make Jewish life more accessible and connected globally.
            </p>
          </motion.div>

          {/* Ilan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-black/40 p-8 shadow-sm backdrop-blur text-center"
          >
            <div className="relative mx-auto w-32 h-32 mb-6">
              <img 
                src="/images/Ilan.jpg" 
                alt="Ilan - Co-Founder" 
                className="w-full h-full object-cover rounded-full border-4 border-[#6ABAB1]/30"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ilan</h3>
            <p className="text-[#6ABAB1] font-medium mb-4">Co-Founder & CTO</p>
            <p className="text-white/80 text-sm leading-relaxed">
              Ilan is a seasoned technology executive with deep expertise in building scalable, 
              secure platforms. His technical vision and commitment to Jewish community values 
              ensure that JHub remains both innovative and respectful of tradition. 
              With experience in enterprise software and mobile applications, 
              he leads the technical strategy that makes JHub's global reach possible while 
              maintaining the personal touch that makes each community special.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* SCREENSHOTS */}
      <Section id="screens" className="bg-[#6ABAB1]">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">A peek inside JHub</h2>
            <p className="mt-2 text-white/70">Mobile‑first design with delightful details.</p>
          </div>
          <div className="hidden md:block text-sm text-white/60">Swipe on mobile • Hover on desktop</div>
        </div>
        <ScreenshotMasonry images={screenshots} />
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" className="bg-gradient-to-b from-[#6ABAB1] to-[#2f6f69]">
        <h2 className="mb-10 text-center text-3xl font-extrabold sm:text-4xl">How it works</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Globe2, title: "Create your profile", desc: "Tell us where you are and what you love." },
            { icon: MapPinned, title: "Discover events", desc: "Browse the map & feed matched to your interests." },
            { icon: CalendarDays, title: "RSVP in seconds", desc: "Add to calendar and get a QR ticket." },
            { icon: Ticket, title: "Check in easily", desc: "Flash your QR—you're in." },
            { icon: MessageSquare, title: "Share & connect", desc: "Chat, post photos, and follow friends." },
            { icon: ShieldCheck, title: "Safe by design", desc: "Verified organizers and moderation tools." },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-black/50 p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6ABAB1]/15 ring-1 ring-[#6ABAB1]/30">
                  <step.icon className="h-5 w-5 text-[#6ABAB1]" />
                </div>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="text-sm text-white/70">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" className="bg-[#0f1f1d]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Simple, generous pricing</h2>
          <p className="mt-3 text-white/70">Free for attendees. Flexible tiers for organizations of any size.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Attendee */}
          <div className="relative rounded-2xl border border-white/10 bg-black/60 p-6 text-white shadow-sm">
            <Badge>Attendees</Badge>
            <h3 className="mt-3 text-2xl font-bold">Free</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Unlimited event browsing</li>
              <li>• RSVP & QR tickets</li>
              <li>• Follow friends & communities</li>
              <li>• Notifications & chat</li>
            </ul>
            <a href="#join" className="mt-6 inline-flex rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">Get started</a>
          </div>

          {/* Orgs Basic */}
          <div className="relative rounded-2xl border border-white/10 bg-black/60 p-6 text-white shadow-sm">
            <Badge>Organizations</Badge>
            <h3 className="mt-3 text-2xl font-bold">Basic — $0</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• 3 organizers & basic analytics</li>
              <li>• Free/paid events & simple ticketing</li>
              <li>• Branded community page</li>
            </ul>
            <a href="#orgs" className="mt-6 inline-flex rounded-full bg-[#6ABAB1] px-4 py-2 text-sm font-semibold text-black hover:bg-[#58a89f]">Create community</a>
          </div>

          {/* Orgs Pro */}
          <div className="relative rounded-2xl border border-[#6ABAB1] bg-[#6ABAB1] p-6 text-black shadow-sm ring-1 ring-[#6ABAB1]">
            <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/10 px-2 py-1 text-xs font-semibold text-black">
              <Star className="h-3 w-3" /> Popular
            </div>
            <Badge>Organizations</Badge>
            <h3 className="mt-3 text-2xl font-bold">Pro — $49/mo</h3>
            <ul className="mt-4 space-y-2 text-sm text-black/80">
              <li>• Unlimited organizers & advanced analytics</li>
              <li>• Priority placement & promotional tools</li>
              <li>• Member CRM export & integrations</li>
              <li>• Dedicated support</li>
            </ul>
            <a href="#orgs" className="mt-6 inline-flex rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">Start 14‑day trial</a>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials" className="bg-gradient-to-b from-[#6ABAB1] to-[#2f6f69]">
        <h2 className="mb-10 text-center text-3xl font-extrabold sm:text-4xl">Loved by communities worldwide</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "JHub made it so easy to find a Shabbat dinner while traveling. I met friends I still keep in touch with!",
              name: "Leah K.",
              role: "Attendee, Tel Aviv ↔ NYC",
            },
            {
              quote:
                "We consolidated our signups, tickets, and member lists—our federation staff saves hours every week.",
              name: "David B.",
              role: "Program Director, Federation",
            },
            {
              quote:
                "As a campus org, safety matters. JHub’s verification and moderation tools give us peace of mind.",
              name: "Sara P.",
              role: "Student Leader",
            },
          ].map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-6 shadow-sm"
            >
              <blockquote className="text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">
                <span className="font-medium text-white">{t.name}</span> — {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-[#6ABAB1]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/40">
            {[
              {
                q: "Is JHub really free for attendees?",
                a: "Yes. Browsing, RSVPs, and tickets are free. Some paid events are set by organizers, but there are no extra attendee fees from JHub.",
              },
              {
                q: "How do you respect Shabbat and holidays?",
                a: "Organizers can schedule automatically with candle‑lighting times respected by city, and we avoid sending push notifications during Shabbat by default.",
              },
              {
                q: "What safety measures are in place?",
                a: "We verify organizations, provide report tools, and enforce a community code of conduct. Event hosts can require approval for RSVPs.",
              },
              {
                q: "Can we use our existing ticketing provider?",
                a: "Yes. Pro organizations can connect external payments or continue using JHub’s simple checkout.",
              },
            ].map((item, i) => (
              <details key={i} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-white">
                  {item.q}
                  <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-2 text-sm text-white/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* JOIN / CONTACT */}
      <Section id="join" className="bg-gradient-to-r from-[#6ABAB1] to-[#2f6f69]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to join the community?</h2>
            <p className="mt-3 text-white/80">Create your profile, follow communities, and never miss a moment.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90">Get the App</a>
              <a href="#orgs" className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">For Organizations</a>
            </div>
          </div>
          <div id="contact" className="rounded-2xl bg-black/60 p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Quick contact</h3>
            <p className="mt-2 text-sm text-white/70">Have a question or want a demo? We’ll get back within one business day.</p>
            <form className="mt-4 grid grid-cols-1 gap-3">
              <input className="rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#6ABAB1]" placeholder="Name" />
              <input type="email" className="rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#6ABAB1]" placeholder="Email" />
              <textarea rows={3} className="rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#6ABAB1]" placeholder="What can we help with?" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6ABAB1] px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
                Send <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#2f6f69]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo.PNG" alt="JHub Logo" className="h-8 w-auto" />
            <div>
              <div className="font-semibold">JHub</div>
              <div className="text-xs text-white/60">Connecting Jews around the world</div>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#mission" className="hover:text-white">Mission</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="mailto:hello@jhub.app" className="hover:text-white">hello@jhub.app</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="Twitter/X" href="#" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Globe2 className="h-4 w-4"/></a>
            <a aria-label="Instagram" href="#" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Heart className="h-4 w-4"/></a>
            <a aria-label="LinkedIn" href="#" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Users className="h-4 w-4"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Carousel & Masonry ---------------------------------------------------------
function Carousel({ images }: { images: ImageItem[] }) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative h-full w-full">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 w-5 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

function ScreenshotMasonry({ images }: { images: ImageItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-3 shadow-sm backdrop-blur"
        >
          <div className="aspect-[9/19] overflow-hidden rounded-2xl border border-white/10 bg-black">
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

