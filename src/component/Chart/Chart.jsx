import React,{useState,useEffect} from "react";
import {fetchDailyData} from "../../api";
import { Line , Bar } from 'react-chartjs-2';
import  "./Chart.module.css";

const Chart=()=>{
    const[dailyData,setDailyData]=useState([]);

    useEffect(() => {
        const fetchAPI = async ()=>{
            setDailyData(await fetchDailyData());
        }
       
     
        fetchAPI();
    
    });

    const lineChart= ( 
        dailyData.length 
        ? (
        <Line 
            data={{
                labels:dailyData.map(({data}) => data),
                datasets: [{
                    data:dailyData.map(({confirmed}) => confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true,

                }, {
                    
                    data:dailyData.map(({deaths}) => deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(250 ,0,0,0.5)',
                    fill:true, 
                }],
            }}
        />
        ):null
    );
    
    return(
        <div className="container" style={{width:"85%" , display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'auto', marginRight:'auto'}}>   
            {lineChart}
        </div>
    )
}

export default Chart;