export default function LandingSection() {
  return (
    <div
      className="relative grid grid-flow-row items-start min-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden"
      id="home"
    >
      <div className="flex flex-col md:flex-row w-full bg text-foreground items-center justify-center min-h-screen px-4 md:px-10">
        <div className="text-wrap text-start z-20 max-w-3xl mx-auto md:mx-0">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight md:leading-normal break-words">
            Transport{" "}
            <span className="inline-block bg-accent text-background rounded-2xl px-3 py-1 my-1">
              Anything
            </span>
            ,{" "}
            <span className="inline-block bg-white text-accent rounded-2xl px-3 py-1 my-1">
              Anywhere
            </span>{" "}
            <span className="block">in Gujarat.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            Reliable and fast transportation services tailored to your needs.
            Get started today!
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center bg-accent text-background font-medium text-lg rounded-lg px-6 py-3 shadow-md hover:bg-white hover:text-accent hover:border hover:border-accent transition duration-200"
            >
              Pricing Calculator
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center bg-white text-accent font-medium text-lg rounded-lg px-6 py-3 shadow-md border border-accent hover:bg-accent hover:text-white transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Wave SVG - Show on all screens with adjusted size */}
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 320"
        version="1.1"
        className="absolute bottom-0 -z-10 w-full h-[40vh] min-w-[1000px]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(185, 178, 138, 0.95)" offset="0%"></stop>
            <stop stopColor="rgba(235, 229, 194, 0.8)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{
            transform: "translate(0, 0px)",
            opacity: 0.9,
            filter: "drop-shadow(0 -10px 10px rgba(0,0,0,0.1))",
          }}
          fill="url(#sw-gradient-0)"
          d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1440,181.3C1536,171,1632,181,1728,192C1824,203,1920,213,2016,202.7C2112,192,2208,160,2304,138.7C2400,117,2496,107,2592,101.3C2688,96,2784,96,2880,85.3C2976,75,3072,53,3168,69.3C3264,85,3360,139,3456,138.7C3552,139,3648,85,3744,69.3C3840,53,3936,75,4032,106.7C4128,139,4224,181,4320,197.3C4416,213,4512,203,4608,170.7C4704,139,4800,85,4896,74.7C4992,64,5088,96,5184,122.7C5280,149,5376,171,5472,165.3C5568,160,5664,128,5760,133.3C5856,139,5952,181,6048,197.3C6144,213,6240,203,6336,170.7C6432,139,6528,85,6624,74.7C6720,64,6816,96,6864,112L6912,128L6912,320L6864,320C6816,320,6720,320,6624,320C6528,320,6432,320,6336,320C6240,320,6144,320,6048,320C5952,320,5856,320,5760,320C5664,320,5568,320,5472,320C5376,320,5280,320,5184,320C5088,320,4992,320,4896,320C4800,320,4704,320,4608,320C4512,320,4416,320,4320,320C4224,320,4128,320,4032,320C3936,320,3840,320,3744,320C3648,320,3552,320,3456,320C3360,320,3264,320,3168,320C3072,320,2976,320,2880,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
