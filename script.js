var load = document.getElementById("loader");

window.addEventListener("load", function() {

    load.style.display = "none";
})

window.addEventListener('scroll',()=>{

	let content = document.querySelector('.box');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight /1.5 ;
	if(contentPosition < screenPosition){
		
		content.classList.add('active');


	}else{
		content.classList.remove('active');
	}
}
);
