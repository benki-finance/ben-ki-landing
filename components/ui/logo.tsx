import Link from "next/link";
import Image from "next/image";
import BenkiLogo from "@/public/images/logo-01.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Benki">
      <Image
        src={BenkiLogo}
        width={70}
        height={70}
        alt="Benki"
      />
    </Link>
  );
}
