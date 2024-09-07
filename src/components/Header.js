import logo from '../imgs/logo.png'
import '../css/header.css'

import { PiListBold } from "react-icons/pi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from 'react';

function Header() {

    const [listshow, setListShow] = useState(false);

    const [x, setX] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setX(true);
        }
        else {
            setX(false);
        }
    })

    return (
        <header className={x ? "header-big bg-transparent w-full h-28 flex flex-row justify-around items-center head-scroll z-50" : "header-big bg-transparent w-full h-28 flex flex-row justify-around items-center z-50"}>
            <div className="logo-container flex flex-row items-center">
                <img src={logo} alt='Logo' className='w-12 mr-2' />
                <h1 className='capitalize font-bold text-lg logo-head cursor-default'>mars</h1>
            </div>

            <button className='list-icon text-white text-3xl w-fit hidden' onClick={() => setListShow(true)}><PiListBold /></button>

            <div className={listshow ? 'links-list flex flex-col fixed top-0 right-0 h-full bg-black showList z-50' : 'links-list flex flex-col fixed top-0 right-0 h-full bg-black hideList z-50'}>
                <button className='list-icon text-white text-3xl ml-3 mt-11 mb-5 w-fit' onClick={() => setListShow(false)}><RiCloseLargeFill /></button>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 p-2' href='#'>home</a>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 p-2' href='#flight'>flight list</a>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 p-2' href='#mission'>mission history</a>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 p-2' href='#shop'>shop</a>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 p-2' href='#experience'>experience</a>
            </div>

            <div className='header-links flex flex-row'>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12' href='#'>home</a>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12' href='#flight'>flight list</a>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12' href='#mission'>mission history</a>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12' href='#shop'>shop</a>
                <a className='text-white capitalize pb-3 pt-3 font-bold mr-12' href='#experience'>experience</a>
            </div>
        </header >
    );
}

export default Header;