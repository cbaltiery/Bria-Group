import { Endpoints } from "./endPoints"
import { useEffect, useState } from "react"

const DisplayGarden = (props) => {
    const [displayGarden,setDisplayGarden] = useState([])

    const fetchGarden = async () => {
        // Section for when token is running successfully
        // let myHeaders = new Headers();
        // myHeaders.append("Authorization", props.token)

        const requestOptions = {
            method: "GET"
        }

        try {
            const response = await fetch (Endpoints.garden.getGardens, requestOptions)
            const data = await response.json()
            setDisplayGarden(data)
            console.log(data)

        } catch (error) {
            console.error(error)
        }

    }
        useEffect(() => {
            fetchGarden()
        }, []);

    return ( 
    <>
    <h1>Garden Display Component!</h1>
    </> 
    );
}
 
export default DisplayGarden;