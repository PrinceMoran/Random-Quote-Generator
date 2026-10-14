document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("appButton");
  const button2 = document.getElementById("questionBtn");
  
  button1.addEventListener("click", function() {
    window.location.href = "https://theabarrios.github.io/tests/app/app.html";
  });
  
  button2.addEventListener("click", function(){
    window.location.href="mailto:theapearlbarrios@gmail.com";
  });
});
