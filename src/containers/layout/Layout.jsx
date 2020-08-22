import React from 'react';
import axios from 'axios';

import LaunchCards from '../../components/launchCards/launchCards';
import Filters from '../../components/filters/Filters';

class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            launches: [],
            loading: true
        }
    }


    componentDidMount(){
        try {
            
            // const globalData =  this.getGlobalData();
            axios.get('https://api.spacexdata.com/v3/launches?limit=100').then((res) => {
                this.setState({
                    launches: res.data,
                    loading: false
                }); 
            })
            

        } catch (err) {
            console.log(err,'From layout componenet');
        }
    }

    render(){
        const {launches, loading} = this.state;
        if(loading){
            return <div>Fetching...</div>
        }

        return (
            <div>
                <Filters launches={launches}/>
                <LaunchCards launches={launches} />
            </div>
        )    
    }
}

export default Layout;