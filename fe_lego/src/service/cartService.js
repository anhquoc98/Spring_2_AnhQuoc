import axios from "axios";

export const findByAll = async () => {
    try {
        return (await axios.get(`http://localhost:8080/cart`)).data
    } catch (e) {
        console.log(e);
    }
}

export const saveCart = async (value) => {
    try {
        return await axios.post(`http://localhost:8080/cart/saveOrderDetail`, {...value})
    } catch (e) {
        console.log(e)
    }
}
export const deleteOrderDetail = async (id) => {
    try {
        return await axios.delete(`http://localhost:8080/cart/${id}`)
    } catch (e) {
        console.log(e)
    }
}

export const totalOrderDetail = async () => {
    try{
        return await (await axios.get(`http://localhost:8080/cart/total`)).data
    }catch (e){
        console.log(e)
    }
}