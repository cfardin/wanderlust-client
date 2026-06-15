import React from 'react';
import { MapPin, Calendar, ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';

const DestinationCard = ({ d }) => {

  const { destinationName, country, price, duration, imageUrl, _id } = d;

  // Calculate nights dynamically
  const days = parseInt(duration) || 0;
  const nights = days > 1 ? days - 1 : 0;

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden group">
      
      {/* Image Container */}
      <div className="relative w-full h-70 rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt={destinationName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/80 backdrop-blur-md px-3 py-1 rounded-md shadow-sm">
          <span className="text-sm font-semibold text-gray-800">4.5</span>
          <Star className="w-3.5 h-3.5 fill-black stroke-black" />
        </div>
      </div>

      {/* Content */}
      <div className="pt-4 pb-2">
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-1.5">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>{country}</span>
        </div>

        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-xl font-bold text-gray-900 leading-tight flex-1">
            {destinationName}
          </h3>
          <div className="text-right whitespace-nowrap">
            <span className="text-xl font-bold text-gray-900">${price}</span>
            <span className="text-xs text-gray-500 font-medium">/Person</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium mb-4">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>{days} Days/{nights} Nights</span>
        </div>

        <Link
          href={`/destinations/${_id}`}
          className="inline-flex items-center gap-1 text-[#0ea5e9] font-bold text-sm tracking-wider hover:text-sky-600 transition-colors border-b-2 border-transparent hover:border-[#0ea5e9] pb-0.5"
        >
          BOOK NOW
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;