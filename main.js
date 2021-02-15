import * as ac from './autocomplete.js';

window.onload = function () {
    let arr = ['Tony', 'Wanda', 'Cosmo', 'Steve', 'Natasha', 'Xavier'];
    let obj = [{
            "name": "Nazmus",
            "job": "Software Engineer",
            "location": {
                "city": "Boston",
                "state": "Massachusetts",
            }
        },
        {
            "name": "Bill",
            "job": "CEO",
            "city": "Seattle",
            "state": "Washington"
        }
    ];

    let el = document.getElementById("autocomplete-list");

    // ac.autocomplete(arr, el);
    // ac.autocomplete(obj, el, "city");

    let process_fetched = function (data){
        data.map((item) => {
            item.car = `${item.Year} ${item.Make} ${item.Model}`;
            return item;
        });
        ac.autocomplete(data, el, "car")
    }

    const resp = fetch('cars.json')
        .then((response) => response.json())
        .then((data) => process_fetched(data));

}