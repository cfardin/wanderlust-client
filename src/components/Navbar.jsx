"use client";
import Link from "next/link";
import { User } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    // console.log(session);

    return (
        <nav className="w-full bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Side: Navigation Links */}
                    <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
                        <Link
                            href="/"
                            className="text-[#0ea5e9] underline underline-offset-4 decoration-2"
                        >
                            Home
                        </Link>
                        <Link
                            href="/destinations"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Destinations
                        </Link>
                        <Link
                            href="/bookings"
                            className="hover:text-gray-900 transition-colors"
                        >
                            My Bookings
                        </Link>
                        <Link
                            href="/add-destination"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Add-Destination
                        </Link>
                    </div>

                    {/* Center: Brand Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-[#0ea5e9] tracking-wide"
                        >
                            Wanderlast
                        </Link>
                    </div>

                    {/* Right Side: Profile & Authentication */}
                    {user ? (
                        <div className="flex gap-5 justify-center items-center">
                            <div>
                                <Avatar>
                                    <Avatar.Image
                                        referrerPolicy="no-referrer"
                                        alt="John Doe"
                                        src={user?.image}
                                    />
                                    <Avatar.Fallback>
                                        {user.name.charAt(0)}
                                    </Avatar.Fallback>
                                </Avatar>
                            </div>
                            <div>
                              <h4>Hello {user.name}</h4>
                            </div>
                            <div>
                                <Button
                                    size="sm"
                                    onClick={handleSignOut}
                                    variant="danger"
                                    className={""}
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
                            <button className="flex items-center space-x-1 hover:text-gray-900 transition-colors">
                                <User className="w-4 h-4" />
                                <span>Profile</span>
                            </button>
                            <Link
                                href="/login"
                                className="hover:text-gray-900 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="hover:text-gray-900 transition-colors"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}

                    {/* <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <button className="flex items-center space-x-1 hover:text-gray-900 transition-colors">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
            <Link href="/login" className="hover:text-gray-900 transition-colors">
              Login
            </Link>
            <Link href="/signup" className="hover:text-gray-900 transition-colors">
              Sign Up
            </Link>
          </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
