// import BookedCard from '@/components/ui/BookedCard';
// import React from 'react';

// const MyBookingPage = async() => {
//     const res = await fetch('http://localhost:5000/booking');
//     const bookedData = await res.json();

//     console.log(bookedData);



//     return (
//         <div className='container mx-auto'>
//             <div className=''>
//                 <h3 className='text-3xl font-bold'>My Bookings</h3>
//             </div>
//             <div>
//                 {
//                     bookedData.map(b => <BookedCard key={b._id} b = {b} ></BookedCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default MyBookingPage;


import BookedCard from '@/components/ui/BookedCard';
import React from 'react';

const MyBookingPage = async () => {
    // Fetch bookings from your backend
    const res = await fetch('http://localhost:5000/booking', { cache: 'no-store' });
    const bookedData = await res.json();

    return (
        // Added top/bottom padding and a max-width wrapper matching standard modern dash templates
        <div className="container mx-auto px-4 py-12 max-w-5xl my-10">
            
            {/* Header Section */}
            <div className="mb-10 border-b border-gray-100 pb-6">
                <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
                    My Bookings
                </h1>
                <p className="mt-2 text-base text-gray-500">
                    Manage and view your upcoming travel plans
                </p>
            </div>

            {/* Bookings Card List */}
            {bookedData && bookedData.length > 0 ? (
                // space-y-6 adds uniform vertical margins between stacked cards
                <div className="space-y-6">
                    {bookedData.map((b) => (
                        <BookedCard 
                            key={b._id} 
                            b={b} // Fixed prop name to match your card component expectations
                        />
                    ))}
                </div>
            ) : (
                /* Elegant Empty State placeholder if there are no bookings found */
                <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <p className="text-gray-500 font-medium">No bookings found</p>
                    <p className="text-sm text-gray-400 mt-1">When you book an exploration, it'll show up right here.</p>
                </div>
            )}
        </div>
    );
};

export default MyBookingPage;