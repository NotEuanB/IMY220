import React from "react";
import ReactDOM from "react-dom/client";

class Greeting extends React.Component{
    render(){
        console.log("Hello");
        return (
            <div>
                <h2> Hello React! </h2>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);