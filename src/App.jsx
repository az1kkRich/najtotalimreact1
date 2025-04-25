import About from "./components/About"
import Articles from "./components/Articles"
import ContactUs from "./components/ContactUs"
import Covid from "./components/Covid"
import Header from "./components/Header"
import HeaderSlide from "./components/HeaderSlide"
import Services from "./components/Services"

function App() {

  return (
    <>
      <Header />
      <HeaderSlide />
      <About />
      <Services />
      <Covid />
      <Articles />
      <ContactUs />
      
    </>
  )
}

export default App