import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'

const Home = () => {

const dispatch = useDispatch()

  //viene de products.slice.js
  //los thang se dispachan igual que las actions
useEffect(() => {

  dispatch(getAllProducts())

}, [])

//se accede a los datos del productsSlice
//con UseSelector con  el mismo nombre usado en index.js products
const products = useSelector(state => state.products)
console.log(products)


  return (
    <div>Home</div>
  )
}
export default Home

