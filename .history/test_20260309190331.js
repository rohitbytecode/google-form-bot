import { Faker, en_IN, hi } from "@faker-js/faker";

const fakerIN = new Faker({ locale: [en_IN] });

function randomName() {
  return fakerIN.person.fullName();
}

console.log(randomName());
