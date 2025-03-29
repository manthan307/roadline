export default function LandingSection() {
  return (
    <div
      className="grid grid-flow-row items-start min-min-h-screen font-[family-name:var(--font-geist-sans)]"
      id="home"
    >
      <div className="flex flex-row w-full bg text-foreground items-center justify-center min-h-screen">
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
        className="absolute bottom-0 -z-10 hidden md:block"
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
          d="M0,196L30,196C60,196,120,196,180,196C240,196,300,196,360,187.8C420,180,480,163,540,163.3C600,163,660,180,720,204.2C780,229,840,261,900,294C960,327,1020,359,1080,367.5C1140,376,1200,359,1260,302.2C1320,245,1380,147,1440,155.2C1500,163,1560,278,1620,310.3C1680,343,1740,294,1800,261.3C1860,229,1920,212,1980,196C2040,180,2100,163,2160,155.2C2220,147,2280,147,2340,196C2400,245,2460,343,2520,367.5C2580,392,2640,343,2700,302.2C2760,261,2820,229,2880,196C2940,163,3000,131,3060,155.2C3120,180,3180,261,3240,294C3300,327,3360,310,3420,285.8C3480,261,3540,229,3600,196C3660,163,3720,131,3780,155.2C3840,180,3900,261,3960,261.3C4020,261,4080,180,4140,130.7C4200,82,4260,65,4290,57.2L4320,49L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"
        ></path>
      </svg>
    </div>
  );
}
