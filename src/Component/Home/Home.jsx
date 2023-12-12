import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";




const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;