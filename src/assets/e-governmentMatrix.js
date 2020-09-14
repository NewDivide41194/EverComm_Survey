import React from "react"
export const priorityFields = {
    columns: [
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
      { title: "Role", field: "role" },
      { title: "Company", field: "companyName" },
      {
        title: "Active",
        render: (userData) =>
          userData.active === 1 ? (
            <i className="fas fa-check-square" style={{ color: "green" }}></i>
          ) : (
            <i className="far fa-square" style={{ color: "green" }}></i>
          ),
      },
      { title: "Created Date", field: "created_date" },
    ],
    // data: userData,
  };