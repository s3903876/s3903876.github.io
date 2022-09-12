let isDarkMode = false;     /* initial */ 


function switchModes(){
    console.log (isDarkMode)
    if(isDarkMode === false){
        document.documentElement.style.setProperty("--col-01", "#ebf7fb");
        document.documentElement.style.setProperty("--col-02", "#171219");


        document.documentElement.style.setProperty("--gradCol-03", "#d6d6d6");
        document.documentElement.style.setProperty("--gradCol-04", "#f8f8f8");

        document.documentElement.style.setProperty("--gradCol-01", "#5b5b5b");
        document.documentElement.style.setProperty("--gradCol-02", "#383838");





        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDarkMode = true;



    } else { 
        
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02", "#ebf7fb");


        document.documentElement.style.setProperty("--gradCol-03", "#5b5b5b");
        document.documentElement.style.setProperty("--gradCol-04", "#383838");

        document.documentElement.style.setProperty("--gradCol-01", "#d6d6d6");
        document.documentElement.style.setProperty("--gradCol-02", "#f8f8f8");

        



        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDarkMode = false;
    
    }

/* it took some ime to get the gradient switches right, but I think it was worth it in the end.
One thing I did notice however is that when I click on some of the links the website reverts back to light mode.
Maybe it's detecting those links as the buttons? or it's refreshing the website?
This will have to be further investigated. */

/* the transition of dark mode/ light mode is very visually satisfying */




} 