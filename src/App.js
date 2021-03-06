import React, {useState} from 'react'
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar'
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toogle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle></GlobalStyle>
      <Navbar toogle={toogle}/>
      <Dropdown isOpen={isOpen} toogle={toogle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
    </>
  );
}

export default App;
