function personality(){
var name=document.getElementById('uname').value;
document.getElementById("imgid").src=" https://joeschmoe.io/api/v1/"+name;
}


function reset()
{
	document.getElementById('uname').value="";
	document.getElementById('imgid').src="image.gif";
}

