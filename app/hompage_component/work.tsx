import Link from "next/link";

const workItems = [
  { title: "Anzza", image: "/anzza_1.png", url: "https://snackanzza.com/" },
  {
    title: "Pawp Water",
    image: "/pawpwater_2.png",
    url: "https://www.pawpwater.com/",
  },
  {
    title: "Brala's Best",
    image: "/bralla_3.png",
    url: "https://www.bralasbest.com/",
  },
];

export default function GlimpseOfWork() {
  return (
    <div className="max-w-6xl mx-auto pt-16 pb-10 bg-[#fffff0]">
      <h2 className="text-3xl font-semibold text-slate-900 mb-8 text-center">
        A glimpse of the work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5">
        <ImageCard
          item={workItems[0]}
          className="aspect-[3/2] md:aspect-[3/4.1] sm:row-span-2"
        />
        <ImageCard item={workItems[1]} className="aspect-[3/2] " />
        <ImageCard item={workItems[2]} className="aspect-[3/2]" />
      </div>
    </div>
  );
}

function ImageCard({ item, className = "" }) {
  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative rounded-2xl overflow-hidden block group ${className}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
      <span className="absolute bottom-4 left-4 text-white font-semibold text-lg">
        {item.title}
      </span>
    </Link>
  );
}
