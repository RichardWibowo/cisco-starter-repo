import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import './about'
import PylonConnector from './about';


function Services() {
  //creating IP state
  const [ipv4,setIPv4] = useState('');
  const [ipv6,setIPv6] = useState('');
    
  //creating function to load ip address from the API
  const getData = async()=>{
      const resV4 = await axios.get('https://api.ipify.org?format=json')
      setIPv4(resV4.data.ip);

      const resV6 = await axios.get('https://api6.ipify.org?format=json')
      setIPv6(resV6.data.ip);
      
  }
  
  useEffect(()=>{
      //passing getData method to the lifecycle method
      getData()
  },[])

  return <div className="pt-5 w-full h-[200px] bg-stone-200 flex grid-rows-3 gap-5 justify-center">
    <div className='pt-6 w-80 h-20 bg-stone-100 opacity-60'>
      <h3>IPv4 Connection</h3>
      <h1>{ipv4}</h1>
    </div>

    <div className='pt-6 w-80 h-20 bg-stone-100 opacity-60'>
      <h3>ipv6 Connection</h3>
      <h1>{ipv6}</h1>
    </div>

    <div className='pt-6 w-80 h-20 bg-stone-100 opacity-60'>
      <h1>Pylon Connectivity</h1>
      <h3><PylonConnector /></h3>
    </div>
  </div>;
}

function Sidebar() {
  return <div className="pt-5 w-full h-[200px] bg-stone-300 flex justify-center">
    <div className='pt-6 w-80 h-20 bg-stone-100 opacity-60'>
      <h1>User Data here </h1>
    </div>
  </div>;
}

function SplitPane(props) {
  return (
    <div className="w-full h-full">
      <div className="float-left w-1/4 h-full">
        {props.left}
      </div>
      <div className="float-left w-3/4 h-full">
        {props.right}
      </div>
    </div>
  );
}

const Search = () =>{
    return ( 
      <>
        <div className='pb-16 flex justify-center w-full h-full'>
          <div>
          <h3 className='flex justify-center pt-8 font-bold text-l'>
                Welcome Back 
            </h3>
            <h1 className= "md:text-5xl sm:text-4xl text-3xl font-bold m:py-6"> Sextant </h1>
          </div>
        </div>
        <SplitPane
      left={
        <Sidebar />
      }
      right={
        <Services />
      } />
    </>
    )
}

export default Search