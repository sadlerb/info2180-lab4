window.onload = function() {
    var getXmlBtn = document.querySelector('button');

    getXmlBtn.addEventListener('click', function() {
        var httpRequest = new XMLHttpRequest();

        // GET Request
        var url = "http://localhost/info2180-lab4/superheroes.php";
        httpRequest.open('GET', url);
        httpRequest.send();
        httpRequest.onreadystatechange = function getXml() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
              if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                alert(response);

              } else {
                alert('There was a problem with the request.');
              }
            }
        }
    });
};