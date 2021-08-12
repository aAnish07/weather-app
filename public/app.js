let cityName;
const txtCity = document.getElementById("city");
const btnSearch = document.getElementById("mkReq");

txtCity.oninput = () => {
    cityName = txtCity.value.trim();
}

btnSearch.addEventListener("click", request)
txtCity.addEventListener("keydown", (e) => {
    if (e.code === "Enter") request();
})

function request() {
    window.location.href = `/weather/${cityName}`;
}