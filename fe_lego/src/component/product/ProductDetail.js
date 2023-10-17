import React, {useEffect, useState} from 'react';
import '../product/productDetail.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import * as legoService from "../../service/legoService";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import BPayPal from "../BPayPal";
import {Form, Formik} from "formik";
import * as cartService from "../../service/cartService";
import {toast, ToastContainer} from "react-toastify";
import {AiFillStar} from "react-icons/ai";

function ProductDetail() {
    const param = useParams();
    const navigate = useNavigate();
    const [findByLego, setFindById] = useState("");
    const [findByLegoImg, setFindByImg] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        const findByImg = async () => {
            let rs = await legoService.findByImg(param.id)
            console.log(param.id)
            setFindByImg(rs)
        }
        findByImg()
    }, [param.id])


    useEffect(() => {
        const findById = async () => {
            let rs = await legoService.findById(param.id)
            setFindById(rs)
            console.log(rs.id)
        }
        findById()
    }, [param.id]);
    if (!findByLego) {
        return null;
    }
    return (
        <>
            <div>
                <nav className="d-flex">
                    <h6 className="mb-0">
                        <a href="" className="text-white-50">Home</a>
                        <span className="text-white-50 mx-2"> > </span>
                        <a href="" className="text-white-50">Library</a>
                        <span className="text-white-50 mx-2"> > </span>
                        <a href="" className="text-white"><u>Data</u></a>
                    </h6>
                </nav>
            </div>
            {/* content */}
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">

                                {/*    <img*/}
                                {/*        style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }}*/}
                                {/*        className="rounded-4 fit"*/}
                                {/*src={findByLego.image}*/}
                                {/*   />*/}


                                <Carousel autoPlay={true}>


                                    {
                                        findByLegoImg.map((value, index) => (

                                            <div>
                                                <img src={value.imgUrl}/>
                                                <p className="legend">{findByLego.name}</p>
                                            </div>


                                        ))
                                    }</Carousel>
                            </div>
                            {/* thumbs-wrap.// */}
                            {/* gallery-wrap .end// */}
                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {findByLego.name}
                                </h4>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fas fa-star-half-alt"/>
                                        <span className="ms-1">4.5</span>
                                    </div>
                                    <span className="text-muted">
                <i className="fas fa-shopping-basket fa-sm mx-1"/>
              </span>
                                </div>
                                <div className="mb-3">
                                    <span className="h3" style={{color: '#be185d'}}>Giá: </span>
                                    <span className="h2">{findByLego.price}</span>
                                    <span className="text-muted">.000 VNĐ</span>
                                </div>
                                <p>
                                    {findByLego.description}
                                </p>
                                <div className="row">
                                    <dt className="col-3">Loại</dt>
                                    <dd className="col-9">{findByLego.legoType.name}</dd>
                                    <dt className="col-3">Màu</dt>
                                    <dd className="col-9">Brown</dd>

                                    <dt className="col-3">Thương hiệu</dt>
                                    <dd className="col-9">Reebook</dd>


                                </div>
                                <div className='row'>
                                    <span className="col 12" style={{width:'3px'}}><AiFillStar style={{color:'yellow', width: '100%' }} /></span>
                                    <span className="col 12"><AiFillStar style={{color:'yellow' }} /></span>
                                    <span className="col 12"><AiFillStar style={{color:'yellow' }} /></span>
                                    <span className="col 12"><AiFillStar style={{color:'yellow' }} /></span>
                                    <span className="col 12"><AiFillStar style={{color:'yellow'}} /></span>
                                </div>
                                <hr/>
                                <div className="row mb-4">

                                    {/* col.// */}
                                    <div className="col-md-4 col-6 mb-3">
                                        <div>
                                            <label className="mb-2 d-block">Số lượng</label>
                                            <div className="input-group mb-3" style={{width: 170}}>
                                                <button
                                                    className="btn btn-white border border-secondary px-3"
                                                    type="button"
                                                    id="button-addon3"
                                                    data-mdb-ripple-color="dark"
                                                    onClick={decrement}
                                                >
                                                    <i className="fas fa-minus"/>
                                                </button>
                                                <input
                                                    type="text"
                                                    className="form-control text-center border border-secondary"
                                                    placeholder={quantity}
                                                    aria-label="Example text with button addon"
                                                    aria-describedby="button-addon1"
                                                />
                                                <button
                                                    className="btn btn-white border border-secondary px-3"
                                                    type="button"
                                                    id="button-addon2"
                                                    data-mdb-ripple-color="dark"
                                                    onClick={increment}
                                                >
                                                    <i className="fas fa-plus"/>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Formik initialValues={{
                                    total: findByLego.price,
                                    lego: findByLego.id,
                                    quantity: quantity
                                }} onSubmit={async (value) => {
                                    await cartService.saveCart(value)
                                    toast.success('Sản phẩm đã được thêm vào giỏ hàng!', {
                                        position: 'top-right',
                                        autoClose: 3000, // Tự động đóng sau 3 giây
                                    });
                                    navigate('/cart');

                                }
                                }>
                                    <Form>
                                        <button className='btn btn-outline-primary'
                                                style={{width: '100%'}}>Thanh toán
                                        </button>
                                    </Form>
                                </Formik>


                                <Formik initialValues={{
                                    total: findByLego.price,
                                    lego: findByLego.id,
                                    quantity: quantity
                                }} onSubmit={async (value) => {
                                    await cartService.saveCart(value)
                                    toast.success('Sản phẩm đã được thêm vào giỏ hàng!', {
                                        position: 'top-right',
                                        autoClose: 3000, // Tự động đóng sau 3 giây
                                    });
                                }
                                }>
                                    <Form>
                                        <button className='btn btn-outline-primary'
                                                style={{width: '100%'}}>Thêm
                                            vào giỏ
                                            hàng
                                        </button>
                                    </Form>
                                </Formik>

                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <ToastContainer/>
        </>

    );
}

export default ProductDetail;