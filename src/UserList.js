import React, {useState, useEffect} from "react";


const UserList = () => {

    const getUserList = (event) => {
        event.preventDefault();
        setDisplayUser(true);
    }


    const [displayUser, setDisplayUser] = useState(false);
    const [userList, setUserList] = useState([]);
    const [userId, setUserId] = useState("");
    const [userDetails, setUserDetails] = useState({});

    const getUserRec = (event, userId) => {
        event.preventDefault();
        setUserId(userId);
    }

    useEffect( () => {
        console.log("displayUser ", displayUser);
        async function loadUsers() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const userInfo =  await response.json();
            console.log("User Info is ", userInfo)
            setUserList(userInfo);
        }

        loadUsers();
    }, [displayUser]);

    useEffect ( () => {
        async function getUserDetails() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const userDetails = await response.json();
            setUserDetails(userDetails);
        }
        getUserDetails();
    }, [userId]

    );

    if(userList && userList.length > 0) {
        return (
            <>
        <p>User List is Obtained. Number of Users {userList.length}</p>

        <ol>
            {userList.map( (userRec) => (
                <li key={userRec.id}><a href="/" onClick={(event) => getUserRec(event, userRec.id)}>{userRec.name}</a> {userRec.username} {userRec.email}
                
                </li>
            )

            )}

            {
                userDetails  && <p>
                Name: {userDetails.name}
                User Name: {userDetails.username}
                Address:
                {userDetails.street}
                {userDetails.suite}
                {userDetails.website}
             </p>
            }
             
        </ol>
        </>
        )
    } else {
        return (
            <div>
                <a href="" onClick = {(event) => getUserList(event)}>Get User List</a>
            </div>
        );
    }

    

   


}



export default UserList;