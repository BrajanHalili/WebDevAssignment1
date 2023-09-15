window.onload = function(){ 
function changeOcean(map,caption){
    document.getElementById('OceanImage').src =map;
    document.getElementById('OceanImage').alt=caption;
    document.getElementById('OceanCaption').textContent =caption;
};

pacific = document.getElementById("Pacific");
pacific.onclick = function(){changeOcean("./Images/pacific-ocean-map.png", "Pacific Ocean")};

atlantic = document.getElementById("Atlantic");
atlantic.onclick = function(){changeOcean("./Images/atlantic-ocean-map.png", "Atlantic Ocean")};

indian= document.getElementById("Indian");
indian.onclick = function(){changeOcean("./Images/indian-ocean-map.png", "Indian Ocean")};

southern = document.getElementById("Southern");
southern.onclick = function(){changeOcean("./Images/southern-ocean-map.png", "Southern Ocean")};

arctic = document.getElementById("Arctic");
arctic.onclick = function(){changeOcean("./Images/arctic-ocean-map.png", "Arctic Ocean")};
};


