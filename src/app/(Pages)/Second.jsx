import Image from "next/image";
import pic1 from "../assets/p4.webp";
import pic2 from "../assets/p2.webp";
import pic3 from "../assets/p6.webp";
import pic4 from "../assets/p3.webp";

// Reusable lime arrow (image cards ke corner ke liye)
const ArrowCircle = () => (
  <span className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#ff2e93] text-xl text-black transition hover:scale-110">
    →
  </span>
);

// Reusable lime pill button (Learn More / Discover More)
const LimeBtn = ({ children }) => (
  <button className="flex w-fit cursor-pointer items-center gap-4 rounded-full bg-[#ff2e93] py-2 pl-6 pr-2 text-sm font-bold uppercase text-black transition hover:brightness-95">
    {children}
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
      →
    </span>
  </button>
);

function Second() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-6 bg-black p-14 max-md:p-4">
      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr_1.3fr]">
        <div className="relative h-80 overflow-hidden rounded-4xl">
          <Image
            src={pic1}
            alt="Open world city"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/50 to-transparent p-8">
            <h2 className="text-4xl font-bold uppercase leading-[0.95] text-white lg:text-5xl">
              Explore a massive open world
            </h2>
            <div className="self-end">
              <ArrowCircle color="purple" />
            </div>
          </div>
        </div>

        <div className="flex h-80 flex-col justify-center gap-4 rounded-4xl bg-[#f4f1f6] p-8">
          <h2 className="text-3xl font-bold uppercase text-black">
            Live the dream
          </h2>
          <p className="text-sm text-neutral-600">
            From the bustling streets of Vice City to the swamps and coastlands
            beyond.
          </p>
          <LimeBtn>Learn more</LimeBtn>
        </div>

        <div className="relative h-80 overflow-hidden rounded-4xl">
          <Image
            src={pic2}
            alt="Speedboat at sunset"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/40 to-transparent p-8">
            <h2 className="text-4xl font-bold uppercase leading-[0.95] text-white lg:text-5xl">
              Endless possibilities
            </h2>
            <div className="self-end">
              <ArrowCircle />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <div className="relative h-80 overflow-hidden rounded-4xl">
          <Image
            src={pic3}
            alt="Vice City skyline"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center gap-4 bg-black/40 p-8">
            <h2 className="text-4xl font-bold uppercase text-white">
              About GTA VI
            </h2>
            <p className="text-sm text-white/80">
              The biggest, most immersive evolution of the Grand Theft Auto
              series yet. A new story, new characters, and a world like never
              before.
            </p>
            <LimeBtn>Discover more</LimeBtn>
          </div>
        </div>

        <div className="relative h-80 overflow-hidden rounded-4xl">
          <Image
            src={pic4}
            alt="Vice City neon"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4 top-4 flex w-14 flex-col items-center justify-between rounded-full bg-[#ff2e93] py-4">
            <span className="text-sm font-bold uppercase text-black [writing-mode:vertical-rl]">
              Welcome to Vice City
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
