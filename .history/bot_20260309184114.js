import axios from "axios";
import { faker } from "@faker-js/faker";

const url =
"https://docs.google.com/forms/d/e/1FAIpQLSeMBZiwJZ2ssJo4A0IhfJxTVmlCzQuDikYerys6ASuxJRh0gQ/formResponse";

const genders = ["Male", "Female"];
const ages = ["below 20", "21-30", "31-40", "40 Above"];

const investmentTypes = ["SIP", "Fixed Deposit", "Traditional Investments"];

const frequencies = ["Monthly", "Quarterly", "Yearly"];

const risk = ["Low", "Neutral", "High"];

const monthlyinv = [
"Below 1000",
"1001 to 5000",
"5001 to 10000",
"Above 10000"
];

const reliable = [
"Strongly agree",
"agree",
"neutral",
"disagree",
"strongly disagree"
];

const returns = ["High returns", "Stable returns"];

const yesno = ["Yes", "No"];

const aven = [
"Low Risk",
"Guaranteed Returns",
"Trust & familiarity",
"Easy to understand"
];

const benefits = [
"Regular investment habit",
"Market growth benefits",
"Affordable investment",
"Diversification"
];

const trustmost = [
"Fixed Deposit",
"PPF",
"Gold",
"Insurance"
];

const knowledge = [
"lack of knowledge",
"Market Risk",
"fear of loss"
];

const influence = [
"Advertisement",
"Friends",
"Family",
"Bank"
];

const discou = [
"Low return",
"Long lock-in period",
"lack of flexibility",
"complicated process"
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomName() {
  return faker.person.firstName();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomFbzx() {
  return Math.floor(Math.random() * 1e16).toString();
}

async function submitForm(i) {

  const investType = random(investmentTypes);

  const data = new URLSearchParams({

    "entry.2033724748": randomName(),

    "entry.1019516443": random(genders),
    "entry.1019516443_sentinel": "",

    "entry.1036191897": random(ages),
    "entry.1036191897_sentinel": "",

    "entry.2134539982": "Yes",
    "entry.2134539982_sentinel": "",

    "entry.77489121": random(frequencies),
    "entry.77489121_sentinel": "",

    "entry.991211697": investType,
    "entry.991211697_sentinel": "",

    "entry.1103407532": random(returns),
    "entry.1103407532_sentinel": "",

    "entry.1551052683": random(monthlyinv),
    "entry.1551052683_sentinel": "",

    "entry.560325964": investType,
    "entry.560325964_sentinel": "",

    "entry.1270231082": random(influence),
    "entry.1270231082_sentinel": "",

    "entry.1756930320": random(risk),
    "entry.1756930320_sentinel": "",

    "entry.1760644846": random(risk),
    "entry.1760644846_sentinel": "",

    "entry.1041228027": random(reliable),
    "entry.1041228027_sentinel": "",

    "entry.173523049": random(discou),
    "entry.173523049_sentinel": "",

    "entry.2088098199": random(knowledge),
    "entry.2088098199_sentinel": "",

    "entry.539035399": random(trustmost),
    "entry.539035399_sentinel": "",

    "entry.1832567573": random(yesno),
    "entry.1832567573_sentinel": "",

    "entry.1122714469": random(benefits),
    "entry.1122714469_sentinel": "",

    "entry.2128748929": random(aven),
    "entry.2128748929_sentinel": "",

    "entry.471538796": investType,
    "entry.471538796_sentinel": "",

    "entry.1886465197": random(yesno),
    "entry.1886465197_sentinel": "",

    "entry.1157779439": random(yesno),
    "entry.1157779439_sentinel": "",

    "entry.1150937137": investType,
    "entry.1150937137_sentinel": "",

    "fvv": "1",
    "pageHistory": "0",
    "fbzx": randomFbzx()

  });

  const res = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "Mozilla/5.0"
    }
  });

  console.log(`submitted ${i}`, res.status);
}

async function runBot() {

  for (let i = 1; i <= 200; i++) {

    await submitForm(i);

    const delay =
      (7 * 60 * 1000) +
      Math.random() * (8 * 60 * 1000);

    await sleep(delay);
  }
}

runBot();