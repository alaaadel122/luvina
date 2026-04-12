import axios from "axios";

export default async function getProducts(){
     const res = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    return res.data.data;
}