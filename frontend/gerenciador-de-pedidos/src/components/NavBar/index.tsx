import { ReactComponent as LogoEmp } from '../../assets/img/logo.svg';

import './style.css'

function Navbar() {
    return (
        <header>
            <div className="gp-nav-content">
                <LogoEmp />
                <h6>Gerenciador de Pedidos</h6>
            </div>
        </header>
    );
}

export default Navbar; 