// import React from 'react'
import { products } from "../../data/products"
import "./Excersice6.css"
products

type TProductCard = {
    img: string,
    content: string,
    viewer: number
}

const ProductCard = ({img, content, viewer}: TProductCard) => {
    return (
        <div className='productCard'>
            <div>
                <img className='imgCard' src={img} alt="" />
            </div>
            <h4 className='content'>{content}</h4>
            <p className='viewer'>{viewer} lượt xem</p>
        </div>
    )
}

const Excersice6 = () => {
  return (
    <>
        <div className="header">
            <h3 className="tinMoi">TIN MỚI</h3>
            <h4 className="xemThem">Xem thêm </h4>
        </div>
        
        <div className='productLists'>
            {/* <ProductCard img="./public/images/A32.png" content='Noi dung 1' viewer={5} /> */}
            {products.map((product, index) => {
                return(
                    <ProductCard key={`Excersice6_${index}`} img={product.img} content={product.content} viewer={product.viewer} />
                )
            })}
        </div>
    </>
    
  )
}

export default Excersice6;