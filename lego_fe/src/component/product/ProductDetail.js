import React, {useEffect, useState} from 'react';
import '../product/productDetail.css'
import {useParams} from "react-router-dom";
import * as legoService from "../../service/legoService";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import BPayPal from "../BPayPal";

function ProductDetail() {
    const param = useParams();
    const [findByLego, setFindById] = useState("")
    const [findByLegoImg, setFindByImg] = useState([])

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
    if (!findByLego){
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
                                    <span className="h3" style={{color:'#be185d'}}>Giá: </span>
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
                                <hr/>
                                <div className="row mb-4">

                                    {/* col.// */}
                                    <div className="col-md-4 col-6 mb-3">
                                        <label className="mb-2 d-block">Số lượng</label>
                                        <div className="input-group mb-3" style={{width: 170}}>

                                            <input
                                                type="text"
                                                className="form-control text-center border border-secondary"
                                                placeholder={1}
                                                aria-label="Example text with button addon"
                                                aria-describedby="button-addon1"
                                            />
                                            <button
                                                className="btn btn-white border border-secondary px-3"
                                                type="button"
                                                id="button-addon2"
                                                data-mdb-ripple-color="dark"
                                            >
                                                <i className="fas fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <BPayPal/>
                                <a href="#" className="btn  w-100 shadow-0 mb-2">
                                    {" "}
                                    <i className="me-1 fa fa-shopping-basket"/> Thêm vào giỏ hàng{" "}
                                </a>

                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>

    );
}

export default ProductDetail;