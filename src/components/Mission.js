import spacechip from '../imgs/Spaceship.png'

function Mission() {
    return (
        <section id='mission' className='mission-container flex flex-row justify-evenly items-center' data-aos="fade-up" data-aos-duration="1000">
            <img src={spacechip} alt='Spacechip' />
            <div className='mission-info flex flex-col justify-center items-start'>
                <h2 className='text-white font-bold text-4xl capitalize'>we have the best space shuttle in <br /> the earth</h2>
                <p className='text-white mt-8 mb-10'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint corrupti minus est voluptas earum.</p>
                <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200' href='#'>join with us</a>
            </div>
        </section>
    );
}

export default Mission;