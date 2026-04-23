export default function CTAButton({ text = "Book Now" }: { text?: string }) {
  return (
    <button className="px-6 py-3 bg-white text-black rounded hover:scale-105 transition">
      {text}
    </button>
  );
}