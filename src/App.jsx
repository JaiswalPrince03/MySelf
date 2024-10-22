import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import TechStack from './Components/TechStack'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  // Add console logs here
  console.log('App component is being rendered');

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Add console logs here
    console.log('useEffect is being called');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Add console logs here
    console.log('useEffect is being called with theme:', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Add console logs here
    console.log('toggleTheme is being called');
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App