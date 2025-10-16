function showToast() {
  const messages = [
    "Bon Bon has closed indefinitely",
    "RIP Bon Bon — gone but never forgotten",
    "We miss you, Bon Bon Sushi Burrito",
    "Bon Bon Was the Best!"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  Toastify({
    text: randomMessage,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    backgroundColor: "linear-gradient(to right, #66ccff, #0033ff)",
  }).showToast();
}
