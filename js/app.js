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






})
