import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
            {/* Big 404 Accent */}
            <h1 className="text-9xl font-black text-[#0ea5e9]/20 tracking-widest select-none">
                404
            </h1>
            
            {/* Error Message */}
            <div className="mt-4">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
                    Lost in paradise?
                </h2>
                <p className="mt-3 text-base text-gray-500 max-w-md mx-auto">
                    The page you are looking for does not exist or has been moved to another destination.
                </p>
            </div>

            {/* Action Button */}
            <div className="mt-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-sky-600 transition-colors"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;