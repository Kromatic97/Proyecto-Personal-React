import React, { useState } from 'react'



const ProductDescription = ({ productInfo }) => {
  //useState para contador//
  const [counter, setCounter] = useState(1)
  const handlePlus = () => setCounter(counter + 1)
  const handleMinus = () => {
    //aqui el contador condiciona para que no sea menor que 1//
    if (counter - 1 >= 1) {
      setCounter(counter - 1)
    }
    (counter - 1)
  }
  return (
    <div className='product-info'>
      
      <header className='product-info__header-img'>
        <img className='product-info__img' src={productInfo?.productImgs[0]} alt="" />
      </header>

      <section className='product-info__card'>
        <h2 className='product-info__name'>{productInfo?.title}</h2>
        <p className='product-info__description'>{productInfo?.description}</p>

        <div className='product-info__body'>
          <article className='product-info__price'>
            <h3 className='product-info__price'>Price</h3>
            <span className='product-info__price-value'>{productInfo?.price}</span>
          </article>

          <article className='product-info__quantity'>
            <h3 className='product-info__quantity-label'>Quantity</h3>

            <div className='product-info__btn-quantity'>
              <button className='product-info__btn-count' onClick={handleMinus}>-</button>
              <div>{counter}</div>
              <button  className='product-info__btn-count' onClick={handlePlus}>+</button>
            </div>
          </article>
        </div>
          <button className='product-info_btn-cart'>ADD TO CART</button>
      </section>
    </div>

  )
}
export default ProductDescription