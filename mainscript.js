window.onload = function () {

/*          zwaartekracht          */
    
var chart = new CanvasJS.Chart("gravity", {
	exportEnabled: true,
	animationEnabled: true,
	axisX: {
		title: "Zwaartekracht in Newton"
	},
	
	axisY2: {
		title: "Units",
		titleFontColor: "#000",
		lineColor: "#C0504E",
		labelFontColor: "#C0504E",
		tickColor: "#fff"
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "Zwartekracht",
		showInLegend: true,      
		yValueFormatString: "#,##0.# Newton",
		dataPoints: [
			{ label: "Aarde",  y: 9.807 },
			{ label: "Shuttle", y: 0.20 },
			{ label: "Mars", y: 3.711 },
		]
	},
]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

/*          Snelheid          */

var chart = new CanvasJS.Chart("speed", {
	animationEnabled: true,
	title:{
		horizontalAlign: "left"
	},
	data: [{
		type: "doughnut",
		startAngle: 180,
		//innerRadius: 60,
		dataPoints: [
			{ y: 5, label: "current speed"},
			{ y: 6, label: "top speed"}
		]
	}]
});
chart.render();

}