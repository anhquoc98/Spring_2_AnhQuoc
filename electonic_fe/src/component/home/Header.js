import React from 'react';
import './header.css'
import {Link} from "react-router-dom";
import lego from './1.png';
function Header() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm"
                 style={{backgroundColor: '#B5B5B5'}}>
                <div className='container'style={{marginLeft:'0px'}} >
                    <Link to='/' className='navbar-brand' style={{width:'10%',marginLeft:'0px'}}>
                        <img src={lego} style={{width:'100%'}} alt=""/>
                    </Link>
                    <div id="navbarContent" className="collapse navbar-collapse">
                        {/*<img src='public/Lego.png' style={{width:'100%',height:'100%'}} alt=""/>*/}
                        <ul className="navbar-nav mx-auto">

                            <li className="nav-item">
                                <Link to='/' className="nav-link font-weight-bold text-uppercase">
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/product' className="nav-link font-weight-bold text-uppercase">
                                    Sản phẩm
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="src/component" className="nav-link font-weight-bold text-uppercase">
                                    Dịch vụ
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link font-weight-bold text-uppercase">
                                    Đăng nhập
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default Header;