const endDate = "30 November 2023 12:00 pm " ;

document.getElementById("end-date").innerText = endDate;

const inputSelector = document.querySelectorAll("input");


function clock(){
    const end = new Date(endDate)
    const now = new Date();
    const diff = (end - now)/1000;//convert in mili seconds
    // console.log(end);
    // console.log(now);
    // console.log(diff);//difference in mili second;

    if(diff < 0) return;
    //if difference negative ho gya to aage run nhi hoga
    //means minus values nhi aayegi


    //logic for days

    inputSelector[0].value=Math.floor(diff/3600/24);

    //convert into hours

    inputSelector[1].value=Math.floor(diff/3600) % 24;//remainder aayega jo hour hoga

    //convert into minutes

    inputSelector[2].value=Math.floor(diff/60) % 60;

    //convert into seconds

   inputSelector[3].value= Math.floor(diff) %60;

    
}

//initial call 
clock();

//now we call the function in every one seconds

setInterval(
    ()=>{
        clock()
    },1000
)