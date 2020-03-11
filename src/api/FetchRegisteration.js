import * as API from './url'
export const RegisterFetch = ({ userName,eMail,password, token }, callback) => {
    console.log(userName,eMail,password);
    
    fetch(API.RegisterAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        userName:userName,
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