import { Faker, en_IN, en } from "@faker-js/faker";

// Mix Indian and default English locales
const fakerMixed = new Faker({ locale: [en_IN, en] });

console.log(fakerMixed.person.fullName());
