import "./st.css"
import React, { Component }  from 'react';
import SpendingTrackerNavbar from "../components/SpendingTrackerNavbar";
import { Provider } from "react-redux";
import store from "../store";
import SpendingTracker from "../components/SpendingTracker";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import IncomePage from "../components/IncomePage";
import ExpensePage from "../components/ExpensePage";

function SpendingTrackerScreen() {
  return (
    <Provider store={store}>
      <div className="App">
        <SpendingTrackerNavbar />
        <SpendingTracker />
        
         
            {/* <Route exact path="/spendingtracker" element={<SpendingTracker />} />
            <Route exact path="/income" element={<IncomePage/>}/>
            <Route exact path="/expense" element={<ExpensePage/>}/> */}
        
        
      </div>
    </Provider>
  );
}

export default SpendingTrackerScreen;
