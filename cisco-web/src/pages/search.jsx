import React, {useState} from 'react'


function Services() {
  return <div className="pt-5 w-full h-[200px] bg-stone-200 flex grid-rows-3 gap-5 justify-center">
    <div className='pt-6 w-80 h-20 bg-stone-100 opacity-60'>
      <h1>object A </h1>
    </div>

    <div className='pt-6 w-80 h-20 bg-stone-100 opacity-60'>
      <h1>object b </h1>
    </div>

    <div className='pt-6 w-80 h-20 bg-stone-100 opacity-60'>
      <h1>object c </h1>
    </div>
  </div>;
}

function Sidebar() {
  return <div className="pt-5 w-full h-[200px] bg-stone-300 flex justify-center">
    <div className='pt-6 w-80 h-20 bg-stone-100 opacity-60'>
      <h1>Service A </h1>
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
        <div className='flex justify-center w-full h-full'>
            <h1 className= "pt-16 md:text-5xl sm:text-4xl text-3xl font-bold m:py-6">
                Your Service
            </h1>
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