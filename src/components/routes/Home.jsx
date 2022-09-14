import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'

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
    <div className='home'>
      <div className='home__container-car'>
        {
          products?.map (product => {
            <CardHome />
          })
        }
      </div>
    </div>
  )
}
export default Home

