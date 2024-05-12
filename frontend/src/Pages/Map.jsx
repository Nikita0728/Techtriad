import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap,  MarkerF, useJsApiLoader } from '@react-google-maps/api';
import Context from '../ContextAPI/Contextprovider'
import axios, { all } from 'axios'



function MyComponent() {
// const[officer,setofficer]=useState(true)   
  const [allvalues,setAllvalues]=useState([])
  const [markers, setMarkers] = useState([]);
  console.log(useContext(Context))
  console.log(Context)
  const {  officer ,setofficer }= useContext(Context);
const containerStyle = {
  justifyContent: 'center',
  items:'center',
  width: '100%',
  height: '100vh'
};

const center = [{
  lat: 27.6644,
  lng: 85.3182
},{
  lat: 27.6604,
  lng: 84.3082
}]

useEffect(()=>{
 const getData=async()=>{
    try{


      const alldata= await axios.post('http://localhost:3000/getdata')
      console.log("im all data",alldata.data)
      setAllvalues(alldata.data)
     
    }
    
    catch(e)
    {
      console.log("cannot fetch data from db" ,e)
    } 
    
  }

getData() 
    
   
},[])

const handleClick = async(event) => {
  console.log("clicked")
  if(!officer)
    {
      
      console.log("here")
  const lat = event.latLng.lat();
  const lng = event.latLng.lng();
  const comment = window.prompt('Enter your comment:');
  console.log("clicked  this ",comment, lat, "and", lng)
  if (comment) {
    setMarkers(prevMarkers => [...prevMarkers, { lat, lng, comment }]);
    
    try{
      await axios.post('http://localhost:3000/add',{
        complain:comment,
        latitude:lat,
        longitude:lng

      })
    

    }
    catch(e)
    {
      console.log("cannot add comment to db" ,e)
    
    }
 
  }}
  
};


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAcjEAWeMWU76bggnrJHUqEqPUE47BlPU0"
  })

  const [map, setMap] = React.useState(null)

  
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    const lalitpurArea = new window.google.maps.LatLng(27.6644, 85.3182);
    bounds.extend(lalitpurArea);
    map.fitBounds(bounds);
    setMap(map);
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
console.log( "baby",allvalues)
  return isLoaded ? (
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl:false,
          mapTypeControl: false,
        }}
        onClick={handleClick}
      >
{ officer ? (
       <>
       <div className='text-black'>Rendering officer portion</div>
       <div>
        oakyyyy
       {allvalues?.map((x,i)=>
        <MarkerF position={{lat:x.Latitude,lng:x.Longitude}}></MarkerF>)}
        <div>hello</div>
        </div>
         </>
        ):
        (
        
           markers.map((x,i)=>(
            <MarkerF position={{lat:x.lat, lng:x.lng}}></MarkerF>
         ))
        )
       }
       
     

       
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)