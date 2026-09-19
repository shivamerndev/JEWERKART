import { Outlet } from 'react-router-dom'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Marquee from '../components/global/Marquee'

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-theme-secondary">
      <Marquee/>
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App