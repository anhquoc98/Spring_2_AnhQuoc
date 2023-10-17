import React, {useEffect, useState} from 'react';
import * as legoService from "../../service/legoService";
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as cartService from "../../service/cartService";
import {Slider, Stack} from "@mui/material";
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {
    const [legoList, setLegoList] = useState([])
    const listLego = async () => {
        let rs = await legoService.findByLego();
        setLegoList(rs.content);
        console.log(rs.content)
    }
    useEffect(() => {
        listLego()
    }, []);

    const [currentPage, setCurrentPage] = useState(0);
    const [names, setName] = useState('');
    const [pageCount, setPageCount] = useState(0);

    const search = async (values) => {
        const {names} = values;
        try {
            const res = await legoService.findByLego(names, 0); // Đặt trang về 0 khi tìm kiếm
            setCurrentPage(0); // Đặt trang hiện tại về 0
            setName(names);
            const totalPages = res.totalPages;
            setPageCount(totalPages);
            setLegoList(res.content);
        } catch (e) {
            console.log(e);
        }
    };


    const showList = async (page = currentPage) => {
        try {
            const result = await legoService.findByLego(names, page);
            setLegoList((prevList) => [...prevList, ...result.content]);
            setCurrentPage(page);
        } catch (error) {
            console.log(error);
        }
    };

    const loadMore = async () => {
        await showList(currentPage + 1);
    };
    return (
        <>
            {/* sidebar + content */}
            <section className="">
                <div className="container">
                    <div className="row">
                        {/* sidebar */}
                        <div className="col-lg-3">
                            {/* Toggle button */}
                            <button
                                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span>Show filter</span>
                            </button>
                            {/* Collapsible wrapper */}
                            <div
                                className="collapse card d-lg-block mb-5"
                                id="navbarSupportedContent"
                            >
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button text-dark bg-light"
                                                type="button"
                                                data-mdb-toggle="collapse"
                                                data-mdb-target="#panelsStayOpen-collapseTwo"
                                                aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseTwo"
                                            >
                                                Thể loại
                                            </button>
                                        </h2>
                                        <div
                                            id="panelsStayOpen-collapseTwo"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingTwo"
                                        >
                                            <div className="accordion-body">
                                                <div>
                                                    {/* Checked checkbox */}
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckChecked1"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckChecked1"
                                                        >
                                                            Xe mô hình
                                                        </label>
                                                        <span className="badge badge-secondary float-end">
                          120
                        </span>
                                                    </div>
                                                    {/* Checked checkbox */}
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckChecked2"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckChecked2"
                                                        >
                                                            Lắp ráp
                                                        </label>
                                                        <span className="badge badge-secondary float-end">
                          15
                        </span>
                                                    </div>
                                                    {/* Checked checkbox */}
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckChecked3"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckChecked3"
                                                        >
                                                            Xếp hình
                                                        </label>
                                                        <span className="badge badge-secondary float-end">
                          35
                        </span>
                                                    </div>
                                                    {/* Checked checkbox */}
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckChecked4"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckChecked4"
                                                        >
                                                            Rô bốt
                                                        </label>
                                                        <span className="badge badge-secondary float-end">
                          89
                        </span>
                                                    </div>
                                                    {/* Default checkbox */}
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            Siêu nhân
                                                        </label>
                                                        <span className="badge badge-secondary float-end">
                          30
                        </span>
                                                    </div>
                                                    {/* Default checkbox */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button text-dark bg-light"
                                                type="button"
                                                data-mdb-toggle="collapse"
                                                data-mdb-target="#panelsStayOpen-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseThree"
                                            >
                                                Giá
                                            </button>
                                        </h2>
                                        <div
                                            id="panelsStayOpen-collapseThree"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="accordion-body">
                                                <div className="range">
                                                    <input
                                                        type="range"
                                                        className="form-range"
                                                        id="customRange1"
                                                    />
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-6">
                                                        <p className="mb-0">Thấp</p>
                                                        <div className="form-outline">
                                                            <input
                                                                type="number"
                                                                id="typeNumber"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="typeNumber">
                                                                $0
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="mb-0">Cao</p>
                                                        <div className="form-outline">
                                                            <input
                                                                type="number"
                                                                id="typeNumber"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="typeNumber">
                                                                $1,0000
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-white w-100 border border-secondary"
                                                >

                                                    Xác nhận
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* content */}
                        <div className="col-lg-9">
                            <h3 className='container m-1 text-center'
                                style={{display: 'flex', justifyContent: 'center'}}>Đồ chơi dành cho bé</h3>
                            <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                                <div className="ms-auto">
                                    <Formik
                                        initialValues={{names: '', price: 0}}
                                        onSubmit={async (values) => {
                                            search(values)
                                        }}
                                    >
                                        <Form>
                                            <Field
                                                type="text"
                                                name="names"
                                                className="form-text d-inline-block w-auto border pt-1"
                                                placeholder="Tìm kiếm sản phẩm"
                                            />
                                            <button type="submit" className="btn m-1">Tìm kiếm</button>

                                        </Form>
                                    </Formik>

                                    {/*    <select className="form-select d-inline-block w-auto border pt-1">*/}
                                    {/*        <option value={0}>Best match</option>*/}
                                    {/*        <option value={1}>Recommended</option>*/}
                                    {/*        <option value={2}>High rated</option>*/}
                                    {/*        <option value={3}>Randomly</option>*/}
                                    {/*    </select>*/}
                                    {/*    <div className="btn-group shadow-0 border">*/}
                                    {/*        <a href="#" className="btn btn-light" title="List view">*/}
                                    {/*            <i className="fa fa-bars fa-lg"/>*/}
                                    {/*        </a>*/}
                                    {/*        <a href="#" className="btn btn-light active" title="Grid view">*/}
                                    {/*            <i className="fa fa-th fa-lg"/>*/}
                                    {/*        </a>*/}
                                    {/*    </div>*/}
                                </div>
                            </header>
                            <div className="row">
                                {
                                    legoList.map((value, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-6 d-flex">


                                            <div className="card-container" style={{marginTop: '0px'}}>
                                                <Link to={`/product-detail/${value.id}`}
                                                      className="hero-image-container">
                                                    <img className="hero-image"
                                                         src={value.image}
                                                         alt="Spinning glass cube"/>
                                                </Link>
                                                <div className='mt-2'>
                                                    <Formik initialValues={{
                                                        total: value.price,
                                                        lego: value.id
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
                                                <div
                                                    className="product-content d-flex justify-content-between align-items-center">
                                                    <h5 className="fs-5 mt-3"
                                                        style={{color: 'white'}}>
                                                        {value.name.length > 30 ? value.name.slice(0, 30) + '...' : value.name}

                                                    </h5>
                                                    <span>{value.price} VNĐ</span>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                            <hr/>
                            {/* Pagination */}
                            <div className="d-flex justify-content-center">
                                <button onClick={loadMore} className="btn">Tải thêm</button>
                            </div>
                            {/* Pagination */}
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />

            {/* sidebar + content */}
        </>

    );
}

export default Product;