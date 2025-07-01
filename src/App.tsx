import { useToggle } from "./hooks/useToggle"

import Header from "./layouts/Header/Header"
import Hero from "./components/Hero/Hero"


const App:React.FC = () => {

const {toggleShare ,isShare} = useToggle()
  
return (
    <>
    <Header isToggle={toggleShare} isMenu={isShare}/>
    <Hero/>
    </>
  )
}

export default App
