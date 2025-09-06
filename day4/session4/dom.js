document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const movieSelect = document.getElementById("movie");
  const timeSelect = document.getElementById("time");
  const nameInput = document.getElementById("name");
  const seatsContainer = document.getElementById("seats-container");
  const bookBtn = document.getElementById("book-btn");
  const resetBtn = document.getElementById("reset-btn");
  const confirmation = document.getElementById("confirmation");
  const confirmationDetails = document.getElementById("confirmation-details");
  const closeConfirmation = document.getElementById("close-confirmation");

  // Summary elements
  const summaryMovie = document.getElementById("summary-movie");
  const summaryTime = document.getElementById("summary-time");
  const summarySeats = document.getElementById("summary-seats");
  const summaryTicketPrice = document.getElementById("summary-ticket-price");
  const summaryTickets = document.getElementById("summary-tickets");
  const summaryTotal = document.getElementById("summary-total");

  // Initialize variables
  let ticketPrice = +movieSelect.value;
  let selectedSeats = [];

  // Generate seats
  function generateSeats() {
    seatsContainer.innerHTML = "";
    const rows = ["A", "B", "C", "D", "E", "F"];

    rows.forEach((row) => {
      for (let i = 1; i <= 8; i++) {
        const seat = document.createElement("div");
        const seatId = `${row}${i}`;
        seat.classList.add("seat");
        seat.dataset.seatId = seatId;

        // Randomly assign some seats as occupied or VIP
        const random = Math.random();
        if (random < 0.3) {
          seat.classList.add("occupied");
        } else if (random < 0.5) {
          seat.classList.add("vip");
        } else {
          seat.classList.add("available");
        }

        seat.textContent = seatId;
        seatsContainer.appendChild(seat);
      }
    });
  }

  // Update selected count
  function updateSelectedCount(seat) {
    if (seat.classList.contains("occupied")) return;

    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      if (seat.classList.contains("vip")) {
        seat.classList.add("vip");
      } else {
        seat.classList.add("available");
      }
      const index = selectedSeats.indexOf(seat.dataset.seatId);
      if (index > -1) {
        selectedSeats.splice(index, 1);
      }
    } else {
      seat.classList.remove("available");
      seat.classList.remove("vip");
      seat.classList.add("selected");
      selectedSeats.push(seat.dataset.seatId);
    }

    updateSummary();
  }

  // Update summary
  function updateSummary() {
    const movieText = movieSelect.options[movieSelect.selectedIndex].text;
    const timeText = timeSelect.options[timeSelect.selectedIndex].text;
    const numTickets = selectedSeats.length;
    const total = ticketPrice * numTickets;

    summaryMovie.textContent = movieText.split(" (")[0];
    summaryTime.textContent = timeText;
    summarySeats.textContent =
      selectedSeats.length > 0 ? selectedSeats.join(", ") : "None selected";
    summaryTicketPrice.textContent = `$${ticketPrice.toFixed(2)}`;
    summaryTickets.textContent = numTickets;
    summaryTotal.textContent = `$${total.toFixed(2)}`;
  }

  // Reset selection
  function resetSelection() {
    selectedSeats = [];
    const seats = document.querySelectorAll(".seat");

    seats.forEach((seat) => {
      if (seat.classList.contains("occupied")) return;
      if (seat.classList.contains("vip")) {
        seat.classList.remove("selected");
        seat.classList.add("vip");
      } else {
        seat.classList.remove("selected");
        seat.classList.add("available");
      }
    });

    updateSummary();
  }

  // Validate form
  function validateForm() {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return false;
    }

    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      return false;
    }

    return true;
  }

  // Show confirmation
  function showConfirmation() {
    const movieText =
      movieSelect.options[movieSelect.selectedIndex].text.split(" (")[0];
    const timeText = timeSelect.options[timeSelect.selectedIndex].text;
    const total = ticketPrice * selectedSeats.length;

    confirmationDetails.innerHTML = `
            <p><strong>Movie:</strong> ${movieText}</p>
            <p><strong>Showtime:</strong> ${timeText}</p>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Seats:</strong> ${selectedSeats.join(", ")}</p>
            <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        `;

    confirmation.style.display = "flex";
  }

  // Event Listeners
  movieSelect.addEventListener("change", () => {
    ticketPrice = +movieSelect.value;
    updateSummary();
  });

  timeSelect.addEventListener("change", () => {
    updateSummary();
  });

  seatsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat")) {
      updateSelectedCount(e.target);
    }
  });

  resetBtn.addEventListener("click", resetSelection);

  bookBtn.addEventListener("click", () => {
    if (validateForm()) {
      showConfirmation();
    }
  });

  closeConfirmation.addEventListener("click", () => {
    confirmation.style.display = "none";
    resetSelection();
    nameInput.value = "";
  });

  // Initialize
  generateSeats();
  updateSummary();
});
