import creatingImg from '../assets/creating.png'
import mindshiftImg from '../assets/mindshift.png'
import sixthImg from '../assets/sixth-sense.png'
import wealthImg from '../assets/wealth.png'

export default function BookCards() {
    const books = [
        {
          title: "Creating Your Own Luck In A Lockdown: Practical Insights To Profit From The Global Downtime",
          description:
            "What do you do when the music fades and your world comes to a halt? You do something different! In ancient Hebrew chronicles, Joseph experienced several lockdowns – in the pit as a rejected sibling; in Potiphar’s house as a second-hand slave; and in...",
          price: "#7500",
          image: creatingImg, // Replace with your book image URLs
        },
        {
          title: "Mind Shift: The Ultimate Breakthrough For Success And Leadership",
          description:
            "At a time when we are constantly being asked to retrain and reinvent ourselves to adapt to new technology and changing industries, this book shows us how we can uncover and develop talents we didn’t realize we had no matter what our age or background.",
          price: "#0",
          image: mindshiftImg,
        },
        {
          title: "Sixth Sense Leadership - Practical Insights For Leading",
          description:
            "What differentiates extraordinary leaders from ordinary ones? The simple answer is UNDERSTANDING! Great leaders approach life with a superior operating system that helps them to see differently, respond better, and achieve more....",
          price: "#7500",
          image: sixthImg,
        },
        {
            title:"Wealth Without Capital, Capital Beyond Money: The Sixth Sense Guide To Creating Wealth Out Of Nothing",
            description:"Since its release in July 2020, the Wealth Without Capital Book has revolutionized the way people think about wealth and how it ....",
            price:"#7500",
            image:wealthImg,
        },
      ];    
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className=" text-3xl font-bold text-center mb-8">Books by Bright UK</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
            books.map((book, i)=>(
                <div key={i} className='border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col'>
                    <img src={book.image} alt={book.title} className='h-48 w-48 self-center object-cover'/>
                    <div className='p-4 flex flex-col flex-grow'>
                        <h3 className='font-bold text-lg mb-2'>{book.title}</h3>
                        <p className='text-sm text-gray-700 flex-grow'>{book.description}</p>
                        <p className='text-lg font-bold mt-2'>{book.price}</p>
                        <div className='mt-4 flex justify-between space-x-2'>
                            <button className='bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500'>Add to cart</button>
                            <button className='bg-gray-100 text-gray-800 py-2 px-4 rounded hover:bg-gray-200'>View More</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
