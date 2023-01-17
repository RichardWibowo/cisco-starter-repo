import React, {Component} from 'react';

class Hero extends Component{
    render(){
        return(
        <div className='flex pl-1 pr-1 font-bold'>
            <h1>{this.props.bannerText}</h1>
        </div>
        );
        
    }
}



export default Hero;