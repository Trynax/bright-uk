import speakerOneImg from '../assets/speaker(1).png';
import speakerTwoImg from '../assets/speaker(2).png';
import speakerThreeImg from '../assets/speaker(3).png';
import speakerFourImg from '../assets/speaker(4).png';

export default function Speakers() {
  return (
    <div className="mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative group">
        <img src={speakerOneImg} alt="Speaker" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <p className="absolute inset-0 flex items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          Lorem ipsum dolor sit amet consectetur. Ac praesent mauris massa urna congue. Suspendisse nulla non nulla accumsan semper consectetur. Elit scelerisque fermentum ut sapien. Donec blandit tristique sed ornare sed tristique fringilla nunc vivamus.
        </p>
        <div className="bg-yellow-400 p-3 text-center text-white text-xl">
          <p>Speaker</p>
        </div>
      </div>

  
      <div className="relative group">
        <img src={speakerTwoImg} alt="Speaker" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <p className="absolute inset-0 flex items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          Lorem ipsum dolor sit amet consectetur. Ac praesent mauris massa urna congue. Suspendisse nulla non nulla accumsan semper consectetur. Elit scelerisque fermentum ut sapien. Donec blandit tristique sed ornare sed tristique fringilla nunc vivamus.
        </p>
        <div className="bg-yellow-400 p-3 text-center text-white text-xl">
          <p>Speaker</p>
        </div>
      </div>

 
      <div className="relative group">
        <img src={speakerThreeImg} alt="Speaker" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <p className="absolute inset-0 flex items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          Lorem ipsum dolor sit amet consectetur. Ac praesent mauris massa urna congue. Suspendisse nulla non nulla accumsan semper consectetur. Elit scelerisque fermentum ut sapien. Donec blandit tristique sed ornare sed tristique fringilla nunc vivamus.
        </p>
        <div className="bg-yellow-400 p-3 text-center text-white text-xl">
          <p>Speaker</p>
        </div>
      </div>

    
      <div className="relative group">
        <img src={speakerFourImg} alt="Speaker" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <p className="absolute inset-0 flex items-center justify-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          Lorem ipsum dolor sit amet consectetur. Ac praesent mauris massa urna congue. Suspendisse nulla non nulla accumsan semper consectetur. Elit scelerisque fermentum ut sapien. Donec blandit tristique sed ornare sed tristique fringilla nunc vivamus.
        </p>
        <div className="bg-yellow-400 p-3 text-center text-white text-xl">
          <p>Speaker</p>
        </div>
      </div>
    </div>
  );
}
