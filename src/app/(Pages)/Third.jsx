import Image from "next/image";
import pic6 from "../assets/p5.webp";
import pic3 from "../assets/p9.jpg";

const features = [
  {
    title: "Vibrant world",
    text: "A living, breathing world full of life, stories and unforgettable moments.",
    grad: "from-fuchsia-500 to-orange-400",
  },
  {
    title: "Epic action",
    text: "High-speed chases, intense shootouts and limitless ways to play your way.",
    grad: "from-purple-600 to-pink-500",
  },
  {
    title: "New era",
    text: "Next-gen gameplay, stunning visuals and a bold new story.",
    grad: "from-indigo-600 to-fuchsia-500",
  },
];

const platforms = ["PS5", "XBOX SERIES X|S", "PC"];

function Third() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-6 bg-black p-14 max-md:p-4">
      {/* ROW 1: Why you'll love it + image card */}
      <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
        {/* Left: heading + 3 cards */}
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-4xl font-bold uppercase text-white">
            Why you&apos;ll love it
          </h1>

          <div className="grid gap-4 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-3 rounded-3xl bg-[#f4f1f6] p-5"
              >
                <h3 className="text-sm font-bold uppercase text-black">
                  {f.title}
                </h3>
                <p className="text-xs text-neutral-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: A new legacy begins */}
        <div className="relative min-h-72 overflow-hidden rounded-3xl">
          <Image
            src={pic6}
            alt="Helicopter over Vice City"
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 to-transparent p-6">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl font-bold uppercase leading-[0.95] text-white">
                A new legacy begins
              </h2>
              <span className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#ff2e93] text-xl text-black transition hover:scale-110">
                →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2: Pre-order banner */}
      <div className="relative h-40 overflow-hidden rounded-4xl">
        <Image
          src={pic3}
          alt="GTA VI banner"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-end pr-6 md:pr-[15%]">
          <button className="flex cursor-pointer items-center gap-4 rounded-full bg-[#ff2e93] py-2 pl-6 pr-2 text-sm font-bold uppercase text-black transition hover:brightness-95">
            Pre-order now
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              →
            </span>
          </button>
        </div>
      </div>

      {/* ROW 3: Platforms */}
      <div className="flex flex-wrap items-center justify-around gap-6 py-6 text-xl font-semibold text-white">
        {platforms.map((p) => (
          <span key={p}>{p}</span>
        ))}
        <span className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white text-2xl font-bold">
          R★
        </span>
      </div>
    </div>
  );
}

export default Third;
