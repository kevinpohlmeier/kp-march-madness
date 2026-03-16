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



// TODO: display First Four options
// TODO: help prevent long press image download popup, text selection, etc

games = new Array(32+16+8+4+2+1); 
gameIndex = 0;
var selectionCooldown = false;
var selectionCooldownTimer = null;

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
  
  var container = document.querySelector(".team" + number);
  container.querySelector(".name").innerText = team.Name + " (" + team.Seed + " Seed)";
  var colorsEl = container.querySelector(".colors");
  colorsEl.replaceChildren();
  if (team.ColorCodes){
    team.ColorCodes.forEach(function(colorEntry, i) {
      var swatch = document.createElement("span");
      swatch.className = "color-swatch";
      swatch.style.backgroundColor = colorEntry[1];
      colorsEl.appendChild(swatch);
      colorsEl.appendChild(document.createTextNode(colorEntry[0]));
      if (i < team.ColorCodes.length - 1) {
        colorsEl.appendChild(document.createTextNode(", "));
      }
    });
  } else {
    colorsEl.innerText = team.TeamColors || "??";
  }
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
    let section;

    if (i < 32) {
      section = Math.floor(i / 8) + 1;         // Round of 64: sections 1–4, 8 games each
    } else if (i < 48) {
      section = Math.floor((i - 32) / 4) + 5;  // Round of 32: sections 5–8, 4 games each
    } else if (i < 56) {
      section = Math.floor((i - 48) / 2) + 9;  // Sweet 16: sections 9–12, 2 games each
    } else if (i < 63) {
      section = i - 43;                         // Elite 8 through Championship: sections 13–19, 1 game each
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
  if (selectionCooldown) return;
  selectionCooldown = true;
  clearTimeout(selectionCooldownTimer);
  selectionCooldownTimer = setTimeout(function() { selectionCooldown = false; }, 350);

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
  let teams = getTeamsForYear();
  for (var i = 0; i < teams.length; i++) {
    getTeamDetails(teams[i]);
  }
  return teams;
}
