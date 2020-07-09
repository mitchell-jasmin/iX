console.log("Testing...")

//ES5
function Contact(name, telNumber, email) {
    this.name = name;
    this.TtelNumber = telNumber;
    this.email = email;
}
//ES6
class UI {

        constuctor() {}

        addContact(contact) {
            const contactListElement = document.get
        }
}
//ES5
// function UI() {}

// UI.prototype.addContact = function(contact) {

// }

// UI.prototype.propertyyABC = "123"

// const ui = new UI()
//ES6
// class Contact{
//     constructor(name, telNumber, email)
//     this.name = name;
//     this.TtelNumber = telNumber;
//     this.email = email
//     }
// }
// constsubmitFn = Function (e) {
//     e.preventDefault():
//     console.log("Submitting");
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Submitting");
    
    const nameElement = document.getElementById("name");
    const telNumberELement = document.getElementById("telNumber");
    const emailElement = document.getElementById.getId("email");
    console.log(nameElement, telNumberElement, emailElement);


    const name = nameElement.nodeValue;
    const telNumber = telNumberElement.value;
    const email = emailElement.value;
    console.log(name, telNumber, email);

    const contact = new Contact(name, telNumber, email);
    console.log(contact);

    const ui = 
});

// const contactFormElement = document.getElementById("ContactForm");
// console.log(contactFormElement);
// contactFormElement.addEventListener("submit", submitFn);