import { Link } from 'react-router-dom';
import ButtonLeaf from '../../components/ButtonLeaf';

function Introduce() {
    return (
        <div className='relative'>

            <div className="grid  grid-cols-2  bg-[#f3fbfd] w-full">
                <div className='pt-32 pl-[5em] pr-4 col-span-1'>
                    <h1 className='text-6xl font-bold text-sky-500'>
                        About - SLST
                    </h1>
                    <h3 className='text-3xl font-bold my-3'>
                        Mục tiêu của chúng tôi là tạo ra giá trị cho cộng đồng
                    </h3>
                    <p className='text-lg opacity-80 font-normal'>
                        Tôi không thể kiểm soát cuộc sống. Tuy nhiên tôi có thể kiểm soát cách tôi phản ứng lại nó như thế nào.
                        Tâm trạng, suy nghĩ và hành động là những thứ nằm trong vòng kiểm soát của tôi mà không phải một ai
                        khác.
                    </p>
                    <Link to='/thiThu' className='flex m-auto mt-11'>
                        <ButtonLeaf title='Get started' />
                    </Link>
                </div>

                <img src='./imgAbout/bg_intro.jpg'
                    className="px-28 py-6 col-span-1" />
            </div>

            <img src='./imgAbout/bgBot.jpg'
                className="block w-full" />
        </div>
    );
}

export default Introduce