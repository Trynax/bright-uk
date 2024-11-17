import JCILOGO from "../assets/JCI.png"
import GALAXYLOGO from "../assets/Galaxy.png"
import MANDELALOGO from "../assets/mandela.png"

export default function Partners() {
  return (
    <div className="flex justify-between md:justify-around lg:justify-center md:space-x-24 py-4 px-4">
        <img src={MANDELALOGO} alt="mandela" className="h-[42px] w-[102px]" />
        <img src={JCILOGO} alt="JCI" className="h-[42px] w-[102px]"  />
        <img src={GALAXYLOGO} alt="Galaxy Tv" className="h-[42px] w-[102px]"  />
    </div>
  )
}
