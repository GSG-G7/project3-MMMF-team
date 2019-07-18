const test = require('tape');
const logic = require('../public/js/logic');
const response = {
   status: 'ok',
   totalResults: 38,
   articles: [
      {
         source: { id: 'cnn', name: 'CNN' },
         author: 'Caroline Kelly, CNN',
         title:
            'Rand Paul stops unanimous passage of 9/11 first responders funding bill - CNN',
         description:
            "Republican Sen. Rand Paul objected Wednesday to an attempt to pass the bill funding 9/11 first responders' health care unanimously, arguing that passing such a long-term bill without offsetting the cost would contribute to the national debt.",
         url:
            'https://www.cnn.com/2019/07/17/politics/rand-paul-objects-9-11-funding-unanimous-consent-gillibrand/index.html',
         urlToImage:
            'https://cdn.cnn.com/cnnnext/dam/assets/190717164709-rand-paul-blocks-911-first-responders-bill-kirsten-gillibrand-vpx-00005826-super-tease.jpg',
         publishedAt: '2019-07-17T22:11:00Z',
         content:
            "(CNN)Republican Sen. Rand Paul objected Wednesday to an attempt to pass the bill funding 9/11 first responders' health care unanimously, arguing that passing such a long-term bill without offsetting the cost would contribute to the national debt.\r\nThe delay p… [+2982 chars]"
      },
      {
         source: { id: 'cnn', name: 'CNN' },
         author: 'Dan Merica, CNN',
         title:
            "Here are the 2020 Democratic candidates who qualify for CNN's debate - CNN",
         description:
            "The field is set for CNN's Democratic primary debates later this month.",
         url:
            'https://www.cnn.com/2019/07/17/politics/2020-democratic-candidates-cnn-debate/index.html',
         urlToImage:
            'https://cdn.cnn.com/cnnnext/dam/assets/190717163417-20190717-20-democrats-the-draw-super-tease.jpg',
         publishedAt: '2019-07-17T21:54:00Z',
         content: null
      },
      {
         source: { id: null, name: 'Espn.com' },
         author: null,
         title: "Sources: Thunder's attempts to move Paul stall - ESPN",
         description:
            "The Thunder's attempts to trade Chris Paul have stalled, meaning he might stay with the team this season, sources told ESPN.",
         url:
            'https://www.espn.com/nba/story/_/id/27210295/thunder-attempts-move-paul-stall',
         urlToImage:
            'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0712%2Fr569129_1296x729_16%2D9.jpg',
         publishedAt: '2019-07-17T21:24:20Z',
         content:
            "Oklahoma City's discussions to move nine-time All-Star guard Chris Paul to a new destination are parked, and an increasing expectation exists that he will start the season with the Thunder, league sources tell ESPN.\r\nOklahoma City has been working with Paul a… [+2755 chars]"
      },
      {
         source: { id: 'cnn', name: 'CNN' },
         author: 'Jean Casarez and Eric Levenson, CNN',
         title:
            'Charge against Kevin Spacey dropped after alleged victim pleads the 5th - CNN',
         description:
            'Massachusetts prosecutors on Wednesday dropped a criminal case against actor Kevin Spacey, a week after a man who accused him of assault pleaded the fifth on the witness stand.',
         url:
            'https://www.cnn.com/2019/07/17/us/kevin-spacey-charge-dropped/index.html',
         urlToImage:
            'https://cdn.cnn.com/cnnnext/dam/assets/190708210628-spacey-june-3-super-tease.jpg',
         publishedAt: '2019-07-17T21:17:00Z',
         content:
            "(CNN)Massachusetts prosecutors on Wednesday dropped a criminal case against actor Kevin Spacey, a week after a man who accused him of assault pleaded the fifth on the witness stand.\r\nCape and Islands District Attorney Michael O'Keefe said the decision was mad… [+5258 chars]"
      },
      {
         source: { id: 'ars-technica', name: 'Ars Technica' },
         author: 'Beth Mole',
         title:
            'WHO declares Ebola outbreak an international emergency - Ars Technica',
         description:
            '"It is time for the world to take notice and redouble our efforts."',
         url:
            'https://arstechnica.com/science/2019/07/international-emergency-declared-over-ebola-outbreak-in-drc/',
         urlToImage:
            'https://cdn.arstechnica.net/wp-content/uploads/2019/07/GettyImages-1155902902-760x380.jpg',
         publishedAt: '2019-07-17T21:14:00Z',
         content:
            'Enlarge/ Health workers communicate information about Ebola at an Ebola screening station on the road between Butembo and Goma on July 16, 2019, in Goma, DRC.\r\n23 with 17 posters participating\r\nThe World Health Organization on Wednesday declared the nearly ye… [+2452 chars]'
      },
      {
         source: { id: 'nbc-news', name: 'NBC News' },
         author: 'Erika Edwards',
         title: 'For healthy blood pressure, both numbers matter - NBCNews.com',
         description:
            'A new study finds that the top and bottom numbers of blood pressure measurements matter for heart health.',
         url:
            'https://www.nbcnews.com/health/heart-health/healthy-blood-pressure-both-numbers-matter-n1030851',
         urlToImage:
            'https://media2.s-nbcnews.com/j/newscms/2019_29/2736516/190131-blood-pressure-ew-1214p_c5ee361107eef14def2a7c3809992cc3.nbcnews-fp-1200-630.jpg',
         publishedAt: '2019-07-17T21:11:00Z',
         content:
            "The bottom number in a blood pressure reading (the diastolic pressure) has sometimes played second fiddle to the top number (systolic) in clinical settings, but new research confirms that both numbers are important in determining a person's heart disease risk… [+3278 chars]"
      },
      {
         source: { id: null, name: 'Investing.com' },
         author: 'Investing.com',
         title: 'Stocks- Trade Worries Drag Market Lower By - Investing.com',
         description: 'Stocks- Trade Worries Drag Market Lower',
         url:
            'https://www.investing.com/news/stock-market-news/stocks--trade-worries-drag-market-lower-1926525',
         urlToImage:
            'https://i-invdn-com.akamaized.net/news/LYNXMPEE7024A_L.jpg',
         publishedAt: '2019-07-17T20:57:00Z',
         content:
            "Investing.com - You normally don't think much about railroads, but they move goods from Point A to Point B.\r\nLate Tuesday, CSX (NASDAQ:CS), which operates in the East and South. loudly noted that economic uncertainty, caused in part by the trade disputes betw… [+2454 chars]"
      }
   ]
};

