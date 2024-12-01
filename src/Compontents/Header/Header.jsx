import imgs from '../../assets/profile.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header-content border-b-2 pb-3 items-center'>
            <div>
            <h1 className='text-2xl md:text-4xl font-bold text-gray-700'>knowledge-cafe</h1>
            </div>
            <div>
                <img src={imgs} alt="" />
            </div>
        </div>
    );
};

export default Header;