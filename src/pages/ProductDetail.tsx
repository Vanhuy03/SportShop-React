import { useProductQuery } from '@/hooks/useProductQuery'
import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const ProductDetailPage = (props: Props) => {
    const {id} = useParams()
    const {data} = useProductQuery(id)
    return <>
    <body className="bg-color">
    
   

    <section className="container mx-auto py-10 ">
    <div className='py-10'>
    <h5 className="text-xl font-medium my-10">Product-Detail</h5>
    </div>
        <div  className="flex grid-cols-2 gap-5 ">
            <div   className="w-2/5 bg-white  ">
                <img className="h-full"  src={data?.image} alt=""/>
               
            </div>
            <div className="w-3/5 bg-white p-5 rounded-lg">
                <h5 className="text-2xl font-mono mb-4">{data?.name}</h5>
                <span className="text-xl font-mono mb-4">{data?.price}$</span>
                <p className="mb-4"><span className="font-mono text-xl">Brand:</span>Esasy Wear</p>
                <p className="mb-4"><span className="font-mono text-xl">Description:</span>{data?.desc}</p>
                <p className="mb-4"><span className="font-mono text-xl">Color:</span>White/Black</p>
               <div className="flex gap-5">
               <a href=""> <button className="w-52 h-12 text-white text-lg bg-green-400 rounded-lg border hover:bg-slate-200">Buy Now</button></a>
                <a href=""><button className="w-52 h-12 text-white text-lg bg-green-400 rounded-lg border hover:bg-slate-200">Add To Cart</button></a>
               </div>
            </div>
        </div>
        <div className="py-10">
            <h5 className="text-xl font-medium my-10">Related Products</h5>
            <div className="flex gap-4">
                <div className="text-center" >
                    <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/feature_prod_03.jpg" alt=""/>
                    <p className="py-5 text-xl font-bold">Accessories</p>
                    <p className="font-medium">S/M/L/XL</p>
                    <p className="font-mono">250.00$</p>
    
                </div>
                <div className="text-center">
                    <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/feature_prod_03.jpg" alt=""/>
                    <p className="py-5 text-xl font-bold">Accessories</p>
                    <p className="font-medium">S/M/L/XL</p>
                    <p className="font-mono">250.00$</p>
    
                </div>
                <div className="text-center">
                    <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/feature_prod_03.jpg" alt=""/>
                    <p className="py-5 text-xl font-bold">Accessories</p>
                    <p className="font-medium">S/M/L/XL</p>
                    <p className="font-mono">250.00$</p>
    
                </div>
                <div className="text-center">
                    <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/feature_prod_03.jpg" alt=""/>
                    <p className="py-5 text-xl font-bold">Accessories</p>
                    <p className="font-medium">S/M/L/XL</p>
                    <p className="font-mono">250.00$</p>
    
                </div> 
            </div>
        </div>
    </section>
    </body>
    </>
      {data?.name}
      {data?.price}
      {data?.image}
      {data?.desc}
    
}

export default ProductDetailPage
