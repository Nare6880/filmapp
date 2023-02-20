import React,  { Component, useState }  from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import axios from "axios";
import "../App.css"
export default function
GetDevelopApp({apiURL}) {
    const [developers, setDevelopers] = useState(['Select Film']);
    const [films, setFilms] = useState(['']);
    const [dil, setDil] = useState(['Select Film and Developer']);
    const [filmSelected, setFilmSelected] = useState('')
    const [filmRequested, setFilmRequested] = useState(false);
    const [devRequested,setDevRequested] = useState(false);
    const [devSelected, setDevSelected] = useState('');
    const [dilutionRequested, setDilutionRequested] = useState(false);
    const [dilutionSelected, setDilutionSelected] = useState('');
    const [timeRequested, setTimeRequested] = useState(false);
    getDevTime();
    async function getDevTime(){
        try{
            if (dilutionRequested && dilutionSelected !== '' && !timeRequested){
                setTimeRequested(true);
                await axios.get((apiURL+ "/t"), {
                    params:{
                        film : filmSelected,
                        developer: devSelected,
                        dilution: dilutionSelected
                    }
                }).then(function (response) {
                        setKey(parseInt(response.data[0].DevChartTime));
                        console.log(response.data[0].time)
                });
            }
        }catch(e){
            console.log(e);
        }
    }
    function getDilutionDropDown(){
        getDilutionTable();
        console.log(devRequested, developers);
        return(<select name='Films' id ='films' onChange={(e) => setDilutionSelected(e.target.value)}>{dil.map((film) => <option value = {film}>{film}</option>)}
        </select>)
    }
    async function getDilutionTable(){
        let accum = [];
        try {
            if (!dilutionRequested && filmSelected !== '' && devSelected !== '') {
                setDilutionRequested(true);
                await axios.get((apiURL+ "/dil"), {
                    params:{
                        film : filmSelected,
                        developer: devSelected
                    }
                }).then(function (response) {
                    accum.push('Select Dilution');
                    for (let i = 0; i < response.data.length; i++) {
                        accum.push(response.data[i].DevChartDilution);
                    }
                    setDil(accum);
                    console.log(accum);
                });
            }
        }
        catch(e){
            console.log(e);
        }
    }
    function getFilmDropDown(){
        getFilmTable();
        console.log(devRequested, developers);
        return(<select name='Films' id ='films' onChange={(e) => setFilmSelected(e.target.value)}>{films.map((film) => <option value = {film}>{film}</option>)}
        </select>)
    }
    async function getFilmTable() {
        let accum = [];
        try {
            if (!filmRequested) {
                setFilmRequested(true);
                await axios.get((apiURL + "/f")
                ).then(function (response) {
                    accum.push('Select Film');
                    for (let i = 0; i < response.data.length; i++) {
                        accum.push(response.data[i].DevChartFilmStock);
                    }
                    setFilms(accum);
                    console.log(accum);
                });
            }
        }
        catch(e){
            console.log(e);
            console.log("probHere")
        }
    }
    function getDevDropDown(){
        getDevTable();
        console.log(devRequested, developers);
        return(<select name='Developers' id ='devs' onChange={(e) => setDevSelected(e.target.value)}>{developers.map((developer) => <option value = {developer}>{developer}</option>)}
        </select>)
    }
    async function getDevTable() {
        let accum = [];
        try {
            if (!devRequested && filmSelected !== '') {
                setDevRequested(true);
                await axios.get((apiURL+ "/d"), {
                    params:{
                        film : filmSelected
                    }
                }).then(function (response) {
                    accum.push('Select Developer');
                    for (let i = 0; i < response.data.length; i++) {
                        accum.push(response.data[i].DevChartDeveloper);
                    }
                    setDevelopers(accum);
                    console.log(accum);
                });
            }
        }
        catch(e){
            console.log(e);
        }
    }
    const [key, setKey] = useState(0);
    const children = ({ remainingTime }) => {
        const hours = Math.floor(remainingTime/3600)
        const minutes = Math.floor((remainingTime - 3600*hours)/60)
        const seconds = remainingTime % 60

        if (seconds > 9) {
            return `${minutes}:${seconds}`
        }
        else{
            return `${minutes}:0${seconds}`
        }
    }
    const [isPlaying, setIsPlaying] = useState(false);
    if (isPlaying) {
        Text = "Pause";
    }
    else{
        Text = "Play"
    }
    return (

        <div className="col">
            <div className="row justify-content-center" style ={{marginTop: '30px'}}>
                <CountdownCircleTimer
                    isPlaying ={isPlaying} duration={key} colors={['#690b06']}  colorsTime={[]}  >
                    {children}
                </CountdownCircleTimer>
            </div>
            <div className='row justify-content-center' style={{marginTop: '30px'}}>
                <div>
                    {getFilmDropDown()}
                </div>
            </div>
            <div className='row justify-content-center' style={{marginTop: '30px'}}>
                <div>
                    {getDevDropDown()}
                </div>
            </div>
            <div className='row justify-content-center' style={{marginTop: '30px'}}>
                <div>
                    {getDilutionDropDown()}
                </div>
            </div>
            <div className="row justify-content-center " style ={{marginTop: '20px'}}>
                <button className={'btn btn-dark'} onClick={() => setIsPlaying((prev) => !prev)}>
                    {Text}
                </button>
            </div>
        </div>
    );
}
