import Truck from "@/public/truck.svg";
import HandShake from "@/public/handshake.svg";
import Update from "@/public/update.svg";

export default function About() {
  const about = [
    {
      title: "Fast Delivery",
      description: "Deliver your goods in record time.",
      icon: Truck,
    },
    {
      title: "Trust",
      description: "Trust of many customers for 5 years.",
      icon: HandShake,
    },
    {
      title: "Live Update",
      description: "Get live updates on your delivery.",
      icon: Update,
    },
  ];

  return (
    <div
      id="about"
      className="py-20 flex flex-col items-center justify-center bg-gray-50 px-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {about.map((About, index) => (
          <div
            key={index}
            className="group p-6 bg-white rounded-4xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className=" mb-4 flex justify-center items-center">
              <About.icon className="w-16 h-auto" />
            </div>
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 group-hover:text-tertiary transition-colors duration-300">
              {About.title}
            </h1>
            <p className="text-gray-600 text-center">{About.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
