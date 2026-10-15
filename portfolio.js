document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("appButton");
  const button2 = document.getElementById("questionBtn");
  
  button1.addEventListener("click", function() {
    window.location.href = "https://princemoran.github.io/Random-Quote-Generator/app/app.html";
  });
  
  button2.addEventListener("click", function(){
    window.open("https://mail.google.com/mail/?view=cm&to=theapearllolobarrios@gmail.com");
  });
});
