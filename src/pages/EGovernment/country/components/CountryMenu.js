import React from 'react';
import * as Colors from '../../../../config/Color.config';
import { ESButton } from '../../../../tools/ES_Button';
import { ESInput } from '../../../../tools/ES_Inputs';
import { ESDropDown } from '../../../../tools/ES_DropDown';
import '../../../../App.css'

const CountryMenu = props => {
    const { CountryOptions, handleCountrySelect, country, handleSubmit, organization, sectionCount,
        close, surveyHeaderId, surveyHeaderName, handleOrganization, countryList, handleSelectCountry }=props;
    //console.log('id >>', countryList)

    return (
        <div className="p-2">
            <div className="d-flex flex-row justify-content-between">
                <div>
                    <h4 style={{color: Colors.PrimaryColor}}>{surveyHeaderName}</h4>
                </div>
                <div>
                    <ESButton
                        dataToggle={"modal"}
                        dataTarget={"#countryModal"}
                        text={" Add Country"}
                        id={"AddCountry"}
                        leftIcon={<i className="fas fa-plus-circle px-1"></i>}
                    />
                </div>
            </div>
            <hr/>
            <div className="pb-2"><h5 style={{color: Colors.Gray}}>({sectionCount}) {sectionCount<=1?"Survey":"Surveys"}</h5></div>
            <CountryList data={countryList} handleSelectCountry={handleSelectCountry}/>
            <div className="modal fade" id="countryModal" role="dialog" aria-hidden="true" aria-labelledby="countryLabel">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <form className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="countryLabel" style={{color: Colors.PrimaryColor}}>Add New Survey Info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="py-1">
                                <div><label style={{color:'#1d1f1e'}}>Country</label></div>
                                <div>
                                <ESDropDown
                                id={"countryList"}
                                value={country}
                                options={CountryOptions}
                                _handleSelect={handleCountrySelect}
                                notClearable
                                />
                                </div>
                            </div>
                            <div className="py-2">
                                <div><label style={{color:'#1d1f1e'}}>Organization</label></div>
                                <div>
                                    <ESInput
                                    id={"Organization"}
                                    type={"text"}
                                    placeHolder={"Organization"}
                                    value={organization}
                                    onChange={(e) => handleOrganization(e)}
                                    required={require}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center" >
                            <div className="py-3" style={{width:200}}>
                            <ESButton 
                                //dataDismiss={"modal"}
                                type={"submit"}
                                text={"CREATE SURVEY"}
                                id={"CreateSurvey"}
                                leftIcon={<i className="fas fa-plus-circle px-1"></i>}
                                onClick={handleSubmit}
                            />
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CountryMenu;

const CountryList = (props) => {
    const {data, handleSelectCountry} = props
    return (
        <div className="row">
            { data.map((v,k)=> 
             <div className="col-lg-6 col-md-6 p-2" key={k}>
                <div className="rounded shadow p-4" id="countryCard" style={{cursor:'pointer'}} onClick={() => handleSelectCountry(v.country, v.country_id, v.organization)}>
                    <div className="pb-2" style={{color: Colors.PrimaryColor, fontWeight:'bold'}}>{v.country}</div>
                    <div style={{fontSize:11, fontStyle:'italic'}}>{v.organization}</div>
                </div>
            </div>
            )}
        </div>
    )
}

// const data = [
//     {country: 'Myanmar'},
//     {country: 'Singapore'},
//     {country: 'Malaysia'},
//     {country: 'Taiwan'}
// ]