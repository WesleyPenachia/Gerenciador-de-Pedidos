import { ReactComponent as LogoEmp } from '../../assets/img/logo.svg';

import './style.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <LogoEmp />
                </div>
            </nav>
        </header>
    );
}

export default Navbar; 