"use client";

import { BsMoonStars , BsSun } from "react-icons/bs";
import { useState } from 'react';
export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        if(theme === 'dark') {
            document.getElementById("gradient-bg").style.display = "none"
            document.body.classList.remove('dark');
            setTheme('light');
        } else {
            document.getElementById("gradient-bg").style.display = "block" //had to do this because the gradient background looks ASS in the light mode  
            document.body.classList.add('dark');
            setTheme('dark');
        }
    };

    return (
        <button onClick={toggleTheme} className="text-foreground cursor-pointer">
            {theme === 'light' ? <BsMoonStars className='basic-hover' /> : <BsSun className='basic-hover' />}
        </button>
    );
}