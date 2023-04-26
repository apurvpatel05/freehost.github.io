function contact_num_valid(evt) {
    var theEvent = evt || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    } 
    var count = (evt.target.value.match(/\+/g) || []).length;
    if (count < 2 && key == '+') {
        evt.target.value = evt.target.value.replace(/\+/g, "");
        evt.target.value = '+' + evt.target.value;
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        return false;
    }
    var regex = /[+0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
jQuery(".gform form-horizontal pure-form-stacked").submit(function(e) {
jQuery(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"],input[type="email"],textarea').each(function(){jQuery(this).val($.trim(jQuery(this).val()));})
function valid_contact()
{	
	var name=document.querySelector('.gform form-horizontal pure-form-stacked #name');
	var contact_no=document.querySelector('.gform form-horizontal pure-form-stacked #contact_no');
    if(name.value=='')
	{
		document.querySelector('.gform form-horizontal pure-form-stacked #error_data').innerHTML = '* Please Enter Name.';
		name.style.borderColor="red";
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
	var digit = name.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Contact_Us #error_data').innerHTML = '* Invalid Name: ' + name.value;
		name.style.borderColor="red";		
		name.value = '';
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
	if(contact_no.value=='')
	{
		document.querySelector('#contact-form #error_data').innerHTML = '* Please Enter Contact No.';
	
		contact_no.style.borderColor="red";
		contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
	var c_mobile = contact_no.value.replace(/\+/g,'');
	var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
	if (!c_pattern.test(c_mobile)) {
		document.querySelector('#contact-form #error_data').innerHTML = '* Invalid Contact No.: ' + contact_no.value;
		contact_no.style.borderColor="red";
		contact_no.value = '';
        contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
	document.querySelector('#contact-form #error_data').innerHTML = '';
	return true;
}
	if(valid_contact()==true){document.querySelector('#contact-form #form_process').style.visibility="visible";jQuery(this).find('[type="submit"]').prop('disabled', true);//.fadeOut('slow');
		var form_url = jQuery(".gform form-horizontal pure-form-stacked").attr('action'); // the script where you handle the form input.	
		$.ajax({
			   type: "POST",
			   url: form_url,
			   data: jQuery(".gform form-horizontal pure-form-stackedm").serialize(), // serializes the form's elements.
			   success: function(data)
			   {
				   jQuery(".gform form-horizontal pure-form-stacked").empty();
				   jQuery(".gform form-horizontal pure-form-stacked").html(data); // show response from the php script.
				   $("#popup_close").trigger("click");
			   },
			   error: function(data)
			   {
				   jQuery(".gform form-horizontal pure-form-stacked").empty();
				   jQuery(".gform form-horizontal pure-form-stacked").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
				   $("#popup_close").trigger("click");
			   }
			 });
	
			e.preventDefault();
	}
	else{e.preventDefault();}
});