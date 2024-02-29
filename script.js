let input =document.getElementById("inputbox");
let buttons=document.querySelectorAll("button");

function del() {
    screen.value = screen.value.length - 1;
  }

let result="";
let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click",(e)=> {
        if(e.target.innerHTML == "="){
            if(result != ""){
                result= eval(result);
                input.value =result;

            }
        }
        else if(e.target.innerHTML=="AC"){
            result = "";
            input.value = result;

        }
         else if(e.target.innerHTML=="DEL"){
           
                result = result.slice(0, -1);
                input.value = result;
     }  
        else{
            result+= e.target.innerHTML;
            input.value=result;
        }
    })
})
