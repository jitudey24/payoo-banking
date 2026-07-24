
document
  .getElementById("transactionHistoryCard")   //id="transactionHistoryCard" যেই Element-এর আছে, সেটাকে খুঁজে বের করছে।
    .addEventListener("click", function () {    //যখন User এই Card-এ Click করবে, তখন নিচের Function চলবে। এটাকে বলে Click Event।
      document.getElementById("addMoney").style.display = "none";   //Add Money Section লুকিয়ে দিচ্ছে।
      document.getElementById("cashOut").style.display = "none";    //Cash Out Section-ও লুকিয়ে দিচ্ছে।
      document.getElementById("transactionHistory").style.display = "block";    //Transaction History Section দেখাচ্ছে।
  });
