const axios = require("axios");

const url = "https://docs.google.com/forms/d/e/1FAIpQLSeMBZiwJZ2ssJo4A0IhfJxTVmlCzQuDikYerys6ASuxJRh0gQ/formResponse";

const data = new URLSearchParams({
"entry.2033724748": "Sunil Rathod",
"entry.1019516443": "Male",
"entry.1036191897": "below 20",
"entry.2134539982": "Yes",
"entry.77489121": "Monthly",
"entry.991211697": "SIP",
"entry.1103407532": "High returns",
"entry.1551052683": "1001 to 5000",
"entry.560325964": "SIP",
"entry.1270231082": "Advertisement",
"entry.1756930320": "Neutral",
"entry.1760644846": "neutral",
"entry.1041228027": "agree",
"entry.173523049": "lack of flexibility",
"entry.2088098199": "lack of knowledge",
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

axios.post(url, data)
.then(()=>console.log("submitted"))
.catch(console.error);