import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Ministries from './components/Ministries'
import DVBS from './components/DVBS'
import News from './components/News'
import About from './components/About'
import ContactUs from './components/ContactUs'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(<>
      <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='ministries' element={<Ministries />} />
            <Route path='dvbs' element={<DVBS/>} />
            <Route path='news' element={<News/>} />
            <Route path='about' element={<About/>} />
            <Route path='countact-us' element={<ContactUs/>} />
      </Route>
  </>))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
