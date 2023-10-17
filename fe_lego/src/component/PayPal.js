import React, {useEffect, useRef} from 'react';
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

function PayPal() {
    const paypal = useRef();
    const navigate=useNavigate();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool looking Table",
                            amount: {
                                currency_code: "CAD",
                                value: 1.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                Swal.fire({
                    title: 'Thanh toán hoàn tất',
                    text: 'Đơn hàng đã được xử lý.',
                    icon: 'success',
                });
                navigate("/product")

            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}>
            </div>
        </div>
    );
}

export default PayPal;