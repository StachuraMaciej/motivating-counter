const date = document.querySelector('.sendDate');

date.addEventListener('click', countTime);

function countTime()
{
    const humanDeathTime = 80;  //The average human lifes lasts  eighty years

    let birthdayDate = new Date(document.getElementById('date').value);
    
    let today = new Date();
    
    let years = today.getFullYear() - birthdayDate.getFullYear();// counting how old user have years
    
    birthdayDate.setFullYear(today.getFullYear());
    
    if (today < birthdayDate)
    {
        years--;
    }
   
     userDeathTime = (humanDeathTime-years);
    
    let toYear = userDeathTime + today.getFullYear(); // this variable have only year like 2050

    
    
     function countDownClock()
    {
        let today = new Date();
        let timeOut = new Date(`January 01, ${toYear} 00:00:00`);
        
        let currentTime = today.getTime();
        let time = timeOut.getTime();
        
        let remTime = time - currentTime;
        
        let sec = Math.floor(remTime/1000);
        let min = Math.floor(sec/60);
        let hrs = Math.floor(min/60);
        let days = Math.floor(hrs/24);
        
        hrs%=24;
        min%=60;
        sec%=60;
        
        days = (days > 0) ? ""+days : "0";//one linear record of the conditional instruction
        
        if (hrs < 10) 
        {
           hrs = "0"+hrs ;
        } 
        
        else if (hrs > 0)
        {
            hrs = ""+hrs;
        }
        else
            {
                hrs = "00"
            }
      
        if (min < 10) 
        {
           min = "0"+min;
        }
        
        else if (min > 0)
        {
            min = ""+min;
        }
        else 
            {
                min = "00";
            }
        
        if (sec < 10)
        {
           sec = "0"+sec ;
        } 
        else if (sec > 0)
        {
            sec = ""+sec;
        }
        else
            {
                sec = "00";
            }
        
        document.getElementById('days').innerHTML=days;
        document.getElementById('hrs').innerHTML =hrs;
        document.getElementById('min').innerHTML =min;
        document.getElementById('sec').innerHTML =sec;
        
        let OutTime = setTimeout(countDownClock, 1000);

        if (days === 0 && hrs === "00" && min === "00" && sec === "00")
       {
          return clearTimeout(OutTime);
       }
        
    }

      countDownClock();
    
} ;



 






















