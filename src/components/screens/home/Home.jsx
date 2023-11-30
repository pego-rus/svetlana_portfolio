import ContactMe from "./contactForm/ContactMe"
import Footer from "./footer/Footer"
import MainScreen from "./mainScreen/MainScreen"
import PortfolioPage from "./portfolioPage/PortfolioPage"

const Home = () => {

    return (
        <>
            <MainScreen />
            <PortfolioPage />
            <ContactMe />
            <Footer />
        </>
 )
}

export default Home