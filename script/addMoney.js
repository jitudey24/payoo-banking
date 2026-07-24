document
  .getElementById("addMoneyBtn")   //id="addMoneyBtn" যার আছে, সেই element-কে খুঁজে বের করে।
  .addEventListener("click", function (event) {   //মানে—যখন user button-এ click করবে, তখন এই function চলবে। event হলো click-এর information।
    event.preventDefault();   //যদি button form-এর ভিতরে থাকে, তাহলে click করলে form submit হয়ে page reload হয়ে যায়।
    const accountNumber = document.getElementById("accountNumber").value    //HTML থেকে account number input-এর value নিয়ে আসে।
    const amount = document.getElementById("amount").value;   //Input থেকে amount নেয়।
    const convertedAmount = Number(amount);    //String কে Number বানানো হচ্ছে।
    const pinNumber = document.getElementById("pinNumber").value;    //PIN input-এর value নিচ্ছে।
    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedMainBalance = Number(mainBalance);
    if (accountNumber.length === 11) {    //Account Number-এর length ১১ কি না চেক করছে।
      if (pinNumber === "6897") {     //PIN সঠিক কি না চেক করছে।
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("mainBalance").innerText = sum;    //HTML-এর balance update হয়ে যাবে।

        const transactionHistoryContent = document.getElementById(
          "transactionHistoryContent"     //Transaction History section-টা ধরছে।
        );
        const selectBank = document.getElementById("selectBank").value   //Dropdown থেকে কোন Bank select করেছে সেটা নিচ্ছে।
        const div = document.createElement('div')    //JavaScript দিয়ে নতুন তৈরি করছে।
        div.innerHTML = `
          <p class="text-gray-800 font-medium mt-5 mx-5"> Added your balance ${amount} and Bank account number ${accountNumber} from ${selectBank} </p>
          `;  //${} কে Template Literal Interpolation বলে। এটি variable-এর মানকে string-এর ভিতরে বসিয়ে দেয়।
        transactionHistoryContent.appendChild(div)   //নতুন div-টাকে Transaction History-এর শেষে যোগ করে।
      } else {
        window.alert("enter the valid pin number");
      }
    } else {
      window.alert("enter the valid Account Number");
    }
  });
