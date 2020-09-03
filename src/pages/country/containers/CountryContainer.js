import React, {useState, useEffect} from 'react';
import CountryMenu from '../components/CountryMenu.js';
import Countries from '../../../assets/Countries.json';
import {AddCountryFetch, GetCountry} from '../../../api/FetchCountry';
import { useAlert } from "react-alert";

const CountryContainer = () => {
    const [countryList, setCountryList] = useState([]);
    const [country, setCountry] = useState("");
    const [organization, setOrganization] = useState("");
    const [close, setClose] = useState(false);
    const token = localStorage.getItem("token");
    const surveyHeaderId = localStorage.getItem("SurveyHeaderId");
    const surveyHeaderName = localStorage.getItem("SurveyHeaderName");
    const alert = useAlert();

    const CountryOptions = Countries.countries.map((v,k) => ({
        value: v.code,
        label: v.name
    }))

    useEffect(() => {
        GetCountry(surveyHeaderId, token, (err, data) => {
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
        AddCountryFetch({ country, organization, surveyHeaderId, token}, (err,data) => {
            if(data.success === false){
                alert.error(data.message);
            } else {
                if(organization === ""){
                    alert.error('Please Fill Organization!')
                }else{
                    alert.success("Added New Survey Info!");
                setTimeout(() => {
                    window.location.reload()
                }, 4000);
                }
                
            }
        })
    }
    
    return (
        <div className="container p-3">
            <CountryMenu 
                countryList = {countryList}
                CountryOptions={CountryOptions}
                country = {country}
                organization={organization}
                handleCountrySelect={_handleCountrySelect}
                handleSubmit={handleSubmit}
                handleOrganization={handleOrganization}
                surveyHeaderId={surveyHeaderId}
                surveyHeaderName={surveyHeaderName}
                close={close}
            />
        </div>
    );
};

export default CountryContainer;