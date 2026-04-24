import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import peacockHero from "@/assets/peacock-hero.jpg";
import mandala from "@/assets/mandala-ornament.png";
import temple from "@/assets/temple-venue.jpg";

const WEDDING_DATE = "2026-05-03T11:56:00+05:30";

export const Route = createFileRoute("/")({
  component: Index,
});

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--gold)]" />
      <Heart className="h-3 w-3 text-gold fill-current" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--gold)]" />
    </div>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Floating mandala ornaments */}
      <img
        src={mandala}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-96 opacity-30 animate-float-slow"
      />
      <img
        src={mandala}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 opacity-30 animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* HERO */}
      <section className="relative mx-auto max-w-4xl px-6 pt-16 pb-12 text-center">
        <p className="font-display text-xs tracking-[0.4em] text-gold animate-shimmer">
          ॥ ॐ श्री गणेशाय नमः ॥
        </p>

        <Ornament className="mt-8" />

        <p className="mt-10 font-serif-wedding text-lg italic text-muted-foreground animate-fade-up">
          Together with their families
        </p>

        <h1 className="mt-6 font-script text-7xl sm:text-8xl md:text-9xl text-gradient-peacock leading-[1.4] py-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Vimal
        </h1>
        <p className="my-4 font-script text-3xl text-gold animate-fade-up" style={{ animationDelay: "0.2s" }}>
          weds
        </p>
        <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-gradient-peacock leading-[1.4] py-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Gopika
        </h1>

        <Ornament className="mt-12" />

        <p className="mt-8 font-display text-sm tracking-[0.3em] text-maroon animate-fade-up" style={{ animationDelay: "0.4s" }}>
          3 · MAY · 2026
        </p>
      </section>

      {/* Peacock illustration */}
      <div className="relative mx-auto max-w-3xl px-6">
        <img
          src={peacockHero}
          alt="Ornate peacock illustration"
          width={1536}
          height={1024}
          className="mx-auto w-full rounded-2xl shadow-elegant border border-gold/40"
        />
      </div>

      {/* COUNTDOWN */}
      <section className="relative mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-display text-xs tracking-[0.4em] text-gold uppercase">Counting the moments</p>
        <h2 className="mt-4 font-script text-5xl sm:text-6xl text-gradient-gold">until we say I do</h2>
        <Ornament className="mt-6 mb-10" />
        <Countdown target={WEDDING_DATE} />
      </section>

      {/* INVITATION CARD */}
      <section className="relative mx-auto max-w-3xl px-6 py-12">
        <div className="relative rounded-2xl border-2 border-gold bg-card/70 p-8 sm:p-14 backdrop-blur-sm shadow-elegant">
          <div className="absolute inset-3 rounded-xl border border-gold/40 pointer-events-none" />

          <div className="text-center">
            <p className="font-script text-3xl text-maroon">
              Mr. T. G. Vinod &amp; Seema Vinod
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Chaniparambil House, Palluruthy, Kochi — 682006
            </p>

            <p className="mt-8 font-serif-wedding italic text-lg leading-relaxed text-foreground/80 max-w-xl mx-auto">
              Cordially invite your esteemed presence and prayers
              with family on the auspicious occasion of the marriage of our son
            </p>

            <h3 className="mt-8 font-script text-6xl sm:text-7xl text-gradient-peacock leading-[1.4] py-2">Vimal C V</h3>
            <p className="my-3 font-serif-wedding italic text-xl text-gold">with</p>
            <h3 className="font-script text-6xl sm:text-7xl text-gradient-peacock leading-[1.4] py-2">Gopika G</h3>

            <p className="mt-8 font-script text-2xl text-maroon">
              D/o. Late Gopakumar T. M &amp; Late Bindu T. R
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Kousthubham House, Palluruthy P.O., Ernakulam
            </p>
          </div>

          <div className="my-10 ornate-divider" />

          {/* Event details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Calendar className="h-7 w-7 text-gold mb-3" />
              <p className="font-display text-xs tracking-[0.2em] text-muted-foreground">DATE</p>
              <p className="mt-2 font-display text-sm text-maroon">2026 MAY</p>
              <p className="font-script text-5xl text-gradient-gold leading-[1.3] py-1">3</p>
              <p className="font-display text-xs tracking-[0.2em] text-maroon">SUNDAY</p>
            </div>

            <div className="flex flex-col items-center sm:border-x sm:border-gold/40 sm:px-4">
              <Clock className="h-7 w-7 text-gold mb-3" />
              <p className="font-display text-xs tracking-[0.2em] text-muted-foreground">MUHURTHAM</p>
              <p className="mt-3 font-script text-3xl text-maroon">11:56</p>
              <p className="font-serif-wedding italic text-sm text-muted-foreground">to</p>
              <p className="font-script text-3xl text-maroon">12:44</p>
            </div>

            <div className="flex flex-col items-center">
              <MapPin className="h-7 w-7 text-gold mb-3" />
              <p className="font-display text-xs tracking-[0.2em] text-muted-foreground">VENUE</p>
              <img
                src={temple}
                alt="Venue illustration"
                width={768}
                height={768}
                loading="lazy"
                className="mt-2 h-14 w-auto opacity-90"
              />
              <p className="font-script text-2xl text-maroon mt-1 leading-tight">S. N. Auditorium</p>
              <p className="font-serif-wedding text-sm text-muted-foreground">Palluruthy</p>
            </div>
          </div>

          <div className="my-10 ornate-divider" />

          <p className="text-center font-script text-2xl text-gold">
            Sharing the happiness :{" "}
            <span className="text-maroon">Vishnu, Friends &amp; Family</span>
          </p>
        </div>
      </section>

      {/* RSVP / Closing */}
      <section className="relative mx-auto max-w-2xl px-6 py-20 text-center">
        <Ornament />
        <p className="mt-8 font-serif-wedding italic text-xl text-foreground/80 leading-relaxed">
          “And ever has it been known that love knows not its own depth
          until the hour of separation.”
        </p>
        <p className="mt-4 font-display text-xs tracking-[0.3em] text-gold">— KAHLIL GIBRAN</p>

        <a
          href="https://maps.google.com/?q=S.N.+Auditorium+Palluruthy"
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-full border-2 border-gold bg-gradient-gold px-8 py-3 font-display text-sm tracking-[0.2em] text-primary-foreground shadow-gold transition hover:scale-105"
        >
          <MapPin className="h-4 w-4" />
          OPEN VENUE LOCATION
        </a>

        <p className="mt-16 font-script text-3xl text-gradient-peacock">
          With love &amp; blessings ✦
        </p>
        <p className="mt-2 font-display text-xs tracking-[0.3em] text-muted-foreground">
          VIMAL &amp; GOPIKA
        </p>
      </section>
    </main>
  );
}
