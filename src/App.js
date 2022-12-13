import React, { useRef } from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";

const App = () => {
  const scrollToSection = useRef(null);
  const scrollToWorks = useRef(null);
  const scrollToContacts = useRef(null);

  const scrollToAbout = (e) => {
    window.scrollTo({ top: scrollToSection.current.offsetTop, behavior: 'smooth' });
  } 
  const scrollToWork = (e) => {
    window.scrollTo({ top: scrollToWorks.current.offsetTop, behavior: 'smooth' });
  }
  const scrollToContact = (e) => {
    window.scrollTo({ top: scrollToContacts.current.offsetTop, behavior: 'smooth' });
  }
  return (
    <>
      <Header scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} scrollToWork={scrollToWork}/>
      <Main scrollToAbout={scrollToAbout} scrollToSection={scrollToSection} scrollToWorks={scrollToWorks} />
      <Footer scrollToWork={scrollToWork} scrollToAbout={scrollToAbout} scrollToContacts={scrollToContacts}/>
    </>
  )
}

export default App;
