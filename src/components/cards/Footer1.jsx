import React,{Component} from "react";
export default class Footer1 extends Component{
    render(){
        return(
            <>
            <div id="f1img">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1125&q=80&fit=max&auto=format" alt=""  height={441} width={473}/>
            </div>
            <div id="f2">
                <h1 className="f2h"> Save $$$</h1>
                <h1 className="f2h">With offers on demand</h1>
                <button className="f2b">
                <i className="fa-brands fa-apple"></i> APP STORE
                </button>
                <button className="f2b"><i className="fa-brands fa-google-play"></i> GOOGLE PAY</button>
                <p id="f1p">Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
            </div>
            </>
        )
    }
}