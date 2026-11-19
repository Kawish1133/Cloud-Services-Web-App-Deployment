
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get passenger information
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const route = document.getElementById("route").value;
    const date = document.getElementById("travelDate").value;
    const seats = document.getElementById("seats").value;

    // Basic validation
    if (!name || !phone || !route || !date || !seats) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    const message =
        `Assalam-o-Alaikum! I want to book a seat.

Passenger: ${name}
Phone: ${phone}
Route: ${route}
Travel Date: ${date}
Seats: ${seats}`;

    // Open WhatsApp with booking details
    const whatsappNumber = "923479696715";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    document.getElementById("message").textContent =
        "Your booking request is ready. Opening WhatsApp...";

    window.open(whatsappURL, "_blank");

});

