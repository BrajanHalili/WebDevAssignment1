window.onload = function(){ 
    function changeContinent(map,caption){
        document.getElementById('ContinentImage').src =map;
        document.getElementById('ContinentImage').alt=caption;
        document.getElementById('ContinentCaption').textContent =caption;
    };

    asia = document.getElementById("Asia");
    asia.onclick = function(){changeContinent("./Images/Asia.png", "Asia")};

    africa = document.getElementById("Africa");
    africa.onclick = function(){changeContinent("./Images/Africa.png", "Africa")};

    na = document.getElementById("North America");
    na.onclick = function(){changeContinent("./Images/North America.png", "North America")}

    sa = document.getElementById("South America");
    sa.onclick = function(){changeContinent("./Images/South America.png", "South America")}

    antarctica = document.getElementById("Antarctica");
    antarctica.onclick = function(){changeContinent("./Images/Antarctica-foto.png", "Antarctica")}

    europe = document.getElementById("Europe");
    europe.onclick = function(){changeContinent("./Images/Europe.png", "Europe")}

    australia = document.getElementById("Australia");
    australia.onclick = function(){changeContinent("./Images/Australia.png", "Australia")}
}