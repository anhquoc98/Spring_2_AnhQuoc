import axios from "axios";

export const findByLego = async (name, page) => {
    try {
        return (await axios.get(`http://localhost:8080/lego/list?name=${name ? name : ''}&page=${page ? page : 0}`)).data
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/lego/${id}`)).data
    } catch (e) {
        console.log(e)
    }
}

export const findByImg = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/lego/legoImgs/${id}`)).data
    }catch (e){
        console.log(e)
    }
}