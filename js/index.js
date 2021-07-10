document.addEventListener("keypress",function(e){
	sound(e.key);
	addanimation(e.key);
});


var buttonclick=document.querySelectorAll('.drum');

for (var i = 0; i < buttonclick.length; i++) {
	buttonclick[i].addEventListener('click',function(){
		// console.log(this.innerHTML);
		var innerButton=this.innerHTML;
		sound(innerButton);
		addanimation(innerButton);

	});
}

function sound(getkey){
	switch(getkey){
	  	case 'z':
	  		var audio = new Audio('sounds/tom-1.mp3');
	  		audio.play();
	  		
	    break;
	    case 'x':
	  		var audio1 = new Audio('sounds/tom-2.mp3');
	  		audio1.play();
	  	break;
	    case 'c':
	  		var audio2 = new Audio('sounds/tom-3.mp3');
	  		audio2.play();
	  	break;
	    case 'v':
	  		var audio3 = new Audio('sounds/tom-4.mp3');
	  		audio3.play();
	  	break;
	    case 'v':
	         var audio4 = new Audio('sounds/snare.mp3');
	         audio4.play();
	    break;
	    case 'b':
	        var audio5 = new Audio('sounds/kick-bass.mp3');
	        audio5.play();
	    break;
	    	
	    case 'n':
	        var audio6 = new Audio('sounds/crash.mp3');
	        audio6.play();
	       
	   	break;
	    case 'm':
	        var audio7 = new Audio('sounds/crash.mp3');
	        audio7.play();
	       
	    break;    
	    			 
	    default:
	     console.log(getkey);
	 }
}

function addanimation(effect){
	var addanimation=document.querySelector("."+effect);
	addanimation.classList.add("border-1");
	
	setTimeout(function()
	{
		document.querySelector("."+effect).classList.remove('border-1');

	},300);
}













  // document.addEventListener("keypress",sound);

// document.querySelector(".pic1").addEventListener('click',function()
//  {
//   	var audio = new Audio('sounds/tom-1.mp3');
//   	audio.play();
//   	addnimation();

// });
// document.querySelector(".pic2").addEventListener('click',function()
// {
//   	var audio1 = new Audio('sounds/tom-2.mp3');
//   	audio1.play();
//   	addnimation1();
// });
// document.querySelector(".pic3").addEventListener('click',function()
// {
//   	var audio2 = new Audio('sounds/tom-3.mp3');
//   	audio2.play();
//   	addnimation();
// });
// document.querySelector(".pic4").addEventListener('click',function()
// {
//   	var audio3 = new Audio('sounds/tom-4.mp3');
//   	audio3.play();
//   	addnimation();
// });
//  document.querySelector(".pic5").addEventListener('click',function()
// {
//   	var audio4 = new Audio('sounds/snare.mp3');
//     audio4.play();
//     addnimation();
// });
// document.querySelector(".pic6").addEventListener('click',function()
// {
//     var audio5 = new Audio('sounds/kick-bass.mp3');
//     audio5.play();
//     addnimation();
// });
//  document.querySelector(".pic7").addEventListener('click',function()
// {
//   	var audio6 = new Audio('sounds/crash.mp3');
//     audio6.play();
//     addnimation();
// });
// function sound(e){
// switch(e.key){
//   	case 'q':
//   		var audio = new Audio('sounds/tom-1.mp3');
//   		audio.play();
//   		addnimation();
//      break;
//     case 'w':
//   		var audio1 = new Audio('sounds/tom-2.mp3');
//   		audio1.play();
//   		addnimation();	
//      break;
//     case 'e':
//   		var audio2 = new Audio('sounds/tom-3.mp3');
//   		audio2.play();
//   		addnimation();
  		
    	
//      break;
//      case 'r':
//   		var audio3 = new Audio('sounds/tom-4.mp3');
//   		audio3.play();
//   		addnimation();
  		
    	
//      break;
//      case 'a':
//          var audio4 = new Audio('sounds/snare.mp3');
//          audio4.play();
//          addnimation();
        
//          break;
    	 
//      case 's':
//         var audio5 = new Audio('sounds/kick-bass.mp3');
//         audio5.play();
//         addnimation();
      
//         break;
    	
//     case 'd':
//         var audio6 = new Audio('sounds/crash.mp3');
//         audio6.play();
//        addnimation();
//         break;
    			 
//      default:
//      console.log(e.code);
//   }
  	
// }
// function addnimation(){
// 	document.querySelector(".pic").classList.add("border-1");
// }
//  setTimeout(function(){ 
//  	addnimation.classList.remove("border-1");
//  },2000);




// document.querySelector(".pic2").addEventListener('click',function()
// {
//   	var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
// });

// document.querySelector(".pic3").addEventListener('click',function()
// {
//   	var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
// });

// document.querySelector(".pic4").addEventListener('click',function()
// {
//   	var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
// });

// document.querySelector(".pic5").addEventListener('click',function()
// {
//   	var audio = new Audio('sounds/snare.mp3');
//     audio.play();
// });

// document.querySelector(".pic6").addEventListener('click',function()
// {
//   	var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
// });