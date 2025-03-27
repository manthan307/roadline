import Nav from "../nav";

export default function LandingSection() {
  return (
    <div className="grid grid-flow-row items-start min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <div className="flex flex-row w-full bg-background text-foreground items-center justify-center h-screen">
        <div className="text-wrap text-start md:p-10 p-5 z-20">
          <h1 className="text-6xl font-bold">Transport</h1>
          <h1 className="text-6xl font-bold flex flex-wrap">
            <span className="bg-accent text-background rounded-2xl my-2 p-1 mr-1">
              Anything
            </span>
            ,
            <span className="bg-white text-accent rounded-2xl my-2 p-1 ml-1">
              Anywhere
            </span>
          </h1>
          <h1 className="text-6xl font-bold">in Gujarat.</h1>
          <div>
            <button className="bg-accent text-background rounded-lg p-2 mt-5">
              Pricing Calculator
            </button>
            <button className="bg-white text-accent rounded-lg p-2 mt-5 ml-5">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 490"
        version="1.1"
        className="absolute bottom-0 z-10 hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(185, 178, 138, 1)" offset="0%"></stop>
            <stop stopColor="rgba(235, 229, 194, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,392L48,343C96,294,192,196,288,196C384,196,480,294,576,294C672,294,768,196,864,171.5C960,147,1056,196,1152,187.8C1248,180,1344,114,1440,106.2C1536,98,1632,147,1728,155.2C1824,163,1920,131,2016,114.3C2112,98,2208,98,2304,138.8C2400,180,2496,261,2592,302.2C2688,343,2784,343,2880,343C2976,343,3072,343,3168,343C3264,343,3360,343,3456,326.7C3552,310,3648,278,3744,277.7C3840,278,3936,310,4032,334.8C4128,359,4224,376,4320,383.8C4416,392,4512,392,4608,326.7C4704,261,4800,131,4896,114.3C4992,98,5088,196,5184,253.2C5280,310,5376,327,5472,302.2C5568,278,5664,212,5760,163.3C5856,114,5952,82,6048,122.5C6144,163,6240,278,6336,326.7C6432,376,6528,359,6624,367.5C6720,376,6816,408,6864,424.7L6912,441L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"
        ></path>
      </svg>
    </div>
  );
}
