import imgs from '../../assets/profile.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header-content'>
            <div>
            <h1 className='text-4xl font-bold'>knowledge-cafe</h1>
            </div>
            <div>
                <img src={imgs} alt="" />
            </div>
        </div>
    );
};

export default Header;