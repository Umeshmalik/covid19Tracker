import { NativeSelect, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchCountries } from "../serv/api";


const Countries = ({handleCountryChange}) =>{

    const [countries , setCountries] =useState([]);

    useEffect(()=>{
        const fetchApi = async()=>{
            setCountries(await fetchCountries());
        }
        fetchApi();
    },[])
    return (
        <>
            <Typography variant='h5' color='primary' style={{display: "flex", alignItems: 'center' , padding : '30px'}}>Reported Cases and Deaths by Countries or Teritory</Typography>
            <NativeSelect onChange ={(e) => handleCountryChange(e.target.value)} >
                <option value="">World</option>
                { countries &&(countries.map((country, index)=>{
                    return(
                        <option key={index} value ={country}>{country}</option>
                    )
                })) }
            </NativeSelect>
        </>
    )
}

export default Countries;