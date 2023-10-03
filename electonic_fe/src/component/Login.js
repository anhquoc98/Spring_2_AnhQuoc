import React from 'react';

function Login() {
    return (
        <>
            <section className="vh-100 gradient-custom "
                     style={{
                         backgroundImage: 'url("https://tophinhanhdep.com/wp-content/uploads/2021/10/LEGO-Wallpapers.jpg")',
                         backgroundSize: "cover",
                         backgroundPosition: "center"
                     }}
            >
                <div className="container h-50" style={{opacity: '0.8'}}>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                                style={{borderRadius: "1rem", marginTop: '10%', marginBottom: '10%',backgroundColor:'white'}}
                            >
                                <div className="card-body  text-center" style={{backgroundColor:''}}>
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h3 className="fw-bold mb-2 text-uppercase" style={{color: 'white'}}>Đăng nhập</h3>
                                        <p className="text-white-50 mb-5">
                                            Vui lòng nhập tên đăng nhập và mật khẩu của bạn!
                                        </p>
                                        {/*<Formik initialValues={{*/}
                                        {/*    username: '',*/}
                                        {/*    password: ''*/}
                                        {/*}}*/}
                                        {/*        validationSchema={Yup.object({*/}
                                        {/*            username:Yup.string().required('tài khoản không được để trống'),*/}
                                        {/*            password:Yup.string().required('mật khẩu không được để trống')*/}
                                        {/*        })*/}
                                        {/*        }*/}

                                        {/*        onSubmit={async (values, {setSubmitting}) => {*/}
                                        {/*            try {*/}
                                        {/*                // Gửi yêu cầu đăng nhập*/}
                                        {/*                const response = await axios.post(*/}
                                        {/*                    "http://localhost:8080/login/authenticate",*/}
                                        {/*                    values*/}
                                        {/*                );*/}
                                        {/*                // Kiểm tra nếu response có chứa token*/}
                                        {/*                if (response.data.token) {*/}
                                        {/*                    // Giải mã token và lấy thông tin payload*/}

                                        {/*                    // const decodedToken = jwt(response.data.token);*/}
                                        {/*                    // Lưu trữ thông tin người dùng vào localStorage hoặc state*/}
                                        {/*                    localStorage.setItem("token", response.data.token);*/}
                                        {/*                    localStorage.setItem("username", response.data.username);*/}
                                        {/*                    localStorage.setItem("role", response.data.role);*/}
                                        {/*                    // localStorage.setItem('userId', decodedToken.userId);*/}
                                        {/*                }*/}
                                        {/*                navigate("/");*/}
                                        {/*                await Swal.fire({*/}
                                        {/*                    icon: "success",*/}
                                        {/*                    title: "Đăng nhập thành công !",*/}
                                        {/*                    timer: 3000*/}
                                        {/*                })*/}
                                        {/*            } catch (e) {*/}
                                        {/*                toast.error(e.response.data);*/}
                                        {/*                await Swal.fire({*/}
                                        {/*                    icon: "error",*/}
                                        {/*                    title: "Sai mật khẩu hay tên tài khoản !",*/}
                                        {/*                    timer: 3000*/}
                                        {/*                })*/}
                                        {/*            } finally {*/}
                                        {/*                setSubmitting(false);*/}

                                        {/*            }*/}
                                        {/*        }}>*/}
                                            <form>


                                                <div className="form-outline form-white mb-4">


                                                    <label className="form-label" htmlFor="typeEmailX">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="typeEmailX"
                                                        className="form-control form-control-lg"
                                                        name='username'
                                                    />
                                                    {/*<ErrorMessage name='username' component='div' style={{color:'red'}}/>*/}

                                                </div>
                                                <div className="form-outline form-white mb-4">
                                                    <label className="form-label" htmlFor="typePasswordX">
                                                        Mật khẩu
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="typePasswordX"
                                                        className="form-control form-control-lg"
                                                        name='password'

                                                    />
                                                    {/*<ErrorMessage name='password' component='div' style={{color:'red'}}/>*/}


                                                </div>
                                                {/*<p className="small mb-5 pb-lg-2">*/}
                                                {/*    <a className="text-white-50" href="#!">*/}
                                                {/*        Quên mật khẩu?*/}
                                                {/*    </a>*/}
                                                {/*</p>*/}
                                                <button
                                                    className="text-white btn btn-outline-light btn-lg px-5"
                                                    type="submit"
                                                >
                                                    Đăng nhập
                                                </button>
                                            </form>
                                        {/*</Formik>*/}

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-facebook-f fa-lg"/>
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-twitter fa-lg mx-4 px-2"/>
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-google fa-lg"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0">
                                            Bạn chưa có tài khoản?{" "}
                                            <a href="#!" className="text-white-50 fw-bold">
                                                Đăng ký
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;