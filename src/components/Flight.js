import earth from '../imgs/earthPlanet.png'

import neptune from '../imgs/neptune.png'
import mars from '../imgs/mars.png'
import mercury from '../imgs/mercury.png'
import uranus from '../imgs/uranus.png'

function Flight() {
    return (
        <section id='flight' className="flight-container">
            <img className='earth' src={earth} alt='Earth' data-aos="fade-up" data-aos-duration="1000" />
            <div className='plants-container flex flex-row justify-center flex-wrap'>
                <div className='plant flex flex-col justify-center items-center margin1 mr-4' data-aos="fade-up" data-aos-duration="1000">
                    <img src={neptune} alt='neptune' />
                    <h2 className='capitalize font-bold text-2xl'>neptune</h2>
                    <p className='text-white text-center'>  Lorem ipsum dolor, sit amet  distinctio optio! Tenetur .</p>
                    <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200' href='#'>join with us</a>
                </div>

                <div className='plant flex flex-col justify-center items-center margin2 mr-4' data-aos="fade-up" data-aos-duration="1000">
                    <img src={mars} alt='neptune' />
                    <h2 className='capitalize font-bold text-2xl'>mars</h2>
                    <p className='text-white text-center'>  Lorem ipsum dolor, sit amet  distinctio optio! Tenetur .</p>
                    <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200' href='#'>join with us</a>
                </div>

                <div className='plant flex flex-col justify-center items-center margin3 mr-4' data-aos="fade-up" data-aos-duration="1000">
                    <img src={mercury} alt='neptune' />
                    <h2 className='capitalize font-bold text-2xl'>mercury</h2>
                    <p className='text-white text-center'>  Lorem ipsum dolor, sit amet  distinctio optio! Tenetur .</p>
                    <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200' href='#'>join with us</a>
                </div>

                <div className='plant flex flex-col justify-center items-center margin4' data-aos="fade-up" data-aos-duration="1000">
                    <img src={uranus} alt='neptune' />
                    <h2 className='capitalize font-bold text-2xl'>uranus</h2>
                    <p className='text-white text-center'>  Lorem ipsum dolor, sit amet  distinctio optio! Tenetur .</p>
                    <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200' href='#'>join with us</a>
                </div>
            </div>
        </section>
    );
}

export default Flight;