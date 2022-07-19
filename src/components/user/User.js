import React, { useEffect, useState } from "react";

const RANDOM_USER_API = "https://randomuser.me/api"

function User(props){

    const [name, setName] = useState("sample name")
    const [email, setEmail] = useState("sample email")
    const [count, setCount] = useState(0)

    function updateCount(currentCount){
        setCount(currentCount + 1)
    }

    function randomize(){

        fetch(RANDOM_USER_API)
        .then((response) => response.json())
        .then((jsonData) => {
            const results = jsonData.results
            const user = results[0]
            const userName = `${user.name.title}: ${user.name.first}: ${user.name.last}`
            const userEmail = `${user.email}`
            setName(userName)
            setEmail(userEmail)
        })
    }
// everytime the state is updated, the component re-renders and useEffect will continously run the side effect function.


    useEffect(
        randomize, [count]
    )
// introducing the empty dependency array stops the continous loop of fetch results. Therefore, useEffect will run once.



    return(
        <div>
            <center>
                <h2>NAME: {name}</h2>
                <h5>EMAIL: {email}</h5>
                <button onClick={() => updateCount(count)}>RANDOMIZE</button>
            </center>
        </div>
    )

}

export default User