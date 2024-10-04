import React,{Component} from "react";
export default class Footer extends Component{
    render(){
        return(
            
            <div id="foot">
            <ol>
                <li><i className="fa-solid fa-house"></i></li>
                <p className="cl">Home</p>
                <li><i className="fa-solid fa-bowl-food"></i></li>
                <p className="cl">Menu</p>
                <li><i className="fa-solid fa-tag"></i></li>
                <p className="cl">Offer</p>
                <li><i className="fa-solid fa-crown"></i></li>
                <p className="cl">Rewards</p>
            </ol>
            </div>
            
        )
    }
}