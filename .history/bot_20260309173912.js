const axios = require("axios");

const url = "https://docs.google.com/forms/d/e/1FAIpQLSeMBZiwJZ2ssJo4A0IhfJxTVmlCzQuDikYerys6ASuxJRh0gQ/formResponse";

const genders = ["Male", "Female"];
const ages = ["below 20", "21-30", "31-40"];
const investmentTypes = ["SIP", "Fixed Deposit", "Traditional Investments"];
const frequencies = ["Monthly", "Quarterly", "Yearly"];
const risk = ["Low", "Neutral", "High"];
const returns = ["High returns", "Stable returns"];
const knowledge = ["lack of knowledge", "Easy to understand"];
const influence = ["Advertisement", "Friends", "Family"];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomName(i) {
  return `User_${i}_${Math.floor(Math.random()*10000)}`;
}

async function submitForm(i) {

  const data = new URLSearchParams({
    "entry.2033724748": randomName(i),
    "entry.1019516443": random(genders),
    "entry.1036191897": random(ages),
    "entry.2134539982": "Yes",
    "entry.77489121": random(frequencies),
    "entry.991211697": random(investmentTypes),
    "entry.1103407532": random(returns),
    "entry.1551052683": "1001 to 5000",
    "entry.560325964": random(investmentTypes),
    "entry.1270231082": random(influence),
    "entry.1756930320": random(risk),
    "entry.1760644846": random(risk),
    "entry.1041228027": "agree",
    "entry.173523049": "lack of flexibility",
    "entry.2088098199": random(knowledge),
    "entry.539035399": "Fixed Deposit",
    "entry.1832567573": "No",
    "entry.1122714469": "Diversification",
    "entry.2128748929": "Easy to understand",
    "entry.471538796": "Traditional Investments",
    "entry.1886465197": "Yes",
    "entry.1157779439": "Yes",
    "entry.1150937137": "SIP",
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

    await new Promise(r => setTimeout(r, 1000 + Math.random()*1000));
  }

}

runBot();