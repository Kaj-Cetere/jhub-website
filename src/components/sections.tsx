import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Globe2,
  CalendarDays,
  Ticket,
  MessageCircle,
  Map,
  Bell,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const features = [
  {
    icon: Globe2,
    title: "Global Community",
    desc: "Discover Jewish events and communities near you and around the world.",
  },
  {
    icon: CalendarDays,
    title: "Powerful Events",
    desc: "Create, manage, and promote events with rich details and RSVP tools.",
  },
  {
    icon: Users,
    title: "Connections",
    desc: "Follow organizers, invite friends, and grow your circle.",
  },
  {
    icon: Ticket,
    title: "Smart Tickets",
    desc: "Beautiful tickets with QR, Apple/Google Wallet, and check‑in.",
  },
  {
    icon: MessageCircle,
    title: "Community Chat",
    desc: "Comments, threads, and notifications keep everyone in the loop.",
  },
];

export function Mission() {
  return (
    <section className="py-24 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <Badge className="bg-brand text-black hover:bg-brand">Our Mission</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Connecting Jews From Around the World</h2>
          <p className="mt-3 text-black/70 max-w-2xl mx-auto">
            JHub is on a mission to strengthen Jewish life by making it effortless to find, host, and attend events—from challah bakes and Shabbat dinners to learning series and community gatherings.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="border-black/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/30 ring-1 ring-brand/50">
                    <Icon className="h-5 w-5 text-black" />
                  </span>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black/70 text-sm">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl bg-gradient-to-r from-brand via-brand/80 to-brand p-8 sm:p-12 shadow-xl ring-1 ring-brand/40">
          <div className="grid gap-6 sm:grid-cols-3 sm:items-center">
            <div className="sm:col-span-2">
              <h3 className="text-3xl font-bold text-black">Ready to build your community?</h3>
              <p className="text-black/80 mt-2">Create an organizer profile, publish your first event, and invite your network.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-black text-white px-7 py-3 font-semibold shadow-md hover:bg-black/90">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const items = [
    { label: "Communities", value: "1,200+" },
    { label: "Events hosted", value: "35k+" },
    { label: "Countries", value: "40+" },
    { label: "Tickets issued", value: "2.1M" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-white/70 backdrop-blur-sm ring-1 ring-brand/30 p-8 sm:p-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold text-black">{value}</div>
              <div className="text-sm mt-1 text-black/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { icon: Map, title: "Discover", desc: "Find events around you with maps and smart filters." },
    { icon: CalendarDays, title: "Plan", desc: "Follow organizers, RSVP, and add to your calendar." },
    { icon: Ticket, title: "Attend", desc: "Get wallet-ready tickets and smooth check‑in." },
    { icon: Bell, title: "Engage", desc: "Chat, comment, and receive real‑time updates." },
  ];
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <Badge className="bg-brand text-black">How it works</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Everything you need to gather</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="border-brand/30 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/30 ring-1 ring-brand/50">
                    <Icon className="h-5 w-5 text-black" />
                  </span>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black/70 text-sm">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  const cards = [
    { title: "Events Map", desc: "See events nearby with brand pins.", icon: Map },
    { title: "Tickets", desc: "Elegant wallet‑ready tickets.", icon: Ticket },
    { title: "Community", desc: "Comments, likes, and RSVPs.", icon: MessageCircle },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="relative overflow-hidden rounded-3xl ring-1 ring-brand/40 bg-gradient-to-b from-brand/35 via-brand/25 to-white p-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="font-semibold">{title}</div>
              </div>
              <p className="mt-3 text-sm text-black/70">{desc}</p>
              <div className="mt-6 h-40 rounded-2xl bg-[radial-gradient(120%_120%_at_50%_0%,rgba(0,0,0,0.1),transparent)] ring-1 ring-black/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-black/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const people = [
    { name: "David Bernstein", quote: "JHub made organizing our challah bake effortless.", initials: "DB" },
    { name: "Sara Cohen", quote: "Our community doubled in attendance within months.", initials: "SC" },
    { name: "Leah Katz", quote: "The ticketing and check‑in are best‑in‑class.", initials: "LK" },
  ];
  return (
    <section className="py-24 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <Badge className="bg-brand text-black">Voices</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Loved by communities</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <Card key={p.name} className="border-brand/30 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{p.initials}</AvatarFallback>
                  </Avatar>
                  <div className="font-semibold">{p.name}</div>
                </div>
                <p className="mt-4 text-black/70 text-sm">“{p.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const items = [
    { q: "Is JHub free to use?", a: "Browsing and RSVPing to many events is free. Organizers can choose free or paid tickets." },
    { q: "Do you support ticket scanning?", a: "Yes. Tickets include QR codes and work with mobile wallet passes for quick check‑in." },
    { q: "Where is JHub available?", a: "JHub is global with growing coverage in North America, Europe, and Israel." },
  ];
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <Badge className="bg-brand text-black">FAQ</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Answers to common questions</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {items.map((it, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{it.q}</AccordionTrigger>
              <AccordionContent className="text-black/70">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}


