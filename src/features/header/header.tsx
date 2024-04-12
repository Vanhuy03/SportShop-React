import React from 'react'


const Header = () => {
  return (
    <div>
        <header className="container mx-auto py-5 flex grid-cols-2 gap-6">
    <div className="w-3/6">
       <h5 className="text-4xl font-black ">Leo <span className="text-green-400">Sport</span></h5>
    </div>
    <nav className="w3/6">
        <ul className="flex gap-7 text-lg font-sans font-bold justify-items-center ">
           <a href="products"><li className=" hover:text-yellow-800">Home</li></a>
            <a href=""><li className=" hover:text-yellow-800 ">About</li></a>
            <a href="products"><li className="scroll-pt-5  hover:text-yellow-800">Product</li></a>
            <a href=""><li className="">Contact</li></a>
            <a href="">Cart</a>
            <a href="signin"><li>Login</li></a>
            <a href="signup"><li>SignUp</li></a>
        </ul>
    </nav>
</header>
<nav className="banner ">
    <div className="container mx-auto flex">
    <div className="mt-60">
        <h5 className="text-3xl font-medium italic mb-5">Leo <span className="text-green-400">Sport</span> </h5>
        <p className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p className="italic">Recusandae illo perferendis facilis ut quo quasi eum! Optio dolor accusantium sint voluptatem fuga, quia dolorem voluptatum saepe iste aliquam obcaecati voluptas.</p>
        <button className="bg-green-400 h-12 w-32 w rounded-lg border mt-4 hover:bg-slate-300">Make Revation</button>

    </div>
    <div className="mt-28">
        <img src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/banner_img_02.jpg" alt=""/>
    </div>
</div>
</nav>
    </div>
  )
}

export default Header