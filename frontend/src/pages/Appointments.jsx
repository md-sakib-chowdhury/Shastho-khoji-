import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '../api/axiosInstance';

export default function Appointments() {
    const queryClient = useQueryClient();
    const [activeTab, setActiveTab] = useState('upcoming');

    const { data, isLoading } = useQuery({
        queryKey: ['appointments'],
        queryFn: () => axios.get('/appointments/my').then((r) => r.data),
    });

    const cancelMutation = useMutation({
        mutationFn: (id) => axios.patch(`/appointments/${id}/cancel`),
        onSuccess: () => queryClient.invalidateQueries(['appointments']),
    });

    const appointments = data?.appointments || [];
    const now = new Date();
    const upcoming = appointments.filter(
        (a) => new Date(a.appointmentDate) >= now && a.status !== 'cancelled'
    );
    const past = appointments.filter(
        (a) => new Date(a.appointmentDate) < now || a.status === 'cancelled'
    );
    const list = activeTab === 'upcoming' ? upcoming : past;

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin text-4xl mb-3">⏳</div>
                    <p className="text-gray-500">লোড হচ্ছে...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">আমার অ্যাপয়েন্টমেন্ট</h1>
                <div className="flex gap-2 mb-6">
                    {['upcoming', 'past'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white text-gray-600 border border-gray-200'
                                }`}
                        >
                            {tab === 'upcoming' ? 'আসন্ন' : 'পুরনো'}
                        </button>
                    ))}
                </div>
                {list.length === 0 ? (
                    <div className="card text-center py-10 text-gray-400">
                        <p className="text-4xl mb-3">📅</p>
                        <p>{activeTab === 'upcoming' ? 'কোনো আসন্ন অ্যাপয়েন্টমেন্ট নেই' : 'কোনো পুরনো অ্যাপয়েন্টমেন্ট নেই'}</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {list.map((apt) => (
                            <div key={apt._id} className="card">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">ডা. {apt.doctor?.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{apt.doctor?.specialization}</p>
                                        <p className="text-sm text-green-600 mt-2 font-medium">
                                            📅{' '}
                                            {new Date(apt.appointmentDate).toLocaleDateString('bn-BD', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </p>
                                        <p className="text-sm text-gray-500">🕐 {apt.timeSlot}</p>
                                    </div>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full font-medium ${apt.status === 'confirmed'
                                                ? 'bg-green-100 text-green-700'
                                                : apt.status === 'cancelled'
                                                    ? 'bg-red-100 text-red-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                            }`}
                                    >
                                        {apt.status === 'confirmed' ? 'নিশ্চিত' : apt.status === 'cancelled' ? 'বাতিল' : 'অপেক্ষায়'}
                                    </span>
                                </div>
                                {activeTab === 'upcoming' && apt.status !== 'cancelled' && (
                                    <button
                                        onClick={() => cancelMutation.mutate(apt._id)}
                                        disabled={cancelMutation.isPending}
                                        className="mt-4 text-sm text-red-500 border border-red-200 rounded-lg px-3 py-1 hover:bg-red-50 transition-colors"
                                    >
                                        বাতিল করুন
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}