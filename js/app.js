var request = superagent;
var API_URL = 'https://restcountries.eu/rest/v2/all'

request
    .get(API_URL)
    .then(function(response) {
        //console.log(response.body);
        var countries = response.body;

        countries.forEach(function(country) {
            
            var div = document.createElement('div');
            div.className = 'country-card';
            box = document.querySelector('.countries-container');
            box.appendChild(div);

            var img = document.createElement('img');
            img.className = 'country-flag';
            img.src = country.flag;
            div.appendChild(img);

            var h4 = document.createElement('h4');
            h4.className = 'country-name';
            h4.textContent = country.name;
            div.appendChild(h4);

            var p = document.createElement('p');
            p.className = 'country-capital';
            p.textContent = country.capital;
            div.appendChild(p);

        });

    });