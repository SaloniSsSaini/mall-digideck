"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav">
      <h2>Mall</h2>

      <div>
        <button onClick={() => scrollTo("hero")}>Home</button>
        <button onClick={() => scrollTo("events")}>Events</button>
        <button onClick={() => scrollTo("roi")}>ROI</button>
      </div>
    </div>
  );
}