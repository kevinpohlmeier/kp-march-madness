// From the espn bracket page 
// JSON.stringify(Array.from(document.querySelectorAll(".AnchorLink.BracketCell .BracketCell__Competitor")).map(function(x, i) {
//     if (x.classList.contains("pr2")) {
//         return {
//             TeamID: i + 1,
//             Seed: x.querySelector(".BracketCell__Rank").innerText,
//             Name: "XXXXXXXXXXXXXXXX", // First Four, need to manually get from end of list
//         }
//     }
//     return {
//         TeamID: i + 1,
//         Seed: x.querySelector(".BracketCell__Rank").innerText,
//         Name: x.querySelector(".BracketCell__Name").innerText,
//         Logo: x.querySelector(".BracketCell__Logo img").src.replace("&scale=crop&cquality=40&location=origin&w=40&h=40", "")
//     }
// }))


// TODO: display ColorCodes
// TODO: display First Four options
// TODO: help prevent double tap to accidentally pick next team
// TODO: help prevent long press image download popup, text selection, etc

games = new Array(32+16+8+4+2+1); 
gameIndex = 0;

window.onload = function() {
  var teams = getTeams();
  initializeGames(teams);
  displayGame(); 

  //https://stackoverflow.com/questions/51660812/best-settings-for-html-input-type-number-for-mobile-devices
  if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
  {
    var inputs = document.querySelectorAll('input[type="number"]');
    for(let i = inputs.length; i--;)
      inputs[i].setAttribute('pattern', '\\d*');
  }

//     fillItAllOut();
//      findMissing(teams);
}

function fillItAllOut() {

  // select everything to test GET
  for (let i = 0; i < 63; i++){ 
    selectWinner(0); 
  }
  document.getElementById("score1").value = 75;
//   document.getElementById("score2").value = 77;

}

function findMissing(teams) {

  var missing = teams
  .filter(function(t){ return !t.Name.includes("/") && t.TeamMascot == null; })
  .map(function(t) { return t.Name; });

  if (missing.length > 0) {
    console.log("missing:");
    console.log(missing);
  }

  testImage(0, teams);
}

function testImage(index, teams) {
  if (index === 64) {
    return;
  }
  const imgTester = document.getElementById("img-tester");
  const url = teams[index].MascotImage;
  if (url) {
    imgTester.src = url;
  }
  setTimeout(function(){
    testImage(index + 1, teams);
  }, 100);
}

function onImageError(img) {
  if (img === window.location.href) {
    // not set
    return;
  }
  console.log("Error loading img: " + img.src);
}

function urlExists(url) {
  var iframe = document.createElement("iframe");
  document.body.appendChild(iframe);
  var isError = false;
  try {
    iframe.src = url;
  } catch (err){
    isError = true;
    console.log("err");
  }

  console.log(isError);
}

// var undecideds = [
//   { Name: "RUTG/ND", Team1: "Rutgers", Team2: "Notre Dame" },
//   { Name: "WRST/BRY", Team1: "???", Team2: "???" },
// ];


function initializeGames(teams) {
  for (let i = 0; i < games.length; i++) {
    games[i] = { Team1: null, Team2: null, Winner: null };
  } 
  for (let i = 0; i < teams.length; i+=2) {
    games[i/2] = { Team1: teams[i], Team2: teams[i+1], Winner: null };
  } 
}

const _blankImage = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

function displayTeam(team, number) {
  if (!team) {
    team = {};
  }
  let undecidedMessage = "";
  if (team.Name.includes("/")){
    // Multiple teams possible, not decided until they play each other
    undecidedMessage = team.Name.split("/")[0] + " will play " + team.Name.split("/")[1]
      + " to determine who gets this spot";
  } else if (team.MascotName === "N/A") {
    undecidedMessage = "This team does not have a mascot";
  }
  
  let colors = team.TeamColors;
  if (team.ColorCodes){
    colors = team.ColorCodes.map(x => x[0]).join(", ");
  }
  var container = document.querySelector(".team" + number);
  container.querySelector(".name").innerText = team.Name + " (" + team.Seed + " Seed)";
  container.querySelector(".colors").innerText = colors || "??";
  container.querySelector(".mascot").innerText = team.TeamMascot || "??";
  container.querySelector(".mascot-name").innerText = team.MascotName || "??";
  container.querySelector(".mascot-image").src = "";
  container.querySelector(".mascot-image").src = team.MascotImage || _blankImage;
  container.querySelector(".logo-image").src = "";
  container.querySelector(".logo-image").src = team.Logo || _blankImage; 
  container.querySelector(".undecided-message").innerText = undecidedMessage; 
}


function displayGame(){
  const gameWrapper = document.getElementById("game-wrapper");
  const scoreSection = document.querySelector(".score-section");
  const espnSection = document.querySelector(".espn-section");
  const previousButton  = document.getElementById("previous-button");
  const nextButton  = document.getElementById("next-button");

  const isSubmissionScreen = gameIndex === games.length;
  
  if (isSubmissionScreen){
    gameWrapper.style.display = "none";
    scoreSection.style.display = "block";
    espnSection.style.display = "block";
    nextButton.style.display = "none";
    
    generateBracket();
    
    return;
  } 

  gameWrapper.style.display = "block";
  scoreSection.style.display = "none";
  espnSection.style.display = "none";
  nextButton.style.display = "block";
  
  previousButton.disabled = gameIndex === 0;
//   if (gameIndex === 0) {
//     previousButton.style.display = "none";
//   } else {
//     previousButton.style.display = "block";
//   }

  var checks = document.querySelectorAll(".selected-winner");
  checks[0].style.display = "none";
  checks[1].style.display = "none";

  displayTeam(games[gameIndex].Team1, 1);
  displayTeam(games[gameIndex].Team2, 2);  

  if (games[gameIndex].Team1 === games[gameIndex].Winner) {
    checks[0].style.display = "inline-block";
  } 
  if (games[gameIndex].Team2 === games[gameIndex].Winner) {
    checks[1].style.display = "inline-block"; 
  }

  updateHeader();

}

function generateBracket(){
  const bracketSection = document.querySelector(".bracket-section");
  
  const sections = Array.from(bracketSection.querySelectorAll("[data-section-order]"));
  for (let i = 0; i < sections.length; i++) {
    sections[i].innerHTML = "";
  }
  
  for (let i = 0; i < games.length; i++) {
    let section = -1;

    if (i < 8) {
      section = 1;
    } else if (i < 16) {
      section = 2;
    } else if (i < 24) {
      section = 3;
    } else if (i < 32) {
      section = 4;
    } else if (i < 36) {
      section = 5;
    } else if (i < 40) {
      section = 6;
    } else if (i < 44) {
      section = 7;
    } else if (i < 48) {
      section = 8;
    } else if (i < 50) {
      section = 9;
    } else if (i < 52) {
      section = 10;
    } else if (i < 54) {
      section = 11;
    } else if (i < 56) {
      section = 12;
    } else if (i < 57) {
      section = 13;
    } else if (i < 58) {
      section = 14;
    } else if (i < 59) {
      section = 15;
    } else if (i < 60) {
      section = 16;
    } else if (i < 61) {
      section = 17;
    } else if (i < 62) {
      section = 18;
    } else if (i < 63) {
      section = 19;
    } else {
      continue;
    }
    
    let sectionElement = bracketSection.querySelector(`[data-section-order='${section}']`)
    const winnerDiv = document.createElement("div");
    const node = document.createTextNode(games[i].Winner.Name);
    winnerDiv.appendChild(node);
    sectionElement.appendChild(winnerDiv);
  }
}

