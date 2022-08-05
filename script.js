// created a variable to get the button from the html file via the 'add-data id.
let buttonAdd = document.getElementById('add-data');
//this variable will access the table in the html file so that all of the submitions of the user will be added to that table. this is via the table-body id.
let table = document.getElementById('table-body')

// all of these varables will get the elements via their id and will be used in the event listner bellow.
let teamNameInput = document.getElementById("team-name");
let teamCityInput = document.getElementById("team-city");
let champInput = document.getElementById("championships");
let conferenceInput = document.getElementById("conference");

// this event listener will listen for the users click on the button after they fill out all of the inputs in the form.
buttonAdd.addEventListener('click', () => {
    let teamName = teamNameInput.value;
    let teamCity = teamCityInput.value;
    let champioships =champInput.value;
    let conference = conferenceInput.value;

    // this template matches the format of the html table. the class of 'table' and 'table-hover' are included so that it styles it just like the examples in the table.
    let template = `
                    <tr class='table table-hover'>
                        <td>${teamName}</td>
                        <td>${teamCity}</td>
                        <td>${champioships}</td>
                        <td>${conference}</td>
                    </tr>`
    //this table variable was initated above and it will add the template that is created after the user submits their info into the innerHML.      
    table.innerHTML += template;
    // after the user submit the information they want, the input boxes will clear out and will show the place holders again so that the user knows what should be submited in each.
    document.getElementById('team-name').value = '';
    document.getElementById('team-city').value = '';
    document.getElementById('championships').value = '';
    document.getElementById('conference').value = '';

});