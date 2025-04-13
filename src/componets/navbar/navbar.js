import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // How to Make Link Item Active when Scrolling past Section
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'Home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;

                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='transparent-nav'>
            <nav className={`position-fixed left-0 right-0 z-10 ${isScrolled ? 'bg-black shadow-sm' : 'bg-transparent'}`}>
                <Container>
                    <div className="d-flex justify-between pt-3">
                        <div className="d-flex">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-mobile-screen-button text-amber-500"></i>
                                <h1 className="text-sm font-semibold text-white">+1 5589 55488 55</h1>
                            </div>
                            <div className="flex items-center space-x-2 ml-4">
                                <i className="fa-regular fa-clock text-amber-500"></i>
                                <h1 className="text-sm font-semibold text-white">Mon-Sat: 11:00 AM - 23:00 PM</h1>
                            </div>
                        </div>
                        <div>
                            <a href="#Book table"><button className="bg-amber-500 text-white px-4 py-1 font-semibold rounded-full">Book a Table</button></a>
                        </div>
                    </div>

                    <div className="d-flex justify-between text-white py-3">
                        <div className="text">
                            <h1 className="text-xl font-semibold">Delicious</h1>
                        </div>
                        <div>
                            <ul className="d-flex font-medium">
                                {['Home', 'About', 'Menu', 'Specials', 'Events', 'Chefs', 'Gallery', 'Causes', 'Contact'].map(
                                    (section) => (
                                        <li key={section}>
                                            <a href={`#${section}`} className={`text-uppercase px-2 text-xs tracking-widest ${activeSection === section ? 'text-amber-500 font-bold' : 'text-white'}`}>{section}</a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
        </div>
    );
}

export default Navbar;
