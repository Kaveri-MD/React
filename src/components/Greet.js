import React from "react";

// function main(){
//     return <h1>hello vishwas</h1>
// }
const Greet = props => {
    console.log(props)
    return( 
        <div>
            <h1>
                hello {props.name}
            </h1>
            {props.children}
        </div>
    )    
}    

export default  Greet

/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> n 
        </header> */
        /* <Greet name="Kaveri">
          <p>children</p>
        </Greet>  
        <Greet name="Nithisha" />
        <Greet name="sur" /> */
        /* <Welcome /> */
         