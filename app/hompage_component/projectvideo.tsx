export default function StudySession() {
  return (
    <div className=" mx-auto pt-16 bg-[#fffff0]">
      <div className="relative w-full h-[600px] overflow-hidden">
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
