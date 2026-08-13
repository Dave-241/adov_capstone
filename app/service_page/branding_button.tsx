import Link from 'next/link'
const branding_button = () => {
  return (
    <div className='w-full max-w-7xl mx-auto flex items-center justify-center pt-9'>
       <Link href="/contact">
          <button className="bg-[#031F4F] text-white text-sm font-semibold px-8 py-4 rounded-[20px] hover:bg-[#052a68]  transition">Build Your Brand</button>
       </Link>
    </div>
  )
}

export default branding_button