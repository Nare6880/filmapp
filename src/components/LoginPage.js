import React,  { Component, useState }  from "react";
import axios from "axios";
import "../App.css"
export default function
    GetLoginApp({updateCurrentPage, updateUserName, previousPage, updatePreviousPage, updateUserID}) {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    async function postLogin(e){
        e.preventDefault()
        try{
            await axios.post("http://localhost:4000/l", {
                username, password
            }).then(function (response){
                console.log(response.data)
                if (response.data.authenticated){
                    updateUserName(response.data.username);
                    updateUserID(response.data.UserId);
                    if (previousPage !== ''){
                        updateCurrentPage(previousPage);
                    }
                }
            })
        }
        catch (e){
            console.log('ProblemPosting')
        }

    }
    return (
        <div>
            <div style = {{ marginTop: '60px'}}className="col">
                <form className = 'col' onSubmit={postLogin} >
                    <div className="row justify-content-center p-2">
                        <input type='text'  value ={username} onChange ={(e)=> setUsername(e.target.value)}className="form-control bg-light col-lg-4" id="Username" placeholder="Username"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <input type='password' value = {password} onChange={(e) => setPassword(e.target.value)} className="form-control bg-light col-lg-4" id="Username" placeholder="Password"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <button type="submit" className="btn btn-dark">Login</button>
                    </div>
                    <div className="row justify-content-center p-2">
                        <a className= 'nav-button text-dark' onClick={() => {updateCurrentPage('register'); updatePreviousPage('login');}}  href='#'>Register</a>
                    </div>
                </form>
            </div>
        </div>
    );
}