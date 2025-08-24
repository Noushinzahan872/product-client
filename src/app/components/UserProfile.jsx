"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

export default function UserProfile({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!session) return null;

  const handleLogout = () => {
    signOut({ callbackUrl: "/" }); // Redirect to home after logout
  };

  return (
    <>
      {/* Profile Image */}
      <img
        src={session.user.image || "/default-avatar.png"}
        alt={session.user.name || "User"}
        className="md:w-10 md:h-10 w-24 h-24 rounded-full mask mask-squircle object-cover cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {/* Modal */}
      {isOpen && (
        <>
          <input
            type="checkbox"
            id="user-profile-modal"
            className="modal-toggle"
            checked={isOpen}
            readOnly
          />
          <div className="modal modal-middle">
            <div className="modal-box relative">
              <label
                htmlFor="user-profile-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </label>

              <div className="flex flex-col items-center gap-4">
                <img
                  src={session.user.image || "/default-avatar.png"}
                  alt={session.user.name}
                  className="w-32 h-32 rounded-full mask mask-squircle object-cover"
                />
                <h2 className="text-xl font-bold">{session.user.name}</h2>
                <p className="text-gray-500">{session.user.email}</p>

                <button
                  onClick={handleLogout}
                  className="btn btn-outline rounded-2xl mt-2 w-full"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
