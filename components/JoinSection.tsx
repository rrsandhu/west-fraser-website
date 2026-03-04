import Image from "next/image";

export default function JoinSection() {
  return (
    <section className="grid md:grid-cols-2 min-h-[60vh]">
      {/* Left — real WFD about image */}
      <div className="relative min-h-[40vh] md:min-h-0">
        <Image
          src="/homepage2.jpg"
          alt="Join West Fraser Developments"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right — text */}
      <div className="flex items-center bg-white px-6 sm:px-10 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Careers</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Join <br />West Fraser.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
            We're a team of builders, designers, and community makers. If you're
            passionate about creating exceptional places and want to grow with a
            company that has been shaping the Lower Mainland for decades, we want
            to hear from you.
          </p>
          <a
            href="/careers"
            className="inline-block bg-gray-900 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-700 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
}
