//--------------- GET YEAR ---------------
document.getElementById("year").innerHTML = new Date().getFullYear();


//--------------- GET IP INFOMATIOENS ---------------
const ipv4 = document.getElementById('ipv4');
const isp = document.getElementById('isp');
const country = document.getElementById('country');

fetch('https://api.ipgeolocation.io/ipgeo?apiKey=62120e09c8984b9b8cea4ae931e9cccd')
.then((res) => res.json())
.then((data) => {
    // API: https://ipgeolocation.io/documentation/ip-geolocation-api.html
    console.log(data);
    ipv4.innerHTML = data.ip;
    isp.innerHTML = data.isp;
    //country.innerHTML = data.country_name;
});


//--------------- TAB CHANGER (INDEX - SPEEDTEST)---------------

const tablinksHome = document.getElementById("tablinksHome");
const tablinksSpeedtest1 = document.getElementById("tablinksSpeedtest1");

tablinksHome.onclick = function(){
  openCity(event, 'yourip')
}

tablinksSpeedtest1.onclick = function(){
  openCity(event, 'tablinksSpeedtest1')
}

openCity(event, 'yourip');



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


//--------------- COPY FUNCTION BY ALEXEJ ---------------
const copyText = document.getElementById("ipv4");
const copyTextbtn = document.getElementById("ipcopybtn");

copyTextbtn.onclick = function(){
    copy(copyText.innerHTML);
}


function copy(text)
{
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand("copy");  // Security exception may be thrown by some browsers.
    }
    catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
    }
    finally {
        document.body.removeChild(textarea);
    }
}

//--------------- MORE DETIALS JS ---------------
function detilasFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("details");
  var openText = document.getElementById("more-details-btn");
  var closeText = document.getElementById("close-details-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    openText.style.display = "none";
    closeText.style.display ="inline";
    moreText.style.display ="inline";
  } else {
    dots.style.display = "none";
    openText.style.display = "inline";
    closeText.style.display ="none";
    moreText.style.display ="none";
  }
}