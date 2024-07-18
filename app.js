document.addEventListener("DOMContentLoaded", function () {
    let inp = document.querySelector("input");
    let btn = document.querySelector("button");
    let ul = document.querySelector("ul");

    btn.addEventListener("click", function () {
        // Your existing click event code
        let item = document.createElement("li");
        item.innerText = inp.value; 

        let delbtn = document.createElement("button");
        delbtn.innerText = "delete";
        delbtn.classList.add("delete");
        item.appendChild(delbtn);
        ul.appendChild(item);
        console.log(inp.value);
    });
    
    ul.addEventListener("click",function(event){
        if(event.target.nodeName=="BUTTON"){
            let listItem = event.target.parentElement;
            listItem.remove();
        }
    });
 //    let delbtns = document.querySelectorAll(".delete");
 //    for(delbtn of delbtns){
  //      delbtn.addEventListener("click",function () {
    //      let par = this.parentElement;
      //    console.log(par);
        //  par.remove();
       // });
    // } 
});
