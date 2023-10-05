import React, {useEffect, useState} from 'react';
import './cart.css'
import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom";
import * as legoService from "../../service/legoService";

function Cart(props) {
    const [legoList, setLegoList] = useState([])
    const listLego = async () => {
        let rs = await legoService.findByLego();
        setLegoList(rs.content);
        console.log(rs.content)
    }
    useEffect(() => {
        listLego()
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <>
            {/* cart + summary */}
            <section className="bg-light my-5">
                <div className="container">
                    <div className="row">
                        {/* cart */}
                        <div className="col-lg-9">
                            <div className="card border shadow-0">
                                <div className="m-4">
                                    <h4 className="card-title mb-4" style={{color: '#be185d'}}>Giỏ hàng của bạn</h4>
                                    <div className="row gy-3 mb-4">
                                        <div className="col-lg-5">
                                            <div className="me-lg-5">
                                                <div className="d-flex">
                                                    <img
                                                        src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                                                        className="border rounded me-3"
                                                        style={{width: 96, height: 96}}
                                                    />
                                                    <div className="">
                                                        <a href="src/component#" className="nav-link">
                                                            Winter jacket for men and lady
                                                        </a>
                                                        <p className="text-muted">Yellow, Jeans</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                                            <div className="">
                                                <select style={{width: 100}} className="form-select me-4">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                            <div className="">
                                                <text className="h6">$1156.00</text>
                                                <br/>
                                                <small className="text-muted text-nowrap">
                                                    {" "}
                                                    $460.00 / per item{" "}
                                                </small>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                                            <div className="float-md-end">
                                                <a
                                                    href="src/component#!"
                                                    className="btn btn-light border px-2 icon-hover-primary"
                                                >
                                                    <i className="fas fa-heart fa-lg px-1 text-secondary"/>
                                                </a>
                                                <a
                                                    href="src/component#"
                                                    className="btn btn-danger  text-dark icon-hover-danger"
                                                >
                                                    Xóa
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top pt-4 mx-4 mb-4">
                                    <h3 style={{color:''}}>
                                         Giao hàng miễn phí trong vòng 1-2
                                        tuần
                                    </h3>
                                    <p className="text-muted">
                                        {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do*/}
                                        {/*eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut*/}
                                        {/*enim ad minim veniam, quis nostrud exercitation ullamco laboris*/}
                                        {/*nisi ut aliquip*/}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* cart */}
                        {/* summary */}
                        <div className="col-lg-3 card rounded-1">
                            <div className="card mb-3 border shadow-0">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-label">Mã giảm giá?</label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control border"
                                                    name=""
                                                    placeholder="Bạn có mã giảm giá"
                                                />
                                                <button className="btn btn-light border">Xác nhận</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card shadow-0 border">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Tiền sản phẩm:</p>
                                        <p className="mb-2">$329.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Mã giảm giá:</p>
                                        <p className="mb-2 text-success">-$60.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Giao hàng:</p>
                                        <p className="mb-2">$14.00</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Tổng tiền:</p>
                                        <p className="mb-2 fw-bold">$283.00</p>
                                    </div>
                                    <div className="mt-3">
                                        <a href="src/component#" className="btn btn-secondary w-100 shadow-0 mb-2">
                                            {" "}
                                            Thanh toán giỏ hàng
                                        </a>
                                        <Link to='/product' className="btn btn-light w-100 border mt-2">
                                            {" "}
                                            Quay về sản phẩm
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* summary */}
                    </div>
                </div>
            </section>
            {/* cart + summary */}
            <section>
                <div className="container my-5">
                    <header className="mb-4">
                        <h3>Đồ chơi liên quan</h3>
                    </header>
                    <div className="row">
                        <Carousel responsive={responsive}>
                            {
                                legoList.map((value, index) => (
                                    <div className="col m-1" key={index} >
                                        <div className="card-container" style={{marginTop: '0px'}}>
                                            <Link to={`/product-detail/${value.id}`} className="hero-image-container">
                                                <img className="hero-image"
                                                     src={value.image}
                                                     alt="Spinning glass cube"/>
                                            </Link>
                                            <div className='mt-2'>
                                                <button className='btn btn-outline-primary' style={{width: '100%'}}>Thêm
                                                    vào giỏ
                                                    hàng
                                                </button>
                                            </div>
                                            <div
                                                className="product-content d-flex justify-content-between align-items-center">
                                                <h5 className="fs-5 mt-3" style={{ color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                                    {value.name.length > 30 ? value.name.slice(0, 30) + '...' : value.name}
                                                </h5>

                                                <span>{value.price} VNĐ</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Carousel>

                    </div>
                </div>
            </section>
            {/* Recommended */}
        </>

    );
}

export default Cart;