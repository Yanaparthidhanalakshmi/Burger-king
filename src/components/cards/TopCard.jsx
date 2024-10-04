import React,{Component} from "react";
export default class TopCard extends Component{
    render(){
        return(
            <>
            <div id="td1">
                <h1 className="th">Start your </h1>
                <h1 className="th">BK® order.</h1>
                <button id="tb"><i className="fa-solid fa-bag-shopping"></i> Order Pickup</button>
                <br />
                <br />
                <button id="tb1"><i className="fa-solid fa-bicycle"></i> Order Delivery</button>
            </div>
            <div id="td2">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/97876c636e357c965a26f603f0a10bf3dd0d3f29-800x450.png?w=1125&q=90&fit=max&auto=format" alt="" height={382} width={788} />
            </div>
            </>
        )
    }
}