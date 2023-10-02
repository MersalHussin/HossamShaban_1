// get Elements
let inputFeild = document.getElementById("inputF");
let submitButton = document.getElementById("submit");
let msgStatus = document.getElementById("status");
let vidContainer = document.querySelector(".txtContainer")

//Create link func

function createLink(){
  let a = document.createElement("a")
  
  let aTxt = document.createTextNode("افتح المحاضرة الان")
  
  a.setAttribute("href","Video.html")
  
  a.appendChild(aTxt)
  // Add link to body to vidContainer
  vidContainer.appendChild(a)
}


//Array Of Codes

Codes = [
        "Mersal",
        '0HSVwlRV0%V)3i)', '0HSvWLf1yVV0r#w', '0HSr!i4KkaPjRLs', '0HS7GRP!pJiY4d3', '0HSy!t*j3tP2*3b',
        '0HSV#FBAk#YwxP7', '0HSdT3cmYwdWx6E', '0HSB*EuG6NL11a%', '0HS19m6X4*W!IbL', '0HSW6M(d&MIr3J)',
        '0HS1b7nEy&Pz9yt', '0HSOd)$giIsfgb9', '0HSXU@t*itR2k(j', '0HS7xGwb)3st3Bb', '0HSMlPRTeEf*h*e',
        '0HSIGkm&5GXiRGl', '0HSsvCFVD%wsNcF', '0HSdR0D$!VIG(EN', '0HSw(1vuoXFY5ol', '0HSTZNoj705khJ%',
        '0HSR7C$47r#ui6@', '0HS66Yu4yM0xkpt', '0HSpMXIiThTpi)t', '0HS4EhP(s&PE$Yd', '0HS!6kD984z056d',
        '0HS7@dSi8Et9yjc', '0HS^X%xsgX!9Y*P', '0HSYc2C@V@E@B)J', '0HS)OG9mzLOg$Id', '0HSqJd$9)gp&9KT',
        '0HSR2F8P4jr&XjA', '0HSzkomelEvI)%s', '0HSydjwtqf$zvmu', '0HS9dwd#%4Jp3Ko', '0HSz7M8mq9HCjm1',
        '0HSOzQ#cYVKplcQ', '0HS6X^LfyYi!8gj', '0HS2zlrThZTkgc5', '0HS(evdmh&RSQpX', '0HShJY#v1M*bW(y',
        '0HSr1Ml7l77bAlo', '0HSjhxid@7xkKyX', '0HSaO#OvhMG(oDl', '0HShFn#2v%$vpxE', '0HShc)tR)sg4qFi',
        '0HS0YS2r9)mYNlF', '0HSJ&GApUIUxtUl', '0HSFi656M$neDAp', '0HSZeI$4%wnOMF*', '0HSV@D(!jhlm0AR',
        '0HSk)Qp7UVhf^Of', '0HScq7KYsS)(K*n', '0HSD1XndZBxhlxP', '0HSDv0@RuR3!Jw%', '0HSY(!C!%u3rQrY',
        '0HSYh(1Jx^Qr^UU', '0HSPKIN7u)7m%XL', '0HSTSI(w!bdW%l5', '0HSIr0BhW8hG%Pc', '0HSIk(16Hry*r0*',
        '0HSEoZq5sizuT^R', '0HSICj3@&!c5pA#', '0HSGUtU3c5c@A&l', '0HSgE8*9!dbgU*5', '0HSifcWefGvWDCc',
        '0HSNs2Z7Cw)A0Ol', '0HS)V%@cdCtLT5L', '0HSq!btGqO$5ae)', '0HSA3Al5@c^$XMG', '0HSodiVOP34ktFj',
        '0HSTV5iQ3hzl7pR', '0HS5we70Z1Tm)kY', '0HSrmxzUra@^rsQ', '0HSYgxlI!OeCYw4', '0HShX&zjSQ8ce8e',
        '0HS5WsbJsnN*Vgg', '0HSYQGtFuHX@(RV', '0HSm5%m2@@q&ylt', '0HSVlTGrT%t$Ale', '0HS2hA!!AAfT0I(',
        '0HSmQ(XW2fduxh^', '0HSu#xMbQN4qJdB', '0HSN^Wb*BB^2ucK', '0HSz&O6OuFA#xzN', '0HSAsww*W#TW0Y3',
        '0HS7lv49MV55w!*', '0HSw@aa%6&IZx^e', '0HSa&EjxT%XwQZm', '0HSSNhiT5vM9xme', '0HSUEWibCdzBpbV',
        '0HSdLgZF!8i8yWR', '0HS!nddHNIuheUD', '0HS@5tdkw11hOGm', '0HS)Wm&&08Gud^m', '0HSjqaRZ^8JcYi5',
        '0HS3oh(F0LAxKvF', '0HSpcIAHNEXBHZ(', '0HSH*JfDZd4#&x#', '0HSAP!Y1TnCG@PG', '0HSwb3ehCdW4c&#',
        ]



//Local Storage 

let currentStatus = localStorage.getItem("status");

if (currentStatus === 'active') {
  document.body.classList.add("active")
}

let activeCodes = []

// on Click on submit button
submitButton.addEventListener("click", () => {

  //Loop On Array

let found = false;

for (let i = 0; i < Codes.length; i++) {
  if (Codes[i] === inputFeild.value) {
    found = true;

    // Remove Code
    const removedCode = Codes.splice(i, 1);

    // Add the code to the activeCodes array
    activeCodes.push(removedCode);

    console.log(removedCode);
    console.log(activeCodes);
    break;
  }
}

// Check

  if (found) {
    console.log("true");

    // Massege Status value
    msgStatus.innerHTML = `<p>تم تفعيل المحاضرة الان أفتح الرابط الذي في الاسفل </p>`

    // Reset Massege Status
    msgStatus.classList.remove("false")
    
    msgStatus.classList.add("true")

    createLink()

    // Set the active on local storage
    localStorage.setItem('status', 'active');
    
    // Add class Active on body
    document.body.classList.add("active")

    submitButton.style.pointerEvents = "none"

    localStorage.setItem('activeCodes', JSON.stringify(activeCodes))

  } else {
    console.log("false");

    // Massege Status value
    msgStatus.innerHTML = `<p>تأكد من كتابة الكود بشكل صحيح </p>`

    // Reset Massege Status
    msgStatus.classList.remove("true")

    msgStatus.classList.add("false")

    // Remove link If code false
    a.remove()

    // Set false value on local storage

    localStorage.setItem('status', 'false');



  }
});



// function generateRandomCode(length) {
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
//   var code = '0HS';
//   for (var i = 0; i < length; i++) {
//     var randomIndex = Math.floor(Math.random() * characters.length);
//     code += characters.charAt(randomIndex);
//   }
//   return code;
// }

// var codes = [];
// for (var i = 0; i < 100; i++) {
//   var code = generateRandomCode(12);
//   codes.push(code);
// }