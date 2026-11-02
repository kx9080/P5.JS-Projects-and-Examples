title = document.getElementById("postTitle").textContent;
api = "http://localhost:3000/api/v1/products";

window.onload = function () {
  const response = fetch(api);

  onPageLoad();
};


function onPageLoad() {
  document.getElementById("postTitle").innerHTML = "cool guy, really cool guy";
  console.log(document.getElementById("postTitle").textContent);
  if ((image = "no image")) {
    document.getElementById("postImage").style.display = "none";
  }
}

// https://dev.to/myogeshchavan97/how-to-easily-create-and-host-your-own-rest-api-without-writing-a-single-line-of-code-2np4
//https://www.geeksforgeeks.org/javascript/working-with-apis-in-javascript/
