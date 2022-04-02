import React, { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Input from './Components/Input';
import Post from './Components/Post';

let id = 1;

function App() {
  const[posts, setPosts] = useState([]);

  function addPost(title){
    const newPost = {id, title};
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id){
    const updatedPosts = posts.filter((posts) => posts.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost}/>
      {posts.map((post) => (
          <Post 
            key={post.id} 
            id={post.id} 
            title={post.title}
            deletePost={deletePost}
          />
        )
      )}
    </div>
  );
}

export default App;