function onTypeChange() {
  const updateBracketSection = document.getElementById("update-bracket-section");
  const isUpdate = document.querySelector('input[name="bracket-type"]:checked').value === "existing";
  const bracketId = document.getElementById("bracket-id");
  
  if (isUpdate) {
    updateBracketSection.style.display = "block";
  } else {
    updateBracketSection.style.display = "none";
    bracketId.value = 0;
  }
}

function updateHeader() {

  let roundNumber = document.getElementById("round-number");
  let gameNumber = document.getElementById("game-number");
  let roundName = "";
  if (gameIndex < 32) {
    roundName = "Round of 64";
  } else if (gameIndex < (32 + 16)) {
    roundName = "Round of 32";
  } else if (gameIndex < (32 + 16 + 8)) {
    roundName = "Sweet 16";
  } else if (gameIndex < (32 + 16 + 8 + 4)) {
    roundName = "Elite 8";
  } else if (gameIndex < (32 + 16 + 8 + 4 + 2)) {
    roundName = "Final 4";
  } else {
    roundName = "Championship Game";
  } 
  roundNumber.innerText = roundName 
    + " (Game " + (gameIndex + 1) + " / 63)";
}

function moveNext() {
  if (gameIndex >= games.length) {
    return;
  }
  //   if (gameIndex >= games.length-1) {
  //     return;
  //   }
  gameIndex++;
  displayGame();
}

function movePrevious() {
  if (gameIndex <= 0) {
    return;
  }
  gameIndex--;
  displayGame();
}

function backToStart() {
  gameIndex = 0;
  displayGame();
}

function selectWinner(teamIndex) {
  var checks = document.querySelectorAll(".selected-winner");
  checks[0].style.display = "none";
  checks[1].style.display = "none";
  checks[teamIndex].style.display = "inline-block"; 

  var winner = null; 
  if (teamIndex === 0) {
    winner = games[gameIndex].Team1;
  } else {
    winner = games[gameIndex].Team2;
  }
  games[gameIndex].Winner = winner;
  checkUpdateStatus();

  var nextGameIndex = Math.floor(gameIndex/2)+32;
  if (nextGameIndex <= 62) {
    if (gameIndex % 2 === 0){ 
      games[nextGameIndex].Team1 = winner;
    } else {
      games[nextGameIndex].Team2 = winner; 
    } 
  }
  moveNext(); 
}

function checkUpdateStatus() {
  var canSubmit = true;
  for (var i = 0; i < games.length; i++) {
    if (!games[i].Winner) {
      canSubmit = false;
      break;
    }
  }

  document.getElementById("submit-espn").disabled = !canSubmit;
}

document.onkeypress = function(e) {
  switch (e.which) {
    case 110: // n
      moveNext();
      break;
    case 112: // p
      movePrevious();
      break;
    case 49: // 1
      selectWinner(0);
      break;
    case 50: // 2
      selectWinner(1); 
      break;
  }
}



function submitEspnBracket() 
{
  bracketID = document.getElementById("bracket-id").value;

  var score1 = document.getElementById("score1").value;
  var score2 = document.getElementById("score2").value;

  var stuff = "";
  for (var i = 0; i < games.length; i++) {
    stuff += games[i].Winner.TeamID + "|";
  }
  stuff = stuff.substring(0, stuff.length-1);
  var encodedStuff = encodeURIComponent(stuff);
  var url = "https://fantasy.espn.com/tournament-challenge-bracket/2023/en/createOrUpdateEntry?entryID=" + bracketID 
  + "&r=entry&b=" + encodedStuff 
  + "&metricSource=web_en&importType=&t1=" + score1 + "&t2=" + score2;

  window.location.href = url;
}

function submitEspnBracket2024() 
{
  let picks = [];
  
  let prefixes = [
    
  ];
  
  $.get("https://gambit-api.fantasy.espn.com/apis/v1/challenges/240/entries/ebdae5b0-e4e1-11ee-aac4-bff15ec54236?platform=chui&view=chui_defaulthttps://gambit-api.fantasy.espn.com/apis/v1/challenges/240/entries/ebdae5b0-e4e1-11ee-aac4-bff15ec54236?platform=chui&view=chui_default", json, function(a,b,c,d) {
    console.log(b); // success
    console.log(a);
  })
}


