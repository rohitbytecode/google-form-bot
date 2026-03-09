import { faker } from "@faker-js/faker";

function randomName(){
return faker.person.fullName();
}
console.log(faker.person.fullName());