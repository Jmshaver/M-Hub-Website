import Link from "next/link";
import Image from "next/image";
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import Logo from "./logo";
export default function Footer() {
  return (
    <footer className="p-4">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Link href="/"><Logo width={70} /></Link>
        <Link href="https://www.linkedin.com/company/business-research-hub-ad-the-university-of-michigan/about/">
          <IoLogoLinkedin className="text-4xl" />
        </Link>
      </div>
      <Link className="text-xs text-center text-grey-xlight block" href="https://www.freepik.com">Images: Freepik</Link>
    </footer>
  );
}
