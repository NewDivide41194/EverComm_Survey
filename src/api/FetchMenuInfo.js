import * as API from "./url";

export const MenuInfoFetch = ({userId  }, callback) => {
  fetch(API.Menu_Info+userId)
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => console.log(err));
};
