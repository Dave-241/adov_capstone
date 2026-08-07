export default function StudySession() {
  return (
    <div className=" mx-auto py-16">
      <div className="relative w-full h-[380px] rounded-2xl overflow-hidden">
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
