const phoneNumberInput = document.getElementById("phone-number");
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();


    // استخدام SweetAlert عند النجاح

    window.location.href = "https://aff.bewinners.site/?utm_medium=203aeacc1411ddfd7f417dcfe05d10e5c0b4d4ac&utm_campaign=5g&np=1";

});

document.addEventListener("DOMContentLoaded", () => {
  // تغيير صورة العلم بناءً على الاختيار
  document
    .getElementById("service-provider2")
    .addEventListener("change", function () {
      const selectedValue = this.value;
      const flagImg = document.getElementById("flag");

      if (selectedValue === "om") {
        flagImg.src = "imgs/عمان.png";
      } else if (selectedValue === "uae") {
        flagImg.src = "imgs/امارات.png";
      } else if (selectedValue === "kuwait") {
        flagImg.src = "imgs/الكويت.png";
      }
    });
});
