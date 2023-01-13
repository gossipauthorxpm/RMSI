import React from "react";
import HomeData from "../data/HomeData";
import DataContainer from "./DataContainer";
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.data = new HomeData().data;
    }
    render() {
        return <div className={'home-page'}>
            <DataContainer data={this.data} h1={'About the 1'}/>
            <DataContainer data={this.data} h1={'About the 2'}/>
            <DataContainer data={this.data} h1={'About the 3'}/>
            <DataContainer data={this.data} h1={'About the 4'}/>
            <DataContainer data={this.data} h1={'About the 5'}/>
            <DataContainer data={this.data} h1={'About the 6'}/>
            <DataContainer data={this.data} h1={'About the 7'}/>
            <DataContainer data={this.data} h1={'About the 8'}/>
            <DataContainer data={this.data} h1={'About the 9'}/>
            <DataContainer data={this.data} h1={'About the 10'}/>
            <DataContainer data={this.data} h1={'About the 11'}/>
        </div>
    }
}
export default Home;