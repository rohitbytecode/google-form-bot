import { Faker, en_IN, en, base } from "@faker-js/faker";

const fakerIN = new Faker({ locale: [en_IN, en, base] });

const gujaratiFirstNames = [
"Dhruv","Harsh","Meet","Jigar","Yash","Parth","Nirav","Krunal","Chirag","Hiren",
"Kishan","Jay","Ketan","Rohan","Rahul","Manav","Tushar","Hardik","Darshan","Vivek",
"Akash","Ankit","Sagar","Mayur","Raj","Dev","Tejas","Nikhil","Hemal","Kalpesh",
"Riddhi","Khushi","Hetal","Pooja","Kinjal","Mitali","Bhavya","Nidhi","Dhwani","Krupa",
"Riya","Sneha","Komal","Isha","Jinal","Nirali","Shreya","Hiral","Payal","Mona"
];

const gujaratiLastNames = [
"Patel","Shah","Mehta","Trivedi","Desai","Joshi","Pandya","Bhatt","Parikh","Kapadia",
"Modi","Amin","Vyas","Dave","Gandhi","Soni","Thakkar","Raval","Acharya","Upadhyay",
"Chaudhary","Barot","Panchal","Solanki","Chavda","Rathod","Makwana","Gohil","Jadeja",
"Suthar","Vaghela","Savaliya","Bhuva","Kotak","Sheth","Zaveri","Parekh","Majmudar",
"Talati","Bhavsar"
];

export function randomGujaratiName() {
  const first = fakerIN.helpers.arrayElement(gujaratiFirstNames);
  const last = fakerIN.helpers.arrayElement(gujaratiLastNames);
  return `${first} ${last}`;
}