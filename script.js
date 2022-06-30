const userinput =document.getElementById("userinput");
const button =document.getElementById("enter");
const itemlist =document.querySelector(".item-list");

function inputLen() {
	return userinput.value.length
}

function addtolist(){

	const li=document.createElement("li");
	const span= document.createElement("span");
	const button= document.createElement("button");

	li.classList.add("item");
	span.classList.add("value");
	span.textContent=userinput.value;
	button.textContent="Delete";
	button.dataset.action="delete";

	li.append(span);
	li.append(button);
	itemlist.append(li);
	userinput.value="";
}

button.addEventListener("click" , function(e){
	if(inputLen()>0){
		addtolist();
	}
});

userinput.addEventListener("keypress", function(e){
	if(inputLen()>0 && event.which===13){
		addtolist();
	}
});

itemlist.addEventListener('click', function(e) {
  if (e.target.dataset.action === 'delete') {
    e.target.closest('.item').remove();
  }
});