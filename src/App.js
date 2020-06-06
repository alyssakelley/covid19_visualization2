import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData, fetchCountryHotSpots } from './api';
import covid19Image from './images/covid19_image2.png';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import MapDisplay from './components/MapDisplay/MapDisplay.js';
import tableau from 'tableau-api';  

class App extends React.Component {

    state = {
        data: {},
        country: '',
        graphType: '',
        // countryHotSpotPercents: {},
    }

    // with componentDidMount, the async goes before it instead of after like usual functions
    async componentDidMount() {
        this.initViz();
        const fetchedData = await fetchData(); // fetchData is an asyncronous function so it needs an await
        console.log("Fetched data " + fetchedData);
        this.setState({ data: fetchedData, graphType: "barGraph"});
        // let fetchedCountryHotSpots = new Map();
        // fetchedCountryHotSpots= await fetchCountryHotSpots();
        // console.log("Fetched country hot spots " + fetchedCountryHotSpots);
        // this.setState({ countryHotSpotPercents: fetchedCountryHotSpots});
    }

    initViz() {  
        console.log("Inside the VIZ INIT!!");
        const vizUrl = 'https://public.tableau.com/shared/Y357XSK6K?:display_count=y&:origin=viz_share_link';
        const options = {
            hideTabs: true,
            width: "1000px",
            height: "800px"
        };
        const vizContainer = this.vizContainer;  
        let viz = new window.tableau.Viz(vizContainer, vizUrl, options); 
      } 

    handleCountryChange = async (country) => {
        // get the data
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        // set the state
        this.setState({ data: fetchedData, graphType: "barGraph", country: country});
    }

    handleGraphPickerL() {
        console.log("Clicked line button");
        this.setState({
            graphType: "lineGraph"
        })
    }

    handleGraphPickerB() {
        console.log("Clicked bar button");
        this.setState({
            graphType: "barGraph"
        })
    }

    // pickTopHotSpots() {
    //     console.log("Picking hot spots");
    //     return Object.keys(this.countryHotSpotPercents).reduce((a, b) => this.countryHotSpotPercents[a] > this.countryHotSpotPercents[b] ? a : b);
    // }


    render() {
        let message = "Note: There is no daily data available for recovered cases.";
        const { data, country, graphType} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covid19Image} alt="COVID-19"/>
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <ButtonGroup toggle className="mb-2">
                    <Button variant="light" size="sm" active>
                            <a onClick={() => this.handleGraphPickerL()}>Line Graph</a>
                            {/* <a> "Note: There is no daily data available for recovered cases."</a> */}
                        </Button>
                    <Button variant="light" size="sm" active>
                            <a onClick={() => this.handleGraphPickerB()}>Bar Graph</a>
                    </Button>
                </ButtonGroup>
                <Chart data = {data} country = {country} graphType = {graphType}/>
                <a>{graphType=="lineGraph" ? message : null}</a>
                {/* <h1>{console.log(this.pickTopHotSpots())}</h1> */}
                <a ref={(div) => { this.vizContainer = div }}></a>
            </div>
        )
    }
}

export default App;