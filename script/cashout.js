document
  .getElementById("cashoutBtn")    //id="cashoutBtn" যেই button-এর আছে, সেটিকে খুঁজে বের করছে।
  .addEventListener("click", function (event) {    //Click Event যখন user Cash Out button-এ click করবে, তখন এই function চলবে।
    event.preventDefault();    //Default Action বন্ধ করা Form submit হয়ে page reload হওয়া বন্ধ করে।
    const cashAccountNumber =
      document.getElementById("cashAccountNumber").value;   //Account Number নেওয়া User যে Account Number লিখেছে, সেটি নিয়ে আসছে।
    const cashAmount = document.getElementById("cashAmount").value;   //Amount নেওয়া User কত টাকা তুলতে চায় সেটি নিচ্ছে।
    const convertedAmount = Number(cashAmount);   //Number-এ রূপান্তর
    const cashOutpinNumber = document.getElementById("cashOutpinNumber").value;   //PIN নেওয়া User-এর PIN নিচ্ছে।
    const mainBalance = document.getElementById("mainBalance").innerText;  //বর্তমান Balance নেওয়া
    const convertedMainBalance = Number(mainBalance);   //Balance Number বানানো
    if (cashAccountNumber.length === 11) {    //Account Number Check Account Number ১১ ডিজিট কি না চেক করছে।
      if (cashOutpinNumber === "6897") {    //PIN Check PIN ঠিক আছে কি না চেক করছে।
        const sum = convertedMainBalance - convertedAmount;  //Balance থেকে টাকা কাটা এটাই Add Money-এর সাথে সবচেয়ে বড় পার্থক্য।
        document.getElementById("mainBalance").innerText = sum;    //নতুন Balance দেখানো

        const transactionHistoryContent = document.getElementById(
          "transactionHistoryContent"    //Transaction History ধরছে যেখানে Transaction দেখাবে সেটি খুঁজে বের করছে।
        );
        const p = document.createElement("p");   //নতুন Paragraph তৈরি
        p.innerHTML = `
         <p class="text-gray-800 font-medium mt-5 mx-5"> Cashout your balance ${cashAmount} and Bank account number ${cashAccountNumber}</p>
        `;      //নতুন Paragraph তৈরি
        transactionHistoryContent.appendChild(p);    //নতুন Paragraph-টি Transaction History-এর শেষে যোগ করছে।
      } else {
        window.alert("enter the valid pin number");    //Wrong PIN PIN ভুল হলে Alert দেখাবে।
      }
    } else {
      window.alert("enter the valid Account Number");    //Wrong Account Number Account Number ১১ ডিজিট না হলে Alert দেখাবে।
    }
  });
