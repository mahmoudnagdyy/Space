import '../css/home.css'
import lightmoon from '../imgs/light-moon.png'
import hero from '../imgs/hero.png'

import Flight from './Flight'
import Mission from './Mission'
import Shop from './Shop'
import Experience from './Experience'

function Home() {
    return (
        <div className='big-container'>
            <section className="home-container flex flex-row justify-center items-center">
                <div className='flex flex-col justify-start items-start'>
                    <div className='flex flex-row justify-center items-start'>
                        <h1 className='text-white capitalize font-bold text-4xl mb-6'><span>astronautics:</span> humanity's <br />getway to the stars</h1>
                        <img className='w-14 moon' src={lightmoon} alt='lightmoon' />
                    </div>
                    <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200' href='#'>join with us</a>
                </div>

                <img className='hero w-96' src={hero} alt Hero />
            </section>

            <Flight />
            <Mission />
            <Shop />
            <Experience />

        </div>

    );
}

export default Home;