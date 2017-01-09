/**
 * Created by Henri on 09/01/2017.
 */
var app = new Vue({
    el: '#app',
    data: {
        form: {
            txtnimi: null,
            txtvanus: null
        },
        persons: []
    },
    methods:{
        addPerson: function (){

            console.log("Tere");

            this.persons.push(JSON.parse(JSON.stringify(this.form)));
        }
    }
});