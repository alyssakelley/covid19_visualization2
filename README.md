# COVID-19 Visualization by Alyssa Kelley

Disclaimer: The API used to create this application is can be viewed [here] (https://covid19.mathdro.id/api)

Credit for the amazing idea and tutorial from the JavaScript Mastery Youtube 
channel which can be viewed [here] (https://www.youtube.com/watch?v=khJlrj3Y6Ls)

# About this application

This is a COVID-19 visualization. At the beginning of the webpage, you will see a counter of the number of infected people, number of people that have recovered, and the number of deaths caused by COVID-19. This visualization followed the color mapping channel to represent the three categories of data as: Infected = Blue, Recovered = Green, and Deaths = Red. Underneath all of these numerical data points, you will see the date this data was last updated, and a short description of what the data means to further clarify the visualization. 

Below the summarized data cards, there will be a chart further displaying the data. When you first view the application, you will be looking at a Global representation so the chart will be displayed as a line graph illustrating the number of infected people compared to the number of deaths. You can hover over any point to get the actual numerical value along side the date the data was last updated. You can also click on the graph key to further customize your line chart view and do to so, you simply click on the category you want to no longer display on the line chart. To have it re-display, you can re-click the catergory key. 

Above the chart, you will see a toggle bar so you can view a graph representation of the data specific to a country. Once you select a specific country, the chart will change from a line char to a bar chart. The bar chart will show the infected number of people, the numebr of people that have recovered, and the number of deaths. You can hover over each bar in the chart to see a numerical representation of that number. You can view as many countries bar chart's as you wish, or go back to view the global line graph. 

You can view a demonstration of this webapge by viewing the screen recording titled "demonstration.mov" in this repository.

# Technologies used to create this application:

This webpage was created using the programming language JavaScript with some custom css styling. It was mainly derived using the React.js framework to display the HTML to views and handle user interaction, Chart.js to create the line and bar charts, Material UI that allowed the card displays at the beginning of the page, etc. 

# How to run the application: 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You will need to install the following before successfully running this application: 

### `npm install --save axios react-chartjs-2 react-countup classnames`
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

