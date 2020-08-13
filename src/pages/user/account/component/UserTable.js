import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { ESButton } from '../../../../tools/ES_Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import * as Colors from '../../../../config/Color.config'
import { render } from '@testing-library/react';

export default function UserTable(props) {
    const { userData, handleIsAdd, isAdd,isEdit,handleIsEdit } = props

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: Colors.PrimaryColor,
            }
        },

    });

    const [tableData, setTableData] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Email', field: 'eMail' },
            { title: 'Role', field: 'role' },
            { title: 'Company', field: 'company' },
            { title: 'Active', field: 'active' },
           
        ],
        data:
            userData.map((v, k) => { return ({id:v.login_user_id, name: v.user_name, eMail: v.email, role: v.role, company: v.company_name, active: v.active === 1 ? "Yes" : "No" }) })
    });
const actionButtons=<div className='row w-100 px-3'>
    <div className="w-100 pb-1"><ESButton text={"+ Add User"} onClick={handleIsAdd} noShadow small disabled={isAdd} /></div>
    <div  className="w-100"><ESButton text={"Edit"} onClick={e=>handleIsEdit(e)} noShadow small disabled={isEdit} leftIcon={<i className="fa fa-edit pr-2"></i>} /></div>
</div>
    console.log();

    const _handleEdit=(e)=>{console.log(e.target);}
    useEffect(()=>{
       isEdit? setTableData({...tableData},tableData.columns.push( { title:'Action', render: () => <ESButton id={
        userData.map((v, k) =>  v.login_user_id)[0]
     }  text={"Edit"} onClick={e=>_handleEdit(e)} noShadow small /> }))
       :isAdd?tableData.columns.pop()
       : tableData.columns.pop()
                },[isEdit,isAdd])
    return (
        <MuiThemeProvider theme={theme}>
            <MaterialTable
            onRowClick={(event, rowData) => console.log(tableData.data[rowData.tableData.id],event)}
                padding
                title={actionButtons}
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
