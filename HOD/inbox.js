const xhr = new XMLHttpRequest();

// Set up the request
xhr.open("GET", "/EventHub/HOD/HOD.php");

// Set up the onload callback
xhr.onload = function () {
  if (xhr.status === 200) {
    // Parse the response JSON data
    // console.log(xhr.responseText);
    const eventData = JSON.parse(xhr.responseText);
    console.log(eventData);

    

   
    const inboxList = document.getElementById("inbox");

    // Clear any previously displayed events
    inboxList.innerHTML = "";

    // Create a new list item for each event and add it to the list
    eventData.forEach(function (event) {
       
          const listItem = document.createElement("li");
          const eventName = document.createElement("h3");
          const eventDesc = document.createElement("p");
          const eventDateTime = document.createElement("p");
          const eventVenue = document.createElement("p");
          const approveBtn = document.createElement("button");

            approveBtn.innerHTML = "Approve";   
            
            approveBtn.addEventListener("click", function() {
                // Make an AJAX call to update the event_confirmation value to 1
                const xhr = new XMLHttpRequest();
                xhr.open("POST", "/EventHub/HOD/update_confirmation.php");
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onload = function() {
                  if (xhr.status === 200) {
                    // Refresh the event list after the update is complete
                    console.log("Event confirmation updated");
                    console.log(xhr.responseText);
                    // xhr.open("GET", "/EventHub/HOD/HOD.php");
                    // xhr.send();
                  } else {
                    console.error("Failed to update event confirmation: " + xhr.statusText);
                  }
                };
                xhr.send("event_name=" + event.event_name);
              });

          eventName.innerHTML = event.event_name;
          eventDesc.innerHTML = event.event_description;
          eventDateTime.innerHTML = event.event_start_date + " " + event.event_start_time + " - " + event.event_end_date + " " + event.event_end_time;
          eventVenue.innerHTML = "Venue: " + event.event_venue;
      
          listItem.appendChild(eventName);
          listItem.appendChild(eventDesc);
          listItem.appendChild(eventDateTime);
          listItem.appendChild(eventVenue);
          listItem.appendChild(approveBtn);
      
          inboxList.appendChild(listItem);
       
      });
      
  }
};

// Send the request
xhr.send();