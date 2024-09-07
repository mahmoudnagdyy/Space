import helmet from '../imgs/helmet.png'
import space_suit from '../imgs/space-suit.jpg'
import lunar from '../imgs/moon.png'
import mars_rock from '../imgs/mars-rock.jpg'

function Shop() {
    return (

        <section id='shop' className="shop-container flex flex-col justify-evenly items-center" data-aos="fade-up" data-aos-duration="1000">
            <div className='flex flex-row justify-evenly items-center flex-wrap w-full'>
                <div className="product flex flex-col justify-center items-start mb-20">
                    <img src={helmet} alt='Helmet' />
                    <h2 className='text-white font-bold capitalize text-3xl'>helmet</h2>
                    <h3 className='font-bold text-xl mt-2'>$2345</h3>
                    <p className='text-white mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint corrupti minus est voluptas earum.</p>
                    <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200 mt-5' href='#'>shop now</a>
                </div>

                <div className="product flex flex-col justify-center items-start mb-20">
                    <img src={space_suit} alt='space_suit' />
                    <h2 className='text-white font-bold capitalize text-3xl'>space suit</h2>
                    <h3 className='font-bold text-xl mt-2'>$234345</h3>
                    <p className='text-white mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint corrupti minus est voluptas earum.</p>
                    <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200 mt-5' href='#'>shop now</a>
                </div>

                <div className="product flex flex-col justify-center items-start mb-20">
                    <img src={lunar} alt='lunar' />
                    <h2 className='text-white font-bold capitalize text-3xl'>lunar soil</h2>
                    <h3 className='font-bold text-xl mt-2'>$212345</h3>
                    <p className='text-white mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint corrupti minus est voluptas earum.</p>
                    <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200 mt-5' href='#'>shop now</a>

                </div>

                <div className="product flex flex-col justify-center items-start mb-20">
                    <img src={mars_rock} alt='mars_rock' />
                    <h2 className='text-white font-bold capitalize text-3xl'>mars rock</h2>
                    <h3 className='font-bold text-xl mt-2'>$23345</h3>
                    <p className='text-white mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint corrupti minus est voluptas earum.</p>
                    <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200 mt-5' href='#'>shop now</a>

                </div>
            </div>
            <a className='font-bold no-underline capitalize pt-3 pb-3 pl-4 pr-4 rounded-lg hover:scale-110 duration-200 mt-5' href='#'>more products</a>
        </section>
    );
}

export default Shop;