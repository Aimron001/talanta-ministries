import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Ministries from './pages/Ministries'
import Children from './pages/Children'
import Youth from './pages/Youth'
import Worship from './pages/Worship'
import DVBS from './pages/DVBS'
import News from './pages/News'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(<>
      <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='ministries' element={<Ministries />}>
              <Route path='children' element={<Children />} />
              <Route path='youth' element={<Youth />} />
              <Route path='worship' element={<Worship />} />
            </Route>
            <Route path='dvbs' element={<DVBS/>} />
            <Route path='news' element={<News/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact-us' element={<ContactUs/>} />
      </Route>
  </>))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
