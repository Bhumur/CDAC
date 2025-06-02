import { useState } from "react"
import FruitContext from "./FruitContext"
import Fruit from "./Fruit"
import PrintList from "./PrintList"

const QuesA1_Main = () => {
    const [fruit, setFruit] = useState([])
    const saveFruit = (data) => {
        setFruit([...fruit, data])
    }
    return(
            <>
                <FruitContext.Provider value={{fruit : fruit, saveFruit : saveFruit}}>
                    <Fruit/>
                    <PrintList/>
                </FruitContext.Provider>
            </>
    ) 
} 
export default QuesA1_Main