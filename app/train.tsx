export default function Train() {
  const modules = [
    { num: "01", label: "Frontend development", color: "bg-yellow-400" },
    { num: "02", label: "Backend development", color: "bg-teal-400" },
    { num: "03", label: "UI/UX design", color: "bg-yellow-400" },
    { num: "04", label: "Branding", color: "bg-orange-400" },
  ];
  return (
    <section className="bg-[#fdfbe9] py-16 px-6">
      <div className="max-w-7xl mx-auto bg-[#031F4F] rounded-3xl p-10 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: copy + CTAs */}
        <div>
          <p className="text-sky-400 text-xs font-semibold #10A4EA font-inter tracking-wide uppercase mb-4">
            Train with Adov Academy
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            Learn to build what we build.
          </h2>
          <p className="text-slate-300 text-sm mb-8 max-w-sm">
            A five-week, hands-on program covering frontend, backend, UI/UX and
            branding. Cohort 1 is live now.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium px-6 py-3 rounded-full transition">
              Register now
            </button>
            <button className="border border-slate-500 hover:border-slate-300 text-white text-sm font-medium px-6 py-3 rounded-full transition">
              Log in
            </button>
          </div>
        </div>

        {/* Right: module list */}
        <div className="flex flex-col gap-3">
          {modules.map((m) => (
            <div
              key={m.num}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-5 py-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-xs font-medium">
                  {m.num}
                </span>
                <span className="text-white text-sm font-medium">
                  {m.label}
                </span>
              </div>
              <span className={`w-2 h-2 rounded-full ${m.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
