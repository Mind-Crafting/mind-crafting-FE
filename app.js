const players = document.getElementById("players");

players.addEventListener("click", () => {

  const selectedRadioButton = document.querySelector("input:checked");
  console.log(selectedRadioButton.value);
  const iframeSRC = selectedRadioButton.value;
  const player1 = "http://ec2-3-138-151-182.us-east-2.compute.amazonaws.com:3000";
  const player2 = "http://ec2-3-138-151-182.us-east-2.compute.amazonaws.com:3001";
 
  if(iframeSRC === player1) document.getElementById("viewer").src = player1;
  if(iframeSRC === player2) document.getElementById("viewer").src = player2;
});