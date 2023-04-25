const xhr = new XMLHttpRequest();

// Set up the request
xhr.open("GET", "/EventHub/admin/admin_inbox.php");

// Set up the onload callback
xhr.onload = function () {
  if (xhr.status === 200) {
    // Parse the response JSON data
    const eventData = JSON.parse(xhr.responseText);

    // Get the inbox list element
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
      document.getElementById("modal_header").innerHTML = "Pending confirmations for event";

      

          eventName.innerHTML = event.event_name;
          eventDesc.innerHTML = event.event_description;
          eventDateTime.innerHTML = event.event_start_date + " " + event.event_start_time + " - " + event.event_end_date + " " + event.event_end_time;
          eventVenue.innerHTML = "Venue: " + event.event_venue;
      
          listItem.appendChild(eventName);
          listItem.appendChild(eventDesc);
          listItem.appendChild(eventDateTime);
          listItem.appendChild(eventVenue);
          
      
          inboxList.appendChild(listItem);
       
      });
      
  }
};

// Send the request
xhr.send();