import axios from "axios";

export const findByAll= async ()=>{
    try{
        return (await axios.get(`http://localhost:8080/cart`)).data
    }catch (e){
        console.log(e);
    }
}