
import Link from "next/link";
import { places } from "../data/places";
import PlaceCard from "../components/PlaceCard";

export default function Home() {

  const featuredPlaces = places.slice(0, 3);

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* Navbar */}

      <nav className="flex justify-between items-center p-5 bg-white">

        <h1 className="text-3xl font-bold text-orange-800">
          ECHO
        </h1>

        <div className="flex gap-6">
          <Link href="/" className="font-semibold">Home</Link>
          <Link href="/explore" className="font-semibold">Explore</Link>
          <Link href="/saved" className="font-semibold">Saved</Link>
        </div>

      </nav>


      {/* Hero Section */}

      <section className="text-center px-6 py-24 bg-orange-100">

        <p className="text-orange-800 font-semibold">
          DISCOVER DAKSHINA KANNADA
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-5 text-gray-900">
          Every Place Has a Story.
        </h1>

        <p className="text-gray-700 mt-5 max-w-2xl mx-auto">
          Discover the history, culture and hidden beauty
          of Dakshina Kannada through the stories of its places.
        </p>

        <Link
          href="/explore"
          className="inline-block bg-orange-800 text-white px-7 py-3 rounded-lg mt-8"
        >
          Explore Places
        </Link>

      </section>


      {/* About ECHO */}

      <section className="px-6 py-16 text-center">

        <h2 className="text-3xl font-bold">
          Discover the Stories Around You
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mt-5">
          ECHO helps you discover interesting places across
          Dakshina Kannada. From historical monuments to
          cultural landmarks and beautiful beaches, learn
          what makes each place special.
        </p>

      </section>


      {/* Featured Places */}

      <section className="px-6 py-12">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Featured Places
          </h2>

          <Link href="/explore" className="text-orange-800 font-semibold">
            View All →
          </Link>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {featuredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}

        </div>

      </section>


      {/* Categories */}

      <section className="px-6 py-16 bg-orange-100">

        <h2 className="text-3xl font-bold text-center mb-10">
          Explore by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link href="/explore?category=Heritage%20%26%20History"
            className="bg-white p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold">
              Heritage & History
            </h3>
            <p className="text-gray-600 mt-3">
              Explore historic places and monuments.
            </p>
          </Link>

          <Link href="/explore?category=Culture%20%26%20Local%20Life"
            className="bg-white p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold">
              Culture & Local Life
            </h3>
            <p className="text-gray-600 mt-3">
              Discover traditions and local culture.
            </p>
          </Link>

          <Link href="/explore?category=Nature%20%26%20Coastal"
            className="bg-white p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold">
              Nature & Coastal
            </h3>
            <p className="text-gray-600 mt-3">
              Find beaches and natural attractions.
            </p>
          </Link>

        </div>

      </section>


      {/* Footer */}

      <footer className="bg-gray-900 text-white text-center p-6">

        <h2 className="text-2xl font-bold">ECHO</h2>

        <p className="mt-2 text-gray-300">
          Discover the stories of Dakshina Kannada.
        </p>

        <p className="mt-4 text-sm text-gray-400">
          © 2026 ECHO. All rights reserved.
        </p>

      </footer>

    </div>
  );
}
