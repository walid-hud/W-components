"use client";
const Header = () => {
  return (
    <header className="font-outfit text-5xl leading-[1.1] font-bold w:full   lg:w-4/6">
      <h1 className="text-foreground  ">
        Minimal UI components built with React and Tailwind CSS
      </h1>
      <p className=" text-foreground/80 text-lg font-light mt-4 ">
        An open-source collection of reusable UI components for <span
        onMouseEnter={(e)=>{e.target.textContent = "smart"}} onMouseLeave={(e)=>{e.target.textContent = "lazy"}} className=" cursor-pointer underline underline-offset-4 text-foreground">lazy</span> developers like you.
      </p>
    </header>
  )
}

export default Header
