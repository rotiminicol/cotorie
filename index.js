// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://example.com/api/data', true);

// // Set the request headers
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.setRequestHeader('accept', 'application/json');
// xhr.setRequestHeader('api-key', "")



// data={
//     "subject":"",
//     "htmlContent":""
// }

// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     // Handle the response
//     console.log(xhr.responseText);
//   }
// };

// xhr.send();

// fetch("https://api.brevo.com/v3/smtp/email", {
//     method:"GET",
//     headers:{
//         "accept":"application/json",
//         "api-key":"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",
//         "content-type":"application/json"
//     },
//     "data":{
//         "sender":{
//             "name":"leu",
//             "email":"leumasre@gmail.com"
//         },
//         "to":[
//             {
//                 "email":"leuum",
//                 "name":"banjo.oladele.samuel@gmail.com"
//             }
//         ],
//         "subject":"subject",
//         "htmlContent":"content"
//     }
// }).then(response => response.json)
//   .then(data => {
//     console.log(data)
//   }).catch(error => {
//     console.log(error)
//   });


function registerForEarlyAccess() {
    var email = document.getElementById("emailInput").value;

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Specify the type of request and the URL
    xhr.open("POST", "your_server_script.php", true);

    // Set the Content-Type header
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Define what happens on successful data submission
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("Email sent successfully");
        }
    };

    // Define what happens in case of an error
    xhr.onerror = function() {
        console.error("Error sending email");
    };

    // Send the request with the email data
    xhr.send("emailInput=" + email);
}