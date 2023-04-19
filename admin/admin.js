const selectedItem = document.querySelectorAll(".nav-link");

for (let i = 0; i < selectedItem.length; i++) {
    selectedItem[i].addEventListener("click", function() {
        console.log("clicked");
        const current = document.querySelector(".active");
        if (current) {
            current.classList.remove("active");
        }
        this.classList.add("active");
    });
}


const calendarLink = document.getElementById("calendar-link");
const createEventLink = document.getElementById("create-event-link");
const modifyEventLink = document.getElementById("modify-event-link");
const deleteEventLink = document.getElementById("delete-event-link");

calendarLink.addEventListener("click", function(event) {
    event.preventDefault();
    loadContent("./calendar.php");
});

createEventLink.addEventListener("click", function(event) {
    event.preventDefault();
    loadContent("../event_form/create_event.php");
});

modifyEventLink.addEventListener("click", function(event) {
    event.preventDefault();
    loadContent("./modify_event.php");
});

deleteEventLink.addEventListener("click", function(event) {
    event.preventDefault();
    loadContent("./delete_event.php");
});

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const contentDiv = document.getElementById("content");
            contentDiv.innerHTML = html;
        })
        .catch(error => console.log(error));
}
