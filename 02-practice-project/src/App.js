import React, {useState} from 'react';

import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';



function App() {
  const [enteredUsersData, setEnterUsersData] = useState([])

  const userDataHandler =  (usersData)=>{
    setEnterUsersData((prevData)=>{
      return [...prevData,...usersData]
    })
    console.log(enteredUsersData)

  }
   
  return (
    <div>
      <AddUser onSubmitData={userDataHandler}/>
      <UsersList users={enteredUsersData}/>
    </div>
  );
}

export default App;
