function setupTabs () {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

            sideBar.querySelectorAll(".tabs__button").forEach(button => {
                button.classList.remove("tabs__button--active");
            });

            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
        })
    });
}
document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

    document.querySelectorAll(".tabs").forEach(tabsContainer => {
        tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
    });
});


counter = 0
class Contact {
    constructor(name, email, phone) {
        this.name = name
        this.email = email
        this.phone = phone
        this.id = counter
        counter++
    }
}

class ContactList {

    constructor() {
        this.list = new Array
    }

    addContact(Contact) {
        this.list.push(Contact)
        
    }
    removeContact(id) {
        this.list.every((Contact, index) => {
            if (Contact.id == id) {
                this.list.splice(index, 1)
                return false
            }
            return true
        })
    }

    getContact(id) {
        var e
        this.list.every((Contact) => {
            if (Contact.id == id) {
                e = Contact
                return false
            }
            return true
        })
        return e
    }
    ;
}

var input = document.getElementsByClassName("text bar")
const name = input[0]
const email = input[1]
const phone = input[2]

const tableBody = document.getElementById("contact_table_body")
const submit = document.getElementById("submit")

const List = new ContactList()


/* Buttons Edit & Delete ne sont pas definit */
function ContactEntry(Contact) {
    return `<tr><td>${Contact.name}</td><td>${Contact.email}</td><td>${Contact.phone}</td>` +
        `<td><button data-id="${Contact.id}" onclick="onEdit(this)" >Edit</button>` +
        `<button data-id="${Contact.id}" onclick="onDelete(this)">Delete</button></td><tr>`
}

isEditting = false
edittingId = 0

function onEdit(button) {
    const id = button.dataset.id
    var Contact = List.getContact(id)
    tableBody.removeChild(button.parentNode.parentNode)
    name.value = Contact.name
    email.value = Contact.email
    phone.value = Contact.phone

    isEditting = true
    edittingId = id
}

function onDelete(button) {
    var id = button.dataset.id
    tableBody.removeChild(button.parentNode.parentNode)
    List.removeContact(id)

}


submit.onclick = (e) => {
    e.preventDefault();
    var nametext = name.value
    var emailtext = email.value
    var phonetext = phone.value


    if (isEditting) {
        const Contact = List.getContact(edittingId)
        Contact.name = name.value
        Contact.email = email.value
        Contact.phone = phone.value

        let row = ContactEntry(Contact)
        tableBody.innerHTML += row

        name.value = null
        email.value = null
        phone.value = null

        isEditting = false
        edittingId = 0


    } else {

        
        
        if (name.value == "" || email.value == "" || phone.value == "") {
            return alert("Please add name, email and phone number");
        }
        
        /*
        ////////////////////
        //LocalStorage//////
        ////////////////////
        let contact = localStorage.getItem("contact");
        if (contact == null) {
            contactObj = [];
        } else {
            contactObj = JSON.parse(contact);
        }
        let myObj = {
            name: name.value,
            email: email.value,
            phone: phone.value
        }
        contactObj.push(myObj);
        localStorage.setItem("contact", JSON.stringify(contactObj));


        https://www.youtube.com/watch?v=DMW6qvkv0uU
        */
        
        
        
        name.value = null
        email.value = null
        phone.value = null
        
        
        
        var Contactx = new Contact(nametext, emailtext, phonetext)
        List.addContact(Contactx) 
        var row = ContactEntry(Contactx)
        tableBody.innerHTML += row
        
        
        
        
    }
}




