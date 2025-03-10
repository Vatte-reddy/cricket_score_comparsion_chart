let scores = [];
let maxOvers = 20; // You can adjust this as per the match format

// Reference to the canvas
const canvas = document.getElementById("scoreChart");
const ctx = canvas.getContext("2d");

// Function to add score for an over
function addScore() {
  const over = document.getElementById("over").value;
  const team1Score = parseInt(document.getElementById("team1Score").value);
  const team2Score = parseInt(document.getElementById("team2Score").value);

  if (over && team1Score >= 0 && team2Score >= 0) {
    scores[over - 1] = { over: over, team1: team1Score, team2: team2Score };
    drawChart();
  } else {
    alert("Please enter valid scores for both teams.");
  }
}

// Function to reset the chart
function resetChart() {
  scores = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to draw the chart
function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const barWidth = 30;
  const gap = 20;
  let x = 50; // Starting point for the first bar

  scores.forEach((score, index) => {
    if (score) {
      // Set different colors for each team
      ctx.fillStyle = "blue";
      ctx.fillRect(x, canvas.height - score.team1 * 10, barWidth, score.team1 * 10);
      
      ctx.fillStyle = "green";
      ctx.fillRect(x + barWidth + gap, canvas.height - score.team2 * 10, barWidth, score.team2 * 10);

      // Add labels
      ctx.fillStyle = "black";
      ctx.fillText(`Over ${index + 1}`, x + 10, canvas.height - 5);
      x += 2 * (barWidth + gap); // Move x for the next over
    }
  });
}
