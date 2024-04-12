import React from 'react'



const Footer = () => {
  return (
    <div>
        <footer className=" bg-slate-700">
    <div className="container mx-auto flex grid-cols-3 py-10">
        <div className="w-2/6">
            <h5 className="text-3xl font-black mb-4">Leo <span className="text-green-400">Sport</span></h5>
            <hr/>
            <a className="text-lg text-white mb-3" href="">Ha Noi-VietNam</a><br/>
            <a className="text-lg text-white mb-3" href="">0342365505</a><br/>
            <a className="text-lg text-white mb-3" href="">leohuy0387@gmail.com</a>
        </div>
        <div className="w-2/6">
            <h5 className="text-3xl text-white font-bold mb-4">Product</h5>
            <hr/>
            <a className="text-lg text-white mb-3" href="">Luxury</a><br/>
                <a className="text-lg text-white mb-3" href="">Sport Wear</a><br/>
                <a className="text-lg text-white mb-3" href="">   Men's Shoes</a><br/>
                <a className="text-lg text-white mb-3" href=""> Gym Accessories</a><br/>
                <a className="text-lg text-white mb-3" href="">Sport Shoes</a><br/>
        </div>
        <div className="w-2/6">
            <h5 className="text-3xl text-white font-bold mb-4">Further Info</h5><hr/>
            <a className="text-lg text-white mb-3" href="">Home</a><br/>
            <a className="text-lg text-white mb-3" href="">About</a><br/>
            <a className="text-lg text-white mb-3" href="">Product</a><br/>
            <a className="text-lg text-white mb-3" href="">Contact</a><br/>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer