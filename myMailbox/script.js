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

// DOM Elements
const contactForm = document.getElementById("contactForm");
const contactsContainer = document.querySelector(".contacts");
const nameInput = contactForm["name"];
const ageInput = contactForm["age"];
const rollInput = contactForm["roll"];

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

const addContact = (name, age, roll) => {
  contacts.push({
    name,
    age,
    roll,
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));

  return { name, age, roll };
};

const createContactElement = ({ name, age, roll }) => {
  // Create elements
  const contactDiv = document.createElement("div");
  const contactName = document.createElement("h2");
  const contactAge = document.createElement("p");
  const contactRoll = document.createElement("p");

  // Fill the content
  contactName.innerText =  name;
  contactAge.innerText = "Email Address: " + age;
  contactRoll.innerText = "Contact Number: " + roll;

  // Add to the DOM
  contactDiv.append(contactName, contactAge, contactRoll);
  contactsContainer.appendChild(contactDiv);

  contactsContainer.style.display = contacts.length === 0 ? "none" : "flex";
};

contactsContainer.style.display = contacts.length === 0 ? "none" : "flex";

contacts.forEach(createContactElement);

contactForm.onsubmit = e => {
  e.preventDefault();

  const newcontact = addContact(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  createContactElement(newcontact);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
};