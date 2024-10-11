import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>100</span>
                <span className='text-slate-700'>Acres</span>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                <CiSearch className='text-slate-700 h-auto w-auto' />
            </form>
            <ul className='flex gap-4'>
             <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                Home
                </li>
            </Link>
            <Link to='/about'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                About
                </li>
            </Link>
            <Link to='/profile'>
               
                <li className=' text-slate-700 hover:underline'> Sign in</li>
            
            </Link>
        </ul>
        </div>
       
    </header>
  )
}