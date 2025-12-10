function convertF() {
    const inputf = document.getElementById('textf');
    const userInfo = inputf.value; 
    const fc = ((userInfo - 32) * (5/9)).toFixed(3);  

    document.getElementById('resultF').textContent = (fc + " Celcius"); 
}

function clearConverted1() {
    document.getElementById('resultF').textContent = "";  
    document.getElementById('textf').value = ''; 
    
}

function convertC() {
    const inputc = document.getElementById('textc');
    const userInfoSecond = inputc.value;
    const cf = ((userInfoSecond * (9/5)) + 32).toFixed(3);  

    document.getElementById('resultC').textContent = (cf + " Fahrenheit"); 
}

function clearConverted2() {
    document.getElementById('resultC').textContent = "";
    document.getElementById('textc').value = ''; 
}