import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () =>{
   return (
    <div id="parent">
        <Header />
        <Body />
    </div>
   ) ;
}


const heading = React.createElement("h1", {}, "hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);