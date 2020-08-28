import * as API from "./url";

export const MenuInfoFetch = ({ userId, token }, callback) => {
  fetch(API.Menu_Info + userId, {
    headers: {
      // "Content-Type": "application/json",
      // Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => callback(null, data))
    .catch((err) => console.log(err));
};
