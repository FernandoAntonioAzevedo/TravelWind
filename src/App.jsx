import "./App.css"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Categories from "./components/categories/Categories"
import About from "./components/about/About"
import Destinations from "./components/destinations/Destinations"
import Tours from "./components/tours/Tours"
import Footer from "./components/footer/Footer"


const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Categories />
      <About />
      <Destinations />
      <Tours />
      <Footer />
    </>
  )
}

export default App