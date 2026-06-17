"use client"
import { Calendar, MapPin, Trash2, Eye } from 'lucide-react';
import DeleteBtn from './DeleteBtn';
import DeleteBookingBtn from './DeleteBookingBtn';

const BookedCard = ({ b }) => {
    const {
        _id,
        destinationName,
        price,
        imageUrl,
        departureDate
    } = b;

    // Helper function to format the ISO Date string into "Month DD, YYYY"
    const formatDate = (dateString) => {
        if (!dateString || dateString.startsWith("1970")) return "Date not set";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };




    return (
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row items-center p-4 gap-6 max-w-5xl mx-auto mb-4 hover:shadow-md transition-shadow">
            
            {/* Left: Destination Image */}
            <div className="w-full md:w-72 h-44 flex-shrink-0 rounded-lg overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={destinationName} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right: Details Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
                
                {/* Text Context */}
                <div className="space-y-2">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Confirmed
                    </div>

                    {/* Destination Title */}
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {destinationName}
                    </h3>

                    {/* Metadata (Date & ID) */}
                    <div className="space-y-1 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>Departure: {formatDate(departureDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>Booking ID: {_id?.slice(-4) || 'b1'}</span>
                        </div>
                    </div>

                    {/* Price Tag */}
                    <div className="text-2xl font-bold text-[#0ea5e9] pt-1">
                        ${price}
                    </div>
                </div>

                {/* Actions Button Group */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-end pt-2 md:pt-0">
                    <div>
                        <DeleteBookingBtn b = {b}></DeleteBookingBtn>
                    </div>
                    
                    <button 
                        onClick={() => console.log("Viewing order:", _id)}
                        className="flex items-center justify-center gap-2 bg-[#0ea5e9] hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors w-1/2 md:w-auto"
                    >
                        <Eye className="w-4 h-4" />
                        View
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BookedCard;