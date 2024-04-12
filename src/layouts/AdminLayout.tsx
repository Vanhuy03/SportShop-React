import React from 'react'
import { Link, Outlet } from 'react-router-dom';

type Props = {}

const AdminLayout = (props: Props) => {
  
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
          {/* Header */}
          <header className="bg-gray-800 py-4">
          <h1 className="text-white text-center text-4xl font-bold">Admin Manage</h1>
            <div className="container flex gap-8 mx-auto px-4">
             
            <Link to={`/admin`}> <h1 className="text-white text-lg font-semibold">Dashboard</h1></Link> 
            <Link to={`/admin/products`}> <h1 className="text-white text-lg font-semibold">Products</h1></Link> 
              <h1 className="text-white text-lg font-semibold">Account</h1>
            </div>
            
            
          </header>
    
          {/* Main Content */}
          <main className="flex-grow container mx-auto px-4 py-8">
           <Outlet></Outlet>
          </main>
    
          {/* Footer */}
          <footer className="bg-gray-800 py-4 mt-auto">
            <div className="container mx-auto px-4">
              <p className="text-white text-center">© 2023 Admin Panel. All rights reserved.</p>
            </div>
          </footer>
        </div>
      );
    }

export default AdminLayout