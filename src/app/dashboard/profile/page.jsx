'use client'
import React from "react";
import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">You are not logged in.</p>
      </div>
    );
  }

  const user = session.user;
console.log(user)
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="card w-full max-w-xl shadow-2xl p-6">
        <div className="flex flex-col items-center gap-4">
          <img
            src={user.image || "/default-avatar.png"}
            alt={user.name}
            className="w-32 h-32 rounded-full mask mask-squircle object-cover"
          />
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="btn btn-error mt-4 w-full"
          >
            Logout
          </button>
        </div>

        {/* Optional: Additional Info */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Account Details</h3>
          <div className="p-4 rounded-lg space-y-2">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {/* Add more fields here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
