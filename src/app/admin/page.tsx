'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats] = useState({
    totalUsers: 156,
    totalKoi: 45,
    totalBreeders: 12,
    pendingApprovals: 3,
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage KoiCareLanka platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Users" value={stats.totalUsers} color="blue" />
          <StatCard title="Total Koi" value={stats.totalKoi} color="orange" />
          <StatCard title="Active Breeders" value={stats.totalBreeders} color="green" />
          <StatCard title="Pending Approvals" value={stats.pendingApprovals} color="red" />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ActionButton title="Manage Users" href="/admin/users" />
            <ActionButton title="Manage Koi" href="/admin/koi" />
            <ActionButton title="Manage Breeders" href="/admin/breeders" />
            <ActionButton title="View Reports" href="/admin/reports" />
            <ActionButton title="Site Settings" href="/admin/settings" />
            <ActionButton title="Content Moderation" href="/admin/moderation" />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <ActivityItem
              action="New user registration"
              user="john@example.com"
              time="2 minutes ago"
            />
            <ActivityItem
              action="Koi listing added"
              user="breeder@koifarm.lk"
              time="15 minutes ago"
            />
            <ActivityItem
              action="Breeder verification pending"
              user="newbreeder@example.com"
              time="1 hour ago"
            />
            <ActivityItem
              action="User reported content"
              user="user@example.com"
              time="2 hours ago"
            />
          </div>
        </div>

        {/* Notice */}
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-2">
            🚧 Development Notice
          </h3>
          <p className="text-orange-800">
            This admin dashboard is currently under development. Full functionality including user management,
            content moderation, analytics, and more will be added in future updates.
          </p>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  color: 'blue' | 'orange' | 'green' | 'red';
}

function StatCard({ title, value, color }: StatCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    orange: 'from-orange-500 to-orange-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl shadow-md p-6 text-white`}>
      <p className="text-white/80 text-sm mb-2">{title}</p>
      <p className="text-4xl font-bold">{value}</p>
    </div>
  );
}

interface ActionButtonProps {
  title: string;
  href: string;
}

function ActionButton({ title, href }: ActionButtonProps) {
  return (
    <Link href={href}>
      <button className="w-full bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-900 font-semibold py-3 px-4 rounded-lg transition-all duration-300">
        {title}
      </button>
    </Link>
  );
}

interface ActivityItemProps {
  action: string;
  user: string;
  time: string;
}

function ActivityItem({ action, user, time }: ActivityItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div>
        <p className="font-medium text-gray-900">{action}</p>
        <p className="text-sm text-gray-600">{user}</p>
      </div>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  );
}
