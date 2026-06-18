import DestinationCard from "@/components/ui/DestinationCard";
import React from "react";

const DestinationPage = async () => {
    const res = await fetch("http://localhost:5000/destination");
    const destination = await res.json();


    return (
        <div className="container mx-auto">
            <h3>All Destinations :</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {destination.map((d) => (
                    <DestinationCard key={d._id} d={d}></DestinationCard>
                ))}
            </div>
        </div>
    );
};

export default DestinationPage;
