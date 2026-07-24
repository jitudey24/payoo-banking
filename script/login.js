document.getElementById("loginBtn").addEventListener('click', function (event) {   //HTML থেকে id="loginBtn" যার আছে তাকে খুঁজে বের করছে। যখন Login Button-এ click হবে, তখন এই function চলবে।
    event.preventDefault()    //Button যেহেতু form-এর ভিতরে আছে,Click করলে Form Submit হয়ে Page Reload হয়ে যায়। preventDefault() সেই কাজ বন্ধ করে দেয়।
    const mobileNumber = document.getElementById("mobileNumber").value    //Input Box থেকে Mobile Number নিচ্ছে।
    const pinNumber = document.getElementById("pinNumber").value    //PIN Input থেকে Value নিচ্ছে।
    if (mobileNumber.length === 11 && pinNumber === "6897") {     //এখানে দুটি Condition আছে। মানে Mobile Number অবশ্যই ১১ ডিজিট হতে হবে। মানে PIN অবশ্যই 6897 হতে হবে।
        window.location.href = './main.html'   //বর্তমান Page থেকে main.html এ নিয়ে যাচ্ছে।
    } else {
      window.alert('Need a valid mobile number')   //jodi failed hoi tahle akta alert box asbe
    }
})
