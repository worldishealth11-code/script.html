 alert("javaScript is working")
 const form =
document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit",function(event) {
        event.preventDefault();
        alert("form submitted")

        form.request();

    });
}
