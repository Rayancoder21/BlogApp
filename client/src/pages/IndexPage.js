import Post from "../Post";
import { useEffect } from "react";
import { useState } from "react";


export default function IndexPage() {
    const[posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post', { //or posts
            credentials: 'include',
        }).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });

    }, []);
    return(
        <div> 
            {posts.length > 0 && posts.map(post => (
                <Post{...post}/>
            ))}
        
        </div>
    );
}