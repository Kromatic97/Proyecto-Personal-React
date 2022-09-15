import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardHome = ({ product }) => {
  //usenavigate para cuando demos click en la card del producto
  //nos envie a la ruta del producto id seleccionado
  //importar el useNavigate
const navigate = useNavigate()
//funcion para navegar el producto seleccionado
//esto se le pasa a la imagen directo-
const handleClick = () => {
  navigate(`/product/${product.id}`) //--navega al ProductDetail
}



  return (
<div>
    <article onClick={handleClick} className='card-home'>
      <header  className='card-home__header'>
        <img className='card-home__img' src={product.productImgs[0]} alt=""/>
      </header>

      <div className='card-home__body'>
        <h3 className='card-home__name'>{product.title}</h3>

        <section className='card-home__price'>
          <h4 className='card-home__price-label'>Price</h4>
          <span className='card-home__price-value'>
            {product.price}</span>
        </section>

        <button className='card-home__btn'>
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        </button>
      </div>


    </article>
</div>


  )
}

export default CardHome