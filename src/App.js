import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
    const [currentPage, setCurrentPage] = useState("About");
    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        } else if (currentPage === "Portfolio") {
            return <Portfolio />;
        } else if (currentPage === "Contact") {
            return <Contact />;
        } else {
            return <Resume />;
        }
    };

    return (
        <div>
            <Header setCurrentPage={setCurrentPage} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;
