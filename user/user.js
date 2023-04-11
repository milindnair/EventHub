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


