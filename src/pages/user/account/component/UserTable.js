import React from 'react';
import MaterialTable from 'material-table';
import { ESButton } from '../../../../tools/ES_Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import * as Colors from '../../../../config/Color.config'
import { render } from '@testing-library/react';

export default function UserTable(props) {
    const { userData, handleIsAdd, isAdd, } = props
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: Colors.PrimaryColor,
            },
            secondary: {
                main: '#ff9100',
            },
        },

    });
    const [tableData, setTableData] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Email', field: 'eMail' },
            { title: 'Role', field: 'role' },
            { title: 'Company', field: 'company' },
            { title: 'Active', field: 'active' },
            { title: 'Action', field: 'role', render: () => <ESButton text={"Edit"} noShadow small /> },



            // {
            //     title: 'Birth Place',
            //     field: 'birthCity',
            //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            // },
        ],
        data:
            userData.map((v, k) => { return ({ name: v.user_name, eMail: v.email, role: v.role, company: v.company_name, active: v.active === 1 ? "Yes" : "No" }) })
        // [
        //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        //     {
        //         name: 'Zerya Betül',
        //         surname: 'Baran',
        //         birthYear: 2017,
        //         birthCity: 34,
        //     },
        // ],
    });
    return (
        <MuiThemeProvider theme={theme}>
            <MaterialTable
                padding
                title={<ESButton text={"+ Add New User"} onClick={handleIsAdd} noShadow small />}
                columns={tableData.columns}
                data={tableData.data}
                // editable={{
                //     onRowAdd: (newData) =>
                //         new Promise((resolve) => {
                //             setTimeout(() => {
                //                 resolve();
                //                 setTableData((prevState) => {
                //                     const data = [...prevState.data];
                //                     data.push(newData);
                //                     return { ...prevState, data };
                //                 });
                //             }, 600);
                //         }),
                //     onRowUpdate: (newData, oldData) =>
                //         new Promise((resolve) => {
                //             setTimeout(() => {
                //                 resolve();
                //                 if (oldData) {
                //                     setTableData((prevState) => {
                //                         const data = [...prevState.data];
                //                         data[data.indexOf(oldData)] = newData;
                //                         return { ...prevState, data };
                //                     });
                //                 }
                //             }, 600);
                //         }),
                //     onRowDelete: (oldData) =>
                //         new Promise((resolve) => {
                //             setTimeout(() => {
                //                 resolve();
                //                 setTableData((prevState) => {
                //                     const data = [...prevState.data];
                //                     data.splice(data.indexOf(oldData), 1);
                //                     return { ...prevState, data };
                //                 });
                //             }, 600);
                //         }),
                // }}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.PrimaryColor,
                        color: '#FFF'
                    },
                    rowStyle: rowData => ({
                        // backgroundColor: '#EEE' ,
                        lineHeight: 0
                    }),
                    padding: "dense"
                }}
            />
        </MuiThemeProvider>
    );
}
