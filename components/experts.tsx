import React from "react";

const logos = [
  "Cohere-Logo.png",
  "Lawrence_Berkeley_National_Laboratory_logo.svg",
  "Epic_Systems.svg",
  "Tencent-Logo.png",
  "Tesla_Motors.svg",
  "Amazon_logo.svg",
  "Morgan_Stanley_Logo_1.svg",
  "Georgetown_University_Logotype.svg",
  "University_of_California,_Berkeley_logo.svg",
  "Stanford_Cardinal_logo.svg",
  "Arizona_Wildcats_logo.svg",
  "Credit_Suisse_Logo.svg",
  "University_of_Washington_seal.svg",
];

const logosPerRow = logos.length;// For two rows: Math.ceil(logos.length / 2);

  const createRows = (arr: string[], perRow: number) => {
    const rows: string[][] = [];
    for (let i = 0; i < arr.length; i += perRow) {
      rows.push(arr.slice(i, i + perRow));
    }
    return rows;
  };

const rows = createRows(logos, logosPerRow);

export const Experts: React.FC = () => {

  return (
    <div className="pt-42 sm:py-0 p-2 rounded">
      <div className="max-w-[1500px] px-0 items-center justify-center mx-auto">
        <div className="text-center mb-4">
          {/* <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#9F70FD1A] text-purple-700">
            <span className="bg-gradient-to-r from-[#E770C1] to-[#9F70FD] bg-clip-text text-transparent">
              TEAM
            </span>
          </span> */}

          <h2 className="my-3 text-3xl md:text-4xl font-bold">
            Founded by <span className="inline bg-gradient-to-r from-[#36d391] via-[#78716c] to-[#065f46] text-transparent bg-clip-text animate-gradient">Experts & Operators{" "}</span>
            from
          </h2>

        </div>

        <div className="w-full overflow-hidden py-6">
          {rows.map((row, index) => (
              <div
                  key={index}
                  className="flex w-max gap-x-12 whitespace-nowrap px-2 animate-scrollRight"
              >
                  {/* Double logos to ensure smooth infinite scroll */}
                  {row.concat(row).map((logo, i) => (
                      <div key={`${index}-${logo}-${i}`} className="my-6 h-8 sm:h-11 flex items-center justify-center">
                          <img
                              src={`/expert_logos/${logo}`}
                              alt={`logo-${i}`}
                              className="h-6 sm:h-8 w-auto filter grayscale brightness-80 contrast-50 transition duration-300 hover:brightness-90"
                          />
                      </div>
                  ))}
              </div>
          ))}
      </div>
     </div>
    </div>
  );
};