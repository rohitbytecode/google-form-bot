import axios from "axios";
import { Faker, en_IN,en, base } from "@faker-js/faker";

const fakerIN = new Faker({ 
    locale: [en_IN, en, base] 
});

const url =
"https://docs.google.com/forms/d/e/1FAIpQLSeMBZiwJZ2ssJo4A0IhfJxTVmlCzQuDikYerys6ASuxJRh0gQ/formResponse";

axios.defaults.timeout = 10000;

const genders = ["Male","Female"];

const ages = [
"below 20",
"21 to 30",
"31 to 40",
"40 Above"
];

const invest = ["Yes","No"];

const frequencies = [
"Monthly",
"Quarterly",
"Yearly",
"Occasionally"
];

const investmentPref = [
"SIP",
"Traditional Avenues",
"Both"
];

const objectives = [
"Safety",
"High returns",
"Regular savings",
"Tax benefits"
];

const monthlyinv = [
"Below 1000",
"1001 to 5000",
"5001 to 10000",
"Above 10000"
];

const longterm = [
"SIP",
"Traditional investment Avenues"
];

const influence = [
"Friends/family",
"Bank",
"Social Media",
"Advertisement"
];

const agreement1 = [
"Strongly Agree",
"Agree",
"Neutral",
"disagree",
"strongly disagree"
];

const agreement2 = [
"strongly Agree",
"agree",
"neutral",
"disagree",
"strongly disagree"
];

const discou = [
"Low return",
"Long lock-in period",
"lack of flexibility",
"complicated process"
];

const knowledge = [
"Market Risk",
"lack of knowledge",
"fear of loss",
"no regular income"
];

const trustmost = [
"Fixed Deposit",
"PPF",
"Gold",
"Insurance"
];

const benefits = [
"Regular investment habit",
"Market growth benefits",
"Affordable investment",
"Diversification"
];

const aven = [
"Low Risk",
"Guaranteed Returns",
"Trust and familiarity",
"Easy to understand"
];

const betterReturns = [
"SIP",
"Traditional Investments"
];

const suggest = [
"SIP",
"Traditional Avenues"
];

const yesno = ["Yes","No"];

function random(arr){
return arr[Math.floor(Math.random()*arr.length)];
}

function randomName(){
return fakerIN.person.fullName();
}

function sleep(ms){
return new Promise(resolve=>setTimeout(resolve,ms));
}

async function submitForm(i){

try{

const data = new URLSearchParams({

"entry.2033724748": randomName(),

"entry.1019516443": random(genders),
"entry.1036191897": random(ages),

"entry.2134539982": random(invest),

"entry.77489121": random(frequencies),

"entry.991211697": random(investmentPref),

"entry.1103407532": random(objectives),

"entry.1551052683": random(monthlyinv),

"entry.560325964": random(longterm),

"entry.1270231082": random(influence),

"entry.1756930320": random(agreement1),
"entry.1760644846": random(agreement1),

"entry.1041228027": random(agreement2),

"entry.173523049": random(discou),

"entry.2088098199": random(knowledge),

"entry.539035399": random(trustmost),

"entry.1832567573": random(yesno),

"entry.1122714469": random(benefits),

"entry.2128748929": random(aven),

"entry.471538796": random(betterReturns),

"entry.1886465197": random(yesno),

"entry.1157779439": random(yesno),

"entry.1150937137": random(suggest),

"fvv":"1",
"pageHistory":"0"

});

console.log("payload",Object.fromEntries(data));

const res = await axios.post(url,data,{
headers:{
"Content-Type":"application/x-www-form-urlencoded",
"User-Agent":"Mozilla/5.0",
"Origin":"https://docs.google.com",
"Referer":"https://docs.google.com/forms/d/e/1FAIpQLSeMBZiwJZ2ssJo4A0IhfJxTVmlCzQuDikYerys6ASuxJRh0gQ/viewform"
}
});

console.log("submitted",i,res.status);

}catch(err){

console.error("submission failed",i,err.response?.status,err.message);

}

}

async function runBot(){

for(let i=1;i<=200;i++){

await submitForm(i);

const delay = (7*60*1000) + Math.random()*(8*60*1000);

console.log("waiting",Math.round(delay/60000),"minutes");

await sleep(delay);

}

console.log("All submissions completed");

process.exit(0);

}

runBot();