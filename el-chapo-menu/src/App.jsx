import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './themecontext/themeContext';

function App() {

  

  return (
    <>
    <ThemeProvider>
    <Header/>
      <div className=' container bg-white dark:bg-slate-900 mx-auto min-h-[calc(100vh-120px)] '>
        <Outlet/>
      </div>
    <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App;
