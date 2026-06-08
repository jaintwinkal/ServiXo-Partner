document
.addEventListener(
"DOMContentLoaded",
()=>{

const serviceDropdown =
document.getElementById(
"service"
);

fetch(
"data/services.json"
)
.then(res=>res.json())
.then(data=>{

data.services.forEach(
service=>{

const option =
document.createElement(
"option"
);

option.value =
service;

option.textContent =
service;

serviceDropdown
.appendChild(option);

});

});

});
