//var jQuery =jQuery.noConflict();

jQuery(".color-box").on("click",function(){
	jQuery(".color-box").removeClass('color-selected');
	//alert("Color: "+jQuery(this).attr("data-id"));
	jQuery(this).addClass('color-selected');
	jQuery("#wpspf_color_value").val(jQuery(this).attr("data-id"));
	get_all_data();
});

jQuery(".wpspf_attr_check").on("click",function(){
	//alert("Check: "+jQuery(this).val());
	get_all_data();
});

jQuery("#wpspf_attr_select").on("change",function(){
	//alert("Select: "+jQuery(this).val());
	get_all_data();
});

jQuery(".wpspf_attr_radio").on("click",function(){
	//alert("Radio: "+jQuery(this).val());
	get_all_data();
});
function reset_attribute_front(id){
	
}

function get_all_data(){
	var datastring = jQuery("#wpspf-attribute-filter").serialize();
	console.log(datastring);
	var data = {
	    'action': 'wpspf_pr_filter_by_attribute',
	    dataType: "html",
	    'datastring': datastring,
	};
	var ajaxurl = "<?php echo admin_url( 'admin-ajax.php' ) ?>";
	jQuery.post(wpspf_js_object.ajax_url, data, function(response) {

		jQuery(".woocommerce-result-count").html('');
		jQuery(".woocommerce-ordering").html('');
		jQuery(".woocommerce-pagination").html('');
		if(response == 'refresh'){
			location.reload();
		}
		else{
			jQuery(".products").html('');
			jQuery(".products").html(response);
		}
		//alert(response);
	});
}

jQuery('.wpspf-category ul').hide();
jQuery('.wpspf-category li span').click(function() {
	jQuery('.wpspf-category li span').removeClass('selected-category');
	var id = jQuery(this).attr('data-id');
	//console.log(id);
	jQuery("#wpspf_cat_id").val(id);
	jQuery(this).addClass('selected-category');
	jQuery(this).show();
	get_all_data();
});

jQuery('.wpspf-category li').click(function() {
	//var id = jQuery(this).attr('data-id');
	//console.log(id);
	jQuery(this).removeClass('selected-category');
	if(jQuery(this).hasClass('has-subcategory'))
	{
		if(jQuery(this).hasClass('wpspf-category-collapse')){
	  		jQuery(this).removeClass('wpspf-category-collapse');
	  		jQuery(this).addClass('wpspf-category-expand');
	 	}
	  	else{
	  		jQuery(this).removeClass('wpspf-category-expand');
	  		jQuery(this).addClass('wpspf-category-collapse');
	  	}
	}
	jQuery(this).children("ul").slideToggle();
	return false;

});

jQuery("#wpspf_cat_id_selectbox").on("change",function(){
	get_all_data();
});