import React,  { Component, useState }  from "react";
import axios from "axios";
import "../App.css"
import FormData from 'form-data';
export default function
    GetCommunityApp({username, userId, updateCurrentPage, updatePreviousPage, apiURL}) {
        const [posting, setPosting] = useState(false);
        const [postName, setPostName] = useState('');
        const [postBody, setPostBody] = useState('');
        const [image, setImage] = useState(null);
        const [posts, setPosts] = useState(null);
        const [requestedPosts, setRequestedPosts] = useState(false);
        async function getCommunityPosts(){
            try{
                    if(!requestedPosts)
                    await axios.get((apiURL+ "/posts"), ).then(function (response) {
                        console.log(response.data)
                        setPosts(response.data)
                        setRequestedPosts(true);

                    });
            }
            catch (e){
                console.log(e);
            }
        }
        console.log(username,'pp');
        async function postToCommunity(e){
            e.preventDefault()
            setPosting((false))
            let data = new FormData();
            data.append('Username', username);
            data.append('userId',userId);
            data.append('postName', postName);
            data.append('postBody', postBody);
            data.append('image', image);
            setRequestedPosts(false)
            try{
                await axios.post((apiURL+"/communityPost"), data

                ).then(function (response){

                    })
            }
            catch (e){
                console.log('ProblemPosting')
            }

        }
        function
        getcurrentContextMenu() {
            if (posting && username !== '') {
                return (
                    <div className='col p-5'>
                        <div className='row justify-content-center'>
                            <form onSubmit={postToCommunity}>
                                <div className='row'>
                                    <input type='text' value={postName} onChange={(e) => setPostName(e.target.value)}
                                           className="form-control postName bg-light" id="email" placeholder="PostTitle"/>
                                </div>
                                <div className='row pt-4 pb-4'>
                                    <input type='text' value={postBody} onChange={(e) => setPostBody(e.target.value)}
                                           className="form-control postName bg-light " id="email" placeholder="post body"/>
                                </div>
                                <div className='row'>
                                    {getImageSubMenu()}
                                </div>
                                <div className='row pt-4'>
                                    <div className='col'>
                                        <button type="submit" className="btn btn-dark">Post</button>
                                    </div>
                                    <div className='col'>
                                        <button type="submit" onClick={() => {
                                            cancelPost()
                                        }} className="btn btn-dark">Cancel
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                );
            }
            else if(!posting){
                return(
                    <div className='col p-5'>
                        <div className='row justify-content-center'>
                                <button type = 'button' onclick onClick={() => {setPosting(true); setImage(null)}} className="btn btn-dark">Create post</button>
                        </div>
                        <div className='row justify-content-center'>
                            {getPosts()}
                        </div>
                    </div>
                );
            }
            else {
                return(
                    <div className='col p-5'>
                        <div className='row justify-content-center'>
                            <button type = 'button' onClick={() => {updateCurrentPage('login'); updatePreviousPage('community');}} className="btn btn-dark">Please Login</button>
                        </div>
                    </div>
            );
            }
        }
        function
        getPosts(){
            getCommunityPosts();
            let out= ""
            if(posts != null){
                out = posts.map(function(post){
                    return(
                        <div className='row pt-4 justify-content-center'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='row justify-content-center'>
                                        <h2>{post.postTitle}</h2>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <p>{post.postUsername}</p>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <hp>{post.postBody}</hp>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <img alt="why no find" width={'500px'} src={'http://192.168.1.204:4000/postimage?id='.concat(post.iduserPosts)}/>
                                    </div>

                                </div>



                            </div>
                        </div>)
                })
                return ( <div className='col justify-content-center'>{out}</div> )
            }

        }
        function
        cancelPost() {
            setPosting(false);
            setPostBody('');
            setPostName('');

        }

        function
        getImageSubMenu() {
            if (image == null) {
                return (<input type='file' value={image} onChange={(e) => setImage(e.target.files[0])}
                               className="form-control postName bg-light " id="email" placeholder="post body"/>);
            } else {
                return (
                    <div>
                        <div className='row'>
                            <img alt="why no find" width={'300px'} src={URL.createObjectURL(image)}/>
                        </div>
                        <div className='row pt-4 justify-content-center'>
                            <button type='button' className="btn btn-dark" onClick={() => setImage(null)}>Remove</button>
                        </div>
                    </div>
                )
            }
        }
        return (<div>{getcurrentContextMenu()}</div>);
}