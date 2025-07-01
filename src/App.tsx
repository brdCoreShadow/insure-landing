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

const App: React.FC = () => {
  const { toggleShare, isShare } = useToggle();

  return (
    <>
      <Header isToggle={toggleShare} isMenu={isShare} />
      <SharedLayout>
        <Hero />
        <About />
        <HowWeWork />
      </SharedLayout>
      <Footer>
        <SocNet />
        <ContactLinks>
          <OurCompany/>
          <HelpMe/>
        </ContactLinks>
      </Footer>
    </>
  );
};

export default App;
