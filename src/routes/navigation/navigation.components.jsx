import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as ArrowLogo } from '../../asset/back-arrow-svgrepo-com.svg'
import './navigation.style.css';


const Navigation = () => {
    return (
        <Fragment>

            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <ArrowLogo/>
                </Link>
                
            </div>
            <Outlet />
        </Fragment>

    );
};

export default Navigation;