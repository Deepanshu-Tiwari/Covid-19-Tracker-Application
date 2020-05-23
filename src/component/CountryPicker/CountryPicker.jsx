import React,{useState,useEffect} from "react";
import {NativeSelect , FormControl } from '@material-ui/core';
import './CountryPicker.module.css';
import {fetchcountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries , setFetchedCountries] = useState([]);


    useEffect(() => {
        const fetchAPI = async ()=>{
            setFetchedCountries (await fetchcountries());

        }
        fetchAPI();
    },[setFetchedCountries]);

    console.log(fetchedCountries);

    return(
        <FormControl className="formControl" style={{marginRight:'auto', marginLeft:'auto', width:'35%'}}>
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
           <option value="" style={{backgroundColor:'#7a766e'}}>Global</option>
           {fetchedCountries.map((country,i)=> <option key={i} value={country} style={{backgroundColor:'#7a766e'}} >{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;