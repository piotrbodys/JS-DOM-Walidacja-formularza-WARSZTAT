console.log("WARSZTAT - Walidacja formularza zapisu do Newsletter'a");

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-2');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imie i Nazwisko';
        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Adres e-mail!';
        errors.appendChild(liError);
    }

    if (!txtName.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres musi zawierac @';
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziles Zgody 1';
        errors.appendChild(liError);
    }

    
    if (errors.children.length > 0){
        event.preventDefault();

    }
    

}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    // co2nsole.log(event.target.cheked);
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListeren('change', allAgree);

