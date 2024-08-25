import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function Planet() {
  return (
    <>
      {/* Planet */}
      <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
        <div className="text-center">
          <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-mint-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.indigo.500),transparent)]">
            <Image
              className="rounded-full bg-gray-900"
              src={PlanetImg}
              width={300} // Scaled down for mobile
              height={300} // Adjusted height
              alt="Planet"
              // Use Tailwind for responsive sizes
              sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
            />
            <div className="pointer-events-none" aria-hidden="true">
              <div>
                <Image
                  className="absolute -left-12 sm:-left-20 md:-left-28 top-10 md:top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                  src={PlanetTagImg01}
                  width={150} // Scaled down width
                  height={40}
                  alt="Tag 01"
                />
                <Image
                  className="absolute left-24 sm:left-48 md:left-56 top-5 md:top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                  src={PlanetTagImg02}
                  width={160} // Scaled down
                  height={40}
                  alt="Tag 02"
                />
                <Image
                  className="absolute -left-10 sm:-left-14 md:-left-20 bottom-16 sm:bottom-20 md:bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                  src={PlanetTagImg03}
                  width={160} // Scaled down
                  height={40}
                  alt="Tag 03"
                />
                <Image
                  className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-48 sm:left-56 md:left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                  src={PlanetTagImg04}
                  width={160} // Scaled down
                  height={40}
                  alt="Tag 04"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
