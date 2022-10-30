import React, { Component, useState } from 'react';
import '../App.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
class FilmApp extends Component{

    state ={
        tags:['Develop', 'Community', 'login'],
        CurrentPage:'login',
        RunDevCycle:false
    }
    render(){
        return(<React.Fragment>{this.GetNavBar(this.state.CurrentPage)}{this.GetCurrentPage(this.state.CurrentPage)}</React.Fragment>);
    }
    function
    GetNavBar(){
        return(
            <div style = {{backgroundColor: 'b'}}>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="collapse navbar-collapse d-inline-flex justify-content-center p-2" id="navbarNav">
                        <ul className="navbar-nav">
                            <a key = "a" className = "nav-link" onClick={() => this.SetStatusPage('develop')} href = '#'>develop</a>
                            <a key = "a" className = "nav-link" onClick={() => this.SetStatusPage('login')} href = '#'>login</a>

                        </ul>
                    </div>
                </nav>
            </div>);
    }
    function
    GetLoginPage(){
        return(
            <div>
                <div style = {{ marginTop: '60px'}}className="col">
                    <form className = 'col'>
                        <div className="row justify-content-center p-2">
                            <input type='text' className="form-control bg-light col-lg-4" id="Username" placeholder="Username"/>
                        </div>
                        <div className="row justify-content-center p-2">
                            <input type='text' className="form-control bg-light col-lg-4" id="Username" placeholder="Password"/>
                        </div>
                        <div className="row justify-content-center p-2">
                            <button type="button" className="btn btn-light">Login</button>
                        </div>
                        <div className="row justify-content-center p-2">
                            <a className= 'nav-link text-light' onClick={() =>this.SetStatusPage('register')} href='#'>Register</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    function
    GetRegistrationPage(){
        return(
        <div className='' >
            <div style = {{ marginTop: '60px' }}className="col">
                <form className = 'col'>
                    <div  className="row justify-content-center p-2">
                        <input type='text' className="form-control bg-light col-lg-4 " id="Username" placeholder="Email"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <input type='text' className="form-control bg-light col-lg-4" id="Username" placeholder="Username"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <input type='text' className="form-control bg-light col-lg-4" id="Username" placeholder="Password"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <input type='text' className="form-control bg-light col-lg-4" id="Username" placeholder="Retype Password"/>
                    </div>
                    <div className="row justify-content-center p-2">
                        <button type="button" className="btn btn-light">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
    }
    function
    GetDevelopPage(){

        return(
            <div>
            <div className = "row justify-content-center" style={{marginTop:'60px'}}>
                <CountdownCircleTimer
                    isPlaying ={this.run} duration={7} colors={['#690b06']}  colorsTime={[7]} >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
            <div className= "row justify-content-center" style={{marginTop:'25px'}}>
                <button type="button" className="btn btn-light" onClick={() => this.run = !this.run}>Run Dev Cycle</button>
            </div>
            </div>
        );

    }
    function
    RunDevCycle(){
        this.state.RunDevCycle = !this.state.RunDevCycle;
        console.log(this.state.RunDevCycle)
    }
    function
    SetStatusPage(Page){
        this.setState({CurrentPage: Page})
        console.log(this.state.CurrentPage)
    }
    function
    GetCurrentPage(CurrentPage){
        if (CurrentPage === 'develop') return(this.GetDevelopPage())
        if (CurrentPage === 'register') return(this.GetRegistrationPage());
        if (CurrentPage === 'login') return(this.GetLoginPage());
    }
}
export default FilmApp;