import React,{Component} from "react"
export default class Navbar extends Component{
    render(){
        return(
        
            <div id="nav">
                <span id="set"><i className="fa-solid fa-bars"></i></span>
                <h2 id="head">BURGER KING</h2>
                <span id="contact"><i className="fa-solid fa-user" id="firsti" ></i></span>
                <button id="bct"><i className="fa-solid fa-bag-shopping"></i> View Cart</button>
            </div>
            
        )
    }

}