const boxs = document.querySelectorAll(".box");

boxs.forEach(box => {
    const checkbox = box.querySelector("input[type='checkbox']");
    checkbox.addEventListener("click", function () {
        box.classList.toggle("border-[#FF6636]")
    });
});
const check = document.getElementById("checkBox");
const cardInfo = document.getElementById("cardInfo");
check.addEventListener("change", function () {
    if (check.checked) {
        cardInfo.classList.remove('hidden');
    } else {
        cardInfo.classList.add('hidden');
    }
});