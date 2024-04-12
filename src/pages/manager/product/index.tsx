
import { Button } from 'antd'
import { Link, Outlet } from 'react-router-dom'

const ManagerProductPage = () => {
    return (
        <div>
            <h2 className="mb-3 text-3xl">Quản lý sản phẩm</h2>
            
          <main>
            <Outlet/>
          </main>
            
        </div>
    )
}

export default ManagerProductPage
