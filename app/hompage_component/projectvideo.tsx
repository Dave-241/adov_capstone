export default function StudySession() {
  return (
    <div className=" mx-auto md:pt-16 pt-4 bg-[#fffff0]">
      <div className="relative w-full aspect-square md:aspect-[16/10] overflow-hidden">
        <video
          src="/session.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
