import React,{Component} from "react";
class Card extends Component{
    constructor(props){
        super(props)
        // console.log(props);
        
    }
    render(){
        return(
         <div id="all">
            <div id="card">
                <img src={this.props.img} style={{width:"595px",borderRadius:"10px"}}/>
                </div>
                <div id="content">
                    <h4>
                        <b id="h1">{this.props.bHead}</b>
                    </h4>
                    <p id="p0">{this.props.pContent}</p>
                    <p id="p1">{this.props.c}</p>
                    <button id="p2">{this.props.b}</button>
                </div>
                </div>
        )
    }
}
export default Card