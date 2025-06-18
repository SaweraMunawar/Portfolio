
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-6 bg-blue-950  shadow-md">
      <div>
        <img
          src="logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full border border-gray-700"
        />
      </div>

      <ol className="flex flex-wrap gap-6 mt-4 md:mt-0 text-white list-none text-gray-800 font-medium">
        <li>
          <Link href="#" className="hover:text-blue-600 transition">Home</Link>
        </li>
        <li>
          <Link href="/about" target="_blank" className="hover:text-blue-600 transition">About</Link>
        </li>
        <li>
          <Link href="/education" target="_blank" className="hover:text-blue-600 transition">Education</Link>
        </li>
        <li>
          <Link href="/skills" target="_blank" className="hover:text-blue-600 transition">Skills</Link>
        </li>
        <li>
          <Link href="/contact" target="_blank" className="hover:text-blue-600 transition">Contact</Link>
        </li>
      </ol>
    </section>
  );
}
