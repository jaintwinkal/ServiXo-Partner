const API_URL =
"https://script.google.com/macros/s/AKfycbzb2LGYFhk0on2gVT75U-BWi4rKejK24cf7ZoTH15gUcDlxyyH-_xj3y2FwgkRPZwZn/exec";

document
.getElementById("registrationForm")
.addEventListener("submit",
async function(e){

    e.preventDefault();

    const partner = {

        name:
        document.getElementById("name").value,

        mobile:
        document.getElementById("mobile").value,

        aadhaar:
        document.getElementById("aadhaar").value,

        city:
        document.getElementById("city").value,

        service:
        document.getElementById("service").value,

        experience:
        document.getElementById("experience").value,

        upi:
        document.getElementById("upi").value
    };

    try {
        
        console.log(partner);
        const response =
        await fetch(API_URL,{
            method:"POST",
            body:JSON.stringify(partner)
        });

        const result =
        await response.json();

        document.getElementById("partnerId")
        .innerHTML = "Partner ID: " + result.partnerId;

        document.getElementById("successModal")
        .style.display = "flex";
    }
    catch(error){

        alert(
        "Registration Failed"
        );

        console.log(error);
    }

});

    // window.location.href =
    // "success.html?id=" +
    // result.partnerId;

document.getElementById("closeModal")
.addEventListener("click", ()=>{

    document.getElementById("successModal")
    .style.display = "none";

    document.getElementById("registrationForm")
    .reset();
});

//Registered successfully

// const params =
//     new URLSearchParams(window.location.search);

// document
// .getElementById("partnerId")
// .textContent =
// params.get("id");