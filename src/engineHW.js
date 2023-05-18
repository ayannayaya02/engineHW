import React, {useState} from "react";

export default function searchEngine (props){
    let [city,setCity]=useState("");

    function temperature (event){
        event.preventDefault();
        let temperature=(props.temperature * 9)/5 + 32;
        setCity(event.target.value);
    }
    function city(event){
        event.preventDefault();
        city(event.target.value);


    }
    return (
<form onSubmit={temperature}>
<input type="search" onChange={city}/>
<input type="submit" value="Search"/>
</form>
    );
}
