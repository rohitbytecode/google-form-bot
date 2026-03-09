import { faker } from "@faker-js/faker";

faker.setLocale("en_IN");

function randomName() {
  return faker.person.fullName();
}

console.log(randomName());
