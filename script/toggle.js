document.getElementById('cashOut').style.display ='none'    //id="cashOut" যেই section আছে, সেটাকে লুকিয়ে দিচ্ছে। display = "none" মানে একদম অদৃশ্য (Hidden)
document.getElementById("addMoney").style.display = "none";    //একইভাবে addMoney section-ও শুরুতেই লুকিয়ে দিচ্ছে।

document.getElementById("addMoneyCard").addEventListener('click', function () {    //HTML থেকে id="addMoneyCard" element-টি খুঁজে বের করছে। যখন User Add Money Card-এ Click করবে,
    document.getElementById('cashOut').style.display ='none'  //Cash Out Section লুকিয়ে দিচ্ছে।
    document.getElementById('addMoney').style.display = 'block'    //Add Money Section দেখাচ্ছে।
    document.getElementById("transactionHistory").style.display = "none";   //Transaction History লুকিয়ে দিচ্ছে।
})

document.getElementById("cashOutCard").addEventListener("click", function () {    //Cash Out Card-কে ধরছে। Cash Out Card-এ Click করলে নিচের Code চলবে।
    document.getElementById("cashOut").style.display = "block";     //Cash Out Form দেখাবে।
    document.getElementById("addMoney").style.display = "none";      //Add Money Form লুকাবে।
    document.getElementById("transactionHistory").style.display = "none";    //Transaction History-ও লুকাবে।
});

