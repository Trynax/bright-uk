import image from '../assets/Meetbrightimg.png'

export default function MeetBright() {
  return (
    <div className='flex flex-col md:flex-row  bg-[#282309]'>
     <img 
  src={image} 
  alt="" 
  className='h-[539px] w-full min-w-[364px] min-h-[539px] lg:w-auto lg:h-auto' 
/>

        <div className='bg-[#282309] text-white flex flex-col py-10 pl-5  pr-5 lg:pr-28'>
            <h2 className='text-2xl font-bold mb-5'>Meet Bright UK</h2>
            <p className='mb-12'>Bright UK is the voice of the next generation and a trusted guide for future-ready leaders.</p>
            <p className='mb-12'>Often described as an old sage in a young body, he captivates audiences with mind-shifting insights that command the attention of even the wisest leaders.</p>
            <p className='mb-12'>As a sought-after keynote speaker, Bright brings expertise across essential areas that influence behaviour and drive positive change. From Leadership and Personal Development to Business, Career Advancement, and National Development, his speeches are designed to elevate the human condition, empower individuals, raise sound leaders, shape culture, and democratize prosperity.</p>
            <p className='mb-12'>Bright has an exceptional gift for extracting wisdom from everyday life, weaving them into actionable frameworks and contemporary stories that resonate with diverse audiences. His clear, relatable communication style appeals to both seasoned professionals and aspiring leaders alike. He has been featured on prominent media platforms, inspiring a range of audiences—from entrepreneurs and business leaders to faith-based communities and academicians.</p>
            <p className='mb-12'>With a growing demand for his engaging presentations, Bright UK speaks regularly at conferences, seminars, and workshops across the country, leaving a lasting impact wherever he speaks.</p>
            <div className='mb-12 flex gap-3'>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <a className='text-yellow-400 border-b-2 border-yellow-400 inline-block max-w-max' href="#">See More</a>

        </div>
    </div>
  )
}
