function volume_sphere() {
    //Write your code here
	debugger
  let radEl=document.getElementById("radius");
	let r=radEl.value;

let vol=(4/3)*(22/7)*(r*r*r);
	document.getElementById("volume").value=vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
