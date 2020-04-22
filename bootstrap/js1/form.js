// JavaScript Document
function Validate()

{		

	if (document.form1.txtName.value == "")

	{

		alert("Please Enter Name");

		document.form1.txtName.focus();

		return false;

	}	



	if (document.form1.txtAddr.value == "")

	{

		alert("Please Enter Address");

		document.form1.txtAddr.focus();

		return false;

	}	



	if (document.form1.txtPhone.value == "")

	{

		alert("Please Enter Phone");

		document.form1.txtPhone.focus();

		return false;

	}	

	

	if (document.form1.txtEmail.value=="")

	{

		alert("Please Enter an Email address");

		document.form1.txtEmail.focus();

		return false;

	}



	if (!check_eid(document.form1.txtEmail))

	{

		alert("Please Enter a valid Email address");

		document.form1.txtEmail.focus();

		return false;

	}	



	if (document.form1.selPurpose.value == "0")

	{

		alert("Please select Purpose");

		document.form1.selPurpose.focus();

		return false;

	}	



	if (document.form1.txtComments.value == "")

	{

		alert("Please Enter Comments");

		document.form1.txtComments.focus();

		return false;

	}	



	return true;

}







function check_eid(fld)

{

	var len_of_fld = fld.value.length;

	var fld_str = fld.value;

	var i;

	var dot_pre = false;

	var atr_pre = false;

	var atr_pos = 0;

	var dot_pos = 0;





	for( i = 0 ; i < len_of_fld ;i++)

	 {  var ind_ch=fld_str.substring(i,i+1);



		if (ind_ch == '\@')

		{   atr_pre = true;

			atr_pos = i;

			continue;

		}

		if (ind_ch == '.')

		{   dot_pre = true;

			dot_pos = i;

			continue;

		}

	 }



	if (parseFloat(atr_pos) == 0)

	{      

		return 0;

	}



	if (parseFloat(atr_pos+1) == dot_pos)

	{      

		return 0;

	}



	if (dot_pos == parseFloat(len_of_fld-1))

	{       

		return 0;

	}



	if (dot_pre == true && atr_pre == true)

	{      

		return 1;

	}

	else

	{      

		return 0;

	}

}
