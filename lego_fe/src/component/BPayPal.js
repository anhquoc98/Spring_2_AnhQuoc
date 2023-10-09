import React, {useState} from 'react';
import PayPal from "./PayPal";

function BPayPal() {
    const [checkout,setCheckOut]=useState(false)
    return (

        <>
            {
                checkout ? (
                    <PayPal/>
                ) : (
                    <button className="btn btn-secondary w-100 shadow-0 mb-2" onClick={() => {
                        setCheckOut(true);
                    }
                    }>Thanh toán</button>
                )
            }
        </>
    )
}

export default BPayPal;