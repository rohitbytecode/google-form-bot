import axios from "axios";
import { faker } from "@faker-js/faker";

const url = "https://docs.google.com/forms/d/e/1FAIpQLSeMBZiwJZ2ssJo4A0IhfJxTVmlCzQuDikYerys6ASuxJRh0gQ/formResponse";

const genders = ["Male", "Female"];
const ages = ["below 20", "21-30", "31-40", "40 Above"];
const invest = ["Yes", "No"];
const investmentTypes = ["SIP", "Fixed Deposit", "Traditional Avenues"];
const frequencies = ["Monthly", "Quarterly", "Yearly"];
const risk = ["Low Risk", "Neutral", "High Risk"];
const long = ["SIP", "Traditional Avenues"];
const monthlyinv = ["Below 1000", "1001 to 5000", "5001 to 10000", "Above 10000"];
const reliable = ["Strongly Agree", "Agree", "Neutral", "disagree", "strongly disagree"];
const returns = ["High returns", "Stable returns"];
const yesnobakc4odi= ["Yes", "No"];
const prefer= ["SIP", "Traditional Avenues"];
const aven = ["Low Risk", "Guaranteed Returns", "Trust and familiarity", "Easy to understand"];
const benefits= ["Regular investment habit", "Market growth benefits", "Affordable investment", "Diversification"];
const trustmost = ["Fixed Deposit", "PPF", "Gold", "Insurance"];
const knowledge = ["lack of knowledge", "Market Risk", "fear of loss"];
const influence = ["Advertisement", "Friends", "Family", "Bank"];
const discou = ["Low return", "Long lock-in period", "lack of flexibility", "complicated process"];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomName(){
  return faker.person.fullName();
}

async function submitForm(i) {

  const data = new URLSearchParams({
    "entry.2033724748": randomName(i),
    "entry.1019516443": random(genders),
    "entry.1036191897": random(ages),
    "entry.2134539982": random(invest),
    "entry.77489121": random(frequencies),
    "entry.991211697": random(investmentTypes),
    "entry.1103407532": random(returns),
    "entry.1551052683": random(monthlyinv),
    "entry.560325964": random(investmentTypes),
    "entry.1270231082": random(influence),
    "entry.1756930320": random(risk),
    "entry.1760644846": random(risk),
    "entry.1041228027": random(reliable),
    "entry.173523049": random(discou),
    "entry.2088098199": random(knowledge),
    "entry.539035399": random(trustmost),
    "entry.1832567573": random(yesnobakc4odi),
    "entry.1122714469": random(benefits),
    "entry.2128748929": random(aven),
    "entry.471538796": random(long),
    "entry.1886465197": random(yesnobakc4odi),
    "entry.1157779439": random(yesnobakc4odi),
    "entry.1150937137": random(prefer),
    "fvv": "1",
    "pageHistory": "0",
    "fbzx": "6282478559705567925"
  });

  await axios.post(url, data);
  console.log(`submitted ${i}`);
}

async function runBot() {

  for (let i = 1; i <= 200; i++) {
    await submitForm(i);

    await new Promise(r => setTimeout(r, (7 * 60 * 1000) + Math.random() * (8 * 60 * 1000)));
  }

}

runBot();