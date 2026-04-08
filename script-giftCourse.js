const boxs = document.querySelectorAll(".box");

boxs.forEach(box => {
    const checkbox = box.querySelector("input[type='checkbox']");
    box.addEventListener("mouseover", function () {
        box.classList.toggle("border-[#FF6636]")
    });
    box.addEventListener("mouseout", function () {
        box.classList.toggle("border-[#FF6636]")
    });
    checkbox.addEventListener("click", function () {
        box.classList.toggle("border-[#FF6636]")
    });
});