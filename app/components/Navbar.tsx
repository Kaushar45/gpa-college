"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className=" text-white shadow-md  ">
      <div className="flex items-center justify-between px-6">
        {/* Left: Logo + College Name */}
        <div className="flex items-center gap-2 py-4">
          <Link href="/">
            <img
              src="https://www.gpaurai.ac.in/gp_aurai_logo.png"
              alt="Government Polytechnic Aurai Logo"
              className="h-16 w-16 rounded-full bg-white object-contain"
            />
          </Link>

          <div className="font-bold text-sm text-left">
            <Link href="/">
              <p>Babu Parasnath Maurya</p>
              <h6>Government Polytechnic Aurai Bhadohi Uttar Pradesh</h6>
            </Link>
          </div>
        </div>

        {/* Right: Supporting Logos */}
        <div className="flex items-center gap-4">
          <img
            src="https://www.gpaurai.ac.in/download.webp"
            alt="Government of India"
            className="h-14 w-14 object-contain rounded-full"
          />
          <img
            src="https://www.gpaurai.ac.in/Aicte.webp"
            alt="AICTE"
            className="h-14 w-14 object-contain"
          />
        </div>
      </div>
    </header>
  );
}
