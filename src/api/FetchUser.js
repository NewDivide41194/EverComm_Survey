import * as API from "./url";
export const RegisterFetch = (
  { firstName,lastName, eMail, password, companyName, token },
  callback
) => {
const userName=firstName.trim()+' '+lastName.trim()
console.log(userName, eMail, password, companyName);

  fetch(API.RegisterAPI, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      userName: userName,
      email: eMail,
      password: password,
      companyName: companyName
    })
  })
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};

export const UpdateUserInfo=({Name,eMail,newPassword,token },callback)=>{
        console.log(Name,eMail,newPassword);
        
    fetch(UpdateUserInfo,
    {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "*/*",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(
            {
                Name: Name,
                email: eMail,
                newpassword: newPassword,
            
              } 
        ) 
    })
    .then(res=>res.json())
    .then(data=>callback(null,data))
    .catch(err=>console.log(err));
};


export const LoginFetch = ({ eMail,password, token }, callback) => {
    console.log("555555555 ",eMail,password);
    
    fetch(API.LoginAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        email: eMail,
        password:password
      }),
      caAnswerData: "no-caAnswerData"
    })
      .then(res => res.json())
      .then(data => callback(null, data))
      .catch(err => console.log(err)
      );
  };