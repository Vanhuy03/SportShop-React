import PrivateRoute from '@/components/PrivateRoute'
import Signin from '@/features/auth/_components/Signin'
import SignupPage from '@/features/auth/_components/Signup'
import Add from '@/features/product/_components/Add'
import Edit from '@/features/product/_components/Edit'
import List from '@/features/product/_components/List'
import { useLocalStorage } from '@/hooks/useStorage'
import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import ProductDetailPage from '@/pages/ProductDetail'
import ProductsPage from '@/pages/ProductsPage'
import ManageDashboardPage from '@/pages/manager/dashboard'
import ManagerProductPage from '@/pages/manager/product'
import { Route, Routes } from 'react-router-dom'

const Routers = () => {
    const [user, , removeUser] = useLocalStorage('user', {})
    const reload = () => window.location.reload()
    return (
        <>
            <div>
                {!user || Object.keys(user).length === 0 ? null : (
                    <button
                        className='absolute top-12 right-10 px-3 py-1 bg-gray-500 rounded hover:bg-gray-800 text-white'
                        onClick={() => {
                            removeUser()
                            reload()
                        }}
                    >
                        Logout
                    </button>
                )}
            </div>
            <Routes>
                <Route path='/' element={<BaseLayout />}>
                    <Route index element={<ProductsPage />} />
                    <Route path='products' element={<ProductsPage />} />
                    <Route path='signup' element={<SignupPage />} />
                    <Route path='signin' element={<Signin/>} />
                    <Route path='products/:id' element={<ProductDetailPage />} />
                </Route>
                <Route
                    path='admin'
                    element={
                        // <PrivateRoute
                        //     isAllowed={!!user && Object.keys(user).length > 0 && user?.user?.roles?.includes('admin')}
                        // >
                            <AdminLayout />
                        // </PrivateRoute>
                    }
                >
                    <Route index element={<ManageDashboardPage />} />
                    <Route path='products' element={<ManagerProductPage />}>
                        <Route index element={<List/>} />
                        <Route path='add' element={<Add/>} />
                        <Route path='edit/:id' element={<Edit />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default Routers