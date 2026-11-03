
"use client";

import { useState } from "react";
import Link from "next/link";
import { places } from "../../data/places";
import PlaceCard from "../../components/PlaceCard";

export default function Explore() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Heritage & History",
    "Culture & Local Life",
    "Nature & Coastal"
  ];

  const filteredPlaces = places.filter((place) => {

    const matchesSearch =
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || place.category === category;

    return matchesSearch && matchesCategory;

  });

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* Navbar */}

      <nav className="flex justify-between items-center p-5 bg-white">

        <Link href="/" className="text-3xl font-bold text-orange-800">
          ECHO
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/explore" className="font-bold">Explore</Link>
          <Link href="/saved">Saved</Link>
        </div>

      </nav>


      {/* Heading */}

      <section className="text-center px-6 py-16 bg-orange-100">

        <h1 className="text-4xl font-bold">
          Explore Dakshina Kannada
        </h1>

        <p className="text-gray-700 mt-4">
          Find places, discover their stories and explore
          the beauty of our region.
        </p>

      </section>


      {/* Search */}

      <section className="px-6 py-10">

        <input
          type="text"
          placeholder="Search places or locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 border rounded-lg bg-white"
        />


        {/* Category Filters */}

        <div className="flex flex-wrap gap-3 mt-6">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full ${
                category === item
                  ? "bg-orange-800 text-white"
                  : "bg-white border text-gray-700"
              }`}
            >
              {item}
            </button>

          ))}

        </div>


        {/* Place Count */}

        <h2 className="text-2xl font-bold mt-10 mb-6">
          {filteredPlaces.length} Places Found
        </h2>


        {/* Place Cards */}

        {filteredPlaces.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredPlaces.map((place) => (

              <PlaceCard
                key={place.id}
                place={place}
              />

            ))}

          </div>

        ) : (

          <div className="text-center py-16">

            <h2 className="text-2xl font-bold">
              No Places Found
            </h2>

            <p className="text-gray-600 mt-3">
              Try searching for another place or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="bg-orange-800 text-white px-6 py-3 rounded-lg mt-5"
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>


      {/* Footer */}

      <footer className="bg-gray-900 text-white text-center p-6">

        <h2 className="text-2xl font-bold">ECHO</h2>

        <p className="text-gray-300 mt-2">
          Discover the stories of Dakshina Kannada.
        </p>

      </footer>

    </div>
  );
}
