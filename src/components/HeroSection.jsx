import heroimg from '../assets/hero.png';

export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center h-[70vh] flex items-center justify-center text-center text-white relative"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold">
         <span className='text-yellow-400'>CHANGE YOUR THINKING</span>  <br /> TO CHANGE YOUR LIFE
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          You are not disadvantaged as you think, you are only <br /> disadvantaged by your thinking.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded">
          Book Bright UK
        </button>
      </div>
    </section>
  );
}

