const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for contacting ShoeVerse!");
        form.reset();
    });
}
const search = document.getElementById("search");
const shoes = document.querySelectorAll(".product-card");

search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();

    shoes.forEach(function (shoe) {
        let name = shoe.textContent.toLowerCase();

        if (name.includes(value)) {
            shoe.style.display = "";
        } else {
            shoe.style.display = "none";
        }
    });
});
