"use client";

import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import { username } from "better-auth/plugins";
import { Check } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
       const {
        _id,
        destinationName,
        country,
        price,
        duration,
        imageUrl,
        description,
    } = destination;

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // console.log(user);

    const [departureDate , setDepartureDate] = useState(null);

    const handleBooking = async() =>{
        const bookingData = {
            userId : user?.id,
            userImage : user?.image,
            userName : user?.name,
            destinationId : _id,
            destinationName, 
            price,
            imageUrl,
            country,
            departureDate : new Date(departureDate)
        };

        const {data:tokenData} = await authClient.token();
        console.log(tokenData);
 
        const res = await fetch(`${process.env.SERVER_URL}/booking`, {
            method : "POST", 
            headers : {
                'content-type' : "application/json",
                authorization : `Bearer ${tokenData?.token}`
            },
            body : JSON.stringify(bookingData)
        });

        const data = await res.json();
        
        toast.success("Booking Successful");

    };


    return (
        <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-8">
                <p className="text-gray-500">Starting from</p>
                <h3 className="text-3xl font-bold text-[#0ea5e9] mb-6">
                    ${price}{" "}
                    <span className="text-sm text-gray-400 font-normal">
                        per person
                    </span>
                </h3>

                {/* Replaced input with a static display div  */}
                {/* <div className="w-full p-3 border border-gray-200 bg-gray-50 rounded-lg mb-4 text-gray-700 font-medium">

                </div> */}
                <DateField
                    onChange={setDepartureDate}
                    className="w-[256px] mb-5"
                    name="date"
                >
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => (
                                <DateField.Segment segment={segment} />
                            )}
                        </DateField.Input>
                    </DateField.Group>
                </DateField>

                <button onClick={handleBooking} className="w-full bg-[#0ea5e9] text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors mb-6">
                    Book Now →
                </button>

                <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" /> Free
                        cancellation up to 7 days
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" /> Travel
                        insurance included
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" /> 24/7
                        customer support
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
