var swapiReq = new XMLHttpRequest();
var pokeReq = new XMLHttpRequest();

swapiReq.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     var res = JSON.parse(this.responseText);
     console.log(res);
     res.results.forEach(function(personObj){
        var li = document.createElement('li');
        var span = document.createElement('span');
        li.classList.add('mdl-list__item');
        span.classList.add('mdl-list__item-primary-content');
        li.appendChild(span);
        span.innerHTML = personObj.name;
        document.getElementById("swapi-list").appendChild(li);
    })
  }
};

pokeReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(this.responseText);
        console.log(res);
        res.results.forEach(function(pokeObj){
            var li = document.createElement('li');
            var span = document.createElement('span');
            li.classList.add('mdl-list__item');
            span.classList.add('mdl-list__item-primary-content');
            li.appendChild(span);
            span.innerHTML = pokeObj.name;
            document.getElementById("poke-list").appendChild(li);
        })
    }
};

pokeReq.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10", true);
swapiReq.open("GET", "https://swapi.co/api/people?limit=10", true);
pokeReq.send();
swapiReq.send();
