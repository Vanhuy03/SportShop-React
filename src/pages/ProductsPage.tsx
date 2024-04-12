import { IProduct } from "@/common/type"
import { useProductQuery } from "@/hooks/useProductQuery"
import { getProducts } from "@/services/product"
import { useEffect } from "react"
import { Link } from "react-router-dom"


const ProductsPage = () => {
    const {data,isLoading,isError} = useProductQuery()
  
    return (
        <>
        <section className="container mx-auto mb-10">
    <div className="text-center py-10">
        <h5 className="text-3xl font-bold mb-5 ">Categories Product Off The Month</h5>
        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
    </div>
    <div className="flex gap-10 text-center">
    <div>
        <img className="rounded-full" src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/category_img_01.jpg" alt=""/>
        <p className="py-5 text-2xl font-bold">Watches</p>
        <button className="bg-green-400 h-12 w-32 w rounded-lg border mt-4 hover:bg-slate-300">Go Shop</button>
    </div>
    <div>
        <img className="rounded-full" src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/category_img_02.jpg" alt=""/>
        <p className="py-5 text-2xl font-bold">Shoes</p>
        <button className="bg-green-400 h-12 w-32 w rounded-lg border mt-4 hover:bg-slate-300">Go Shop</button>
    </div>
    <div>
        <img className="rounded-full" src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/category_img_03.jpg" alt=""/>
        <p className="py-5 text-2xl font-bold">Accessories</p>
        <button className="bg-green-400 h-12 w-32 w rounded-lg border mt-4 hover:bg-slate-300">Go Shop</button>
    </div>
</div>
</section>
<body className="bg-color">
    <section className="container mx-auto py-28">
        <div className="text-center">
        <h5 className="text-3xl font-bold mb-5 ">Featured Product</h5>
        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
    </div>
    <div className="flex gap-5 py-10">
        {data?.map((item:IProduct,index:number)=>(
                <div key={index}>
                <img className="rounded-lg border mb-3" src={item.image} alt=""/>
                <div className="flex justify-between ">
                    <h4 className="text-xl font-mono font-bold">{item.name}</h4>
                    <p className="text-xl font-mono font-semibold">{item.price}$</p>
                </div>
                <p className="my-5">Description:{item.desc}</p>
                <div className="text-center">
                    <Link to={`/products/${item?.id}`}><button className="w-52 h-12 mt-5 bg-green-400 rounded-lg border hover:bg-slate-200 " >Add To Cart</button></Link>
                </div>
            </div>
        ))}
    
    </div>
    <div className="px-2 py-1 mx-4 text-center text-xs transition-colors transition-bg transition-border delay-200"></div>
    </section> 
</body>
        </>
        
    )
   
}

export default ProductsPage
