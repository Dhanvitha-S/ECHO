
import Link from "next/link";

export default function PlaceCard({ place }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      <div className="bg-amber-100 h-40 flex items-center justify-center">
        <span className="text-5xl">📍</span>
      </div>

      <div className="p-4">

        <p className="text-sm text-orange-700">
          {place.category}
        </p>

        <h2 className="text-xl font-bold mt-2">
          {place.name}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          {place.location}, Dakshina Kannada
        </p>

        <p className="text-gray-600 mt-3">
          {place.description}
        </p>

        <Link
          href={`/places/${place.id}`}
          className="inline-block mt-4 text-orange-700 font-semibold"
        >
          Explore more →
        </Link>

      </div>
    </div>
  );
}
