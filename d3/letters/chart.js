var DATA_FILE = "letters_new.tsv";
var INITIAL_LANG = "French"

function updateLanguage(language) {

    currentLang = language;

    var data = letterData.map(function(d) {
        return {Letter: d.Letter, frequency: d[language]};
    });

    // the TSV parser apparently reads in the column names, so we can use d.frequency
    yScale.domain([0, d3.max(data, function(d) { return d.frequency; })]);
    console.log("yScale.domain: ", yScale.domain());

    xScale.domain(data.map(function(d) { return d.Letter; })); //gets an array of all the letters in the data

    chart.select(".x").remove();
    chart.select(".y").remove();


    // Add in axes
    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, " + chartHeight + ")")
        .call(xAxis); // produce x-axis using "rubber stamp" function

    chart.append("g")
        .attr("class", "y axis")
        .call(yAxis) // produce y-axis using "rubber stamp" function
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -200)
        .attr("y", -60)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");

    var barWidth = chartWidth / data.length; //bar width is now variable

    // make new selection for the update cycle
    var bar = chart.selectAll(".bar")
        .data(data);

    console.log("Update: ", data);

    // get rid of old elements with exit selection
    bar.exit().remove();

    console.log("Exit: ", bar.exit());

    // add new elements with enter selection
    bar.enter().append("rect")
        .attr("class", "bar")
      .append("title");

    console.log("Enter: ", bar.enter());

    // do stuff with update selection
    bar
        .attr("x", function(d) { return xScale(d.Letter); })
        .attr("y", function(d) { return yScale(d.frequency); })
        .attr("width", xScale.rangeBand())
        .attr("height", function(d) { return chartHeight - yScale(d.frequency); })
      .select("title").text(function(d) { return d.Letter + ": " + d.frequency + "%"; });


}

// default language
var currentLang = INITIAL_LANG



var margin = {top: 20, right: 30, bottom: 30, left: 60};
var chartWidth = 960 - margin.left - margin.right; // gives inner width (after margins)
var chartHeight = 500 - margin.top - margin.bottom; // gives inner height (after margins)


var yScale = d3.scale.linear()
    .range([chartHeight, 0]); // SVG's y axis has 0 at top
    // can't set domain yet; depends on data

var xScale = d3.scale.ordinal()
    .rangeRoundBands([0, chartWidth], .1); //divides chartWidth into evenly sized bands with padding of .1


var xAxis = d3.svg.axis() // "rubber stamp" function that produces x-axis
  .scale(xScale)
  .orient("bottom");

var yAxis = d3.svg.axis() // "rubber stamp" function that produces y-axis
  .scale(yScale)
  .orient("left")
  .tickFormat(function(d) { return d + "%"; });


var chart = d3.select("#chart")
    .attr("width", chartWidth + margin.left + margin.right) //make the chart element the outer width (chart data + margins)
    .attr("height", chartHeight + margin.top + margin.bottom) // make the chart element the outer height (chart data + margins)
  .append("g") //add a g element to offset the chart data area by the margin size
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var letterData; //can we declare it like this, without initial value?

// RESPONSIVITY
function resize() {
    /* Update graph using new width and height (code below) */
    /* Find the new window dimensions */
    var width = parseInt(d3.select("#chart").style("width")) - margin.left - margin.right,
    height = parseInt(d3.select("#chart").style("height")) - margin.top - margin.bottom;

    console.log("new width: ", width, " new height: ", height);

    /* Update the range of the scale with new width/height */
    xScale.rangeRoundBands([0, width], .1);
    yScale.range([height, 0]).nice();

    /* Update the axis with the new scale */
    chart.select('.x.axis')
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    chart.select('.y.axis')
      .call(yAxis);

    /* Force D3 to recalculate and update the line */
    chart.selectAll('.bar')
      .attr("x", function(d) { return xScale(d.Letter); })
      .attr("y", function(d) { return yScale(d.frequency); })
      .attr("width", xScale.rangeBand())
      .attr("height", function(d) { return height - yScale(d.frequency); });
}

d3.select(window).on('resize', resize);


// LOAD DATA
d3.tsv(DATA_FILE, type, function(error, data){
    console.log(error);


    //Code here executes after data has loaded
    letterData = data;

    // Set up selection options for each language in the dataset
    var selector = d3.select("#testSelect optgroup");
    //console.log(Object.keys(data[0]));
    Object.keys(data[0]).forEach( function(lang) {
      if (lang === "Letter") return;
      selector.append("option")
        .attr("value", lang)
        .text(lang);
    });


    // update graph with initial language
    updateLanguage(currentLang);




});

// Code here executes while data is loading
function type(d) {
  Object.keys(d).forEach(function(lang) {
    if (lang === "Letter") return;
    d[lang] = +d[lang]; // coerces string (from tsv) to number
  });
  return d;
}