test('test the functionality ', function(t) {
   const result = logic.format(response); // expect an array containing [50,20,10,5]
   const expected = [
      {
         source: { id: 'cnn', name: 'CNN' },
         author: 'Caroline Kelly, CNN',
         title:
            'Rand Paul stops unanimous passage of 9/11 first responders funding bill - CNN',
         description:
            "Republican Sen. Rand Paul objected Wednesday to an attempt to pass the bill funding 9/11 first responders' health care unanimously, arguing that passing such a long-term bill without offsetting the cost would contribute to the national debt.",
         url:
            'https://www.cnn.com/2019/07/17/politics/rand-paul-objects-9-11-funding-unanimous-consent-gillibrand/index.html',
         urlToImage:
            'https://cdn.cnn.com/cnnnext/dam/assets/190717164709-rand-paul-blocks-911-first-responders-bill-kirsten-gillibrand-vpx-00005826-super-tease.jpg',
         publishedAt: '2019-07-17T22:11:00Z',
         content:
            "(CNN)Republican Sen. Rand Paul objected Wednesday to an attempt to pass the bill funding 9/11 first responders' health care unanimously, arguing that passing such a long-term bill without offsetting the cost would contribute to the national debt.\r\nThe delay p… [+2982 chars]"
      },
      {
         source: { id: 'cnn', name: 'CNN' },
         author: 'Dan Merica, CNN',
         title:
            "Here are the 2020 Democratic candidates who qualify for CNN's debate - CNN",
         description:
            "The field is set for CNN's Democratic primary debates later this month.",
         url:
            'https://www.cnn.com/2019/07/17/politics/2020-democratic-candidates-cnn-debate/index.html',
         urlToImage:
            'https://cdn.cnn.com/cnnnext/dam/assets/190717163417-20190717-20-democrats-the-draw-super-tease.jpg',
         publishedAt: '2019-07-17T21:54:00Z',
         content: null
      },
      {
         source: { id: null, name: 'Espn.com' },
         author: null,
         title: "Sources: Thunder's attempts to move Paul stall - ESPN",
         description:
            "The Thunder's attempts to trade Chris Paul have stalled, meaning he might stay with the team this season, sources told ESPN.",
         url:
            'https://www.espn.com/nba/story/_/id/27210295/thunder-attempts-move-paul-stall',
         urlToImage:
            'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0712%2Fr569129_1296x729_16%2D9.jpg',
         publishedAt: '2019-07-17T21:24:20Z',
         content:
            "Oklahoma City's discussions to move nine-time All-Star guard Chris Paul to a new destination are parked, and an increasing expectation exists that he will start the season with the Thunder, league sources tell ESPN.\r\nOklahoma City has been working with Paul a… [+2755 chars]"
      },
      {
         source: { id: 'cnn', name: 'CNN' },
         author: 'Jean Casarez and Eric Levenson, CNN',
         title:
            'Charge against Kevin Spacey dropped after alleged victim pleads the 5th - CNN',
         description:
            'Massachusetts prosecutors on Wednesday dropped a criminal case against actor Kevin Spacey, a week after a man who accused him of assault pleaded the fifth on the witness stand.',
         url:
            'https://www.cnn.com/2019/07/17/us/kevin-spacey-charge-dropped/index.html',
         urlToImage:
            'https://cdn.cnn.com/cnnnext/dam/assets/190708210628-spacey-june-3-super-tease.jpg',
         publishedAt: '2019-07-17T21:17:00Z',
         content:
            "(CNN)Massachusetts prosecutors on Wednesday dropped a criminal case against actor Kevin Spacey, a week after a man who accused him of assault pleaded the fifth on the witness stand.\r\nCape and Islands District Attorney Michael O'Keefe said the decision was mad… [+5258 chars]"
      },
      {
         source: { id: 'ars-technica', name: 'Ars Technica' },
         author: 'Beth Mole',
         title:
            'WHO declares Ebola outbreak an international emergency - Ars Technica',
         description:
            '"It is time for the world to take notice and redouble our efforts."',
         url:
            'https://arstechnica.com/science/2019/07/international-emergency-declared-over-ebola-outbreak-in-drc/',
         urlToImage:
            'https://cdn.arstechnica.net/wp-content/uploads/2019/07/GettyImages-1155902902-760x380.jpg',
         publishedAt: '2019-07-17T21:14:00Z',
         content:
            'Enlarge/ Health workers communicate information about Ebola at an Ebola screening station on the road between Butembo and Goma on July 16, 2019, in Goma, DRC.\r\n23 with 17 posters participating\r\nThe World Health Organization on Wednesday declared the nearly ye… [+2452 chars]'
      }
   ];
   t.deepEqual(
      result,
      expected,
      'should return the first 5 indexes of the array'
   );
   t.end();
});
