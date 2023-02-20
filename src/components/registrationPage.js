import React,  { Component, useState }  from "react";
import axios from "axios";
import "../App.css"
export default function
GetRegistrationApp({updateCurrentPage}) {
    const [email, setEmail] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    async function postRegistration(e){
        e.preventDefault()
        if (confirmPassword == password){
            try{
                console.log(email,username,password)
                await axios.post("http://localhost:4000/r", {
                    email,username, password, confirmPassword
                }).then(function (response){
                    console.log(response)
                    if (response.data === "Registered"){
                        console.log('shouldhave changed')
                        updateCurrentPage('login');
                    }
                });

            }
            catch (e){
                console.log('ProblemPosting')
            }
        }
    }
    return (
        <div className='' >
            <div style = {{ marginTop: '60px' }}className="col">
                <form onSubmit={postRegistration} className = 'col'>
                    <div  className="row justify-content-center p-2">
                        <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control bg-light col-lg-4 " id="email" placeholder="Email"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className="form-control bg-light col-lg-4" id="username" placeholder="Username"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <input type='text' value = {password} onChange={(e) => setPassword(e.target.value)} className="form-control bg-light col-lg-4" id="password" placeholder="Password"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <input type='text' value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control bg-light col-lg-4" id="password2" placeholder="Retype Password"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <button type="submit" className="btn btn-dark">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}