// import React from 'react'
import { topRatedProducts } from "../../data/topRatedProducts";
import { bestSellingProducts } from "../../data/bestSellingProducts";
import { lastestProducts } from "../../data/lastestProducts";
import { groupProduct } from "../../data/groupProduct";
import "./Excersice7.css"

type TProductList = {
    group: string,
    idGroup: number
}
type TItemProduct = {
    img: string,
    content: string,
    price: number
}

const ItemProduct = ({img, content, price} : TItemProduct) => {
    return (
        <>
            <li>
                <div className="itemProduct">
                    <div className="imgItem">
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <h4>{content}</h4>
                        <p>${price}</p>
                    </div>
                </div>
            </li>
        </>
    )
}

const ProductList = ({group, idGroup = 0} : TProductList) => {
    return (
        <div className="groupProduct">
            <h3>{group} {idGroup}</h3>
            <div>
                <ul className="listItem">
                    if (idGroup == 0) {
                        topRatedProducts.map((topRatedProducts, indexTopRated) => {
                            return (
                                    <ItemProduct key={`ProductList_${indexTopRated}`} img={topRatedProducts.img} content={topRatedProducts.content} price={topRatedProducts.price}/>
                            )
                        })  
                    } else (idGroup == 1){
                        bestSellingProducts.map((bestSellingProducts, indexBestSelling) => {
                            return (
                                    <ItemProduct key={`ProductList_${indexBestSelling}`} img={bestSellingProducts.img} content={bestSellingProducts.content} price={bestSellingProducts.price}/>
                            )
                        })   
                    } else (idGroup == 2){
                        lastestProducts.map((lastestProducts, indexLastest) => {
                            return (
                                    <ItemProduct key={`ProductList_${indexLastest}`} img={lastestProducts.img} content={lastestProducts.content} price={lastestProducts.price}/>
                            )
                        })   
                    }
                </ul>
            </div>
        </div>
    )
}

export const Excersice7 = () => {
  return (
    <div className="allProduct">
        {
            groupProduct.map((group, indexGroup) => {
                return (
                    <ProductList key={`Excersice7_${indexGroup}`} group={group.content} idGroup={indexGroup}/>
                )
            })
        }
    </div>
  )
}
