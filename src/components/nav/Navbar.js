import './Navbar.css';

const Navbar = ({sidebarOpen, openSidebar}) => {
    return(
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <img  src="https://img1.gratispng.com/20180429/xoq/kisspng-computer-icons-user-profile-5ae60b5b563cb3.3045472715250256273532.jpg" alt="avatar"/>
                </a>

            </div>
        </nav>
    )
}

export default Navbar;