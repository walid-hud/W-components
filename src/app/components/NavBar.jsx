import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import Link from "next/link";
import ThemeSwitcher from './ThemeSwitcher';
import Divider from './Divider';
import MiniSearchBar from './MiniSearchBar';
import { CiSearch } from 'react-icons/ci';
export default () => {
    return (
        <>
            <nav className='custom-border relative  text-foreground flex px-4 lg:px-12 py-4 border-muted border-x-[1px] items-baseline gap-x-6 lg:gap-x-12'>
                <Link role="logo" aria-label="W components logo" href={"/"}
                    className=" text-foreground text-xl lg:text-2xl flex gap-x-1 items-baseline font-inter">
                    <span className=' text-3xl font-serif mr-[-8px]'>W</span>
                    <span className='font-thin -tracking-tighter  '>_components</span>
                </Link>

                <MiniSearchBar />
                <div role="external links" className=' flex gap-x-6 ml-auto text-xl items-baseline justify-baseline    **:w-6 **:h-5 '>
                    <Link href={"/search"}  className="md:hidden  scale-120 ">
                        <CiSearch className="" />
                    </Link>
                    <a href="">
                        <FaGithub className='basic-hover' />
                    </a>
                    <a href="https://linkedin.com/in/walid101" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className='basic-hover' />
                    </a>
                    <ThemeSwitcher />
                </div>
            </nav>
            <Divider />
        </>
    );
}
