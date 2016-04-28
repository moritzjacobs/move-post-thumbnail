;(function ( $, window, document, undefined ) {

	"use strict";
	
	// selector caching
	var hide = $("#postimagediv-hide");
	var postimagebox = $("#postimagediv");
	var titlediv = $("#titlediv");
	
	// init
	var visible = hide.attr("checked") === "checked";
	
	// prepare for new styling
	postimagebox.removeClass("postbox");
	postimagebox.find(".handlediv, .hndle, #set-post-thumbnail-desc").remove();
	postimagebox.find("#remove-post-thumbnail").text("");
	
	// rearrange image
	var postimage = postimagebox.find("#set-post-thumbnail img");
	postimage.detach();
	postimagebox.find("#set-post-thumbnail").text("").append(postimage);
	
	// prepare wrapper div
	if(visible) {
		titlediv.addClass("titlediv-has-replaced-postimagediv");
	}
	
	// move the whole thing
	postimagebox.detach().appendTo("#titlediv").show();
	
	// 
	hide.on("change", function(){
		visible = hide.attr("checked") === "checked";
		titlediv.toggleClass("titlediv-has-replaced-postimagediv");
	});

	
})( jQuery, window, document );