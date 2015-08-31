
function login(){
	
	
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	d3.select("#index").style("left", width * 0.3 + "px")
	d3.select('#login_page')
		.style("background", "rgba(255, 255, 255, 0)")
		.style("opacity", 0)
	

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

function register(){
	ht = "text"
		hs = ' \
		<div class="panel panel-inverse" data-sortable-id="form-validation-1">\
		    <div class="panel-body panel-form"> \
		        <form class="form-horizontal form-bordered" data-parsley-validate="true" name="demo-form">\
					<div class="form-group">\
						<label class="control-label col-md-4 col-sm-4" for="fullname">Full Name * :</label>\
						<div class="col-md-6 col-sm-6">\
							<input class="form-control" type="text" id="fullname" name="fullname" placeholder="Required" data-parsley-required="true" />\
						</div>\
					</div>\
					<div class="form-group">\
						<label class="control-label col-md-4 col-sm-4" for="email">Email * :</label>\
						<div class="col-md-6 col-sm-6">\
							<input class="form-control parsley-error" type="email" id="email" name="email" data-parsley-type="email" placeholder="Email" data-parsley-required="true" />\
						</div>\
					</div>\
					<div class="form-group">\
						<label class="control-label col-md-4 col-sm-4" for="website">Password * :</label>\
						<div class="col-md-6 col-sm-6">\
							<input type="password" name="Password" id="password-indicator-default" class="form-control m-b-5"/>\
							<div id="passwordStrengthDiv" class="is0 m-t-5"></div>\
						</div>\
					</div>\
					<div class="form-group">\
						<label class="control-label col-md-4 col-sm-4" for="website">Confirm password * :</label>\
						<div class="col-md-6 col-sm-6">\
							<input class="form-control" type="password" id="website" name="website" data-parsley-type="url" placeholder="Password" />\
						</div>\
					</div>\
					<div class="form-group">\
						<label class="control-label col-md-4 col-sm-4" for="message">Phone number:</label>\
						<div class="col-md-6 col-sm-6">\
							<input class="form-control" type="text" id="data-phone" data-parsley-type="number" placeholder="Phone number" />\
						</div>\
					</div>\
		        </form>\
		    </div>\
		</div>\
		</div>\
\
			<script>\
\
				$(document).ready(function(){\
					FormPlugins.init();\
				})\
			</script>\
			'
	bootbox.dialog({
		  message: hs,
		  title: "Register",
		  buttons: {
		    success: {
		      label: "Submit",
		      className: "btn-success",
		      callback: function() {
		    	  
		      }
		    },
		    Cancel: {
		      label: "Cancel",
		      className: "btn-danger",
		      callback: function() {
		    	  
		      }
		    },
		  }
		});

}