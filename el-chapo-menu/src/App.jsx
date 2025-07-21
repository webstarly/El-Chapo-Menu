import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    
    <Header/>
      <div className=' container bg-slate-100 mx-auto min-h-[calc(100vh-120px)] '>
        <Outlet/>
      </div>
    <Footer/>
    
    </>
  )
}

export default App;
