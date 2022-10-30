import React,  { Component, useState }  from "react";
import axios from "axios";
import "../App.css"
export default function
    GetLoginApp({updateCurrentPage, updateUserName}) {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    async function postCommunityEntry(e){
        e.preventDefault()
        try{
            await axios.post("http://localhost:4000/l", {
                username, password
            }).then(function (response){
                if (response.data.authenticated){
                    updateUserName(response.data.username);
                }
            })
        }
        catch (e){
            console.log('ProblemPosting')
        }

    }
    return (<div></div>
    );
}