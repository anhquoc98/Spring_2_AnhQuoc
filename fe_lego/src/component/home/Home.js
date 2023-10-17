import React, {useEffect, useState} from 'react';
import './home.css'
import * as legoService from "../../service/legoService";
import {Link} from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Form, Formik} from "formik";
import * as cartService from "../../service/cartService";

function Home() {
    const [legoList, setLegoList] = useState([])
    const listLego = async () => {
        let rs = await legoService.findByListLego();
        setLegoList(rs);
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
            <div>
                {/* Carousel */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators/dots */}
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to={0}
                            className="active"
                        />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1}/>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={2}/>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://indochinalines.com/wp-content/uploads/2021/03/Nhap-khau-do-choi-tre-em.jpeg"
                                alt="New York"
                                className="d-block"
                                style={{width: "100%", height: 600, backgroundSize: 'cover'}}
                            />


                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://bizweb.dktcdn.net/100/096/240/themes/119849/assets/slideshow_image_1.jpg?1582249211060"
                                alt=""
                                className="d-block"
                                style={{width: "100%", height: 600, backgroundSize: 'cover'}}
                            />

                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://bizweb.dktcdn.net/100/096/240/themes/119849/assets/slideshow_image_2.jpg?1582249211060"
                                alt=""
                                className="d-block"
                                style={{width: "100%", height: 600, backgroundSize: 'cover'}}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"/>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"/>
                    </button>
                </div>
            </div>

            <section className="features" style={{position: 'relative', marginTop: '-100px', zIndex: '2'}}>
                <div className="container-lg">
                    <div className=" p-5" style={{backgroundColor: 'white', borderRadius: '10px'}}>
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className="element-title text-capitalize my-3">Giao hàng nhanh </h3>
                                <p style={{fontFamily: 'initial'}}>Dịch vụ đa dạng, chuyển phát nhanh, chuyển phát 55
                                    giờ, chuyển phát đường bộ, giá hợp
                                    lýChuyển phát 55h .Chuyển phát đường bộChuyển mọi trọng lượng.</p>
                            </div>
                            <div className="col-md-3">
                                <h3 className="element-title text-capitalize my-3">Nhận trong cửa hàng</h3>
                                <p style={{fontFamily: 'initial'}}>Lego kids chuyên nhận thiết kế đồ chơi với nhiều lego
                                    đa dạng phong cách từ diện tích
                                    nhỏ, lớn khách nhau..</p>
                            </div>
                            <div className="col-md-3">
                                <h3 className="element-title text-capitalize my-3">Bao bì đặc biệt</h3>
                                <p style={{fontFamily: 'initial'}}>Một mùa Noel nữa lại sắp về, trong khi Lego Kids đựng
                                    những đồ chơi thêm rạng rỡ, các
                                    nhãn hàng cũng bắt đầu tung ra những dòng Lego
                                    đặc biệt chào đón Giáng Sinh..</p>
                            </div>
                            <div className="col-md-3">
                                <h3 className="element-title text-capitalize my-3">Hoàn tiền trả lại</h3>
                                <p style={{fontFamily: 'initial'}}>Những chính sách hoàn tiền đổi trả lại Lego hư hỏng.
                                    Chúng tôi áp dụng tại cửa hàng
                                    đảm bảo
                                    quyền lợi 100% cho khách hàng khi giao dịch cửa hàng chúng tôi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 my-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-10">
                            <h3 className="text-dask text-uppercase" style={{fontFamily: 'inherit'}}>Chào mừng</h3>
                            <h4 className="fs-2 text-center" style={{color: 'black', fontFamily: 'Tên font ở đây'}}>
                                Đồ chơi trẻ em là món đồ được thiết kế dành cho trẻ em dưới 16 tuổi, nhằm mục đích cho
                                các bé vui
                                chơi giải trí, học tập. Mỗi mẫu đồ chơi trẻ em khác nhau sẽ được thiết kế với những công
                                dụng,
                                chức năng khác nhau, giúp các bé vui chơi vận động.
                                Chất liệu để làm đồ chơi trẻ em khá đa dạng như: gỗ, nhựa, giấy, vải,... trong đó phổ
                                biến nhất
                                là đồ chơi làm bằng nhựa.
                            </h4>
                        </div>

                    </div>
                </div>
            </section>


            <section id="new-arrival" className="new-arrival ">
                <div className="container-fluid">
                    <div className="d-flex flex-column align-items-center justify-content-center mt-5 mb-3">
                        <h3 className="text-uppercase">Sản phẩm mới</h3>
                    </div>
                    <div data-aos="fade-in" className="aos-init aos-animate">
                        <div className="row ">
                            <Carousel autoPlay={true} responsive={responsive}>
                                {
                                    legoList.map((value, index) => (
                                        <div className="col m-1" key={index}>
                                            <div className="card-container" style={{marginTop: '0px',height:'30%'}}>
                                                <Link to={`/product-detail/${value.id}`}
                                                      className="hero-image-container">
                                                    <img
                                                        className="hero-image"
                                                        src={value.image}
                                                        alt="Spinning glass cube"
                                                        style={{
                                                            border: '2px solid #000',
                                                            boxSizing: 'border-box', // Đảm bảo border được tính vào kích thước của ảnh
                                                        }}
                                                    />


                                                </Link>
                                                <div className='mt-2'>
                                                    <Formik initialValues={{
                                                        quantity: 1,
                                                        total: value.price,
                                                        lego: value.id
                                                    }} onSubmit={async (value) => {
                                                        await cartService.saveCart(value)
                                                        console.log(value+'aaaaaaaaaa')
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
                            </Carousel>

                        </div>
                    </div>
                </div>
            </section>
            <hr/>

            <div className="container px-0 mt-5">
                <div className="row mx-0 mt-2 mb-5 ms-5">
                    <div className="col-4">
                        <h4 style={{marginTop: 20}}>
                            Lego bao gồm các viên gạch nhiều màu sắc được lắp ráp với
                            nhau đi kèm với một loạt các răng ăn khớp hình tròn, các nhân vật tí hon được gọi là
                            minifigure, và nhiều bộ phận khác. Những miếng ghép Lego có thể được lắp ráp và kết nối theo
                            nhiều cách khác nhau để xây dựng nên nhiều đồ vật như: xe cộ, các tòa nhà cao tầng và con
                            người - có thể hoạt động.
                        </h4>
                    </div>
                    <div className="col-4">
                        <img
                            className="w-100 h-100 shadow"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcVFRUYGBcZGhkZGhkaGhscHRoaIBohGhoZICEaISwjGh0oIBkaJTUlKC0vMjMyGSI6PTgxPCwxMi8BCwsLDw4PHRERHTEpIygzMTMvNDEzMTExMTEvMjExMTMxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgIDBAABB//EAEYQAAIBAgQDBQQHBQYGAQUAAAECEQADBBIhMQVBUQYTImFxMoGRoSNCscHR0vAUUmKishVTcoKS4RYzQ2OzwvEHJDSDo//EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAAxEQACAgEDAwMDAgYCAwAAAAABAgARAwQSIRMxQSIyUQVhcRSRI0KBobHBM/AVUtH/2gAMAwEAAhEDEQA/APpk101n7yoX8WltS7sFUcz+tadAJ7RC5roZd49hlZlNwZlMEQT12ga7GY2pa4t2guX3NjDq5nVXT2mAEmPeQdYqnAdjsTcW3eZkDPIYEHMATJdjPi1+ruJ3phcCKLytX28ym5mPpFxmftJhR/1Ocey5667beE6/jWrAcTtXs3dtJUwRBB6TB5edItjs/cOK/ZhOZc5LmchUiQSY1/5g8I1GY9K0/wDCWMt5biRm7xtA/iAzMQ5khTm8JjcA7VdsWACg/Pi5w6neo9mvDS5wbtMrzbxEW3BI9l1BjRpzTkIaRqdaPpdVgGUgg7EGRSrKVNNCDkWJOastbVSzVOy2lBy+2SveWloqpMQD1E8zt+vtqq8DzI38O09NOp3+NUIoKrInQf00MIKmimlDJZPMI11U2zoPLSpTQzxEmFGpI1E17NU4lQRqJrgtmpbGm9gs8N8TGvrEfb+utSnpQ/EwSs6ghgfMaVfZJzHUx0gQNTr1ojYxXEcy6Pam5TLL/smsk1rxHsn3fbQ3F3iilgpY9BvR9P7DA4ELekeZZeuqoliAPOqkvq0hSDG8Ur8Vv3H9sMBmWAQQPa0iRVYvMhYqxB8j0Ej1q3V57TdH0kHFe7n+0bSag1eX7qrqxjlUFuqRmBEdaLYmT03+DUk1Vu0anQV4l5WnKwMdOVCsdiGzss+ENoPQkVR3oXGNNo2ysVPFd4SLTsfKouaVeHY1kJg6DcaQYEj9edMdm+HE7QSCKhMgadqdG2LnuJZNdXldV4nGEPQLtncjCkxPjXQ7c96KC5QHttcH7KR/Ep+E1OnIGVb+ZmupKmoy9keFWUw9i6qAXGtLmb6xzAEgnpPLyqrt8l65hGt4cMbpuWoytlIAcM3ikQMoPOiHZe6DgsMf+0nLXYDb1oVxTtWlu+1lrbsgHidQJzFVIAkj96KSzv62LHyZpaXCXACi+PEVH4ncOETC94RlC/TKzC6WVgSc0zBiDrMU+dlldcJZt3CzXAsMWJYkySJYkzpHPakgXcCSPBiY0Gy/w+fnTNwbtGLl5bSWnFsJOdk1lQsDRj9lK4XNkEgzU1unx7QcaEV3uZ+2XBE7sXrdsBhc+kIMEq7QSf3jmK+YnSgnZjjB7tWGsgZkPP8AiHRvtpi7R8Rs3bL2VuEXpWEGceIOsBhEFT56c96Q8XhmwmPuWbelow6A8gwBgR9UNmA8gKbzs3TBPcE/txMvTBDkZT2In0nDYlbiZl9CDuD0P651oRoFBeFtlaOTj+YfiJ+Aok7waqH347MXy4+m5A7S65rB89vdpWZsUqD6Qqm8kmB7ieu9B+K9oDYu27ZVSjasdc3OY1jSBQztHxe1dsMUJ01IOh29fOncGldtvHB8xpNWi4iB3A7R0w9wMoKkEGYI2Op1HlSl2g7TZXTuXOVCS8AjaDz3Ug+lBcRxW49lbQEBFDAgNJ1O8HYdeVDm1zx0G2usD4t8qe0301Vcs/PfiY2XOX7R1wvbS2yy9tlYe0AZA3jUgSTHQUaw/FLF2AlxQx+qxAb/AEnU+7SvmF8ELc32B/q2PP7vdWW9Zzoyn2cy+yJ18I8M7HlHQ1OX6WhBbGaP9pfFqSrAn959RTG2rkBXR2ymQrAkSVEeWsfCteGQ8/1qTXz3sxikttcZ3ChVALf/ALF26nSimC4+37XatW7jPaYKpDjWSWkyRmJ2Mk+VJ59C6khfAv8AtNVtdeAE1Z4jhiT4T7vtoVjMV3aF4mKJ44+A+77RQa9hzcRlDAaTqJEbR86UwmkJk6IKcgDdr5gHF4t3YltiUCjpLRt7xrvtV9nh7MSDK6fWB1JEGKz43BvbdC4iXWD1i4I9PfTi1gMQTsDEddaoG55npNVm6eMDFXMyfsqXSM65lB6kQSPI11rA2wxTL9Hm1EnQ7jnPKiFxMpIiIbpH2bVnLCT6j7fl6VzZLNzNxhttWfmDLPDrdprjIsFm1Mk+g1MaChmLw7hyx2JY6a9SJ086OXm8TAR7VvrzIH3HSvA+QtOmpUjp4ZqOoCtGGxs6ZNwN33uIty4Boo1GcN7gBPxJph4W8ox/jahGBQteuxbz+NiYYjL4hroNvy0y3lg7zV8RFzvqGQ7NtcSGavK8rqamJCeas3FMHbvWytwkDXVdx8jPwr0NUjdABzCRFLZTSk1FtOLcC6iRwrG2sFiGuWbvesLTWwhtMsKMssWVzqMn7o391OA7W4a7YtKzObjJbdkVTptMO8AgHzkigLdkMQ1vvkt21NxWYkkhofxEHSdxtyp37OdmrNpLbss3jbyu0kg7SADplBGhianUIpwAkgsf/nYxnT5QmY2DQ+9f1i7/AGrbO1m71Oq6CNCYB6fKpX+2QVFt2rZDyB9LlKRDTqrA7gQTAp0HDvFOkmFJgTlG0+W+nnQXtH2aS6ua0FS7nBLGdRJmYmfKs/6cn8S8goRzW6lXx0oN/mBRiblk3LqMA11u8uArmBPxBAA035Ut47iVzFYm1cNtUyDISpPiWcwJnbWdJ50Ux/B7mGtoly4HDzESYhVn2upaawYBxny0TUMQ5W7Erp0UgMBRjThLha2Y0ZSCPXcUQu3wwVhzUH01Mj3bVkwyQoiqVYiRyBMeh1+0mqISOIPVoCA00Yq2txGQ/WESNxSJxnBmxddI+j7slWaAS2VV/H4U6C5Qjj/BFxIl7zIBvC5vvBp7S63JgPHt8iIDCj3ffxAPGOIthAptgHvMgbNJ0AB0g7GTWziWG7sqFOYkRoIgeGOevPSh/FbFi4oFzElwhUKEXKREA5sy9OlTvcQzXCSIglZGurBTHltW7pXORy4axxM/JiKAAjnm/wDUk0M2X6rArPIasG9dW2qOIxbW8QuE0KXBmLCQQZO3L/p/zGqL2K0G+hB58s8/ZXX1W5cGIGdbighREpvzJG8O3wFF1RZVBBoAi52NNxqr44/M8u2CbrW0APjgydhOp+FPHZu0mHlHIbM0rcKwVO2Xcx60n4W79PJ3bX306W7GdJ8qw9Zr3y+kHj/M1sOiVVtu8N8SP0be7+oUFW6RMGJ0qS4tu7Nt9TplbyBGh93OspahYOUhEUpNuKxSuVm3n8Q0MaSQJH41r4rizawl6/bjPaFxl5gMtssJH3UGzVqV0e09i5OW6zh8oAMOmQweRqr4q5Eb6xdNvmR7McXfEYA4nEEF890SogZVOmnvNY8RxZg3hOmpIMcp099W4fDWrOH/AGSx3mRmugFxJknxagRGk0v4qxfzQLcg7mTA+XnNCsTS0KBcf8Tv/qMOO4upwV+9bJFy2rxtoymR60J4FxS5ewq3rrS5ZwToAQpyjT0AqhLQFu5h3LZbhYvlUzDGDlMRsRWG1ftWrZwtotCmZcA6tlc8vM8qozKBEsgcZtw7f6jHw5wrXctvIZALafSakhtJnc6nqKu2FZ8Biu8TX2howHXr6EffVrGm8SqFsRbNmdzRkprqrzV1EgJvJqOevXQ1UwqhmfNzcQum2LaPaCqMviQsxnzzAc+lZeCdrrnepbvoFQK9vvVS6Q91TqigAydHMAmMprJctEzlgMdj/wDFM3DuK2bWHtJdbxIgDEW3IzxDEQDuZpUMEJVueJpEjIgKCj5kLXbHCvc7tLmZwSCi2rzNIiRAtzIg/ChJ7Q37tx+7UCwRNq5kYF4MGM+hE+VZeCYq2nEsZiCT3d0KEOU7hVG0SNjRvjXEbdxAqEyGB2jSGH3io6qhTXeSMD7hfaKHFcdeuQbjZlSY0AiQJOgE+yKw8NH0go29kGRWO1gcrSNh8v8Aakt1947trtD2HubVHEbmKottpUlU5ffRUMW1XtkC9X2MUEBkTWVqHcXwPf2jbzlASCSBMxyjmKvVxHGxRtwi52yZbl4NaUjTLcMRJmAPdJ+NUY6yyJcZTt4un1RMdaJ2eytzN/z866e0sRBnkTO3zoVxrAO7asyHRVVlIk6SfIe47V6DQtiXC3Rst5Bq/wCkDqC7uC/AmTAXndXLHYgb9SZ+0/GjVnE2xbCSQwHMaNz5coO5oInCHS54XnVSAFPiEmRE+R60VvcKuOMyv3ZkaFZO0ajkdavmZDpgNRYI/czsW/qXi5k10cE6QRTtw6/oNaTOG8HdM2e53kkEaER13J3pv4fhiFFecJF8TYUEjmacYZaYrIxrbemNQawPTuA+iAcUZ4Hq9HtgQxBJ1ifhWMvUBj7aq/eWcwbRpEkoFJj036V2cErQMZ0uIs1iuPvCPCQ7KWVkZRcYLKkxpqCQep0FX3eHXDbzShb0cD2gB9fpFUYbj1juwfYzM2kdGI2WRrFXDtHakW58Lc4P8LR1pULQox58Tnx5izxx79tGe2yK4KLKprsh3YnfmDOhNKj4t2um4VUMxlsugLc2A5TvT5xXjFk2icxaCrRG/sQNRECflSdj8VbuBQqqgVjBBEkEnQ/L4UN1JFSGw0bAqFcDjWUh48mH7y/iOVMK3FZQymQdQaUMA4dYonwzFZH7tvZY6eTdPf8Ab60XT5Np2ntM7MnNiG66o11P2IvGN8PVD4aimQV53QrthifSaAnsVjexc2F3SZ1X7waZmwynrVTYFfP5fhQ3whu4hMfVT2mJ2IN8EEgMB03+FSscRkw2h6Heml+HJ1b5fhWW/wAEtP7Un4afLSgNpL7RtNTkHuFzJauKedXjLVQ7P2xtcujylfy1Z/Y6j/qXPiv5aCdG8YGdfMovMoO8eVacGc6EzMNE+4VmbgqTJuXD5Sv5aO8E4UndsMze0enQeVVOB8fqaAzuHWhAt5KzslOLcHt82b4j8KqXgtphIdiOoKn7q7cIp02ikqa6kgdRWbHYBGGt6R5gH7KdW7P2/wB5/iv5azP2Tw5MnPPqPwiq2LsQ+JiooiI9pLaOMjZoO86Rz5a7nSpqwZ2PKTTiex+G/wC57mH4VA9jMPye6PRl+9a4vfeMDMO1QBYVRFEExSrW7/g61/e3vjb/ACV43Yuz/e3v9SfkqNwlusvxBbYwPmAP63rNdaj9jslat6i5dPkSn3JVjdn7R+s/xX8tPaY+mK5cqhuYps1SsIzkhVLaa0zHs1a/fufFfy1fhuCpbBCu+pn6s/00TJZUgSqZ1B5iBjblm2ptvadG3BhgPOGGnzrFxK7aZFS0oB0OdSSRH8W88or6TieBI+927tGhX8tC7fYbDrtcu667p+Skf0+So4uvQCrM+cmyYIJJ16/ry+FCsXgypkbH5eVfXW7FWP7y78U/JUX7EYciC934p+So6GTzBtrMZ8mfN+FMQRRHF8utO1vsRh12e78U/JVjdkbP95d+KflqwwvBtqUPmJn9oXv3h8BXU6f8JWf37vxT8tdVunl+ZTrpDddNeE1HNWnOk81CsTexedsiDJkMGVkMDpodTp7qIrqf1pUzptzTXXr9m1CyOAO8a03BsqCPvMeAu3Gtqbi5bkHMoMxBI5eQn30JxGLxga4FtA6Smq9dRqdd6Ml9h/CR7J859PTnWV2KldSZB5ec/Dy386B1rq40mMLuNA32B8S207FVLDKxAJXeDGo9xrmaq7V8OJEjyIqTU2CCLEzXBBoyJajfBD4G/wAX3CgbGjHBD9G3+I/YKX1fskCT7QvFh9YnKPiaCdm8fkZ1Y+Duzc3mIeNPUEfKiPaq6y4c5QCxdAJkDeeXp86TeD3WJcvkQmzlyhty1xGETBPOs4HiMY03LPoS44HSNYnfl+iPjUv2nyoXZWH/AMn4VttuIjLvpPupsYUrtCtiRfEvGJHSve/Hn+jFVFQm+sz9grPeO8bT/wCwrjhSUGNGPEr47xbuMO11QCZCieRP2/70L4TjLjYlQXYhi4advrkacvZX4eZof2+LfsSBQfFiEB9Mp3PKp9nbzPilHdugXvDmYrBHjGkEmdelKlQCRIKBVMdX2qirbu1UTTWm9szM/untdXk1JUJmBtTFwAFyJNRFwVqXDGDOlQbBa+0OXwnU/LShs/PEcw40I9coDSJryrXsZdjOsR9lVGrA2IvkWmNdpxNRJria8mpg5011eV1dOmdmqstUWegPafityyw7sganlPsgEf70R8gTvNnTaZs7bVjMoyyYM5CTG42+FSfI3hS4hYDUAgx7hy9azcBxXeJLMMzWQxE+k6Ul4Xs7icBfxWLY2srpeylWJYZ7guLIKgbDrSwvI1fMtk3Ym2jxHFgQYjaRz8/jXmIwnsFmRRyzE8xpvz1pDbtPjFIBu6gGfZ3/AHTO5E7+Q1qrH28TxLDIsozW7rauY0yeQMwTG2wouXSNjWyZDatj7RUaVxBthYiIM6EzDDY8tz60UJHLbyoKw7u1aRioKoq7iJEAx1oDwfjt5rgQkZCG8IA0IGaRzn30LHk28HtDdFs67xwfMc2NFuDvCN/i+4UFRpUE8wD8RRLhrwh/xH7BV9UbxxKqNTfj7AupkLR4g0xO1CF4Ei694T7P1ek+fnRJrh2FCVbFOfCqC0WiWnORtmA2ifOsnJkRFtiR+I1gUHzCSWzmkxqsbennpWpb0KRA00+VL/E8Vdsw9y7btg6KSNM0FsvrCk+6vMLexFxBct3bbqdiE0Mf7yKMPqOLbu5r8Q5CsaJEYbdyNImapuncxz/9hQr/AO7H1renVDy9/nWa3xS6zG2LuHZ5K5FktIJQiA86ak9INWX6jiYEi/2kbQp7iQ41wXvS9xspyoIGuYZUYiNN8xJHmaw9nsUMO7XGt3WzDa6zF0B5qHJidZ2nTWmbDrdaQxQNtHjAnfeCPtpV49xRhc7u5b7trZPPNnBiCNBK6fOhrkR7YNYP2kFVYkR3scStXVJtuCeanRhrzB19+1TtKWMDfek/grhriPEHxf0kU74PFJlAkaLJ9edOYvSnEys+Mb6nWsKT7Wla5AmB0FVjFW/31+PnWWzjMwYkZfEIk76f7VLMTJTEB2m17gB1IE8q9n9fGgXEEN25bddAp1n48q33eIKtwJqZ5iIE5tzPlV9tgVzKFihIcV8feanYTE69J86rdQdD50KxFs/tIuT4RG3oB086txvE7dtQ7EAEqoBIBJM6CTqdDpUMAtUZdFZgSRx4+8te2R56A6edUvpod62Lirf76/6h0HnVWLdTtBJ5+mlSrwL4wOZmmuqM11EuBmJX9o7kKSJ66fjSDxvGXLjuHMwWjy0H405lyJ89PdQ/iODt3TJBHofT8D8ajKjMbE9J9O1ePDYcf1i/wvjFxHyFiysvdqIXSXIB2kxFHuNd5dRkRlMprIEwQQdm0PqKnwns9bRhceCN1OmYRJ06ST8qhxxLYQW1y6DLynWcxMdSJNLUytxHQcefJSjiLOK4K5ckHQsTynl5+RrfgeHvYXKHkElmhQY0M65hAio3OCo9s3ktqUX2/FDMRAMaaTNZeCqqtcXRViQJ6mBvvoaJkyu4pjBnSIpJWrEz4jil1x4CRBYH2dRpEaeRPwoYlx0OZZU67AdNaI47hT2TntjMkFioOqDfSfaUSB19eXuDm4snc7eXSk+oymjKHIU8Rt4NiHe2CxnwofeRPwo7gW8B/wAX3Cl3g2JDKVIi4IzD94cmE/OOfupgwHsH/F9wpvIbwXMnKwLkgTQXrSmJXKiiZ0GgrIavXBsUzh8p3BjYdfWsTWKrJ6jUnGTugztxwq7ibVtLShitzMZKjTunXmerCp8FQ4PBL33h7sXGYCGgSWEZd9CK1YZ3Rm8Vy6I01Ux15gc/lUcdildMr2nZDGZSFMgxoQW+2s5cxKjCfaDcP0qa5n4H2itYouAjIwBOUwZXw+KRoNSNN6AcG4HiUx/evbIt95ebNKRDO+UwDOuYfGmDA2rSEtbwxtlhlJAQEjQRo20rWoX2uoRbL2zoQ5C/vToCTMgEbUw+VcLsmLkEVKnGWqz2luIx9u22V2g6NEHbXoPI0N7SrZxNglCjXbfjTk8D2lE67SYHMCquI4K4ENy4wYroT5A78utAMeAyxHT4namdLjATg3cJssgjxLuA3dRG2v2Ux275GxjlpS1wbCm2IJJjn6jyouLlbWm9nMztb/ycfExdp8XfRRct3LiiAPC5ABncgeu9GBh8rL3d26ioVlJzB2ERJaSBEgx1rOlw7UN4hjb2dFU5PpUzGQQQeZldNjt0qy4tzlQeTCYtSqY9zrwOLEecAQ6XFJnMSDGm41Hz3rJjVC3LdtWVLbkBkjVyZBg/V6+flSi1++7MqvaIzFZKaSMw3VhptVmItYnOqF7BM6HI0DV+efQ/7Uf9NkHEAdTp2Yk3+0eMRZRbbqogbxpA1nmPKk/HcNa8xN28xVXa5aCqq9yRPdsCB4yFOuaQayPdxNtipe1ykgPEHKT7VyNmNYeIcXuWw5d9BAGRCw08LHwqSFPmfhNcdI7cmoTFrdOgrk/0m7BNiEY95e7yCd1QAgSNQBOvrTJhsUtwSNCNx0/286ReA4u5cGe6uR88MsEHZm1nXn8IpiVWUi4pj7xzB8qBkToMObBEoG/UBuKIMO11DP7W/wC2fiPwrqjrLB9B5W4rO8Vc5rNcNOxiaS7siqhVD7IY6+unSPOh2P7pS1uQ9+5qHywSTOUDkq6damlp2YFGAKHN4tjpsYI8+fKl/jHH7tq6F7m050htQdNehis3IwVyDNfTZaQNzxOfCMuIXD51LvBUwcse1JHkFbSdY863Nw6wq9y0PiCdwCBErlAmQoykMdZn4UqXe0V0Yu3iGtCUGUJOh8LLOaJHt9OVG8N2idiHOHt5hGubXTLzy/wfOqdQeYZtVv7z04+7aZ7V/wAZ2V0CgZSognXQxr76FcCDSU3g6HqPxq3jOLNwi5EHp5BQv+9X8FEOOmp+c/hQGNmLM9wneRgQy+G4ux5HyPl5Uz8AxQuWiwEEMQw6NAkeY1+dB71qRPyon2aTLbuD/un+havuIUr4ieQCE2qd7HHu+6yiCrKWLbZhAMRrv15VS5oPxnFG3rBiNPWqUD3lcdbuZlweMThwe2Lgh2z5rse0FAKjLA2APxooO0dxoOVCDqDDajOoB31BGtBuznE7Dm7cxNvMFOW1mtNcB0OdoykbwPj1Nb+L8XwNvDXFtgrcCO1rNZurLgSigsvs5o0mKp0MTckQ7klrAm5O0FwwMibj94fXI6+VAu0nGmvYcqjJOZDNttRGadjUOyXaPC90xxbr3pMAZGYBdwYAIDSW13o0z4K5ZC2FHh9k5GUnXWSQC2nWu6OL+UC5C2DyJUeLJdw5QLcWFC+KPuOvLeg3DnzEhtwR8tK0XkhCB+tape2VYXBsYDevX3/hRAgHaXuu0KWRBb3VItXltpg9RXlynsXtmZrDbielzyMHrS7xfh2Ie7buB5KkEKpYAwZ8XIj8TRya9FwjUR76sy/zL3gsb/yN7YMw1nFIFDITLuz5SG0IOgkTz5Vc2O3PdXYnfKOs9fP5GtiXb7EwLa+ZY/lqFyxdg5rix0zHr5iuX6jlXg1C/wDjcLmwTBF7G5pjNkhdgQQMozHYbFRz++h37ViRLFUyEknRiRPq3kKY+5HQdNDIqdrDCIjSqZNflbzX4hU+nYk7i/zB+Acs2doLbSBuJJ+80wIxKQDWKxgwp0+VbghFKtkLG2jIxBVpZ53fnXtey3QfKuqtidtM2Nw67+7/ADL+NUPwm8fqfzL+NM0101r7jMvrNFU8HvnZY88y/ODSviuyOPNwvkVxy8aD7WmvqttCxgV46EGDS2TEmRrPeFTWZEWgOJ8lvdkcczL9AIEye8tfmoja7LYof9MAf40/NX0euAqv6VZP61/gT5s3ZPFGJtjnPjTn760cP7M4m3obY0Ohzpt8a+hXUK6Gqq4aZPmcdXk8gRWbhN6PYn/Mv40R4ZgriIQywc07g8h0NGK9FVyYVVeJT9SzHmDHwz9PmKz4jh7OpVlkHzH6FGGqNL7RJ6zQAnD7ltVW3b0UQNV+J13oZjeCX78rdSByIZZ+R86cDUL9wIrOdlBYxvAEmrV4hRq3A8T57w/sbdtuZQFZ0OZNR8fd7qYLfCbi7L81/GtnBuPW8Q9y2qlWtwddQVOx20Mzp5UXNQUqcutdhxUXv7Ouayu/mv41K1w5wIKiDoRIo4arapnfqm+IJwPDLmfKBI1gyOm29bLnBL5+oP8AUv40R4Z/zV/zf0mjtT1WTgSh/iepoktwDEf3Y/1J+NRPAMT/AHf86fmp4qnFYlLal3YADqQJ8hO5rv1DThhBNCI97s5iyPCmU9cyfmrCOy+PB1XMPJ7Y1+NGrvbb9y1OpBlvLSIHxqodtn2NtOntHedG9NtN6Gz7vE00+n6lBwP7iZ7fAcWAB3QH+e3+atlrg+IG9r+dPxqCdtnnW0pWBoGIM6SZI21OkdKOcH7QW8QzKoZSonxRrrEaHeeVUk5MGoxjcy8QUOE3/wC6/mT8az3+FYs7W/50/NTpXV1xXqtEv+x8X/d/zp+avKda6uuR1TB+auzVm7yph615kwvhz4VqL2QZJknyrsO3hT0qF/HW1cI11FYxCl1BMyBoTOpFAvmOAAjmV31RQSZ/XT/elHHcfZyBb+jEnUHxGAY9Npp3dAd6F8RwGF0a4ttd4LELy1iao+9uAY1pmwobdbgHFdpbj2wgBV5AZ9NRImI2kx86nwjjLOy2nXWIzzuQAdRGmh3k7VZxLs4rFHs5QNTuYYElp09PnUeHcGRHFzvMzISCABAaApHXlQ0GQPGczaQ4TxzzXzcMk101EmqneKYy+yYS95N3ABJ5CfhQ17124CbQACkgydyA0e6V2rTdeVI6gj4ihmExT2SVIUKxJJPKe8JOh9Ky87MKrtAZ3p1ViQvkj5l93HNZYi9zMgjWBLD36IT7j1FLXG+1TXEiycq+JXBAluUCdIIPkd6YuO4jvFhMjAkpmyzE94p5+fLbelG5wAw+a54sxA00zQdW8iuXbpRMGZFHqMBkzBWKK1j/AL5g7B8Vu2bjXLRAJVQywCHAfNlkgkHxEaR8qd8F2qw10eEsDMZWAnlB0J0M/I0rN2fEmLnIZZH15Eg9F13EmsXDrHdshyqwKgxBBCjLB19T8KJkzIykqeZ2LPxQMev2y9/dncHblpI/q1rVh8UlwSpmInQgiRPP9aGhlzjqhYHilTqCNND+Fe8EBAuSCPZGvkWpfG7bqJjQO3IFVr+ftD/DD9Ivv/pNHS1LuAf6Rff/AEmilzEURzzNHGOJuzUj/wD1CcF7CztJj1dfymmcYigfavgK4sW8zOjg5AVP1WOsjy++qEx/ROuPMHbxf+IlIog5dsx++aMcP429lciIhWTGZZOre1PlppQDF/8A06xlu59Ei3kXUEuFVtD4SpcEbCaZuD9jFNsHEWFt3czArbbTLn8JnOeW+tF2Mg3AzRf6piy+h1P7wVjLpuOzlQCxExoPZUSBWC4sQwJBDMfQw7A+WtauNdjcWzulrDqbUrkbvAHIAQmZuRGbPy5CrOGdgXVVa9ca2SQGVIzAeIEZsxBnTarNjIG4mcPquM/wwpr8z6ph3zIrdVU/ETU2ND8NxOwFRc4t+EZVueExGntaHSNia2zQjMRhzPZrq8rqiVgDvKC9qbt3uQlm4LbFhLE5fANwCAY1j8aIB6xcY4acVbFpXKHOrSqliYmVgEfoVquCRxEsZUNbCxMPZm5xUYjDC7cz2SMs5lIa33ZObkS0xqROg9Tr7U9msTe4jaxFtAbSCxmJZQZS67todTAIrDwbsrcsYm1eOIzC2YyurKSoRlySXOUDM2kRqaerHGbO1y7attJGU3VnnB1g6+lBBB8xmb3uhSJO/wCIpV7f8DvYu3aWyoYozEyyroUge1vrTC/EbE63LWm8uum2+ulQucYwyxmv2VnabqCdPM0NCS5sivEuwFdoC7QpirWAtJaJW6ndK+VlBAVGDAEkCJAGnKk7hePxhxJLtlbxZ/YkQBBIB1lusjxekOXaJEx1vuVu2godXzK3eeyWiVUiOszpApLscHuYe8GZiVlgrRAuLGWd9NhoenlNc7jweZKKSaIj9gsV3iyfaGjDofwO/wD8V2JaguCxWQhxqNmHl19R+t6LYi4DBBkEAg9RU9TenPeL5cWx+O0qZ6ruAMDIB0O/pUHahmKx+W9btzoZn/QTHypXIwC8wWTHvxt9gYSwXDXuKHAGTvCSZg6EyQOW+3rU+K8HYZmtglQGJkjf6Qn7ast3c3DbgtmXKXsuWc2bxRHOZqHZDDXf2O73pcOz3AO8zEqMpH1jJGp0q6aZDjvyYlj0asoG02RdwbhcBcuElFkBoOoH1j19K18R7Pmbfd52gEHUCJ7sA+ZhTRrBYUIl0ISM0wTuCc0nSNNdKVuwOPusl03nuEymXvS3QzGb3fCpTSrs9XeWGh2elhyfjxE9XYEDYENMwegj4MfjTl2e4ibid25l0Agndk2B9Rsfd1pCxOIANsgyCG1GvJfwongcS3huWzDodPwPUHahJwJoaXCvRFDmfRsGfpB7/sNbLpoPwTGLdyuvmCOatl1B/W1E7prn7w2MUKM8BrTi8RbRWuuSEtyxIBMBVzEwBJ0B0FY1k6Ct9zBNkZGyFSJaZMgggiPSfKoCFu0MrVxFnjHbPC38Pds4e65vXEdLfguJ42DBfGwCprzJEUT7CpcTA2heM3C1xmPeC5obpywwYgjLHOkzEdm8HfXvrF24qEuCLdolBGYj6sjQj4Cht7sjgxq1946myds3p50yWUoAJHTcMeOY1YzEHDcUuYm47DDZFEB88O6WlWLSksAWkTliZovge1GExVzu7Nws4BuEG3cXwiTuygbla+d4Ps9gmORMaS0A5FtwwjJyI/XvppwFrD4VcthVa6nguO6wxHjzSwAB3XbTQdKlyCoWQiNuuT7U44W7lq2BJZW0I2gIJPTn8KM8Dx3dgIx+jOx/cJ/9T8j6mlXtRxZryJntDvEM23tnkSFNtlOpB01B3G0TWzg91mTxDSNRQlF+kxnba8z6Dr0rqUY/jf4n8a8qeiYLp/ecHrTgMW1tsygEwRB6SD91YJrjcgSBJ/XWnchIU1M3EAXAMLtxBLjKrSHfkFaJAkjNGUaKefKk3idqcX3iqDdzIyTyYKco5aaAa9d67jPHA6Mlq5luSBKN406nQgjSaDYG6+QMbjswLQ7MS2meNfLSo+kaFuoznlSCCD8mM/UcqIqqvcUY243imLtOq3LdtSdQInTOByesPHUxEWv2hFWJK5Y3y25mGO2hodexTuwLuzkHQsxMePzrxsU75c7s+mmZiY0TrtWyn03FjIYKAR8A/wBpmtqnNgk1GvAW7OGtowTLnRAco3OWZMc/EdaFcR4nevsbZK92tw5IUg6ZhqZ19ojag9rFsBq5OugJJA326aR8KMYZQApHN2PxJI+2vLZNK+nysGPJ/wAeJv4cqZEBm7A4cqOtbbKwpHKTHl+jPxqVkSK59BV1EFqR6ZU5q9+ALdsrdCFrubwwxUxOU6qQRz1rIzVsudqreENu09tyvjGZSD1aYMeY351ZQpNGJop2k+B3gyzaxNrLaNu6iW2YO3hZPEC6+IkkjUCRzrWvG3t23GacpdhoNRlYnlpsaL3OL272CF8NktshkuIiGykmJ50pWpe290PbNvUu/KVVjJ01iR8Ko+PIrei6mdm6oyDpk1+f9Qhb7SXXtu2R0ILLkuIEacpYGNYEMNecUBu3b9tgEclNS2VA2mxnwkrG00Uu4g3rT3Fe3cRS2cgiIVWMHSNAAfQireDYjMLlxHRhGU5TmiORjbQTVtuQvR7SyPn6vJNRQv8AALxV2yODb8WVss92SSIjcgdPgKjw4aaRRHH9tbRQhc7ZrbKCFgA5TE5iOZG00rcN4gwYDQjaiNjA7TUxZlUUY8dmHZMUqj2XDZh6ISD6/iab7ppP7NuGv228n/oam96WcUYZu8irwQehmsfGuL4sEG1bR0yNnJ0I+LjlPWryai7GDG8GPWKhWZexlsbBWDEA/mfKLt5mCIGuZG8LAF1U6bECAZGnpWyzaW34QoUA7RG5orxTtGLWVEjvCykGJhp3M/HWh+P4jcvXO8uEFtBoANAxI29a3NBon1OIoaAu78/gS2q+pjBqBmUWaqvEx37YC94UJgqcwB6IsSPhHnThwTheJuWkbu4F1CysTBEiZadRM6HnNLGJ4zdGH7jP9GCpywJ9tG333p34R2kZLdoC1mAtqk54nKIn2flVdbgbG4DigBQrzXzBafV9RGKjkkk34v4i4iHvMlwZXQgFT+8oII/mmjvCrsSPOl7iN57l25fVYLMSyTMeY0EkVuwOKnXrFZw4PEa3ccxlkV1D/wBoHWuom6V4k5r1boXU/rWvHqo0Zl3CpkY32MGmbit/CLluXxCo0yB4tdIHPnt0miHA+D4G/h1uW1ulGLgbjYsp0Oo1mh+J4RbvaMAPMAA/Ea0a4SzYSwLNpQ6qXMuT9YliJHmxoWPUPhJUMQI++JdQA22ZOI4fh1i5at3Fuh7xhB4jJzgbjbUjeidvs3hNPorvTVj0X+L0pW4peu4q/ZuvbRHsNIAJYEhw2p008I+NM9njV/66Wh6BvLqfKiDXv/7GDOiWh6RF3iuHw0ZLVt0adSxnYaEeI86jw0nIVOhBFbruHzNVhwcEEb/aKRyZGyNuY3G0xBFpZssPoPSudqqRYFTAkVymC1F7JnY0H4vwjvfGCc6iQCfD0PKdiffFFrhqC3Iq/bkRNefSTwe8yYhe74TatksrZGBHiAP0wmeXPnUOELHCLp5Mt3X3BftrN2txWa2UKMpgRA1H6NAl7Tm3glwa27mgdS7ZADmud4dNTzIiefuoqZQe8tm0RVtymxUYezq5eF4o9ReP/wDGKDcExTW7GIIdl0cwNicj67b7CquG8YuLhLmGyn6RXEysDOuU6RO086wYa0622tCMrb6CTqOfuqzZVlE0j8XADISAAdNvd7/dWvA2SIjWDNGLeAEbVrsYAUE5PiMJpKPJhbsWp/aLf+f/AMbV9AvKKS+y1ojE29vr/wDjane7QH7wrijB71HNUr9CuJ3LirKJmHPL7Q92591VAuci7jVxZ7aWra3F0VcyljoBJkiT5+dYuE8EN20zW7uWLjCMoYbBt+XtVHH4Fr7A3LpzLoJ3C66a/rWst7hQKZFaFkk6nU8z8q2Br8gwLiTivI7wJ0ahyxN348TPeCq7K7qzK2UkDeCANhTbwxh3FuKVrPB0B8bGAdhz50wYO4iZEXRVG3qfOuza582MI1cefJl8GmXGxYHv4hS3hNz1q6zw4A6CK1Ya8hG9Xm6vWk6jYmT9krq09+v71dXSaEqub1S1dXU3MKdb+8VNN2/XKurqQze8zZ0n/GJkwvtN60VG1dXUCHaclXttXV1cJWV3a5dq9rquveL6n2TJe51naurqJM8T3jezf4a+e43n/iFdXUMdpsH2TTgtx6VstcvfXV1TImm1Wpa6uqBI8wn2c/8Aybf+f/xtTjerq6qt3gMvug67VNdXVUSgmDi3Kgq+1XV1FWF8SWO9mgtdXVCyR3hXDbCtg2ryupiEE6urq6olp//Z"
                            alt=""
                        />
                    </div>
                    <div className="col-4">
                        <h3 style={{textAlign: "center", paddingTop: 20}}>
                            Lego </h3>
                        <h6 style={{
                            lineHeight: 2, fontFamily: '"Cormorant Infant", "serif"'
                        }}>
                            Những viên gạch Lego đủ loại có thể thiết lập nên vạn vật. Mặc dù đã có sự khác biệt về
                            thiết kế
                            và mục đích sử dụng của các viên gạch trong nhiều năm qua, nhưng một viên gạch Lego vẫn mang
                            tính tương hợp bằng một cách nào đó với một viên gạch khác thời trước.
                        </h6>
                    </div>
                </div>
                <div className="shadow-cosmetics-1">
                    <div className="row mx-0 bg-home text-white ">
                        <div className="row container mx-0 px-0">
                            <div className="column col-6 px-0 figure" id="zoomIn">
                                <img className="w-100 h-100 "
                                     src="https://media-api.advertisingvietnam.com/oapi/v1/media/433d57b6-f805-47d5-98b9-e243073f0320/1200x630/conver.png"/>
                            </div>
                            <div className="col-6 mt-2" style={{background: "white"}}>
                                <h3 style={{textAlign: "center", paddingTop: 30}}>Chủ đề robot học</h3>
                                <h6 style={{
                                    color: 'black',
                                    lineHeight: 2,
                                    paddingTop: 20,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    fontFamily: '"Cormorant Infant", "serif"',
                                    background: "white"
                                }}>
                                    Lego cũng đã bắt đầu sản xuất một dòng đồ chơi về robot được gọi là “Mindstorms” vào
                                    năm
                                    1999, và đã tiếp tục mở rộng và cải tiến phạm vi của dòng đồ chơi này kể từ đó.
                                    Nguồn
                                    gốc của sản phẩm xuất phát từ những viên gạch lập trình được phát triển từ phòng thí
                                    nghiệm MIT Media Lap, và tên của nó được lấy từ một tờ giấy bởi Seymour Papert, một
                                    nhà
                                    khoa học máy tính và nhà giáo dục người đã phát triển lý thuyết giáo dục về chủ
                                    nghĩa
                                    xây dựng và có những nghiên cứu được tài trợ đôi lúc bởi tập đoàn Lego.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 ">
                        <div className="row container mx-0 px-0 ">
                            <div className="col-6 mt-2 px-0">
                                <h3 style={{textAlign: "center", paddingTop: 30}}>Trong nền văn hóa đại chúng</h3>
                                <h6 style={{
                                    lineHeight: 2,
                                    paddingTop: 10,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    fontFamily: '"Cormorant Infant", "serif"'
                                }}>Sự nổi tiếng của Lego được chứng minh qua sự đại diện và cách sử dụng rộng rãi của nó
                                    trong nhiều hình thức của công trình văn hóa, bao gồm sách báo, phim ảnh và tác phẩm
                                    nghệ thuật. Nó thậm chí còn được sử dụng trong lớp học như một công cụ dạy học.Ở
                                    Mỹ, Lego Education North America là một liên doanh giữa tập đoàn Pitsco, Inc. và bộ
                                    phận
                                    giáo dục của Tập đoàn Lego.</h6>
                            </div>
                            <div className="col-6 px-0 column figure" id="zoomIn">
                                <img className="w-100 h-100 "
                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XQujRv2L6xrQKzsMoR-VY8nHAMMRmlev72S1CZNGJWC-XDbXalNSBIb6ulUHdJX_Eho&usqp=CAU"
                                     style={{height: "100px!important"}}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <section id="new-arrival" className="new-arrival py-5">
                <div className="container-fluid">
                    <div className="d-flex flex-column align-items-center justify-content-center mt-5 mb-3">
                        <h3 className="text-uppercase">Sản phẩm bán chạy</h3>
                    </div>
                    <div data-aos="fade-in" className="aos-init aos-animate">
                        <div className="row-cols-9">
                            <Carousel responsive={responsive}>
                                {
                                    legoList.map((value, index) => (
                                            <div className="col m-1">
                                                <div className="card-container" style={{marginTop: '0px'}}>
                                                    <Link to={`/product-detail/${value.id}`}
                                                          className="hero-image-container">
                                                        <img className="hero-image"
                                                             src={value.image}
                                                             alt="Spinning glass cube"/>
                                                    </Link>
                                                    <div className='mt-2'>
                                                        <Formik initialValues={{
                                                            quantity: 1,
                                                            price: value.price,
                                                            lego: value.id
                                                        }} onSubmit={async (value) => {
                                                            await cartService.saveCart(value)
                                                            console.log(value+'aaaaaaaaaa')
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
                            </Carousel>

                        </div>
                        {/*<div className="d-flex justify-content-center">*/}
                        {/*    <Link to='/product' className="btn">Tải thêm</Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>


        </>);
}

export default Home;