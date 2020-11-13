data1 = []
for (let i = 0; i < 20; i++){
	data1.push({
	X: Math.floor(Math.random()*10),
	Y: Math.floor(Math.random()*10)
	});
}
data2 = []
for (let i = 0; i < 20; i++){
	data2.push({
	X: Math.floor(Math.random()*10),
	Y: Math.floor(Math.random()*10)
	});
}
var margin = {top: 20, right: 20, bottom: 30, left: 50},
width = 500 - margin.left - margin.right,
height = 450 - margin.top - margin.bottom;

var svg = d3.select("#Scatterplot")
.append("svg")
.attr("width", 500)
.attr("height", 450)
.append("g")
.attr("transform","translate(" + margin.left + "," + margin.top + ")");

var xScale = d3.scaleLinear()
.domain([0, 10])
.range([ 0, width ]);
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(xScale));

var yScale = d3.scaleLinear()
.domain([0, 10])
.range([ height, 0]);
svg.append("g")
.call(d3.axisLeft(yScale));

svg.append('g')
.selectAll("circle")
.data(data1)
.enter()
.append("circle")
.attr("cx", function (d) { return xScale(d.X); } )
.attr("cy", function (d) { return yScale(d.Y); } )
.attr("r", 2)
.style("fill", "red")

svg.append('g')
.selectAll("circle")
.data(data2)
.enter()
.append("circle")
.attr("cx", function (d) { return xScale(d.X); } )
.attr("cy", function (d) { return yScale(d.Y); } )
.attr("r", 2)
.style("fill", "blue")