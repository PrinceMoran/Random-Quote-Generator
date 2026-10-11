<script>

const api_url ="https://zenquotes.io/api/random/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

const button1 = document.getElementById("quote-button");

  button1.addEventListener("click", function() {
      getapi(api_url);
  });

/*const button2 = document.getElementById("portfolio-button");

  button2.addEventListener("click", function(){
    window.location.href = "portfolio link";
  });*/
</script>
