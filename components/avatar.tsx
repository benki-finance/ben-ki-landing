import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.png";
import Avatar02 from "@/public/images/avatar-02.png";
import Avatar03 from "@/public/images/avatar-03.png";
import Avatar04 from "@/public/images/avatar-04.png";
import Avatar05 from "@/public/images/avatar-05.png";
import Avatar06 from "@/public/images/avatar-06.png";

export default function Avatar() {
  return (
    <>
      {/* Avatar */}
      <div
        className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
        data-aos="zoom-y-out"
      >
        <div className="-mx-0.5 flex justify-center -space-x-3">
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar01}
            width={32}
            height={32}
            alt="Avatar 01"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar02}
            width={32}
            height={32}
            alt="Avatar 01"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar03}
            width={32}
            height={32}
            alt="Avatar 02"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar04}
            width={32}
            height={32}
            alt="Avatar 03"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar05}
            width={32}
            height={32}
            alt="Avatar 04"
          />
          <Image
            className="box-content rounded-full border-2 border-gray-50"
            src={Avatar06}
            width={32}
            height={32}
            alt="Avatar 05"
          />
        </div>
      </div>
    </>
  );
}
