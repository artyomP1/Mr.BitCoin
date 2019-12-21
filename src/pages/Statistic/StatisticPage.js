import React from 'react';
import  BitcoinService  from '../../modules/common/BitcoinService.js'
import { Sparklines, SparklinesLine ,SparklinesSpots} from 'react-sparklines';

import CanvasJSReact from './lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class StatisticPage extends React.Component {


        state = {
        marketPrice: []
    }

    async componentDidMount() {
        const marketPrice = await BitcoinService.getMarketPrice();   
        marketPrice.values.map(date =>{
           return date.x = new Date( date.x *1000)
        })
        console.log(marketPrice.values)
        this.setState({marketPrice})
    }

    

	render() {
        const {marketPrice} = this.state;
		const options = {
			animationEnabled: true,
			theme: "dark2",
			title:{
				text: "Market Price (USD)"
			},
			axisX:{
				valueFormatString: "DD MMM",
				crosshair: {
					enabled: true,
                    snapToDataPoint: true,
                  
				}
			},
			axisY: {
				title: "Closing Price (in USA $)",
				includeZero: false,
				valueFormatString: "$##0.00",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return "$" + CanvasJS.formatNumber(e.value, "##0.00");
					}
                },
                
			},
			data: [{
				type: "area",
				xValueFormatString: "DD MMM",
                yValueFormatString: "$##0.00",
                theme: "light2",
                dataPoints:marketPrice.values
			}]
		}
		
		return (
		<div className="canvas">
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default StatisticPage;