import React from 'react';
import MaterialTable from "material-table";
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const MatTable = (props) => {
    const addUsers = () => {
        props.addUsers();
    }
    
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <h1 className="display-5">Users</h1>
            </div>
            <div className="row p-2">
                <button className="btn btn-primary btn-sm ml-auto m-1" onClick={addUsers}>Add Users</button>
                <button className="btn btn-secondary btn-sm m-1" onClick={() => props.setUsers([])}>Clear Table</button>
            </div>
            <div className="row-md">
                <MaterialTable
                    title="Users"
                    icons={tableIcons}
                    columns={[
                        { title: '#', field: 'id' },
                        { title: 'Name', field: 'name' },
                        { title: 'User Name', field: 'username' },
                        { title: 'Email', field: 'email' },
                        { title: 'Address', field: 'address',
                            render: rowData =>
                                <>
                                    <div>Street: {rowData.address['street']}</div>
                                    <div>Suite: {rowData.address['suite']}</div>
                                    <div>City: {rowData.address['city']}</div>
                                    <div>Zipcode: {rowData.address['zipcode']}</div>
                                    <div>Geo:
                                        <div>lat: {rowData.address['geo']['lat']}</div>
                                        <div>lng: {rowData.address['geo']['lng']}</div>
                                    </div>
                                </>
                        },
                        { title: 'Phone', field: 'phone' },
                        { title: 'Website', field: 'website' },
                        { title: 'Company', field: 'company',
                            render: rowData =>
                                <>
                                    <div>Name: {rowData.company['name']}</div>
                                    <div>Catch Phrase: {rowData.company['catchPhrase']}</div>
                                    <div>Bs: {rowData.company['bs']}</div>
                                </>
                        }
                    ]}
                    data={props.users}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    props.setUsers([...props.users, newData]);

                                    resolve();
                                }, 1000)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataUpdate = [...props.users];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    props.setUsers([...dataUpdate]);

                                    resolve();
                                }, 1000)
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataDelete = [...props.users];
                                    const index = oldData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    props.setUsers([...dataDelete]);

                                    resolve()
                                }, 1000)
                            }),
                    }}
                    />
            </div>
        </div>
    );
};

export default MatTable;