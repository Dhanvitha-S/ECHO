
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        ECHO<span>.</span>
      </Link>

      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/saved">Saved Places</Link>
      </div>
    </nav>
  );
}
