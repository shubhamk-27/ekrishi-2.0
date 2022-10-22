import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderCropTips from '../components/HeaderCropTips';
import MainWindow from '../components/MainWindow'
import AddPost from '../components/AddPost'
import "./cropTips.css";


function CropTips() {

    const [inputText, setInputText] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [post, setPost] = useState([]);
  return (
    
        <Router>
        <HeaderCropTips />
        
          <Route
            path="/ctips"
            exact
            render={(props) => (
              <MainWindow
                inputText={inputText}
                name={name}
                date={date}
                post={post}
                {...props}
              />
            )}
          />
          <Route
            path="/addpost"
            render={(props) => (
              <AddPost
                setInputText={setInputText}
                inputText={inputText}
                setName={setName}
                name={name}
                setDate={setDate}
                date={date}
                setPost={setPost}
                post={post}
                {...props}
              />
            )}
          />
        
      </Router>
    
  )
}

export default CropTips