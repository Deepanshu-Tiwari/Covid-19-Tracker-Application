import axios from "axios";

const url="https://covid19.mathdro.id/api";

const fetchData = async (country)=>{
    let changebleUrl = url;

    if(country){
        changebleUrl= `${url}/countries/${country}`
    }
    
    try{
        // const response = await axios.get(url);   // whole api object
        const {data} = await axios.get(changebleUrl); 
        
        const modifieData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }
        return modifieData;

    }catch (error){
        console.log('Error');
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
        console.log("Error");
    }
}


export const fetchcountries = async()=>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
   
        return countries.map((country)=>country.name);
    }catch(error){
        console.log("Error");
    }
}
