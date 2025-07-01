import { useToggle } from "./hooks/useToggle";

import Header from "./layouts/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import Footer from "./layouts/Footer/Footer";
import SocNet from "./components/Socnet/SocNet";
import ContactLinks from "./components/ContactLinks/ContactLinks";
import OurCompany from "./components/ContactLinks/OurCompany/OurCompany";
import HelpMe from "./components/ContactLinks/HelpMe/HelpMe";
import Contact from "./components/ContactLinks/Contact/Contact";
import Others from "./components/ContactLinks/Others/Others";
import Portal from "./components/Portal/Portal"
import Menu from "./components/Menu/Menu";
import { useEffect } from "react";

const App: React.FC = () => {
  const { toggleShare, isShare } = useToggle();

 useEffect(() => {
    if (isShare) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isShare]);

  return (
    <>
      <Header isToggle={toggleShare} isMenu={isShare} />
      <SharedLayout>
        {isShare ? 
      <Portal>
        <Menu/>
      </Portal>
      : null  
      }
        <Hero />
        <About />
        <HowWeWork />
      </SharedLayout>
      <Footer>
        <SocNet />
        <ContactLinks>
          <OurCompany/>
          <HelpMe/>
          <Contact/>
          <Others/>
        </ContactLinks>
      </Footer>
    </>
  );
};

export default App;
