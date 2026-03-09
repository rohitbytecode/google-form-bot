import { Faker, en_IN } from "@faker-js/faker";

// Create a faker instance with Indian English locale
const fakerIN = new Faker({ locale: [en_IN] });

// Custom Gujarati name lists
const gujaratiFirstNames = [
  "Rohit", "Nirav", "Jignesh", "Bhavesh", "Kirit",
  "Hetal", "Pooja", "Sneha", "Rupal", "Manisha"
];

const gujaratiLastNames = [
  "Patel", "Shah", "Mehta", "Desai", "Joshi",
  "Trivedi", "Bhatt", "Parikh", "Modi", "Gandhi"
];

// Function to generate Gujarati-style names
function gujaratiName() {
  const first = gujaratiFirstNames[Math.floor(Math.random() * gujaratiFirstNames.length)];
  const last = gujaratiLastNames[Math.floor(Math.random() * gujaratiLastNames.length)];
  return `${first} ${last}`;
}

// Example usage
console.log("Gujarati name:", gujaratiName());
console.log("Faker Indian name:", fakerIN.person.fullName());
