import React, {useState } from 'react';
import './App.css';
import GetDevelopApp from './components/developApp';
import GetRegistrationApp from "./components/registrationPage";
import GetLoginApp from "./components/LoginPage";
export default function
    FilmApp(){
    const [currentPage, updateCurrentPage] = useState('develop');
    const [username, updateUsername] = useState('')
    return(<React.Fragment>{GetNavBar()}{GetCurrentPage(currentPage)}</React.Fragment>);

    function
    GetNavBar(){
        return(
            <div style = {{backgroundColor: 'b'}}>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="collapse navbar-collapse d-inline-flex justify-content-center p-2" id="navbarNav">
                        <ul className="navbar-nav">
                            <a key = "D" className = "nav-link" onClick={() => updateCurrentPage('develop')} href = '#'>develop</a>
                            <a key = "U" className = "nav-link"  href = '#'>{username}</a>
                            <a key = "L" className = "nav-link" onClick={() => GetLoginOutFunction()} href = '#'>{GetLoginStatus()}</a>
                        </ul>
                    </div >
                </nav>
            </div>);
    }
    function
    GetLoginPage(){
        return(
            <div><GetLoginApp updateCurrentPage = {updateCurrentPage} updateUserName = {updateUsername}/></div>
        );
    }
    function
    GetRegistrationPage(){
        return(
            <div><GetRegistrationApp/></div>
        );
    }
    function
    GetDevelopPage(){

        return(
            <div><GetDevelopApp/></div>
        );

    }
    function GetLoginOutFunction(){
        if (username ===""){
            updateCurrentPage('login');
        }
        else{
            updateUsername("")
        }

    }
    function GetLoginStatus(){
        if (username === ""){
            return "Login";
        }
        else{
            return "Log out"
        }
    }
    function
    GetCurrentPage(CurrentPage){
        if (CurrentPage === 'register') return(GetRegistrationPage());
        if (CurrentPage === 'develop') return(GetDevelopPage());

        if (CurrentPage === 'login') {console.log('login')
        return(GetLoginPage());}
    }
}