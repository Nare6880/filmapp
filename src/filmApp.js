import React, {useState } from 'react';
import './App.css';
import GetDevelopApp from './components/developApp';
import GetRegistrationApp from "./components/registrationPage";
import GetLoginApp from "./components/LoginPage";
import GetCommunityApp from "./components/communityApp";
export default function
    FilmApp(){
    const [previousPage, updatePreviousPage] = useState('');
    const [currentPage, updateCurrentPage] = useState('login');
    const [username, updateUsername] = useState('testing');
    const [userID, updateUserID] = useState(null);
    const [url, updateURL] = useState("http://192.168.1.204:4000");
    return(<React.Fragment>{GetNavBar()}{GetCurrentPage(currentPage)}</React.Fragment>);

    function
    GetNavBar(){
        return(
            <div style = {{backgroundColor: 'b'}}>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="collapse navbar-collapse d-inline-flex justify-content-center p-2" id="navbarNav">
                        <ul className="navbar-nav">
                            <a key = "D" className = "nav-link" onClick={() => updateCurrentPage('develop')} href = '#'>Develop</a>
                            <a key = "C" className = "nav-link" onClick={() => updateCurrentPage('community')} href = '#'>Community</a>
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
            <div><GetLoginApp apiURL = {url} updateCurrentPage = {updateCurrentPage} updateUserName = {updateUsername} previousPage={previousPage} updatePreviousPage={updatePreviousPage} updateUserID={updateUserID}/></div>
        );
    }
    function
    GetCommunityPage(){
        return(
            <div><GetCommunityApp apiURL ={url} username={username} userId={userID} updateCurrentPage = {updateCurrentPage} updatePreviousPage = {updatePreviousPage}/></div>
        );
    }
    function
    GetRegistrationPage(){
        return(
            <div><GetRegistrationApp apiURL ={url} updateCurrentPage={updateCurrentPage} updatePreviousPage={updatePreviousPage}/></div>
        );
    }
    function
    GetDevelopPage(){

        return(
            <div><GetDevelopApp apiURL = {url}/></div>
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
        if (CurrentPage === 'community') return(GetCommunityPage());
        if (CurrentPage === 'login') {
            return(GetLoginPage());
        }
    }
}