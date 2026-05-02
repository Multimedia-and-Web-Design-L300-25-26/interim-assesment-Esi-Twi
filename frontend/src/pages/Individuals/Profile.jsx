import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Mail, User, Calendar, LogOut, Settings } from 'lucide-react';

export const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                const res = await fetch('http://localhost:3000/api/auth/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch profile. Please log in again.');
                }

                const data = await res.json();
                setUser(data);
                setError('');
            } catch (err) {
                setError(err.message);
                setTimeout(() => navigate('/signin'), 2000);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Profile</h1>
                        <p className="text-lg text-gray-600">Manage your account information</p>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                            <p className="ml-4 text-lg text-gray-600">Loading your profile...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                            <p className="text-red-800 font-medium">{error}</p>
                            <p className="text-red-600 text-sm mt-2">Redirecting to login...</p>
                        </div>
                    )}

                    {/* Profile Content */}
                    {user && !loading && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Profile Card */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                    {/* Profile Header Background */}
                                    <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400"></div>

                                    {/* Profile Content */}
                                    <div className="px-8 pb-8">
                                        {/* Avatar */}
                                        <div className="flex items-start justify-between -mt-16 mb-8">
                                            <div className="flex items-end gap-4">
                                                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg border-4 border-white shadow-md flex items-center justify-center">
                                                    <User size={64} className="text-white" />
                                                </div>
                                                <div className="pb-2">
                                                    <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                                                    <p className="text-gray-600 text-sm">Individual Account</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Information Grid */}
                                        <div className="space-y-6">
                                            {/* Email */}
                                            <div className="border-t border-gray-200 pt-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0">
                                                        <Mail className="text-blue-600 mt-1" size={24} />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Email Address</h3>
                                                        <p className="text-lg text-gray-900 mt-1">{user.email}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Member Since */}
                                            <div className="border-t border-gray-200 pt-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0">
                                                        <Calendar className="text-blue-600 mt-1" size={24} />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Member Since</h3>
                                                        <p className="text-lg text-gray-900 mt-1">{formatDate(user.createdAt)}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Last Updated */}
                                            <div className="border-t border-gray-200 pt-6 pb-2">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0">
                                                        <Calendar className="text-gray-400 mt-1" size={24} />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Last Updated</h3>
                                                        <p className="text-lg text-gray-900 mt-1">{formatDate(user.updatedAt)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Actions */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky top-24">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Info</h3>

                                    {/* Account Status */}
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <p className="text-sm text-gray-600 font-medium mb-2">Account Status</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span className="text-sm font-semibold text-green-600">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};


export default Profile;

