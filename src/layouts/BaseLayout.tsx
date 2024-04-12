import { Outlet } from 'react-router-dom'
import Header from '@/features/header/header'
import Footer from '@/features/footer/footer'

const BaseLayout = () => {
    return (
        <div>
           <Header/>
            <main>
                <Outlet />
            </main>
           <Footer/>
        </div>
    )
}

export default BaseLayout
