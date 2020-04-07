import * as API from "./url";

export const BuildingFetch =
    ({ clientCompany, buildingName, postal, address, comment, country, token },
        callback
    ) => {
        console.log(clientCompany, buildingName, postal, address, comment, country);
        fetch(API.Building_Insert, {
            method: "POST",
            header: {
                "Content-Type": "application/json",
                Accept: "*/*",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                buildingName: buildingName,
                companyId: clientCompany,
                address: address,
                postalCode: postal,
                country: country,
                comment: comment
            })
        })
            .then(res => res.json())
            .then(data => callback(data))
            .catch(err => console.log(err));
    }