import Header from "./layouts/Header/Header"
import { useToggle } from "./hooks/useToggle"


const App:React.FC = () => {

const {toggleShare ,isShare} = useToggle()
  
return (
    <>
    <Header isToggle={toggleShare} isMenu={isShare}/>
    </>
  )
}

export default App
