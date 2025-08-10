"use client";
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef } from "react";
import Link from "next/link";
function detectCtrlK() {
    function handleKeyDown(e) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();

        }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
}
export default function MiniSearchBar() {
    const searchRef = useRef()
    useEffect(detectCtrlK, [])
    return (
        <>
            <Link href={"/search"} ref={searchRef} className="hidden md:flex relative outline-1  items-center justify-between focus-within:outline-2 focus-within:outline-foreground/50 outline-muted text-sm overflow-hidden rounded-full py-2 px-2 gap-x-4 whitespace-nowrap bg-background *:text-foreground  lg:w-3/5">
                <div className="flex gap-x-2 ">
                    <span className="text-2xl ">
                        <CiSearch />
                    </span>
                    <input type="text" placeholder="Quick search..." className="placeholder:text-muted-foreground/70 outline-none" />
                </div>
                <div className="bg-muted px-1 rounded-[5px]">
                    <kbd style={{ opacity: 0.5, fontSize: "var(--text-sm)" }}>Ctrl+K</kbd>
                </div>
            </Link>
        </>
    )
}