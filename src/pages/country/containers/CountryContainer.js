import React, {useState, useEffect} from 'react';
import { render } from 'react-dom'
import CountryMenu from '../components/CountryMenu.js';
import SurveySectionContainer from '../surveySection/containers/SurveySectionContainer.js';
import Countries from '../../../assets/Countries.json';
import {AddCountryFetch, GetCountry} from '../../../api/FetchCountry';
import { useAlert } from "react-alert";
import '../../../App.css'

const CountryContainer = props => {
    const [countryList, setCountryList] = useState([]);
    const [country, setCountry] = useState("");
    const [organization, setOrganization] = useState("");
    const [close, setClose] = useState(false);
    const token = localStorage.getItem("token");
    const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
    const surveyHeaderName = localStorage.getItem("SurveyHeaderName");
    const userId = localStorage.getItem("userId");
    const alert = useAlert();

    const CountryOptions = Countries.countries.map((v,k) => ({
        value: v.code,
        label: v.name
    }))

    useEffect(() => {
        GetCountry({surveyHeaderId, userId, token}, (err, data) => {
            console.log('country list >> ', data.payload)
            setCountryList(data.payload);
        })
    },[]);

    const _handleCountrySelect = (id, e) => {
        e !== null && setCountry(e.label);
        return;
    }

    const handleOrganization = (e) => {
        setOrganization(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('result >> ', country, organization, surveyHeaderId)
        if(organization === ""){
            alert.error('Please Fill Organization!')
        }
        else {
            AddCountryFetch({ country, organization, surveyHeaderId, userId, token}, (err,data) => {
                if (data.success === false){
                     alert.error(data.message);
                 } 
                 else {
                     alert.success("Added New Survey Info!");
                     setTimeout(() => {
                         window.location.reload()
                     }, 4000);
                 }
             })
        }
        
    }

    const handleSelectCountry = (country, id) => {
        props.history.push('/surveySection')
        localStorage.setItem("countryName", country)
    }
    console.log(countryList);
    
    return (
        <div className="container p-3">
            {countryList.length>0&&countryList?<CountryMenu 
                countryList = {countryList}
                CountryOptions={CountryOptions}
                country = {country}
                organization={organization}
                handleCountrySelect={_handleCountrySelect}
                handleSubmit={handleSubmit}
                handleOrganization={handleOrganization}
                handleSelectCountry = {handleSelectCountry}
                surveyHeaderId={surveyHeaderId}
                surveyHeaderName={surveyHeaderName}
                close={close}
            />:null}
        </div>
    );
};

// const AlertContainer = () => {

// }

export default CountryContainer;