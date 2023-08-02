paragraphButton = document.getElementById("p-button");
imgButton = document.getElementById("img-button");
nButton = document.getElementById("nothing");
divRef = document.querySelectorAll('div')[1]

const pDiv = document.getElementById('p-div');
const imgDiv = document.getElementById("img-div");
const nDiv = document.getElementById("n-div");

let i = 0;
let j = 0;
let k = 0;

paragraphButton.addEventListener("click", function(){
    imgDiv.style.display = "none";
    pDiv.style.display = "block";
    nDiv.style.display = "none";
    if (pDiv.style.display != "none"){
        const pText = document.createElement('p');
        pText.innerHTML = "The Knicks will win a championship";
        pText.style.backgroundColor = "black";
        pText.style.color = "white";
        pText.style.padding = "10px";
        pDiv.appendChild(pText);  
        i++;
        document.getElementById("pcount").innerHTML = "pCount: " + i;  
    }
});

imgButton.addEventListener('click', function(){
    pDiv.style.display = "none";
    imgDiv.style.display = "flex";
    nDiv.style.display = "none";
    if (imgDiv.style.display != "none"){
        divRef.style.display = "flex";
        divRef.style.flexWrap = "wrap";        
        const img = document.createElement("img");        
        img.setAttribute("height", 200);
        img.setAttribute("width", 200);
        img.src = "images/knicks.png";
        imgDiv.appendChild(img);
        j++;
        document.getElementById("icount").innerHTML = "imgCount: " + j;
    }
})

nButton.addEventListener('click', function(){
    pDiv.style.display = "none";
    imgDiv.style.display = "none";
    nDiv.style.display = "flex";
    if (nDiv.style.display != "none"){
        k++;
        document.getElementById("ncount").innerHTML = "nothingCount: " + k;
    }
});

