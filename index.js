import fetch from 'node-fetch';


const fetchData = async () => {
    const response = await fetch("https://www.kijijiautos.ca/consumer/srp/by-params?listingsOnly=true&sb=rel&od=down&ms=24100%3B3&ms=24100%3B28%3BTrail&vc=Car&psz=20&pageToken=NDg7Njs2Oy0zODI2Nzk0NDA7Iw", {
    "headers": {
      "accept": "application/json;version=2",
      "accept-language": "en-CA",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-client": "ca.move.web.app",
      "x-client-id": "97c89fb3-a6f4-49d2-a4a4-af85ef73bab4",
      "cookie": "mvcid=97c89fb3-a6f4-49d2-a4a4-af85ef73bab4; locale=en-CA; trty=e; GCLB=CPbzjYGMhdHeKxAD; _gcl_au=1.1.1181718960.1717768655; FPID=FPID2.2.%2B0HPn3ah382xlnSMgxG281pSQTXJsuJarZ7IjT3GY8Y%3D.1717768657; _fbp=fb.1.1717768657611.115261134652503796; _pin_unauth=dWlkPU9HUmpaRGcxWkdVdE5URTBZaTAwT1dZekxUZ3hPRGN0WkRVelltSTRNbU15WVdKbQ; rbzsessionid=7d80df40873369a782eaa067224ccb65; _gid=GA1.2.293115509.1717865677; _clck=oudk6p%7C2%7Cfmh%7C0%7C1619; srpView=card; _csrf=eFd6UHC4CLuBV8Hki00SrniG; mv-sc=RSBsYux8L7o9NZihW03R6vqjP6k4UWIYfvgHQJARnQE; mv-nc=D9mRz8Dvilpuml1InRQmE8kKxbi9K8uwuA2HjuxcpaM; _ga=GA1.1.1720622648.1717767043; FPLC=XNevuWD6VrRxuEVdOBwdyZLvL7kvV%2FtN6tyKW2jcGNYGrwa2yLHCBU2sajUFDxRdra8jyTJ8pVJcz%2FlXAl3XV639wF9UGTC%2Bv5tzAUc1VIukoHGcaj868JQiHrsGBw%3D%3D; rbzid=P6nyXRgbvYnReYFrKSFMMlz/CiweRgGPs/ics6UmPzr1JroJxuCMf5u3VPS8meFZejW6Y94aOHalYTnLkmamZKubwERZI3HjgZeycgkFoJnQyutmpNM4wLdulUpQbLPUj4XMeknJ2J4Y6zdV8HDpqA6H/CFdkBVstCZO16gztNzBzd0mzXccNSw8NC7MIntZnVi9Yagc8pwCjMQiOjT3gYLaUU73/hNfjnq4VH1+jy0Udfxx2Ov6q4xZL34JX43A0P2pATtek0MNAy0isDellcu39h3qjdshgU6HsC5qN5nqSpmouPO3VCo7VrLU0nsIQ/9Rw6xHKXN6tTPPJPIMNw==; __gads=ID=027a78ce56689dd4:T=1717768656:RT=1717941612:S=ALNI_MZvF3Gcw4lKyuXJlYBzdPwWGK_PbQ; __gpi=UID=00000d7fefa88a73:T=1717768656:RT=1717941612:S=ALNI_MbBdvHCAMgvFMk6XVP1rzIDJDjA2g; __eoi=ID=1993d4088ce5404a:T=1717768656:RT=1717941612:S=AA-AfjaRRCNYwpGgu1JvGzv1TJJx; lux_uid=171794447631152082; _ga_H5VLGWR2FL=GS1.1.1717944480.5.0.1717944480.0.0.504194005; _uetsid=e5dcf54024d511efbb1287c485b01978; _uetvid=e5dcf90024d511ef85ee1b891441ab0e; cto_bundle=Ne2VMl9oMDglMkJnWUtpYTZ2TzElMkJod0lQQ2I2NFpLeFVrd1ZLU2RiJTJCVWpjMlpON2tJd0M5NE5GdkVXUGdOcG1XaldYbkQ1Yk10MyUyRjVzVnhsVnJyYmZYbXplMk9qSUVnQjJpUHpZamdsN1FrNGdXSkVYd0NJZEdaNkk5YkNGQlAzQ1pjeTcz; _td=aac70fe4-b7e2-464b-aff3-44276716424d; _clsk=1ui98wi%7C1717944494152%7C1%7C1%7Cd.clarity.ms%2Fcollect",
      "Referer": "https://www.kijijiautos.ca/cars/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });
  const data = await response.json();
  console.log(data);
}
function base64Encode(str) {
  return btoa(str);
}

function generateSequence() {
  let sequences = [];
  let firstNumber = 100;
  let secondNumber = 8;
  let thirdNumber = 12;
  let fourthNumber = -382679437;
  let symbol = '#';

  for (let i = 0; i < 4; i++) {
      let sequence = `${firstNumber};${secondNumber};${thirdNumber};${fourthNumber};${symbol}`;
      sequences.push(base64Encode(sequence));

      // Update numbers for the next sequence
      firstNumber += (i === 0) ? 18 : (i === 1) ? 19 : 20;
      thirdNumber += (i < 2) ? 2 : 1;
  }

  return sequences;
}

console.log(generateSequence());


await fetchData();