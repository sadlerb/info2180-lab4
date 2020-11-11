window.onload = function() {
    var getXmlBtn = document.querySelector('#button');
    var result = document.querySelector('#result');
    var input = document.getElementById('search');
    var nameArea = document.getElementById('name');
    var aliasArea = document.getElementById('alias');
    var bioArea = document.getElementById('bio');
    var response;

    getXmlBtn.addEventListener('click', function() {
        var httpRequest = new XMLHttpRequest();
        var searchTerm = input.value;
        if(searchTerm == ""){
          httpRequest.open('GET',"http://localhost/info2180-lab4/superheroes.php");
          httpRequest.send();
          httpRequest.onreadystatechange = function emptySearch() {
          response = httpRequest.responseText;
          result.innerHTML = response;
          nameArea.textContent = " ";
          aliasArea.textContent = " ";
          bioArea.textContent = " ";
          result.classList.remove("notFound")
          }
        }else{
        httpRequest.open('GET', "http://localhost/info2180-lab4/superheroes.php?name="+searchTerm);
        httpRequest.send();
        httpRequest.onreadystatechange = function getXml() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
              if (httpRequest.status === 200) {
                  response = httpRequest.responseText.split("\n");
                    if(response[1].includes("<")){
                      result.textContent = "SUPERHERO NOT FOUND";
                      nameArea.textContentL = " ";
                      aliasArea.textContent = " ";
                      bioArea.textContent = " ";
                    }else if(!response[1].includes("<")){
                    var name = response[1];
                    var alias = response[2];
                    var bio = response[3];
                    nameArea.textContent = name;
                    aliasArea.textContent = alias;
                    bioArea.textContent = bio;
                    result.textContent = " ";
                  }
                }
                } else {
                result.classList.add("notFound")
              }
            }
        }
    });
};