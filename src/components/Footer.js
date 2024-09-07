import logo from '../imgs/logo.png'


import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


function Footer() {
    return (
        <section className="footer-container flex flex-col flex-wrap justify-evenly items-center bg-black p-10">

            <div className='flex flex-row flex-wrap justify-evenly items-start w-full'>
                <div className="left-footer flex flex-col flex-wrap items-start justify-evenly">

                    <div className="logo-container flex flex-row items-center mb-8">
                        <img src={logo} alt='Logo' className='w-12 mr-2' />
                        <h1 className='capitalize font-bold text-lg logo-head cursor-default'>mars</h1>
                    </div>

                    <p className='text-white mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint corrupti minus est voluptas earum.</p>

                    <div className="social-links flex flex-row flex-wrap ">
                        <a className='text-white text-2xl mr-5 duration-300' href=''><IoLogoInstagram /></a>
                        <a className='text-white text-2xl mr-5 duration-300' href=''><FaFacebookF /></a>
                        <a className='text-white text-2xl mr-5 duration-300' href=''><FaLinkedinIn /></a>
                        <a className='text-white text-2xl mr-5 duration-300' href=''><RiTwitterXLine /></a>
                    </div>

                </div>


                <div className='middle-footer flex flex-col flex-wrap items-start justify-evenly'>
                    <h3 className='capitalize text-2xl font-bold mb-4'>quick links</h3>
                    <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 duration-300' href='#'>home</a>
                    <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 duration-300' href='#flight'>flight list</a>
                    <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 duration-300' href='#mission'>mission history</a>
                    <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 duration-300' href='#shop'>shop</a>
                    <a className='text-white capitalize pb-3 pt-3 font-bold mr-12 duration-300' href='#experience'>experience</a>
                </div>

                <div className='last-footer flex flex-col flex-wrap items-start justify-evenly'>
                    <h3 className='capitalize text-2xl font-bold mb-6'>contact us</h3>
                    <a target='_blank' className='text-white flex flex-row duration-300 mb-2' href='https://wa.link/hkgo15'><FaWhatsapp className='whats-icon text-2xl mr-2' /> 01069255958</a>
                    <a target='_blank' className='text-white flex flex-row duration-300' href='mailto:mahmoudnagdy65@gmail.com'><BiLogoGmail className='whats-icon text-2xl mr-2' /> mahmoudnagdy65@gmail.com</a>
                </div>
            </div>

            <div className='developed flex flex-row justify-evenly flex-wrap items-center w-full'>
                <p className='text-white'>developed and powered by Mahmoud Nagdy</p>
                <a className='top text-white text-3xl p-2 rounded-full' href='#'><MdOutlineKeyboardArrowUp /></a>
            </div>

        </section>
    );
}

export default Footer;