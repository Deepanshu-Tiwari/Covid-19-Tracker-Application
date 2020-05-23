import React,{useState,useEffect} from "react";
import {fetchDailyData} from "../../api";
import { Line , Bar } from 'react-chartjs-2';
import  "./Chart.module.css";

const Chart=({data,country})=>{
    const[dailyData,setDailyData]=useState([]);

    useEffect(() => {
        const fetchAPI = async ()=>{
            setDailyData(await fetchDailyData());
        }
        
        // console.log(dailyData);
        
        fetchAPI();
    
    },[]);

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

    const barChart = (
        data.confirmed ? (
            <Bar 
            
            data={{
                labels:['Infected', 'Recovered','Deaths'],
                datasets:[{
                    label:'peoples',
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                        
                    ],
                    data:[data.confirmed.value,data.recovered.value,data.deaths.value]

                }]
            }}
            options={{
                legend:{display:'false'},
                title:{display:'true', text:`Current state in country ${country}`}
            }}

            />
        ):null
    )
    
    return(
        <div className="container" style={{width:"85%" , display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'auto', marginRight:'auto'}}>   
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;