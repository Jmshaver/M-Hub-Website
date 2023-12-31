import Link from "next/link";

export default function Button({ href, text }) {
  return (
    <Link
      className="rounded-lg xl:p-4 p-3 lg:text-lg text-base hover:-translate-y-1 bg-translucent transition drop-shadow-md inline-block"
      href={href}
    >
      {text}
    </Link>
  );
}
