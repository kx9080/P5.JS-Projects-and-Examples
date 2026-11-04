var title;
var randomMonth = 0;
var randomDay = 0;
var alreadyDoneArticles = [];
var randomArticle;
var randomNumber = 0;
var titleTriv = [];
var correctAnswer = [];
var incorrectAnswers = [];
var triviaQuestionsAsked = 0;
var article;

window.onload = function () {
  triviaQues();
};

function newArticle() {
  randomNumber = Math.random() * 3;
  console.log(randomNumber);
  if (randomNumber > 1) {
    article();
  } else if (randomNumber > 1 && randomNumber < 2) {
    if (triviaQuestionsAsked >= 10) {
      triviaQuestionsAsked = 0;
      triviaQues();
    } else {
      triviaQuesWOapi();
    }
  } else {
    console.log("log");
    bbc();
  }
}

function triviaQuesWOapi() {
  document.getElementById("postTitle").textContent =
    titleTriv[triviaQuestionsAsked];
  document.getElementById("postContent").textContent =
    correctAnswer[triviaQuestionsAsked];

  triviaQuestionsAsked += 1;
}

async function triviaQues() {
  try {
    // Fetch data from the API
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`,
    );

    // Check whether the request was successful
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
      return;
    }

    // Convert the response to JSON
    const dataTriv = await response.json();

    console.log(dataTriv);

    randomTriv = dataTriv;

    console.log(randomTriv.results[0].question);

    // console.log(alreadyDoneArticles);

    // Get the first user from the results array

    // console.log(randomArticle);

    for (let i = 0; i < 10; i++) {
      titleTriv[i] = randomTriv.results[i].question
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
      console.log(titleTriv[i]);
      correctAnswer[i] = randomTriv.results[i].correct_answer
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&rsquo;/g, "&");
      console.log(correctAnswer[i]);
      incorrectAnswers[i] = randomTriv.results[i].incorrect_answers.map(
        (answer) =>
          answer
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&rsquo;/g, "&"),
      );
      console.log(incorrectAnswers[i]);
    }

    triviaQuesWOapi();
  } catch (error) {
    // document.getElementById("name").textContent = "Unable to load user data.";

    console.error(error);
  }
}

async function article() {
  randomMonth = Math.floor(Math.random() * 12) + 1;
  randomDay = Math.floor(Math.random() * 31) + 1;
  if (randomMonth === 2 && randomDay > 28) {
    randomDay = 28;
  }
  if (
    randomMonth === 4 ||
    randomMonth === 6 ||
    randomMonth === 9 ||
    randomMonth === 11
  ) {
    if (randomDay > 30) {
      randomDay = 30;
    }
  }
  if (randomMonth < 10) {
    randomMonth = "0" + randomMonth;
  }
  if (randomDay < 10) {
    randomDay = "0" + randomDay;
  }
  try {
    // Fetch data from the API
    const response = await fetch(
      `https://juliayxhuang.github.io/florida-man-api/api/${randomMonth}/${randomDay}.json`,
    );

    // Check whether the request was successful
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    // Convert the response to JSON
    const data = await response.json();

    articleToPull = Math.floor(Math.random() * data.length);

    if (articleToPull == 0) {
      articleToPull = 1;
    }

    // Ensure that you don't pull the same article twice
    for (let i = 0; i < alreadyDoneArticles.length; i++) {
      if (
        articleToPull == alreadyDoneArticles[i][0] &&
        randomMonth == alreadyDoneArticles[i][1] &&
        randomDay == alreadyDoneArticles[i][2]
      ) {
        articleToPull = Math.floor(Math.random() * data.length);
        i = -1;
      }
    }

    randomArticle = data[articleToPull];

    alreadyDoneArticles.push([articleToPull, randomMonth, randomDay]);

    console.log(alreadyDoneArticles);

    // Get the first user from the results array

    console.log(randomArticle);

    document.getElementById("postTitle").textContent = randomArticle.title;
    document.getElementById("postContent").textContent = randomArticle.url;
    document.getElementById("postContent").href = randomArticle.url;
  } catch (error) {
    console.error(error);
  }
}

async function bbc() {
  const article = fetch(
    "https://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml",
  )
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      console.log(data);
      const items = data.querySelectorAll("item");
      let html = ``;
      items.forEach((el) => {
        html += `
        <article>
          <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
        </article>
      `;
      });
      document.body.insertAdjacentHTML("beforeend", html);
    });
  console.log(article);
}

function onPageLoad() {
  article();
}

//https://theaxolotlapi.netlify.app/
//https://www.geeksforgeeks.org/javascript/working-with-apis-in-javascript/
//https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/
