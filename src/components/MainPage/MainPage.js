import React from 'react';
import AboutVeganism from '../AboutVeganism/AboutVeganism';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import './MainPage.css';

const MainPage = () => {
    return <div className="bg-cover bg-fixed background-img">
            <div className="items-center text-center h-screen">
                <SearchBar />
            </div>
            <AboutVeganism />
            <Footer />
        </div>
}

export default MainPage;