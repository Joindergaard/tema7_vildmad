fetch("https://fynkmsgoghqfahtcchuu.supabase.co/rest/v1/mushrooms", {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5bmttc2dvZ2hxZmFodGNjaHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NzEyOTksImV4cCI6MjAzMzI0NzI5OX0.vt4W7Fk1ufD6Y4Ste3MVjKoA8ylxJK72QiGBbi5pIUU",
    },
})
.then((response) => response.json())
.then(dataReceived);

function dataReceived(mushrooms) {
    console.log(mushrooms);
    mushrooms.forEach(showAllMushrooms)
}

function showAllMushrooms(mushroom) {
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    clone.querySelector(".mushroom_card img").src = mushroom.image;
    clone.querySelector(".mushroom_card h2").textContent = mushroom.name;
    clone.querySelector(".mushroom_card p").textContent = mushroom.location;

    clone.querySelector(".read_more").setAttribute("href", `produkt.html?id=${mushroom.id}`);

    const parent = document.querySelector(".mushroom_grid");
    parent.appendChild(clone)
}