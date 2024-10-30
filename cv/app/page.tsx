import Navbar from "./components/Navbar"
import Splash from "./components/Splash"
import Education from "./components/Education"
import Honors from "./components/Honors"
import Skills from "./components/Skills"
import Leadership from "./components/Leadership"
import Projects from "./components/Projects"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <>
      <Navbar/>
      <Splash/>
      <Education/>
      <Honors/>
      <Skills/>
      <Leadership/>
      <Projects/>
      <Footer/>
    </>
  );
}
