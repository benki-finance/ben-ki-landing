"use client";
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import { Input } from "@headlessui/react";
import { useState } from "react";

export default function Cta() {
  const [buttonText, setButtonText] = useState('Join Waitlist');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const emailInput = e.currentTarget[0] as HTMLInputElement;
    const email = emailInput.value;

    const formData = new FormData();
    formData.append('entry.1228782470', email);
    console.log(formData);

    try {
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfQNFC_gSYRQj2Zf1DeIDre-Vbw1-huHR8McuK6NRzSbnwF3w/formResponse', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Data submitted successfully!');
      } else {
        console.error('Failed to submit data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setButtonText('Submitted');
    setFormSubmitted(true);
  };

  return (
    <section id="waitlist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-emerald-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Unlock seamless end-to-end dilligence
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <form
                className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
                onSubmit={handleSubmit}
              >
                <Input
                  placeholder="you@firm.com"
                  className={`bg-muted/50 dark:bg-muted/80 border p-2 ${formSubmitted ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                  aria-label="email"
                  disabled={formSubmitted}
                />
                <button className="btn group mb-4 w-full bg-gradient-to-t from-emerald-600 to-emerald-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto relative inline-flex items-center">
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}
