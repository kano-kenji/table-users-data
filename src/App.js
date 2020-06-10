import React, { useState } from 'react';
import axios from "axios";
import {Table} from "react-bootstrap";
import EditData from "./EditData/EditData";

const apiUrl = "https://jsonplaceholder.typicode.com/users/";

function App() {

    const [users, setUsers] = useState([]);

    const title = ['#','Name','User Name', 'Email', 'Address', 'Phone', 'Website', 'Company'];

    const addUsers = () => {
        axios({
            method: 'get',
            url: apiUrl
        })
            .then(function (response) {
                setUsers(response.data);
            });
    }

    const onSaveUser = (data) => {
        users.map(user => {
            if(user.id === data['id']){
                user[data['key']] = data['value'];
            }
        })
    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <h1 className="display-5">Users</h1>
            </div>
            <div className="row p-2">
                <button className="btn btn-primary btn-sm ml-auto m-1" onClick={addUsers}>Add Users</button>
                <button className="btn btn-secondary btn-sm m-1" onClick={() => setUsers([])}>Clear Table</button>
            </div>
            <div className="row-md">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        {title.map(el => <th key={el}>{el}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td><EditData data={{id: user.id, key: 'name', value: user.name}} handleData={onSaveUser}/></td>
                                <td><EditData data={{id: user.id, key: 'username', value: user.username}} handleData={onSaveUser}/></td>
                                <td><EditData data={{id: user.id, key: 'email', value: user.email}} handleData={onSaveUser}/></td>
                                <td>
                                    <div>street: {user.address['street']}</div>
                                    <div>suite: {user.address['suite']}</div>
                                    <div>city: {user.address['city']}</div>
                                    <div>zipcode: {user.address['zipcode']}</div>
                                    <div>geo:
                                        <div>lat:{user.address['geo']['lat']}</div>
                                        <div>lng:{user.address['geo']['lng']}</div>
                                    </div>
                                </td>
                                <td><EditData data={{id: user.id, key: 'phone', value: user.phone}} handleData={onSaveUser}/></td>
                                <td><EditData data={{id: user.id, key: 'website', value: user.website}} handleData={onSaveUser}/></td>
                                <td>
                                    <div>name: {user.company['name']}</div>
                                    <div>catch Phrase: {user.company['catchPhrase']}</div>
                                    <div>bs: {user.company['bs']}</div>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default App;