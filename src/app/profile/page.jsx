import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import { Plane, Globe, TrendingUp, DollarSign, MapPin, Edit3 } from 'lucide-react';

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    
    const user = session?.user;

    // Helper to format the creation date cleanly (e.g., "Jun 2026")
    const formatMemberSince = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    // Fallback profile image if user.image is missing
    const userImage = user?.image || "https://i.pinimg.com/736x/dd/51/db/dd51db7f9842664d21c3042cc7fa72d7.jpg";

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-2">My Profile</h1>
                <p className="text-gray-500 text-sm sm:text-base">Manage your account settings and travel preferences</p>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Left Column: User Identity Card */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col items-center">
                    {/* Avatar Container with Edit Badge Overlay */}
                    <div className="relative w-36 h-36 mb-4">
                        <img 
                            src={userImage} 
                            alt={user?.name || "User Avatar"} 
                            className="w-full h-full object-cover rounded-full border border-gray-100"
                        />
                        <button className="absolute bottom-1 right-1 bg-[#0ea5e9] text-white p-2 rounded-full border-4 border-white shadow-sm hover:bg-sky-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>

                    {/* Name & Location */}
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{user?.name || "Traveler"}</h2>
                    <div className="flex items-center gap-1 text-gray-400 text-sm mb-6">
                        <MapPin className="w-4 h-4" />
                        <span>San Francisco, CA</span>
                    </div>

                    <hr className="w-full border-gray-100 mb-4" />

                    {/* Metadata Lists */}
                    <div className="w-full space-y-3 text-sm mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Member since</span>
                            <span className="font-semibold text-gray-800">{formatMemberSince(user?.createdAt)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Nationality</span>
                            <span className="font-semibold text-gray-800">United States</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-[#119abf] hover:bg-[#0e83a3] text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-colors">
                        <Edit3 className="w-4 h-4" />
                        Edit Profile
                    </button>
                </div>

                {/* Right Column: Travel Dashboard Statistics */}
                <div className="lg:col-span-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Travel Statistics</h3>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Stat Card 1: Total Bookings */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Total Bookings</p>
                                <span className="text-2xl font-bold text-gray-900">12</span>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                                <Plane className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Stat Card 2: Countries Visited */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Countries Visited</p>
                                <span className="text-2xl font-bold text-gray-900">18</span>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                                <Globe className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Stat Card 3: Upcoming Trips */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Upcoming Trips</p>
                                <span className="text-2xl font-bold text-gray-900">2</span>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-400">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Stat Card 4: Total Spent */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Total Spent</p>
                                <span className="text-2xl font-bold text-gray-900">$15,750</span>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-fuchsia-50 flex items-center justify-center text-fuchsia-400">
                                <DollarSign className="w-5 h-5" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;