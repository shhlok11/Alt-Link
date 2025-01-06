import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  // Function to format the data for the chart
  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year:'numeric'})}`, item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  const options = {
    title: 'Cryptocurrency Prices Over Time',
    titleTextStyle: {
      color: '#00d4ff', // Neon cyan for visibility
      fontSize: 20,
      bold: true,
      fontName: 'Outfit',
    },
    hAxis: {
      title: 'Date',
      textStyle: { color: '#00d4ff' },
      titleTextStyle: { color: '#00d4ff' },
    },
    vAxis: {
      title: 'Price (USD)',
      textStyle: { color: '#00d4ff' },
      titleTextStyle: { color: '#00d4ff' },
    },
    legend: { position: 'bottom', textStyle: { color: '#00d4ff' } },
    colors: ['#ff6eff'], // Neon pink for the line
    lineWidth: 3,
    pointSize: 5,
    backgroundColor: {
      fill: 'transparent', // Transparent background to match the page background
    },
    chartArea: {
      backgroundColor: {
        fill: 'transparent', // Transparent background to match the page background
      },
    },
  };
  

  return (
    <Chart
      chartType='LineChart'
      data={data}
      options={options}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;