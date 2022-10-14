const ShowGardenCard = (props) => {
    let locationArray = Object.entries(props.location)
    return ( 
    <>
    <ul>
    {locationArray.map(data =>(
        <li><span><b>{data[0]}</b></span> : {data[1]}</li>
    ))}
    </ul>
    </> );
}
 
export default ShowGardenCard;