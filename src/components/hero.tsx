"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-32">
      <div className={cn("absolute inset-0 -z-10 bg-gradient-to-b from-brand/40 to-transparent")}></div>
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-black text-white px-4 py-2 text-xs font-semibold tracking-wide shadow-lg">
            JHub
          </div>
          <h1 className="mt-6 text-balance text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            The Premier Jewish Social Events Platform
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-black/70">
            For organizers and attendees—discover, manage, and connect. JHub unites Jews around the world through local events, community hubs, and meaningful experiences.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Button size="lg" className="bg-brand text-black hover:bg-brand/90 rounded-full px-6 shadow-lg">
              Join the Community
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white">
              Explore Events
            </Button>
          </div>
        </div>

        <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {["/vercel.svg","/next.svg","/globe.svg"].map((src, i) => (
            <div key={i} className="relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
              <Image src={src} alt="preview" fill className="object-contain p-8" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute -inset-px rounded-3xl ring-2 ring-brand/50 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


