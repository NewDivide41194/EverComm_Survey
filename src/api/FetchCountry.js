import * as API from "./url"

export const AddCountryFetch = (
    {
        country,
        organization,
        surveyHeaderId,
        token
    },
    callback
) => {
    fetch(API.Country_Insert, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
           country: country,
            surveyHeaderId: surveyHeaderId,
            organization: organization
        })
    })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err))
};

export const GetCountry = (surveyHeaderId, token, callback) => {
    fetch(API.Get_Country(surveyHeaderId), {
        headers:{
            "Content-Type": "application/json",
            Accept: "*/*",
            Authorization: `Bearer ${token}` 
        }
    })
    .then(res => res.json())
    .then(data => callback(null,data))
    .catch(err => console.log(err));
};
