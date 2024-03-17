import { Link } from 'react-router-dom';
import errorImg from '../../assets/error.jpg'
import { TiArrowBackOutline } from "react-icons/ti";

const ErrorPage = () => {
    return (
        <div className='lg:flex items-center justify-around my-20'>
            <img src={errorImg} alt="" />
            <div className="flex gap-4 justify-center mt-16 items-center">
                <Link to="/"><button className="rounded-sm w-40 h-full hover:scale-110  bg-gradient-to-r from-amber-600 to-amber-950 hover:bg-[#403F3F] text-white font-semibold hover:text-white py-2  border-2 border-none hover:border-transparent  transition duration-300 ease-in-out">Go Back to Home</button></Link> <TiArrowBackOutline size={40}></TiArrowBackOutline>
            </div>
        </div>
    );
};

export default ErrorPage;