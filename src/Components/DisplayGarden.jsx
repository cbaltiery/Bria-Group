import { Endpoints } from "./endPoints"
import { useEffect, useState } from "react"
import ShowGarden from "./ShowGarden"
import Header from "./Header"
import Footers from "./Footers"

const DisplayGarden = (props) => {
    const [displayGarden,setDisplayGarden] = useState({gardens:[]})

   async function fetchGarden ()  {

        const requestOptions = {
            method: "GET"
        }
        try {
            const response = await fetch (Endpoints.garden.getGardens, requestOptions)
            const data = await response.json()
            setDisplayGarden(data)
            
        } catch (error) {
            console.error(error)
        }

    }
        useEffect(() => {
            fetchGarden()
        }, []);

    return ( 
    <>
   {displayGarden ? <ShowGarden displayGarden = {displayGarden} />: <h3>Loading...</h3>}
    </> 
    );
}
 
export default DisplayGarden;