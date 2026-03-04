"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const words = ["homes.", "communities.", "buildings."];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      // Still typing
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText.length === current.length) {
      // Finished typing — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText.length > 0) {
      // Still deleting
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      // Finished deleting — move to next word
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      <Image
        src="/hero.jpg"
        alt="West Fraser Developments"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content — left-aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
        <div className="max-w-5xl">
          {/* We shape + typewriter on one line */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-none mb-4 whitespace-nowrap">
            We shape {displayText}
            <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-pulse" />
          </h1>

          {/* Subtitle */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-none mb-10">
            to provide convenient living.
          </h1>

          <p className="text-base sm:text-xl font-bold text-white/80 tracking-wide">
            The Building Is Where It Begins
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40">
        <div className="w-px h-16 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
