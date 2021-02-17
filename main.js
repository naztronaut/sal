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

}