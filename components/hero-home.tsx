"use client";
import PageIllustration from "@/components/page-illustration";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function HeroHome() {
  const handleWaitlistClick = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
          
            {/* TODO
              <Avatar /> 
            */}
            
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Intelligent <span className="inline bg-gradient-to-r from-[#36d391] via-[#78716c] to-[#065f46] text-transparent bg-clip-text animate-gradient">live memos</span> for <br className="max-lg:hidden" />
              banking <span className="inline hover:text-emerald-600">due diligence</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Benki helps M&A teams build CIMs in days, not months. We integrate with your data room to generate drafts for every memo and financial model.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <button
                    className="btn group mb-4 w-full bg-gradient-to-t from-emerald-600 to-emerald-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg- hover:bg-emerald-500 sm:mb-0 sm:w-auto"
                    onClick={handleWaitlistClick}
                  >
                    <span className="relative inline-flex items-center">
                      Join Waitlist{" "}
                      <span className="ml-1 tracking-normal text-white-600 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </button>
                  <a 
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="https://www.linkedin.com/company/ben-ki/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check us out on 
                    <LinkedInLogoIcon className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          {/* TODO: change to benki scripts */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  ben-ki.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  (yourFirm) benki update pnl http://db.tt/v03.xls -rf
                </span>{" "}
                <br />
                <span className="animate-[code-2_10s_infinite]">
                  --deal_access=/SVB-23/SR_ANALYST
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --citations=@inline-mla
                </span>{" "}
                <br />
                <span className="animate-[code-4_10s_infinite]">
                  Generated. View changes or publish?
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  (yourFirm) benki publish cim
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Download as PDF, DOCX, or HTML.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
