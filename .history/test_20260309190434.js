import { Faker, en_IN } from "@faker-js/faker";

// Create a faker instance with Indian English locale
const fakerIN = new Faker({ locale: [en_IN] });

function randomName() {
  return fakerIN.person.fullName();
}

console.log(randomName());