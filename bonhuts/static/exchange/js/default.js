
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


d3.select("#login").on("click", function(){
	login_()
	
})
function login_(){
	console.log(123)
	
	$.ajax({
		url:"/exchange/login",
		type:"POST",
		async:false,
		data:{
			username: 		document.getElementById("login_username").value,
			password: 		document.getElementById("login_password").value,
		},
		success:function(s){
			if(s == "success"){
				window.location.href=""
			}else{
				bootbox.alert(s)
			}
			
		}
	})
}


function logout(){
		
	$.ajax({
		url:"/exchange/logout",
		type:"GET",
		async:false,
		success:function(s){
			if(s == "success"){
				window.location.href=""
			}else{
				
			}
			
		}
	})
}


function register(){
			
	hs_ = '\
		<div class="row">\
		    <!-- begin col-12 -->\
		    <div class="col-md-12">\
		        <!-- begin panel -->\
		        <div class="panel panel-inverse">\
					<div class="panel-body"> \
					    <form action="/" method="POST" data-parsley-validate="true" name="form-wizard">\
							<div id="wizard">\
								<ol>\
									<li>\
									    Login \
									</li>\
									<li>\
									    Identification\
									</li>\
								</ol>\
								<!-- begin wizard step-1 -->\
								<div class="wizard-step-1">\
					                <fieldset>\
									<legend class="pull-left width-full">Login</legend>\
							        <!-- begin row -->\
							        <div class="row">\
							            <!-- begin col-4 -->\
							            <div class="col-md-4">\
							                <div class="form-group">\
							                    <label>Username</label>\
							                    <div class="controls">\
							                        <input type="text"id="reg_username" name="username" placeholder="johnsmithy" class="form-control" data-parsley-group="wizard-step-1" required />\
												</div>\
							                </div>\
							            </div>\
							            <!-- end col-4 -->\
							            <!-- begin col-4 -->\
							            <div class="col-md-4">\
							                <div class="form-group">\
							                    <label>Pasword</label>\
							                    <div class="controls">\
							                        <input id="password1" type="password" name="password" placeholder="Your password" class="form-control" data-parsley-group="wizard-step-1" required />\
													<div style="opacity:0" id="passwordStrengthDiv" class="is0 m-t-5"></div>\
												</div>\
							                </div>\
							            </div>\
							            <!-- end col-4 -->\
							            <!-- begin col-4 -->\
							            <div class="col-md-4">\
							                <div class="form-group">\
							                    <label>Confirm Pasword</label>\
							                    <div class="controls">\
							                        <input type="password" name="password2" placeholder="Confirmed password" class="form-control" data-parsley-equalto="#password1" data-parsley-error-message="Passwords must match."  data-parsley-group="wizard-step-1" required/>\
							                    </div>\
							                </div>\
							            </div>\
							            <!-- end col-6 -->\
							        </div>\
							        <!-- end row -->\
									</fieldset>\
								</div>\
								<!-- end wizard step-1 -->\
								<!-- begin wizard step-2 -->\
								<div class="wizard-step-2">\
									<fieldset>\
										<legend class="pull-left width-full">Identification</legend>\
								        <!-- begin row -->\
								        <div class="row">\
									        <!-- begin col-6 -->\
									        <div class="col-md-6">\
												<div class="form-group">\
													<label>Email Address *</label>\
													<input id="email" type="email" name="email" placeholder="someone@example.com" class="form-control" data-parsley-group="wizard-step-2" data-parsley-type="email" required/>\
												</div>\
									        </div>\
									        <!-- end col-6 -->\
									        <!-- begin col-6 -->\
					                        <div class="col-md-6">\
												<div class="form-group">\
													<label>Phone Number</label>\
													<input id="phonenumber" type="text" name="phone" placeholder="1234567890" class="form-control" data-parsley-group="wizard-step-2" data-parsley-type="number" />\
												</div>\
					                        </div>\
					                        <!-- end col-6 -->\
								            <!-- begin col-4 -->\
								            <div class="col-md-4">\
												<div class="form-group block1">\
													<label>First Name</label>\
													<input id="firstname" type="text" name="firstname" placeholder="George" class="form-control" data-parsley-group="wizard-step-2" />\
												</div>\
								            </div>\
								            <!-- end col-4 -->\
								            <!-- begin col-4 -->\
								            <div class="col-md-4">\
												<div class="form-group">\
													<label>Middle Initial</label>\
													<input id="middle" type="text" name="middle" placeholder="W" class="form-control" data-parsley-group="wizard-step-2" />\
												</div>\
								            </div>\
								            <!-- end col-4 -->\
								            <!-- begin col-4 -->\
								            <div class="col-md-4">\
												<div class="form-group">\
													<label>Last Name</label>\
													<input id="lastname" type="text" name="lastname" placeholder="Bush" class="form-control" data-parsley-group="wizard-step-2" />\
												</div>\
								            </div>\
								            <!-- end col-4 -->\
								        </div>\
								        <!-- end row -->\
					                </fieldset>\
								</div>\
								<!-- end wizard step-2 -->\
							</div>\
						</form>\
					</div>\
				</div>\
			</div>\
		</div>\
		<script>\
			$(document).ready(function(){\
				$("#password1").passwordStrength();\
				FormWizardValidation.init();\
			})\
		</script>\
		'
		
	bootbox.dialog({
		  message: hs_,
		  title: "Join us",
		  buttons: {
			  submit: {
				  label:"Submit",
			      className: "btn-success disabled",
			      disabled: "false",
			      callback: function() {
			    	  	if (document.getElementById("reg_username").value 	== "" || 
		    	  			document.getElementById("password1").value 		== "" || 	
		    	  			document.getElementById("reg_username").value 	== ""  )
			    	  		{
					    	  return;
					    	}
			    	  	if (false === $('form[name="form-wizard"]').parsley()
								.validate("wizard-step-2")) {
					    	 $(this).preventDefault();
							return false;
						}

			    	  	
						$.ajax({
							url:"/exchange/register",
							type:"GET",
							async:false,
							data:{
								username: 		document.getElementById("reg_username").value,
								password: 		document.getElementById("password1").value,
								phonenumber: 	document.getElementById("phonenumber").value,
								email: 			document.getElementById("email").value,
								firstname:		document.getElementById("firstname").value,
								middle:			document.getElementById("middle").value,
								lastname:		document.getElementById("lastname").value
								
							},
							success:function(s){
								if(s == "success"){
									bootbox.alert("Register success!")
									window.location.href=""
								}else{
									
								}
								
							}
							
							
						})
			      }
			  },
			  Cancel: {
			      label: "Cancel",
			      className: "btn-danger",
			    }
		  }
		});

}