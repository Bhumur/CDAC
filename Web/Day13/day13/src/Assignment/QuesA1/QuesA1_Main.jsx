import { useState } from "react"
import axios from 'axios';
import FruitContext from "./FruitContext"
import Fruit from "./Fruit"
import PrintList from "./PrintList"

const QuesA1_Main = () => {
    const [fruit, setFruit] = useState([])
    const saveFruit = async(data) => {
        setFruit([...fruit, data])
        handelReq({data})
    }

    const handelReq = async(d) =>{
        try {
                const response = await axios.post('http://localhost:5000/fruit', d);
                console.log(response.data);
            } catch (error) {
                console.error('Error sending data:', error);
            }
            
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