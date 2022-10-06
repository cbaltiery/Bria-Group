const DBURL ="http://localhost:4000";

export const Endpoints = {
    garden:{
        createGarden: `${DBURL}/garden/creategarden`,
        getGardens: `${DBURL}/garden//getgardens`
    }
}