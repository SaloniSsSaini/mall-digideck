"use client";

import { useUserType } from "@/hooks/useUserType";

export default function Intent() {
  const setUserType = useUserType((s) => s.setUserType);

  return (
    <section className="h-screen flex flex-col items-center justify-center gap-6 bg-black text-white">
      <h2 className="text-3xl">What are you looking for?</h2>

      <button
        onClick={() => setUserType("retail")}
        className="px-4 py-2 border"
      >
        Open a Store
      </button>

      <button
        onClick={() => setUserType("events")}
        className="px-4 py-2 border"
      >
        Host an Event
      </button>

      <button
        onClick={() => setUserType("sponsor")}
        className="px-4 py-2 border"
      >
        Brand Partnership
      </button>
    </section>
  );
}