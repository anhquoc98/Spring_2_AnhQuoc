import React from 'react';

function Footer() {
    return (
        <>

            <footer className="w-100 py-4 flex-shrink-0" style={{
                backgroundColor: 'white',
                borderTop:'1px',
                border:'2px'
            }}>
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1" style={{color: '#FF69B4'}}>FB. AnhQuoc</h5>
                            <p className="small text-muted " style={{color: '#FF69B4'}}>
                               Đáp ứng nhu cầu khách hàng
                            </p>
                            <p className="small text-muted mb-0" style={{color: '#FF69B4'}}>
                                Lego Kids luôn có tại cửa hàng mở cửa 7/24h
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="mb-3" style={{color: '#FF69B4'}}>Hổ trợ</h5>
                            <ul className="list-unstyled  text-muted">
                                <li>
                                    <a href="src/component#">Trang chủ</a>
                                </li>
                                <li>
                                    <a href="src/component#">Thông tin khách hàng</a>
                                </li>
                                <li>
                                    <a href="src/component#">Tư vấn</a>
                                </li>
                                <li>
                                    <a href="src/component#">Dịch vụ khách hàng</a>
                                </li>
                            </ul>
                        </div>
                        {/*<div className="col-lg-2 col-md-6">*/}
                        {/*    <h5 className=" mb-3" style={{color: '#FF69B4'}}>Quick links</h5>*/}
                        {/*    <ul className="list-unstyled text-muted">*/}
                        {/*        <li>*/}
                        {/*            <a href="src/component#">Home</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="src/component#">About</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="src/component#">Get started</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="src/component#">FAQ</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        <div className="col-lg-4 col-md-6">
                            <h5 className=" mb-3" style={{color: '#FF69B4'}}>Code Gym</h5>
                            <p className="small text-muted">
                               Luôn luôn hổ trợ hết mình .
                            </p>
                            <form action="src/component#">
                                <div className="input-group mb-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email của bạn để biết thêm thông tin"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <button
                                        className="btn btn-secondary m-0"
                                        id="button-addon2"
                                        type="button"

                                    >
                                        <i className="bi-bicycle"/>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;