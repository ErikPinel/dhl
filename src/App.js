import logo from './logo.svg';
import './App.css';


import axios from "axios";
import { useEffect, useState } from 'react';
import { EventContainer } from './components/EventContainer';

const event=     {
  timestamp: "2023-01-13T08:33:00",
  location: {
      address: {
          addressLocality: "BOLOGNA - ITALY"
      }
  },
  description: "Customs clearance status updated. Note - The Customs clearance process may start while the shipment is in transit to the destination."
}

function App() {
const [trackingData,setTrackingData]=useState([]);
  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://api-eu.dhl.com/track/shipments',
      params: {trackingNumber: '9943629426'},
      headers: {'DHL-API-Key': 'psN3sc830iWmMA0FN24jJEVl7fAz4Dhz'}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.shipments[0].events);
      setTrackingData(response.data.shipments[0].events)

    }).catch(function (error) {
      console.error(error);
    });


  },[])


function displayEvents()
{
const shortTracking=trackingData.shipments;

for(let i=shortTracking.events.length-1;i<=0;i--)
{
<EventContainer side={i%2==0? "left":"right"}  event={shortTracking.events[i]}></EventContainer>
}


}


  return (

    
    <div class="timeline">

     {trackingData.map((e,i)=>(
      
      <EventContainer key={i} side={i%2==0? "left":"right"}  event={e} last={i==0?true:false}></EventContainer>
      ))} 


</div>



    
  );
}

export default App;
