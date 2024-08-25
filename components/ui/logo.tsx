import Link from "next/link";
import Image from "next/image";
import BenkiWhiteLogo from "@/public/images/benki-white-logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Benki">
      <Image
        src={BenkiWhiteLogo}
        width={70}
        height={70}
        alt="Benki"
      />
    </Link>
  );
}
