// import React from 'react';

// const Featured = async() => {
//     const res = await fetch(`${process.env.SERVER_URL}/featured`);
//     const featuredDestination = await res.json();
//     console.log(featuredDestination);

//     return (
//         <div>
//             <h3>featured</h3>
//             <div>
//                 {
//                     featuredDestination.map(destination => <Featured key={f._id} destination={destination} ></Featured>)
//                 } 
//             </div>
//         </div>
//     );
// };

// export default Featured

// ;


import React from 'react';
import Link from 'next/link';

// Sub-component for individual destination cards
const DestinationCard = ({ destination }) => {
    const {
        _id,
        destinationName,
        country,
        price,
        duration,
        imageUrl,
    } = destination;

    // Default mock rating if it doesn't exist in database schema yet
    const rating = destination.rating || "4.5"; 

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
            {/* Image Container with Relative positioning for Rating overlay */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img 
                    src={imageUrl || "/api/placeholder/400/300"} 
                    alt={destinationName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="text-sm font-semibold text-gray-800">{rating}</span>
                    <span className="text-yellow-500 text-xs">★</span>
                </div>
            </div>

            {/* Content Details Container */}
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    {/* Location Info */}
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-2">
                        {/* Simple Geo Icon placeholder */}
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span>{country}</span>
                    </div>

                    {/* Title and Price Info */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="text-xl font-bold text-gray-900 leading-tight">
                            {destinationName || "Bali Paradise"}
                        </h4>
                        <div className="text-right shrink-0">
                            <span className="text-2xl font-bold text-gray-900">${price}</span>
                            <span className="text-xs text-gray-400 block font-normal">/Person</span>
                        </div>
                    </div>

                    {/* Duration Display */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                        {/* Calendar Icon placeholder */}
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span>{duration || "7 Days/6 Nights"}</span>
                    </div>
                </div>

                {/* Interactive Action Link */}
                <Link 
                    href={`/destination/${_id}`}
                    className="inline-flex items-center gap-1.5 text-xs tracking-wider font-bold text-[#0ea5e9] uppercase hover:text-sky-600 transition-colors mt-auto group/btn"
                >
                    Book Now 
                    <span className="transform group-hover/btn:translate-x-0.5 transition-transform">↗</span>
                </Link>
            </div>
        </div>
    );
};

const Featured = async () => {
    let featuredDestination = [];
    
    try {
        const res = await fetch(`${process.env.SERVER_URL}/featured`, { cache: 'no-store' });
        if (res.ok) {
            featuredDestination = await res.json();
        }
    } catch (error) {
        console.error("Error loading featured destinations:", error);
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header Flex Container with Title & Main CTA button */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                        Featured Destinations
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg">
                        Handpicked travel experiences for the adventure seekers
                    </p>
                </div>
                
                <Link 
                    href="/destination" 
                    className="inline-flex items-center gap-2 border border-[#0ea5e9]/30 text-[#0ea5e9] px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-sky-50 transition-colors uppercase self-start sm:self-auto"
                >
                    All Destinations <span>→</span>
                </Link>
            </div>

            {/* Responsive Grid Layout to render cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredDestination.length > 0 ? (
                    featuredDestination.map((destination) => (
                        <DestinationCard 
                            key={destination._id} 
                            destination={destination} 
                        />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full">No featured destinations available at the moment.</p>
                )}
            </div>
        </section>
    );
};

export default Featured;