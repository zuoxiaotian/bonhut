
function login(){
	
	
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	d3.select("#index").style("left", width * 0.3 + "px")
	

	d3.select('#index')
		.transition()
		.duration(750)
			.style('width', width * 0.3 + "px")
			.style("left", width * 0.2 + "px")
			.style("background", "rgba(255, 255, 255, 0.3)")
	
	setTimeout(function(){
		d3.select('#login_page')
			.transition()
			.duration(750)
				.style("background", "rgba(255, 255, 255, 0.7)")
				.style("opacity", 0.8)
	}, 500)
	
}