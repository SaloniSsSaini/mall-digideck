export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute w-full h-full object-cover -z-10"
    >
      <source
        src="https://www.w3schools.com/howto/rain.mp4"
        type="video/mp4"
      />
    </video>
  );
}