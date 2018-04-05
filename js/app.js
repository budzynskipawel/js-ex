document.addEventListener("DOMContentLoaded", function() {
  function ex1() {
    var day;
    var today = new Date().getDay();
    var now = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    switch(today) {
      case 1:
        day = "Poniedziałek";
        break;
      case 2:
        day = "Wtorek";
        break;
      case 3:
        day = "Środa";
        break;
      case 4:
        day = 'Czwartek';
        break;
      case 5:
        day = "Piątek";
        break;
      case 6:
        day = "Sobota";
        break;
      case 0:
        day = "Niedziela";
        break;
      default:
        day = "unknown";
        break;
    }
    document.write("Today is " + day + ". Time is:" + now);
  };
  // ex1();

  function ex2() {
    var btn = document.createElement('button');
    btn.innerHTML = "click me";
    btn.addEventListener("click", function() {
      window.print();
    })
    document.body.appendChild(btn);
  };
  // ex2();
  function ex3() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm;
    var dd;
    if(today.getMonth() < 10) {
      mm = "0" + (today.getMonth() + 1);
    } else {
      mm = today.getMonth() + 1
    };

    if(today.getDate() < 10) {
      dd = "0" + today.getDate();
    } else {
      dd = today.getDate();
    }
    document.write(yyyy + "-" + mm + "-" + dd);
  };
  // ex3();

  function ex4(a, b, c) {
    var P;
    var p = (a + b + c) / 2
    P = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    document.write(P);
  }
  // ex4();

  function ex5(a) {
    var b = a;
    var div5 = document.getElementById("ex5");
    setInterval(function() {
      b = b.substr(1, b.length) + b.substr(0, 1);
      // document.write(b);
      div5.innerHTML = b;
    }, 500);

  };

  // ex5("Witaj na stronie, dziś jest: ");
  function ex6() {
    var year = prompt("Give a year:");

    if(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
      alert(year + " is a LEAP YEAR")
    } else if(isNaN(year)) {
      alert("It's not a year!");
      ex6();
    } else {
      alert(year + " is not a LEAP YEAR")
    }
  };
  // ex6();


  function ex7() {
    var firstJan;
    for(var i = 2014; i <= 2050; i++) {
      firstJan = new Date(i, 00, 01);
      if(firstJan.getDay() === 0) {
        console.log(firstJan);
      } else {
        console.log(firstJan.getFullYear() + "_" + firstJan.getDay());
      }
    };


  }

  // ex7();

  function ex8() {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber);
    var userNumber = prompt("Give me a number between 1 and 10");

    if(isNaN(userNumber)) {
      alert("It's not a number")
    } else if(userNumber == randomNumber) {
      alert("Congratulations! It's " + randomNumber)
    } else {
      alert("No, it's " + randomNumber);
      ex8();

    }
  };
  // ex8();

  function ex9() {
    var today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 25);
    if((christmas.getMonth() == today.getMonth()) && (christmas.getDate() < today.getDate())) {
      christmas.setFullYear(today.getFullYear() + 1);
    };
    var day = 1000 * 60 * 60 * 24;
    var daysLeft = Math.floor((christmas.getTime() - today.getTime()) / day);
    console.log(daysLeft + " until Christmas");
  }

  // ex9();

  function ex10() {
    var firstNumber;
    var secondNumber;
    var resultField = document.getElementById('result');
    var mtpBtn = document.getElementById('multiply');
    var divBtn = document.getElementById('divide');

    function multiply() {
      firstNumber = document.getElementById('first').value;
      secondNumber = document.getElementById('second').value;
      var result = firstNumber * secondNumber;
      resultField.innerHTML = result;

    }


    function divide() {
      firstNumber = document.getElementById('first').value;
      secondNumber = document.getElementById('second').value;
      var result = firstNumber / secondNumber;
      resultField.innerHTML = result;

    };

    mtpBtn.addEventListener("click", multiply);
    divBtn.addEventListener("click", divide);
  }
  ex10();


  function ex11() {

    function toC(f) {
      var celsius = 5 * ((f - 32) / 9);
      console.log(f + "F is " + celsius + "C");
    };

    function toF(c) {
      var fahrenheit = c * (9 / 5) + 32;
      console.log(c + "C is " + fahrenheit + "F");
    };


    toC(100);
    toF(-273);

  };

  // ex11();

  function ex12() {
    console.log("current website:" + location.href);
  }
  // ex12();


  function ex14(fileName) {
    console.log(fileName.split('.').pop());
    // or
    var file = fileName.split('.');
    console.log(file[file.length - 1]);



  };
  // ex14("app.js");

  function ex15(ynr) {

    if(ynr > 13) {
      return 2 * (ynr - 13);
    } else {
      return 13 - ynr;
    };
  }

  // console.log(ex15(-13));

  function ex16(a, b) {

    if(a === b) {
      return 3 * (a + b);
    } else {
      return a + b;
    }

  };

  // console.log(ex16(0, Infinity));
  function ex17(num) {
    return(num <= 19) ? (19 - num) : (3 * (num - 19));
  }

  // console.log(ex17(21));

  function ex18(a, b) {
    return((a + b == 50) || (a == 50) || (b == 50));
  }
  // console.log(ex18(0, 50));

  function ex19(a) {
    return((Math.abs(100 - a) <= 20) || (Math.abs(400 - a) <= 20))
  }

  // console.log(ex19(80));

  function ex20(a, b) {

    if(((a > 0) && (b < 0)) || ((b > 0) && (a < 0))) {
      return true
    } else {
      return false;
    }

  };
  // console.log(ex20(-1, 1));

  function ex21(str) {
    console.log("ex21");

    if(str.substring(0, 2) === 'Py' || str === null || str === undefined) {
      return str;
    } else {
      return "Py" + str;
    }
  }

  // console.log(ex21("python"));

  function ex22(word, i) {
    var fir = word.substr(0, i);
    var sec = word.substr(i + 1, word.length - 1);
    return word = fir + sec;

  };

  // console.log(ex22('John Doe', 3));
  function ex23(word) {
    if(((typeof word) == 'string') && (word.length >= 1)) {
      return word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0)
    } else {
      return "fatal error";
    }
  }

  // console.log(ex23("John Doe"));

  function ex24(word) {
    if(typeof word == "string") {
      return word.charAt(0) + word + word.charAt(0);
    } else {
      return "not a string"
    }

  };

  // console.log(ex24("152900"));

  function ex25(a) {
    return((a > 0) && ((a % 3 === 0) || (a % 7 === 0))) ? true : false;
  };

  // console.log(ex25(7));

  function ex26(str) {
    var last3 = str.substr(str.length - 3, str.length);

    return last3 + str + last3;
  };

  // console.log(ex26('teścik'));

  function ex27(str) {
    return(str.substring(0, 4) === "Java") ? true : false;
  };

  // console.log(ex27("JavaScript"));

  function ex28(a, b) {

    return((a >= 50 && a <= 99) && (b >= 50 && b <= 99)) ? true : false;

  };

  // console.log(ex28(99, 50));

  function ex29(a, b, c) {
    return((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) ? true : false;
  };

  // console.log(ex29(50, 1, 1));

  function ex30(str) {


    return(str.substr(4, 6) === "Script") ? (str.substr(0, 4) + str.substr(10, str.length - 1)) : str;
  };
  console.log(ex30("JavaScript"));

})
