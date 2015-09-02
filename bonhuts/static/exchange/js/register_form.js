var handleBootstrapWizardsValidation = function() {
	"use strict";
	var flag1 = false;
	var flag2 = false;
	$("#wizard").bwizard(
			{
				validating : function(e, t) {
					if (t.index == 0) {
						if (false === $('form[name="form-wizard"]').parsley()
								.validate("wizard-step-1")) {
							flag1 = false;
							return false;
						}else{
							flag1 = true
							
							if(flag1){
								$("div.modal-footer :button.btn-success").removeClass("disabled")
							}else $("div.modal-footer :button.btn-success").addClass("disabled")
						}
					} else if (t.index == 1) {
						if (false === $('form[name="form-wizard"]').parsley()
								.validate("wizard-step-2")) {
							return false;
						}
					}
				}
			})
};


var FormWizardValidation = function() {
	"use strict";
	return {
		init : function() {
			handleBootstrapWizardsValidation()
		}
	}
}()