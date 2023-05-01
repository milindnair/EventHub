// Retrieve the event-list and event-select elements
var eventList = document.getElementById("event-list");
var eventSelect = document.getElementById("event-select");
console.log(eventSelect.value);

// When the event-select dropdown is changed, retrieve the selected value and make an AJAX request to the PHP script
eventSelect.addEventListener("change", function() {
  var selectedValue = eventSelect.value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./registered_events.php?type=" + selectedValue, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Insert the response HTML into the event-list element
      eventList.innerHTML = xhr.responseText;
      // create a button for each event
      eventList.querySelectorAll("p").forEach(function(p) {
        console.log("Adding button to:", p);
        const button = document.createElement("button");
        button.innerHTML = "Register";
        const registerButton = document.createElement("button");
        const registerForm = document.getElementsByClassName("register_form")[0];
        const btn1 = document.getElementsByClassName("close")[1];
        const overlay = document.querySelector('.overlay');

        button.addEventListener("click", function() {
          registerForm.classList.remove("hidden");
          overlay.classList.remove("hidden");
        });
        btn1.onclick = function () {
          registerForm.classList.add("hidden");
          overlay.classList.add("hidden");
        };
        
        p.appendChild(button);
      });
      
    }
  };
  
  xhr.send();
});
