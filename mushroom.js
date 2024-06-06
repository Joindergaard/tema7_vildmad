const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://fynkmsgoghqfahtcchuu.supabase.co/rest/v1/mushrooms?id=eq." + id, {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5bmttc2dvZ2hxZmFodGNjaHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NzEyOTksImV4cCI6MjAzMzI0NzI5OX0.vt4W7Fk1ufD6Y4Ste3MVjKoA8ylxJK72QiGBbi5pIUU",
    },
})
.then((response) => response.json())
.then((data) => showMushroom(data));

function showMushroom(mushroom) {
    console.log(mushroom)
    const data = mushroom[0];

    document.querySelector("h1").textContent = data.name;
    document.querySelector(".mushroom_single img").src = data.image;
    document.querySelector(".location").textContent = data.location;
    document.querySelector(".month").textContent = data.month;
    document.querySelector(".color").textContent = data.color;
}