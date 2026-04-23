"use client";

export default function Hero() {
  const handleMove = (e: any) => {
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;

    const el = document.querySelector(".hero-bg") as HTMLElement;
    if (el) {
      el.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    }
  };

  return (
    <section className="hero" onMouseMove={handleMove}>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-bg"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-shopping-mall-people-walking-5176/1080p.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-content">
        <h1>Future of Retail</h1>
        <p>Where brands meet millions</p>
        <button className="btn">Explore</button>
      </div>

    </section>
  );
}