import React from "react";
import { MapPin, Calendar, Star, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import UpdateModalForm from "@/components/ui/UpdateModalForm";
import DeleteBtn from "@/components/ui/DeleteBtn";
import BookingCard from "@/components/ui/BookingCard";

const DestinationInfo = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();

    const {
        destinationName,
        country,
        price,
        duration,
        imageUrl,
        description,
        departureDate,
    } = destination;
    const days = parseInt(duration) || 0;
    const nights = days > 1 ? days - 1 : 0;

    return (
        <div className="container mx-auto px-4 py-8 my-20">
            {/* Top Navigation */}
            <div className="flex justify-between">
                <Link
                    href="/destinations"
                    className="flex items-center gap-2 text-gray-500 mb-6 hover:text-black transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Destinations
                </Link>
                <div className="flex gap-5">
                    <UpdateModalForm
                        destination={destination}
                    ></UpdateModalForm>
                    <DeleteBtn destination={destination}></DeleteBtn>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-8">
                <img
                    src={imageUrl}
                    alt={destinationName}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                            <MapPin className="w-4 h-4" /> {country}
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {destinationName}
                        </h1>
                        <div className="flex items-center gap-6 text-gray-700">
                            <div className="flex items-center gap-1 font-semibold text-green-600">
                                <Star className="w-5 h-5 fill-green-600" /> 4.9{" "}
                                <span className="text-gray-400 font-normal">
                                    (234 reviews)
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-5 h-5" /> {days} Days /{" "}
                                {nights} Nights
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Overview
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Highlights
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Luxury beachfront accommodation",
                                "Traditional Balinese spa treatment",
                                "Sunrise trek to Mount Batur",
                                "Visit Uluwatu Temple",
                                "Private beach dinner",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 text-gray-700"
                                >
                                    <Check className="w-5 h-5 text-green-500" />{" "}
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Booking Box */}
                <BookingCard destination = {destination}></BookingCard>
            </div>
        </div>
    );
};

export default DestinationInfo;
