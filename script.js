console.log("I am working");

// console.log(navigator.getBattery());
initBattery();

function initBattery(){
    let low=document.querySelector(".low-battery");
    let normal=document.querySelector(".normal-battery");
    let charging=document.querySelector(".charging-battery");
    let currentBattery=document.querySelector(".batteryPercentage");
    let logo=document.querySelector(".image");
    let percentage=navigator.getBattery().then((batt)=>{
        updateBattery=()=>{
            let level=Math.floor(batt.level *100);
            currentBattery.innerHTML=level+"%";
            if(parseInt(batt.level*100)<20){
                normal.classList.remove("active");
                charging.classList.remove("active");
                low.classList.add("active");
            }
            else if(parseInt(batt.level*100)>20 && batt.charging){
                charging.classList.remove("active");
                low.classList.remove("active");
                normal.classList.add("active");
                logo.classList.add("active");
            }
            else if(parseInt(batt.level*100)>20 && !batt.charging){
                charging.classList.remove("active");
                low.classList.remove("active");
                normal.classList.add("active");
            }
            else{
                low.classList.remove("active");
                normal.classList.remove("active");
                charging.classList.add("active");
            }

        }

        updateBattery();
    });
    
    
}
