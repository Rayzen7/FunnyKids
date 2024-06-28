import React, { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [activeItem, setActiveItem] = useState("Beranda");

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[100%] h-[9vh] flex
        px-5 lg:flex font-poppins lg:w-[95%] lg:h-[9vh] bg-white lg:rounded-xl mx-auto z-40 lg:translate-y-6 items-center justify-between lg:px-7">
            <h1 className="font-bold text-[20px]">FunnyKids</h1>
            <ul className={`absolute flex-col gap-8 top-0 right-0 bg-white h-[100vh] w-[200px] items-start pl-9 justify-start pt-28 -z-10 
                flex lg:relative lg:flex-row lg:items-center lg:justify-center text-[15px] lg:gap-14 font-semibold text-liNavbar flex-wrap lg:bg-none lg:h-[100%] lg:w-[100%] lg:pl-0 lg:pt-0 lg:z-0 
                ${showMenu ? 'opacity-100 visible transition ease-out duration-300' : 'opacity-0 invisible duration-300'}`}>
                {["Beranda", "Tentang Kami", "Program", "Belajar", "Testimoni"].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.replace(" ", "").toLowerCase()}`}
                            className={`focus:text-black hover:text-black ${
                                activeItem === item ? "text-black" : ""
                            }`}
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="space-x-2 flex">
                <button className="text-masukBtn text-sm">Masuk</button>
                <button className="bg-gradient-btn text-sm text-white px-5 py-1.5 rounded-3xl">Akun</button>
            </div>
            <i className="bx bx-list-ul lg:hidden md:block text-[27px] cursor-pointer" onClick={toggleMenu}></i>
        </div>
    );
};

export default Navbar;
