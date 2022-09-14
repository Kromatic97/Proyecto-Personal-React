import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState:null,
    reducers: {
        setProducts:(state, action) => action.payload 
    }
    
})

export const {setProducts} = productsSlice.actions
export default productsSlice.reducer

// en esta carpeta se realiza el redux thang
export const getAllProducts = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(URL)
    .then(res => dispatch(setProducts(res.data.data.products)))
    .catch(err => console.log(err))
}

//por cada archivo solo se puede hacer un export
//para la peticion a la API--una action.payload (pas info dinamica al estado)
//luego se exporta la action
//luego se exporta una funcion que retorna otra funcion