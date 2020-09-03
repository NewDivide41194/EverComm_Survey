import React from 'react';
import * as Colors from '../../../config/Color.config';
import { ESButton } from '../../../tools/ES_Button';

const CountryMenu = () => {

    const addCountry = {
    }

    return (
        <div className="p-2">
            <div className="d-flex flex-row justify-content-between">
                <div>
                    <h4 style={{color: Colors.PrimaryColor}}>E-GOVERNMENT RAPID ASSESSMENT</h4>
                </div>
                <div>
                    <ESButton
                        text={" Add Country"}
                        id={"AddCountry"}
                        leftIcon={<i className="fas fa-plus-circle px-1"></i>}
                    />
                </div>
            </div>
            <hr/>
            <CountryList />
        </div>
    );
};

export default CountryMenu;

const CountryList = () => {
    return (
        <div className="row">
            { data.map(v => 
             <div className="col-lg-6 col-md-6 p-2">
                <div className="rounded shadow p-4">
                    <div className="pb-2" style={{color: Colors.PrimaryColor, fontWeight:'bold'}}>{v.country}</div>
                    <div style={{fontSize:10, fontStyle:'italic'}}>Organization Name</div>
                </div>
            </div>
            )}
        </div>
    )
}

const data = [
    {country: 'Myanmar'},
    {country: 'Singapore'},
    {country: 'Malaysia'},
    {country: 'Taiwan'}
]