function getTeams() {

let teams = [
 
  // ===== EAST REGION (Duke 1-seed) =====
  { "TeamID": 1,  "Seed": "1",  "Name": "Duke",           "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/150.png" },
  { "TeamID": 2,  "Seed": "16", "Name": "Siena",          "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2561.png" },
  { "TeamID": 3,  "Seed": "8",  "Name": "Ohio St",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/194.png" },
  { "TeamID": 4,  "Seed": "9",  "Name": "TCU",            "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2628.png" },
  { "TeamID": 5,  "Seed": "5",  "Name": "St John's",      "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2599.png" },
  { "TeamID": 6,  "Seed": "12", "Name": "Northern Iowa",  "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2271.png" },
  { "TeamID": 7,  "Seed": "4",  "Name": "Kansas",         "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2305.png" },
  { "TeamID": 8,  "Seed": "13", "Name": "Cal Baptist",    "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2856.png" },
  { "TeamID": 9,  "Seed": "6",  "Name": "Louisville",     "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/97.png" },
  { "TeamID": 10, "Seed": "11", "Name": "South Florida",  "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/58.png" },
  { "TeamID": 11, "Seed": "3",  "Name": "Michigan St",    "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/127.png" },
  { "TeamID": 12, "Seed": "14", "Name": "North Dakota St","Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2449.png" },
  { "TeamID": 13, "Seed": "7",  "Name": "UCLA",           "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/26.png" },
  { "TeamID": 14, "Seed": "10", "Name": "UCF",            "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2116.png" },
  { "TeamID": 15, "Seed": "2",  "Name": "UConn",          "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/41.png" },
  { "TeamID": 16, "Seed": "15", "Name": "Furman",         "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/231.png" },
 
  // ===== SOUTH REGION (Florida 1-seed) =====
  { "TeamID": 17, "Seed": "1",  "Name": "Florida",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/57.png" },
  { "TeamID": 18, "Seed": "16", "Name": "PVA/LEH",        "FirstFour": ["Prairie View AM", "Lehigh"] },
  { "TeamID": 19, "Seed": "8",  "Name": "Clemson",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/228.png" },
  { "TeamID": 20, "Seed": "9",  "Name": "Iowa",           "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2294.png" },
  { "TeamID": 21, "Seed": "5",  "Name": "Vanderbilt",     "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/238.png" },
  { "TeamID": 22, "Seed": "12", "Name": "McNeese",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2377.png" },
  { "TeamID": 23, "Seed": "4",  "Name": "Nebraska",       "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/158.png" },
  { "TeamID": 24, "Seed": "13", "Name": "Troy",           "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2653.png" },
  { "TeamID": 25, "Seed": "6",  "Name": "North Carolina", "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/153.png" },
  { "TeamID": 26, "Seed": "11", "Name": "VCU",            "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2670.png" },
  { "TeamID": 27, "Seed": "3",  "Name": "Illinois",       "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/356.png" },
  { "TeamID": 28, "Seed": "14", "Name": "Penn",           "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/219.png" },
  { "TeamID": 29, "Seed": "7",  "Name": "Saint Mary's",   "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2608.png" },
  { "TeamID": 30, "Seed": "10", "Name": "Texas A&M",      "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/245.png" },
  { "TeamID": 31, "Seed": "2",  "Name": "Houston",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/248.png" },
  { "TeamID": 32, "Seed": "15", "Name": "Idaho",          "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/70.png" },
 
  // ===== WEST REGION (Arizona 1-seed) =====
  { "TeamID": 33, "Seed": "1",  "Name": "Arizona",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/12.png" },
  { "TeamID": 34, "Seed": "16", "Name": "LIU",            "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2335.png" },
  { "TeamID": 35, "Seed": "8",  "Name": "Villanova",      "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/222.png" },
  { "TeamID": 36, "Seed": "9",  "Name": "Utah State",     "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/328.png" },
  { "TeamID": 37, "Seed": "5",  "Name": "Wisconsin",      "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/275.png" },
  { "TeamID": 38, "Seed": "12", "Name": "High Point",     "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2272.png" },
  { "TeamID": 39, "Seed": "4",  "Name": "Arkansas",       "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/8.png" },
  { "TeamID": 40, "Seed": "13", "Name": "Hawaii",         "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/62.png" },
  { "TeamID": 41, "Seed": "6",  "Name": "BYU",            "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/252.png" },
  { "TeamID": 42, "Seed": "11", "Name": "TEX/NCST",       "FirstFour": ["Texas", "NC St"] },
  { "TeamID": 43, "Seed": "3",  "Name": "Gonzaga",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2250.png" },
  { "TeamID": 44, "Seed": "14", "Name": "Kennesaw St",    "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2309.png" },
  { "TeamID": 45, "Seed": "7",  "Name": "Miami",          "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2390.png" },
  { "TeamID": 46, "Seed": "10", "Name": "Missouri",       "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/142.png" },
  { "TeamID": 47, "Seed": "2",  "Name": "Purdue",         "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2509.png" },
  { "TeamID": 48, "Seed": "15", "Name": "Queens",         "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/3108.png" },
 
  // ===== MIDWEST REGION (Michigan 1-seed) =====
  { "TeamID": 49, "Seed": "1",  "Name": "Michigan",       "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/130.png" },
  { "TeamID": 50, "Seed": "16", "Name": "UMBC/HOW",       "FirstFour": ["UMBC", "Howard"] },
  { "TeamID": 51, "Seed": "8",  "Name": "Georgia",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/61.png" },
  { "TeamID": 52, "Seed": "9",  "Name": "Saint Louis",    "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/139.png" },
  { "TeamID": 53, "Seed": "5",  "Name": "Texas Tech",     "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2641.png" },
  { "TeamID": 54, "Seed": "12", "Name": "Akron",          "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2006.png" },
  { "TeamID": 55, "Seed": "4",  "Name": "Alabama",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/333.png" },
  { "TeamID": 56, "Seed": "13", "Name": "Hofstra",        "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2275.png" },
  { "TeamID": 57, "Seed": "6",  "Name": "Tennessee",      "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2633.png" },
  { "TeamID": 58, "Seed": "11", "Name": "MIA/SMU",        "FirstFour": ["Miami OH", "SMU"] },
  { "TeamID": 59, "Seed": "3",  "Name": "Virginia",       "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/258.png" },
  { "TeamID": 60, "Seed": "14", "Name": "Wright St",      "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2750.png" },
  { "TeamID": 61, "Seed": "7",  "Name": "Kentucky",       "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/96.png" },
  { "TeamID": 62, "Seed": "10", "Name": "Santa Clara",    "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2172.png" },
  { "TeamID": 63, "Seed": "2",  "Name": "Iowa State",     "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/66.png" },
  { "TeamID": 64, "Seed": "15", "Name": "Tennessee St",   "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2635.png" },
 
  // ===== FIRST FOUR EXTRAS =====
  { "TeamID": 65, "Seed": "16", "Name": "Prairie View AM","Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2504.png" },
  { "TeamID": 66, "Seed": "16", "Name": "Lehigh",         "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2329.png" },
  { "TeamID": 67, "Seed": "11", "Name": "Texas",          "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/251.png" },
  { "TeamID": 68, "Seed": "11", "Name": "NC St",          "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/152.png" },
  { "TeamID": 69, "Seed": "16", "Name": "UMBC",           "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2413.png" },
  { "TeamID": 70, "Seed": "16", "Name": "Howard",         "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2430.png" },
  { "TeamID": 71, "Seed": "11", "Name": "Miami OH",       "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/193.png" },
  { "TeamID": 72, "Seed": "11", "Name": "SMU",            "Logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2567.png" },
]
  
// TODO: https://teamcolorcodes.com/arkansas-razorbacks-color-codes/ ? team.ColorCodes
  for (var i = 0; i < teams.length; i++) {
    var team = teams[i];
    switch (team.Name) {

      case "Akron":
        team.TeamMascot = "Zips";
        team.MascotName = "Zippy the Kangaroo";
        team.ColorCodes = [["Blue", "#041E42"], ["Gold", "#B3A369"]];
        team.MascotImage = "https://tinyurl.com/mtum3d5x";
        break;

      case "Alabama":
        team.TeamMascot = "Crimson Tide";
        team.MascotName = "Big Al";
        team.ColorCodes = [["Crimson", "#9E1B32"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3ab4fhy9";
        break;

      case "Alabama St":
        team.TeamMascot = "Hornets";
        team.MascotName = "Stinger";
        team.ColorCodes = [["Old Gold", "#C99700"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/mryreruc";
        break;

      case "American":
        team.TeamMascot = "Eagles";
        team.MascotName = "Clawed Z";
        team.ColorCodes = [["Blue", "#143d8d"], ["Red", "#c41230"], ["White", "#ffffff"]];
        team.MascotImage = "https://tinyurl.com/4brj4be5";
        break;

      case "Arizona":
        team.TeamMascot = "Wildcats";
        team.MascotName = "Wilbur and Wilma";
        team.ColorCodes = [["Cardinal Red", "#CC0033"], ["Navy", "#003366"]];
        team.MascotImage = "https://tinyurl.com/yc6p3ym8";
        break;

      case "Arkansas":
        team.TeamMascot = "Razorbacks";
        team.MascotName = "Tusk IV";
        team.ColorCodes = [["Cardinal", "#9D2235"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yc6fjyb9";
        break;

      case "Auburn":
        team.TeamMascot = "Tigers";
        team.MascotName = "Aubie the Tiger";
        team.ColorCodes = [["Auburn Blue", "#0C2340"], ["Auburn Orange", "#E87722"]];
        team.MascotImage = "https://tinyurl.com/4tm7tthn";
        break;

      case "Baylor":
        team.TeamMascot = "Bears";
        team.MascotName = "Bruiser & Marygold";
        team.ColorCodes = [["Baylor Green", "#154734"], ["Baylor Gold", "#FFB81C"]];
        team.MascotImage = "https://tinyurl.com/mr2hvnbv";
        break;

      case "Boise St":
      case "Boise State":
        team.TeamMascot = "Broncos";
        team.MascotName = "Buster Bronco";
        team.ColorCodes = [["Blue", "#0033A0"], ["Orange", "#D64309"]];
        team.MascotImage = "https://tinyurl.com/2jc3kpa4";
        break;

      case "Brigham Young University":
      case "BYU":
        team.TeamMascot = "Cougars";
        team.MascotName = "Cosmo the Cougar";
        team.ColorCodes = [["Royal Blue", "#002E5D"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/553juupj";
        break;

      case "Bryant":
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Tupper";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#B59A57"]];
        team.MascotImage = "https://tinyurl.com/59hh3bft";
        break;

      case "Cal Baptist":
      case "California Baptist":
        team.TeamMascot = "Lancers";
        team.MascotName = "Saber the Lancer";
        team.ColorCodes = [["Blue", "#003082"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/36m3b2at";
        break;
        
      case "Charleston":
        team.TeamMascot = "Cougars";
        team.MascotName = "Clyde the Cougar";
        team.ColorCodes = [["Maroon", "#6B0C27"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3w8bjsvd";
        break;

      case "Chattanooga":
        team.TeamMascot = "Mocs";
        team.MascotName = "Scrappy the Mockingbird";
        team.ColorCodes = [["Navy", "#00204E"], ["Gold", "#E0A829"]];
        team.MascotImage = "https://tinyurl.com/bdtzxkja";
        break;

      case "Clemson":
        team.TeamMascot = "Tigers";
        team.MascotName = "The Tiger";
        team.ColorCodes = [["Clemson Orange", "#F66733"], ["Purple", "#522D80"]];
        team.MascotImage = "https://tinyurl.com/yjb3cs3s";
        break;

      case "Colgate":
        team.TeamMascot = "Raiders";
        team.MascotName = "Raider";
        team.ColorCodes = [["Maroon", "#821019"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/52ajch2n";
        break;

      case "Colorado St":
      case "Colorado State":
        team.TeamMascot = "Rams";
        team.MascotName = "CAM the Ram";
        team.ColorCodes = [["Green", "#1E4D2B"], ["Gold", "#C8C372"]];
        team.MascotImage = "https://tinyurl.com/msfdfpwc";
        break;

      case "Creighton":
        team.TeamMascot = "Bluejays";
        team.MascotName = "Billy Bluejay";
        team.ColorCodes = [["Blue", "#005CA9"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/43h37jbb";
        break;

      case "CSU Fullerton":
        team.TeamMascot = "Titans";
        team.MascotName = "Tuffy the Titan";
        team.ColorCodes = [["Navy Blue", "#00274C"], ["Orange", "#FF6600"]];
        team.MascotImage = "https://tinyurl.com/w6hcvbzx";
        break;

      case "Davidson":
        team.TeamMascot = "Wildcats";
        team.MascotName = "Will E. Wildcat";
        team.ColorCodes = [["Red", "#CC0000"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/4ehk9u3u";
        break;

      case "Dayton":
        team.TeamMascot = "Flyers";
        team.MascotName = "Rudy Flyer";
        team.ColorCodes = [["Red", "#CE1141"], ["Blue", "#004B8D"]];
        team.MascotImage = "https://tinyurl.com/yswwmu3c";
        break;

      case "Delaware":
        team.TeamMascot = "Blue Hens";
        team.MascotName = "YoUDee";
        team.ColorCodes = [["Blue", "#00539F"], ["Gold", "#FFD200"]];
        team.MascotImage = "https://tinyurl.com/4n7e2rs5";
        break;

      case "Drake":
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Spike";
        team.ColorCodes = [["Drake Blue", "#004477"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/5eunwfsm";
        break;

      case "Duke":
        team.TeamMascot = "Blue Devils";
        team.MascotName = "Blue Devil";
        team.ColorCodes = [["Duke Blue", "#003087"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yckfu6ts";
        break;

      case "Duquesne":
        team.TeamMascot = "Dukes";
        team.MascotName = "Duke";
        team.ColorCodes = [["Blue", "#041E42"], ["Red", "#BA0C2F"]];
        team.MascotImage = "https://tinyurl.com/3xwzyrsh";
        break;

      case "FAU":
      case "Florida Atlantic":
        team.TeamMascot = "Owls";
        team.MascotName = "Owlsley and Hoot";
        team.ColorCodes = [["Blue", "#003366"], ["Red", "#CC0000"]];
        team.MascotImage = "https://tinyurl.com/jdt9n2v6";
        break;

      case "Florida":
        team.TeamMascot = "Gators";
        team.MascotName = "Albert and Alberta Gator";
        team.ColorCodes = [["Florida Orange", "#FA4616"], ["Florida Blue", "#0021A5"]];
        team.MascotImage = "https://tinyurl.com/yeypdjbt";
        break;

      case "Furman":
        team.TeamMascot = "Paladins";
        team.MascotName = "Victor the Paladin";
        team.ColorCodes = [["Purple", "#582C83"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/bdzny2u5";
        break;

      case "Georgia":
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Uga";
        team.ColorCodes = [["Bulldog Red", "#BA0C2F"], ["Arch Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/bdd976mr";
        break;

      case "Georgia St":
      case "Georgia State":
        team.TeamMascot = "Panthers";
        team.MascotName = "Pounce";
        team.ColorCodes = [["Blue", "#0039A6"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4jpnk47a";
        break;

      case "Gonzaga":
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Spike the Bulldog";
        team.ColorCodes = [["Navy Blue", "#002469"], ["Red", "#CE1126"]];
        team.MascotImage = "https://tinyurl.com/mb6t44u4";
        break;

      case "Grand Canyon":
        team.TeamMascot = "Antelopes";
        team.MascotName = "Thunder the Antelope";
        team.ColorCodes = [["Purple", "#522398"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/nhf4deev";
        break;

      case "Hawaii":
        team.TeamMascot = "Warriors";
        team.MascotName = "Vili the Warrior";
        team.ColorCodes = [["Green", "#024731"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/ytbb85ya";
        break;
 
      case "High Point":
        team.TeamMascot = "Panthers";
        team.MascotName = "Prowler the Panther";
        team.ColorCodes = [["Royal Purple", "#330072"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2yxkzved";
        break;

      case "Hofstra":
        team.TeamMascot = "Pride";
        team.MascotName = "KaTie the Pride";
        team.ColorCodes = [["Blue", "#00539B"], ["Gold", "#F0B323"]];
        team.MascotImage = "https://tinyurl.com/uvwwjhcp";
        break;
 
      case "Houston":
        team.TeamMascot = "Cougars";
        team.MascotName = "Shasta and Sasha";
        team.ColorCodes = [["Scarlet", "#CC0000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4mmczkyf";
        break;

      case "Howard":
        team.TeamMascot = "Bison";
        team.MascotName = "Big Blue and Lady Blue";
        team.ColorCodes = [["Navy Blue", "#003A63"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/29y4hcee";
        break;

      case "Idaho":
        team.TeamMascot = "Vandals";
        team.MascotName = "Joe Vandal";
        team.ColorCodes = [["Silver", "#C0C0C0"], ["Gold", "#F0B323"]];
        team.MascotImage = "https://tinyurl.com/ya2adhc8";
        break;
 
      case "Illinois":
        team.TeamMascot = "Fighting Illini";
        team.MascotName = "N/A";
        team.ColorCodes = [["Illini Orange", "#E84A27"], ["Navy Blue", "#13294B"]];
        team.MascotImage = "";
        break;

      case "Indiana":
        team.TeamMascot = "Hoosiers";
        team.MascotName = "N/A";
        team.ColorCodes = [["Crimson", "#990000"], ["Cream", "#F2EFE4"]];
        team.MascotImage = "";
        break;

      case "Iona":
        team.TeamMascot = "Gaels";
        team.MascotName = "Killian the Gael";
        team.ColorCodes = [["Maroon", "#8B0000"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/5em7d24t";
        break;

      case "Iowa":
        team.TeamMascot = "Hawkeyes";
        team.MascotName = "Herky the Hawk";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#FFCD00"]];
        team.MascotImage = "https://tinyurl.com/4uzjsse7";
        break;

      case "Iowa St":
      case "Iowa State":
        team.TeamMascot = "Cyclones";
        team.MascotName = "Cy the Cardinal";
        team.ColorCodes = [["Cardinal", "#C8102E"], ["Gold", "#F1BE48"]];
        team.MascotImage = "https://tinyurl.com/bw9mbj72";
        break;

      case "James Madison":
        team.TeamMascot = "Dukes";
        team.MascotName = "Duke Dog";
        team.ColorCodes = [["Purple", "#450084"], ["Gold", "#CAA84A"]];
        team.MascotImage = "https://tinyurl.com/mrxxwnjz";
        break;

      case "J'Ville St":
      case "J'Ville State":
        team.TeamMascot = "Gamecocks";
        team.MascotName = "Cocky the Gamecock";
        team.ColorCodes = [["Red", "#CC0000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/5c9vkpxc";
        break;

      case "Kansas":
        team.TeamMascot = "Jayhawks";
        team.MascotName = "Big Jay and Baby Jay";
        team.ColorCodes = [["Blue", "#0051A5"], ["Crimson", "#E8000D"]];
        team.MascotImage = "https://theheismanwinners.com/wp-content/uploads/kansas.jpg";
        break;

      case "Kansas St":
      case "Kansas State":
        team.TeamMascot = "Wildcats";
        team.MascotName = "Willie the Wildcat";
        team.ColorCodes = [["Royal Purple", "#512888"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/5n724fds";
        break;

      case "Kennesaw St":
      case "Kennesaw State":
        team.TeamMascot = "Owls";
        team.MascotName = "Scrappy the Owl";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/2ry3ur6u";
        break;

      case "Kent St":
      case "Kent State":
        team.TeamMascot = "Golden Flashes";
        team.MascotName = "Flash";
        team.ColorCodes = [["Navy Blue", "#002664"], ["Gold", "#EAB020"]];
        team.MascotImage = "https://tinyurl.com/4j2cd898";
        break;

      case "Kentucky":
        team.TeamMascot = "Wildcats";
        team.MascotName = "The Wildcat";
        team.ColorCodes = [["Kentucky Blue", "#0033A0"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yjuuxpe5";
        break;

      case "Lehigh":
        team.TeamMascot = "Mountain Hawks";
        team.MascotName = "Clutch the Mountain Hawk";
        team.ColorCodes = [["Brown", "#6B3A2A"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/m9k7y8k4";
        break;
 
      case "Liberty":
        team.TeamMascot = "Flames";
        team.MascotName = "Sparky the Eagle";
        team.ColorCodes = [["Red", "#990000"], ["Blue", "#002868"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yyfmc8dm";
        break;

      case "Lipscomb":
        team.TeamMascot = "Bisons";
        team.MascotName = "Lou Bison";
        team.ColorCodes = [["Purple", "#582C83"], ["Gold", "#F0B323"]];
        team.MascotImage = "https://tinyurl.com/t9dy7ur8";
        break;

      case "LIU":
        team.TeamMascot = "Sharks";
        team.MascotName = "Vin the Shark";
        team.ColorCodes = [["Blue", "#003082"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/bdh7snys";
        break;
 
      case "Long Beach St":
      case "Long Beach State":
        team.TeamMascot = "49ers";
        team.MascotName = "Elbee";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/mxccx9c7";
        break;

      case "Longwood":
        team.TeamMascot = "Lancers";
        team.MascotName = "Elwood";
        team.ColorCodes = [["Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/m228792h";
        break;

      case "Louisiana":
        team.TeamMascot = "Ragin' Cajuns";
        team.MascotName = "Cayenne";
        team.ColorCodes = [["Vermillion", "#CE1126"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mwksxpwy";
        break;

      case "Louisville":
        team.TeamMascot = "Cardinals";
        team.MascotName = "Louie the Cardinal";
        team.ColorCodes = [["Cardinal Red", "#AD0000"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/yxnsbv9r";
        break;

      case "Loyola Chicago":
        team.TeamMascot = "Ramblers";
        team.MascotName = "Lu Wolf";
        team.ColorCodes = [["Maroon", "#6B0C27"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/2m8ktb29";
        break;

      case "LSU":
        team.TeamMascot = "Tigers";
        team.MascotName = "Mike the Tiger";
        team.ColorCodes = [["Purple", "#461D7C"], ["Gold", "#FDD023"]];
        team.MascotImage = "https://tinyurl.com/m5p358dh";
        break;

      case "Marquette":
        team.TeamMascot = "Golden Eagles";
        team.MascotName = "Golden Eagle";
        team.ColorCodes = [["Blue", "#003366"], ["Gold", "#FFC229"]];
        team.MascotImage = "https://tinyurl.com/y3a644tm";
        break;

      case "Maryland":
        team.TeamMascot = "Terrapins";
        team.MascotName = "Testudo";
        team.ColorCodes = [["Red", "#E03A3E"], ["Gold", "#FFD520"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/mpyk6w2f";
        break;

      case "McNeese":
        team.TeamMascot = "Cowboys";
        team.MascotName = "Rowdy";
        team.ColorCodes = [["Royal Blue", "#003087"], ["Gold", "#FFC72C"]];
        team.MascotImage = "https://tinyurl.com/57s9982c";
        break;

      case "Memphis":
        team.TeamMascot = "Tigers";
        team.MascotName = "TOM";
        team.ColorCodes = [["Memphis Blue", "#003087"], ["Gray", "#898D8D"]];
        team.MascotImage = "https://tinyurl.com/3jjbhhuc";
        break;

      case "Miami":
        team.TeamMascot = "Hurricanes";
        team.MascotName = "Sebastian the Ibis";
        team.ColorCodes = [["Orange", "#F47321"], ["Green", "#005030"]];
        team.MascotImage = "https://tinyurl.com/msnfy7sp";
        break;

      case "Miami OH":
      case "Miami (OH)":
        team.TeamMascot = "RedHawks";
        team.MascotName = "Swoop the RedHawk";
        team.ColorCodes = [["Red", "#B61E2E"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/5cbrtr3m";
        break;
 
      case "Michigan":
        team.TeamMascot = "Wolverines";
        team.MascotName = "None";
        team.ColorCodes = [["Maize", "#FFCB05"], ["Blue", "#00274C"]];
        team.MascotImage = "";
        break;

      case "Michigan St":
      case "Michigan State":
        team.TeamMascot = "Spartans";
        team.MascotName = "Sparty";
        team.ColorCodes = [["Spartan Green", "#18453B"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/ywytnyp5";
        break;

      case "Mississippi St":
      case "Mississippi State":
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Bully";
        team.ColorCodes = [["Maroon", "#660000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4h54b36m";
        break;

      case "Missouri":
        team.TeamMascot = "Tigers";
        team.MascotName = "Truman the Tiger";
        team.ColorCodes = [["Mizzou Gold", "#F1B82D"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/57anrkw8";
        break;

      case "Montana":
        team.TeamMascot = "Grizzlies";
        team.MascotName = "Monte the Grizzly Bear";
        team.ColorCodes = [["Maroon", "#660033"], ["Silver", "#999999"]];
        team.MascotImage = "https://tinyurl.com/58669sbd";
        break;

      case "Montana St":
      case "Montana State":
        team.TeamMascot = "Bobcats";
        team.MascotName = "Champ";
        team.ColorCodes = [["Blue", "#003A70"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/yrsyjx9k";
        break;

      case "Morehead St":
      case "Morehead State":
        team.TeamMascot = "Eagles";
        team.MascotName = "Beaker";
        team.ColorCodes = [["Blue", "#003082"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/3w427shu";
        break;

      case "Mount St Marys":
        team.TeamMascot = "Mountaineers";
        team.MascotName = "Emmit S. Burg";
        team.ColorCodes = [["Blue", "#002855"], ["Bronze", "#84754E"]];
        team.MascotImage = "https://tinyurl.com/4rfyjftk";
        break;

      case "Murray St":
      case "Murray State":
        team.TeamMascot = "Racers";
        team.MascotName = "Racer One, Dunker";
        team.ColorCodes = [["Navy", "#002147"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/4cpby7kf";
        break;

      case "N Kentucky":
      case "Northern Kentucky":
        team.TeamMascot = "Norse";
        team.MascotName = "Victor E. Viking";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/e2jv6ar5";
        break;

      case "NC St":
      case "NC State":
      case "North Carolina St":
      case "North Carolina State":
        team.TeamMascot = "Wolfpack";
        team.MascotName = "Mr. and Mrs. Wuf";
        team.ColorCodes = [["Red", "#CC0000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mt87ezra";
        break;

      case "Nebraska":
        team.TeamMascot = "Cornhuskers";
        team.MascotName = "Herbie Husker";
        team.ColorCodes = [["Scarlet", "#E41C38"], ["Cream", "#F5E6D0"]];
        team.MascotImage = "https://tinyurl.com/3meearuk";
        break;

      case "Nevada":
        team.TeamMascot = "Wolf Pack";
        team.MascotName = "Alphie, Luna, and Wolfie Jr";
        team.ColorCodes = [["Navy Blue", "#003366"], ["Silver", "#8D9093"]];
        team.MascotImage = "https://tinyurl.com/bdhwdkt4";
        break;

      case "New Mexico":
        team.TeamMascot = "Lobos";
        team.MascotName = "Lobo Louie and Lobo Lucy";
        team.ColorCodes = [["Cherry", "#BA0C2F"], ["Silver", "#A9A9A9"]];
        team.MascotImage = "https://tinyurl.com/mt87cbm4";
        break;

      case "New Mexico St":
      case "New Mexico State":
        team.TeamMascot = "Aggies";
        team.MascotName = "Pistol Pete";
        team.ColorCodes = [["Crimson", "#8B0000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/bddbhwz9";
        break;

      case "Norfolk St":
      case "Norfolk State":
        team.TeamMascot = "Spartans";
        team.MascotName = "Spiro the Spartan";
        team.ColorCodes = [["Green", "#006633"], ["Gold", "#CDA323"]];
        team.MascotImage = "https://tinyurl.com/bdfh2kkm";
        break;

      case "North Carolina":
        team.TeamMascot = "Tar Heels";
        team.MascotName = "Rameses";
        team.ColorCodes = [["Carolina Blue", "#4B9CD3"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4rnd6d37";
        break;

      case "North Dakota St":
      case "North Dakota State":
        team.TeamMascot = "Bison";
        team.MascotName = "Thundar the Bison";
        team.ColorCodes = [["Green", "#005030"], ["Yellow", "#FFC72C"]];
        team.MascotImage = "https://tinyurl.com/2bx3a4be";
        break;
 
      case "Northern Iowa":
        team.TeamMascot = "Panthers";
        team.MascotName = "TC the Panther";
        team.ColorCodes = [["Purple", "#4B116F"], ["Gold", "#FFCD00"]];
        team.MascotImage = "https://tinyurl.com/3jsjcj89";
        break;
 
      case "Northwestern":
        team.TeamMascot = "Wildcats";
        team.MascotName = "Willie the Wildcat";
        team.ColorCodes = [["Purple", "#4E2A84"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2f8px3p5";
        break;

      case "Notre Dame":
        team.TeamMascot = "Fighting Irish";
        team.MascotName = "Leprechaun";
        team.ColorCodes = [["Navy Blue", "#0C2340"], ["Gold", "#C99700"]];
        team.MascotImage = "https://tinyurl.com/58y9etbf";
        break;

      case "Oakland":
        team.TeamMascot = "Athletics";
        team.MascotName = "Stomper";
        team.ColorCodes = [["Gold", "#C5A028"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/d7crzz6s";
        break;

      case "Ohio St":
      case "Ohio State":
        team.TeamMascot = "Buckeyes";
        team.MascotName = "Brutus";
        team.ColorCodes = [["Scarlet", "#BB0000"], ["Gray", "#666666"]];
        team.MascotImage = "https://tinyurl.com/4pptx8m9";
        break;

      case "Oklahoma":
        team.TeamMascot = "Sooners";
        team.MascotName = "Boomer and Sooner";
        team.ColorCodes = [["Crimson", "#841617"], ["Cream", "#FDF9D8"]];
        team.MascotImage = "https://tinyurl.com/49trmfcx";
        break;

      case "Ole Miss":
        team.TeamMascot = "Rebels";
        team.MascotName = "Tony the Landshark";
        team.ColorCodes = [["Cardinal Red", "#CE1126"], ["Navy Blue", "#14213D"]];
        team.MascotImage = "https://tinyurl.com/54ff3t5b";
        break;

      case "Omaha":
        team.TeamMascot = "Mavericks";
        team.MascotName = "Durango";
        team.ColorCodes = [["Black", "#000000"], ["Red", "#D71920"]];
        team.MascotImage = "https://tinyurl.com/3kkd8y6c";
        break;

      case "Oral Roberts":
        team.TeamMascot = "Golden Eagles";
        team.MascotName = "Eli";
        team.ColorCodes = [["Navy Blue", "#002147"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/yc2pt8ej";
        break;

      case "Oregon":
        team.TeamMascot = "Ducks";
        team.MascotName = "The Oregon Duck";
        team.ColorCodes = [["Green", "#154733"], ["Yellow", "#FEE123"]];
        team.MascotImage = "https://tinyurl.com/pcyany7y";
        break;

      case "Penn":
        team.TeamMascot = "Quakers";
        team.MascotName = "The Quaker";
        team.ColorCodes = [["Red", "#990000"], ["Blue", "#011F5B"]];
        team.MascotImage = "https://tinyurl.com/um32v2c9";
        break;
 
      case "Penn St":
      case "Penn State":
        team.TeamMascot = "Nittany Lions";
        team.MascotName = "Nittany Lion";
        team.ColorCodes = [["Navy Blue", "#001E44"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/24rcu7dn";
        break;

      case "Prairie View AM":
      case "Prairie View A&M":
        team.TeamMascot = "Panthers";
        team.MascotName = "Bubba the Panther";
        team.ColorCodes = [["Purple", "#4B116F"], ["Gold", "#FFCD00"]];
        team.MascotImage = "https://tinyurl.com/44543ft9";
        break;
 
      case "Princeton":
        team.TeamMascot = "Tigers";
        team.MascotName = "The Tiger";
        team.ColorCodes = [["Orange", "#E77500"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/2s46ujwx";
        break;

      case "Providence":
        team.TeamMascot = "Friars";
        team.MascotName = "Friar Dom";
        team.ColorCodes = [["Black", "#000000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yc6jze4f";
        break;

      case "Purdue":
        team.TeamMascot = "Boilermakers";
        team.MascotName = "Boilermaker Special";
        team.ColorCodes = [["Old Gold", "#CFB991"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/37rs5ewv";
        break;

      case "Queens":
        team.TeamMascot = "Royals";
        team.MascotName = "Royal";
        team.ColorCodes = [["Royal Blue", "#003082"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/5h9zps4r";
        break;
 
      case "Richmond":
        team.TeamMascot = "Spiders";
        team.MascotName = "WebstUR the Spider";
        team.ColorCodes = [["Red", "#CC0000"], ["Blue", "#003082"]];
        team.MascotImage = "https://tinyurl.com/wzzcx6px";
        break;

      case "Robert Morris":
        team.TeamMascot = "Colonials";
        team.MascotName = "RoMo";
        team.ColorCodes = [["Blue", "#14234b"], ["Red", "#a6192e"]];
        team.MascotImage = "https://tinyurl.com/bdes5dv8";
        break;

      case "Rutgers":
        team.TeamMascot = "Scarlet Knights";
        team.MascotName = "Scarlet Knight";
        team.ColorCodes = [["Scarlet", "#CC0033"], ["Gray", "#8C8C8C"]];
        team.MascotImage = "https://tinyurl.com/bde3px7t";
        break;

      case "Saint Louis":
        team.TeamMascot = "Billikens";
        team.MascotName = "The Billiken";
        team.ColorCodes = [["Royal Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/ytzryk36";
        break;
 
      case "Santa Clara":
        team.TeamMascot = "Broncos";
        team.MascotName = "The Bronco";
        team.ColorCodes = [["Red", "#862633"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/4uwa3swk";
        break;
 
      case "S Dakota St":
      case "S Dakota State":
      case "South Dakota St":
      case "South Dakota State":
        team.TeamMascot = "Jackrabbits";
        team.MascotName = "Jack the Jackrabbit";
        team.ColorCodes = [["Blue", "#0033A0"], ["Yellow", "#FFD100"]];
        team.MascotImage = "https://tinyurl.com/bddfwv3n";
        break;

      case "Saint Mary's":
        team.TeamMascot = "Gaels";
        team.MascotName = "Gael Force One";
        team.ColorCodes = [["Navy", "#002060"], ["Red", "#BA0C2F"], ["Silver", "#A9A9A9"]];
        team.MascotImage = "https://tinyurl.com/f92xs2kj";
        break;

      case "Saint Peter's":
        team.TeamMascot = "Peacocks";
        team.MascotName = "Peacock";
        team.ColorCodes = [["Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/hmf9bck6";
        break;

      case "Samford":
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Spike the Bulldog";
        team.ColorCodes = [["Blue", "#003082"], ["Red", "#CC0000"]];
        team.MascotImage = "https://tinyurl.com/46htwryz";
        break;

      case "San Diego St":
      case "San Diego State":
        team.TeamMascot = "Aztecs";
        team.MascotName = "Aztec Warrior";
        team.ColorCodes = [["Scarlet", "#A6192E"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/2uhujj7c";
        break;

      case "San Francisco":
        team.TeamMascot = "Dons";
        team.MascotName = "The Don";
        team.ColorCodes = [["Green", "#00693E"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/2p8wb56c";
        break;

      case "Seton Hall":
        team.TeamMascot = "Pirates";
        team.MascotName = "The Pirate";
        team.ColorCodes = [["Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2x2crxsh";
        break;

      case "Siena":
        team.TeamMascot = "Saints";
        team.MascotName = "Friar";
        team.ColorCodes = [["Green", "#215732"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/3h2aarzp";
        break;
 
      case "SIUE":
        team.TeamMascot = "Cougars";
        team.MascotName = "Eddie the Cougar";
        team.ColorCodes = [["Red", "#EF3829"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mv89644h";
        break;

      case "South Carolina":
        team.TeamMascot = "Gamecocks";
        team.MascotName = "Cocky";
        team.ColorCodes = [["Garnet", "#73000A"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/4dw7mrf2";
        break;

      case "SMU":
        team.TeamMascot = "Mustangs";
        team.MascotName = "Peruna the Mustang";
        team.ColorCodes = [["Red", "#CC0000"], ["Blue", "#354CA1"]];
        team.MascotImage = "https://tinyurl.com/44rd4uc9";
        break;
 
      case "South Florida":
        team.TeamMascot = "Bulls";
        team.MascotName = "Rocky the Bull";
        team.ColorCodes = [["Green", "#006747"], ["Gold", "#CFC493"]];
        team.MascotImage = "https://tinyurl.com/ysvn8jsr";
        break;
 
      case "St Francis PA":
        team.TeamMascot = "Red Flash";
        team.MascotName = "Frankie the Friar";
        team.ColorCodes = [["Red", "#BD1F25"], ["Dark Red", "#790000"]];
        team.MascotImage = "https://tinyurl.com/4c8ek3wr";
        break;

      case "St John's":
        team.TeamMascot = "Red Storm";
        team.MascotName = "Johnny Thunderbird";
        team.ColorCodes = [["Red", "#BA0C2F"], ["Blue", "#041C2C"]];
        team.MascotImage = "https://tinyurl.com/5wbhc5nk";
        break;

      case "Stetson":
        team.TeamMascot = "Hatters";
        team.MascotName = "John B";
        team.ColorCodes = [["Green", "#215732"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3yxd68sx";
        break;

      case "TCU":
        team.TeamMascot = "Horned Frogs";
        team.MascotName = "Superfrog";
        team.ColorCodes = [["Purple", "#4D1979"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3rxcw2ak";
        break;

      case "Tennessee":
        team.TeamMascot = "Volunteers";
        team.MascotName = "Smokey";
        team.ColorCodes = [["Tennessee Orange", "#FF8200"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/49a9f9tx";
        break;

      case "Tennessee St":
      case "Tennessee State":
        team.TeamMascot = "Tigers";
        team.MascotName = "Aristocat the Tiger";
        team.ColorCodes = [["Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/42zy4wej";
        break;
 
      case "Texas":
        team.TeamMascot = "Longhorns";
        team.MascotName = "Bevo";
        team.ColorCodes = [["Burnt Orange", "#BF5700"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/y3xyxdfv";
        break;

      case "Texas A&M":
        team.TeamMascot = "Aggies";
        team.MascotName = "Reveille";
        team.ColorCodes = [["Maroon", "#500000"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/h98hmjeb";
        break;

      case "Texas A&M CC":
      case "Texas A&M Corpus Christi":
        team.TeamMascot = "Islanders";
        team.MascotName = "Izzy the Islander";
        team.ColorCodes = [["Royal Blue", "#003087"], ["Green", "#00703C"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/25ky4hyc";
        break;

      case "Texas Southern":
        team.TeamMascot = "Tigers";
        team.MascotName = "Tiger";
        team.ColorCodes = [["Maroon", "#660000"], ["Gray", "#999999"]];
        team.MascotImage = "https://tinyurl.com/zuw9ntf8";
        break;

      case "Texas Tech":
        team.TeamMascot = "Red Raiders";
        team.MascotName = "Masked Rider, Raider Red";
        team.ColorCodes = [["Scarlet", "#CC0000"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/5cjtzbp2";
        break;

      case "Troy":
        team.TeamMascot = "Trojans";
        team.MascotName = "T-Roy";
        team.ColorCodes = [["Red", "#8A2432"], ["Grey", "#B3B5B8"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2xsxcu6m";
        break;

      case "UAB":
        team.TeamMascot = "Blazers";
        team.MascotName = "Blaze the Dragon";
        team.ColorCodes = [["Green", "#1E6B52"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/yhjac9xs";
        break;

      case "UCF":
        team.TeamMascot = "Knights";
        team.MascotName = "Knightro the Knight";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#FFC904"]];
        team.MascotImage = "https://tinyurl.com/43yfjmb3";
        break;
 
      case "UC San Diego":
        team.TeamMascot = "Tritons";
        team.MascotName = "King Triton";
        team.ColorCodes = [["Blue", "#00629B"], ["Gold", "#FFD200"]];
        team.MascotImage = "https://tinyurl.com/mum2u7xb";
        break;

      case "UCSB":
      case "UC Santa Barbara":
        team.TeamMascot = "Gauchos";
        team.MascotName = "Olé";
        team.ColorCodes = [["Blue", "#003660"], ["Gold", "#FEBC11"]];
        team.MascotImage = "https://tinyurl.com/4n93v48b";
        break;

      case "UCLA":
        team.TeamMascot = "Bruins";
        team.MascotName = "Joe Bruin";
        team.ColorCodes = [["True Blue", "#2D68C4"], ["Gold", "#F2A900"]];
        team.MascotImage = "https://tinyurl.com/88auedfm";
        break;

      case "UConn":
        team.TeamMascot = "Huskies";
        team.MascotName = "Jonathan the Husky";
        team.ColorCodes = [["Navy Blue", "#000E2F"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/yrhnkz75";
        break;

      case "UMBC":
        team.TeamMascot = "Retrievers";
        team.MascotName = "True Grit";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#F0B323"]];
        team.MascotImage = "https://tinyurl.com/yc52rbws";
        break;
 
      case "UNC Asheville":
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Rocky the Bulldog";
        team.ColorCodes = [["Royal Blue", "#003082"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mumwr25f";
        break;

      case "UNC Wilmington":
        team.TeamMascot = "Seahawks";
        team.MascotName = "Sammy C. Hawk";
        team.ColorCodes = [["Blue", "#003366"], ["Teal", "#006666"]];
        team.MascotImage = "https://tinyurl.com/m24thycw";
        break;

      case "USC":
        team.TeamMascot = "Trojans";
        team.MascotName = "Traveler";
        team.ColorCodes = [["Cardinal", "#990000"], ["Gold", "#FFCC00"]];
        team.MascotImage = "https://tinyurl.com/4xyxdb8u";
        break;

      case "Utah St":
      case "Utah State":
        team.TeamMascot = "Aggies";
        team.MascotName = "Big Blue";
        team.ColorCodes = [["Navy", "#00285E"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mwwn9wy5";
        break;

      case "Vanderbilt":
        team.TeamMascot = "Commodores";
        team.MascotName = "Mr. Commodore";
        team.ColorCodes = [["Black", "#000000"], ["Old Gold", "#866D4B"]];
        team.MascotImage = "https://tinyurl.com/2p9p8p36";
        break;

      case "VCU":
        team.TeamMascot = "Rams";
        team.MascotName = "Rodney the Ram";
        team.ColorCodes = [["Black", "#000000"], ["Gold", "#C4A44A"]];
        team.MascotImage = "https://tinyurl.com/59jwxhw5";
        break;

      case "Vermont":
        team.TeamMascot = "Catamounts";
        team.MascotName = "Rally";
        team.ColorCodes = [["Green", "#154734"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/5n72ptts";
        break;

      case "Villanova":
        team.TeamMascot = "Wildcats";
        team.MascotName = "Will D. Cat";
        team.ColorCodes = [["Navy Blue", "#00205B"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/2xrvbr77";
        break;

      case "Virginia":
        team.TeamMascot = "Cavaliers";
        team.MascotName = "Cavalier";
        team.ColorCodes = [["Blue", "#232D4B"], ["Orange", "#E57200"]];
        team.MascotImage = "https://tinyurl.com/4rd2ed32";
        break;

      case "Virginia Tech":
        team.TeamMascot = "Hokies";
        team.MascotName = "HokieBird";
        team.ColorCodes = [["Maroon", "#660000"], ["Burnt Orange", "#CF4420"]];
        team.MascotImage = "https://tinyurl.com/yckxm29p";
        break;

      case "Washington St":
      case "Washington State":
        team.TeamMascot = "Cougars";
        team.MascotName = "Butch T. Cougar";
        team.ColorCodes = [["Crimson", "#981E32"], ["Gray", "#5E6A71"]];
        team.MascotImage = "https://tinyurl.com/2dwv8xh8";
        break;

      case "West Virginia":
        team.TeamMascot = "Mountaineers";
        team.MascotName = "The Mountaineer";
        team.ColorCodes = [["Old Gold", "#EAAA00"], ["Blue", "#002855"]];
        team.MascotImage = "https://tinyurl.com/mrx6499a";
        break;

      case "Western KY":
      case "Western Kentucky":
        team.TeamMascot = "Hilltoppers";
        team.MascotName = "Big Red";
        team.ColorCodes = [["Red", "#C8102E"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/mpaz84db";
        break;

      case "Wisconsin":
        team.TeamMascot = "Badgers";
        team.MascotName = "Bucky Badger";
        team.ColorCodes = [["Cardinal Red", "#C5050C"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/bde9tntk";
        break;

      case "Wofford":
        team.TeamMascot = "Terriers";
        team.MascotName = "Boss, Terri and Blitz";
        team.ColorCodes = [["Old Gold", "#886E4C"], ["Black", "#000000"]];
        team.MascotImage = "https://tinyurl.com/2ujcwpj7";
        break;

      case "Wright St":
      case "Wright State":
        team.TeamMascot = "Raiders";
        team.MascotName = "Rowdy Raider";
        team.ColorCodes = [["Green", "#006338"], ["Gold", "#C5A028"]];
        team.MascotImage = "https://tinyurl.com/yc87pdav";
        break;

      case "Wyoming":
        team.TeamMascot = "Cowboys";
        team.MascotName = "Cowboy Joe";
        team.ColorCodes = [["Brown", "#492F24"], ["Gold", "#FFC425"]];
        team.MascotImage = "https://tinyurl.com/89zfh574";
        break;

      case "Xavier":
        team.TeamMascot = "Musketeers";
        team.MascotName = "D'Artagnan and the Blue Blob";
        team.ColorCodes = [["Navy Blue", "#0C2340"], ["Gold", "#9E7E38"]];
        team.MascotImage = "https://tinyurl.com/28yz6zcd";
        break;

      case "Yale":
        team.TeamMascot = "Bulldogs";
        team.MascotName = "Handsome Dan";
        team.ColorCodes = [["Yale Blue", "#00356B"], ["White", "#FFFFFF"]];
        team.MascotImage = "https://tinyurl.com/3rs4y7np";
        break;

      // ── template for new entries ──────────────────────────────────────────
      // case "TEAMNAME":
      //   team.TeamMascot = "";
      //   team.MascotName = "";
      //   team.ColorCodes = [["NAME", "#000000"], ["NAME", "#000000"]];
      //   team.MascotImage = "";
      //   break;

    }
    
    return teams;
}
