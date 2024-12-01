import custormerOneImg from '../assets/customer1.png';
import custormerOneIcon from '../assets/customer-2-icon.png'
import custormerTwoIcon from '../assets/customer-3-icon.png'
import custormerThreeIcon from '../assets/customer-4-icon.png'
import custormerFourIcon from '../assets/customer-5-icon.png'


export default function Reviews() {

    const customersIcons = [custormerOneIcon,custormerTwoIcon,custormerThreeIcon,custormerFourIcon]
  return (
    <div className='mt-20 mb-20 flex  gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <img className='hidden md:block' src={custormerOneImg} alt="Customer image" />
        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold mb-8'>What People are Saying?</h1>
            <div className='bg-[#F9F7EA]  p-8 flex flex-col gap-5'>
                <p className='w-[60%] text-lg font-bold italic '>
                Bright UK has been one of the critical keys to Salesforce.com's leadership in cloud computing and its growth into an over $6 billion dollar company.
                </p>
                <div className='flex justify-between'>
                <div className='flex  gap-3'>
                    <img src={custormerOneIcon} alt="customer Icon" />
                    <div>
                        <h3 className='font-bold'>Niyi Adesina</h3>
                        <p className='text-gray-400 text-'>CEO of FifthGear Plus</p>
                    </div>
                </div>
            <h2 className='text-5xl self-end'>
            &rdquo;
            </h2>
                </div>
            </div>
            <div className=' hidden md:flex justify-between'>
                <div>
                    <button className='text-gray-400 text-6xl'>&larr; 
                    </button>
                    <button className='text-6xl'>&rarr;</button>
                </div>

                <div className='flex gap-3 '>
                    {customersIcons.map((customerIcon)=>{
                        return <img className='w-10 h-10' key={customerIcon} src={customerIcon} alt="customer Icon" />
                    })}

                </div>
            </div>
        </div>
    </div>
  )
}
