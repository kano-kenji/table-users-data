import React, { useState } from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SimpleTable from "./SimpleTable/SimpleTable";
import MatTable from "./MatTable/MatTable";


function App() {
    //fix Warning about deprecated findDOMNode usage
    const wrapper = React.createRef();

    const [users, setUsers] = useState([]);
    const title = ['#','Name','User Name', 'Email', 'Address', 'Phone', 'Website', 'Company'];

    const addUsers = () => {

        // fetch(apiUrl)
        //     .then(response => response.json())
        //     .then(json => setUsers(json))

        axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users'
        })
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const onSaveUser = (data) => {
        const updatedUsers = [...users];
        updatedUsers.forEach(user => {
            if(user.id === data['id']){
                user[data['key']] = data['value'];
            }
        });
        setUsers(updatedUsers);
    }

    return (
        <Router ref={wrapper}>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item flex-fill text-center">
                    <Link to="/simple-table">Simple table</Link>
                </li>
                <li className="list-group-item flex-fill text-center">
                    <Link to="/material-table">Material UI table</Link>
                </li>
            </ul>

            <Route exact path="/simple-table">
                    <SimpleTable
                        title={title}
                        users={users}
                        setUsers={setUsers}
                        addUsers={addUsers}
                        onSaveUser={onSaveUser}
                    />
            </Route>
            <Route exact path="/material-table">
                <MatTable
                    title={title}
                    users={users}
                    setUsers={setUsers}
                    addUsers={addUsers}
                    onSaveUser={onSaveUser}
                />
            </Route>
        </Router>
    );
}

export default App;
