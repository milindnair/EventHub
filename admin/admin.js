// const selectedItem = document.querySelectorAll(".nav-link");

// for (let i = 0; i < selectedItem.length; i++) {
//     selectedItem[i].addEventListener("click", function() {
//         console.log("clicked");
//         const current = document.querySelector(".active");
//         if (current) {
//             current.classList.remove("active");
//         }
//         this.classList.add("active");
//     });
// }

const calendar = document.querySelector(".calendar");
const monthYear = calendar.querySelector(".month-year");
const btnPrev = calendar.querySelector(".btn-prev");
const btnNext = calendar.querySelector(".btn-next");
const calendarBody = calendar.querySelector(".calendar-body");
const calendarDates = calendar.querySelector("#calendar-dates");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];



function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = `<tr>`;
  for (let i = 0; i < firstDay; i++) {
    tbl += `<td></td>`;
  }
  for (let i = 1; i <= daysInMonth; i++) {
    if ((i + firstDay - 1) % 7 === 0) {
      tbl += `</tr><tr>`;
    }
    tbl += `<td>${i}</td>`;
  }
  tbl += `</tr>`;
  calendarDates.innerHTML = tbl;
  monthYear.innerHTML = months[month] + " " + year;

  var selectedCells = document.querySelectorAll("td");
  var modal = document.getElementById("myModal");
  var btn = document.getElementsByClassName("close")[0];
  
  var previousCell = null;

  btnPrev.addEventListener("click", () => {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    modal.style.display = "none";
    showCalendar(currentMonth, currentYear);
  });
  
  btnNext.addEventListener("click", () => {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    modal.style.display = "none";
    showCalendar(currentMonth, currentYear);
  });

  selectedCells.forEach(function (cell) {
    cell.style.width = "40px";
  }
  );
  btn.onclick = function () {
    modal.style.display = "none";
    selectedCells.forEach(
      (cell) => (cell.style.backgroundColor = "transparent")
    );
    previousCell = null;
  };

  selectedCells.forEach((cell) => {
    cell.addEventListener("click", function () {
      if (previousCell !== null) {
        previousCell.style.backgroundColor = "transparent";
      }

      cell.style.backgroundColor = "black";
      previousCell = cell;
      modal.style.display = "block";
      document.getElementById("date").innerHTML = cell.innerHTML + " " + months[month] + " " + year;

    });
  });


}

showCalendar(currentMonth, currentYear);






// const calendarLink = document.getElementById("calendar-link");
// const createEventLink = document.getElementById("create-event-link");
// const modifyEventLink = document.getElementById("modify-event-link");
// const deleteEventLink = document.getElementById("delete-event-link");

// calendarLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     loadContent("./calendar.php");
// });

// createEventLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     loadContent("../event_form/create_event.php");
// });

// modifyEventLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     loadContent("./modify_event.php");
// });

// deleteEventLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     loadContent("./delete_event.php");
// });

// function loadContent(url) {
//     fetch(url)
//         .then(response => response.text())
//         .then(html => {
//             const contentDiv = document.getElementById("content");
//             contentDiv.innerHTML = html;
//         })
//         .catch(error => console.log(error));
// }
