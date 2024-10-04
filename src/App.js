import React,{Component} from "react";
import "./style.css"
import Navbar from "./components/cards/Navbar.jsx"
import TopCard from './components/cards/TopCard.jsx';
import Card from './components/cards/Card.jsx';
import data from './components/cards/data.js';
import Footer1 from "./components/cards/Footer1.jsx";
import Footer from './components/cards/footer.jsx';
export default class App extends Component{
  render(){
    return(
      <React.StrictMode>
        <Navbar/>
   <hr></hr>
   <TopCard/>
   <div id='uiCards'>
      {data.map((x,y)=>{
        return(
          <Card img={x.img} bHead={x.bHead} pContent={x.pContent} c={x.c} b={x.b} key={y}></Card>
        )
      })}
   </div>
   <Footer1/>
   <Footer/>
      </React.StrictMode>
    )
  }
}