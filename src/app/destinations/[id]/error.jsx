"use client";

import Link from 'next/link';
import React from 'react';

const Error = ({ error, reset }) => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
            {/* Warning Message */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Something went wrong!
            </h2>
            {/* <p className="text-sm text-gray-500 max-w-sm mb-6">
                {error?.message || "An unexpected error occurred while loading this page."}
            </p> */}
            
            {/* Action Buttons */}
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="bg-[#0ea5e9] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors"
                >
                    Try Again
                </button>
                <Link
                    href="/"
                    className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default Error;