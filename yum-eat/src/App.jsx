
import './App.css'
import Categories from './components/Categories'
import Delivery from './components/Delivery'
import Featured from './components/Featured'
import Footer from './components/Footer'
import HelloComponent from './components/HelloComponent'
import Meal from './components/Meal'
import NewsLetter from './components/NewsLetter'
import TopNav from './components/TopNav'
import TopPicks from './components/TopPicks'

function App() {
 

  return (
    <>
      <TopNav></TopNav>
      <Featured></Featured>
      <Delivery></Delivery>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
