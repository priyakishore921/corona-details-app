import React from 'react';
import axios from 'axios';
import './WorldStats.css';

class WorldStats extends React.Component{
    
    state = {
        worldStats : {
            worldTotKeys : [],
            worldTotVals : [],
            timeStamp : null
        },
        countrieStats : []
    }

    componentDidMount = () => {
        this.getWorldStats();
    }
    
    getWorldStats = async () => {
        const headers = {
            "content-type" : "application/json",
            "x-rapidapi-key" : "97a63c8dedmsh913a0d6151de6bep15a7f5jsna10e805331aa",
            "x-rapidapi-host" : "corona-virus-world-and-india-data.p.rapidapi.com"
        };
        let newState = JSON.parse(JSON.stringify(this.state));
        let stats = await axios.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {headers : headers});
        console.log("world stats ", stats);
        newState.worldStats.worldTotKeys = Object.keys(stats.data.world_total);
        newState.worldStats.worldTotVals = Object.values(stats.data.world_total);
        newState.worldStats.timeStamp = stats.data.world_total.statistic_taken_at;
        newState.countrieStats = stats.data.countries_stat;
        //console.log("newState ", newState);
        this.setState(newState);
    }
    
    render(){
        const { worldStats }= this.state;
        // console.log("worldStats ", worldStats);
        return(
            <>
            <h1 className="customHead">Current World Statistics</h1>
            <h2 className="customHead">Statistic taken at : {worldStats.timeStamp}</h2>
            <table className="table myTable table-bordered">
                <thead>
                    <tr>
                        {
                            worldStats.worldTotKeys.map( (item, idx) => {
                                let elem = null;
                                if(idx<5)
                                    elem = <td key={idx}>{item}</td>;
                                return elem;
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            worldStats.worldTotVals.map( (item,idx) => {
                                let elem= null;
                                if(idx<5)
                                    elem = <td key ={idx}>{item}</td>;
                            return elem;
                        })
                        }
                    </tr>
                </tbody>
            </table>
            </>
        );
    }
}
export default WorldStats;