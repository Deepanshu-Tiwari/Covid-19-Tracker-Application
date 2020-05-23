import axios from "axios";

const url="https://covid19.mathdro.id/api";

const fetchData = async ()=>{
    try{
        // const response = await axios.get(url);   // whole api object
        const {data} = await axios.get(url); 
        
        const modifieData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }
        return modifieData;

    }catch (error){
    
    }
}
export default fetchData; 

export const fetchDailyData = async ()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);     //daily summary path ke liye 

        const modifiedData = data.map((dailyData)=>({

            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            data:dailyData.reportDate,

        }));

        return modifiedData;
    
        

    }catch(error){

    }
}




