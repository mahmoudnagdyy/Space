import astraunot from '../imgs/astronaut.png'

function Experience() {
    return (
        <section id='experience' className="experience-container flex flex-row justify-evenly items-center flex-wrap" data-aos="fade-up" data-aos-duration="1000">
            <img src={astraunot} />

            <div className='experience-info flex flex-col justify-center items-start'>
                <h2 className='text-white font-bold text-5xl mt-7'>We have 30 years of experience</h2>
                <p className='text-white mt-10 mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint corrupti minus est voluptas earum.</p>
                <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200' href='#'>join with us</a>
            </div>
        </section>
    );
}

export default Experience;