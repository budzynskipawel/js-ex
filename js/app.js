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
  // console.log(ex30("JavaScript"));

  function ex31(a, b, c) {
    var max;
    if(a > b) {
      max = a;
    } else {
      max = b;
    };

    if(c > b) {
      max = c;
    }
    return max
  };
  // console.log(ex31(2, 2, 2));

  function ex32(a, b) {

    if(Math.abs(100 - a) < Math.abs(100 - b)) {
      return a
    } else {
      return b;
    }
  }
  // console.log(ex32(112, 102));

  function ex33(a, b) {
    if((((a >= 40) && (a <= 60)) || ((a >= 70) && (a <= 100))) && (((b >= 40) && (b <= 60)) || ((b >= 70) && (b <= 100)))) {
      return true;
    } else {
      return false;
    }
  };
  // console.log(ex33(43, 83));

  function ex34(a, b) {

    if(((a <= 60) && (b <= 60)) && ((a >= 40) && (b >= 40))) {
      return Math.max(a, b);
    } else {
      return false;
    }
  };

  // console.log(ex34(20, 40));

  function ex35(str, char) {
    var noOfChars = 0;
    for(var i = 0; i <= str.length - 1; i++) {
      if(str.charAt(i) == char) {
        noOfChars++;
      }
    };
    return(noOfChars >= 2) && (noOfChars <= 4);

  };
  // console.log(ex35("jjjjjojoba", "j"));

  function ex36(a, b, c) {

    if((a > 0) && (b > 0) && (c > 0)) {
      if((a % 10 === b % 10) && (a % 10 === c % 10) && (b % 10 === c % 10)) {
        return true;
      } else {
        return false;
      }
    } else {
      return "give positive numbers"
    }
  };

  // console.log(ex36(0, 21, 31));

  function ex37(newString) {

    if(newString.length < 3) {
      return newString.toUpperCase();
    } else {
      return newString.substring(0, 3).toLowerCase() + newString.substring(3, newString.length)
    };

  };

  // console.log(ex37('sl'));

  function ex38(marks, exam) {

    if(exam === "final") {
      if(marks >= 90 && marks <= 100) {
        return true;
      } else {
        return false;
      }
    } else {
      if(marks >= 89 && marks <= 100) {
        return true;
      } else {
        return false;
      }
    }


  };
  // console.log(ex38(79, "final"));

  function ex39(a, b) {
    return((a + b >= 50) && (a + b <= 80)) ? 65 : 80;

  };

  // console.log(ex39(30, 51));

  function ex40(a, b) {
    return((a === 8) || (b === 8) || (a + b === 8) || Math.abs(a - b) === 8);
  }
  // console.log(ex40(0, '8'));

  function ex41(a, b, c) {
    if((a === b) && (a === c)) {
      return 30;
    } else if((a === b) || (a === c) || (b === c)) {
      return 20;

    } else {
      return 40;
    }
  };
  // console.log(ex41(2, 2, 2));

  function ex42(a, b, c) {
    if((c > b) && (b > a)) {
      return 'strict mode';
    } else if(c > b) {
      return 'soft mode';
    }

  }
  // console.log(ex42(22, 2, 3));

  function ex43(x, y, z) {
    if((x >= 0) && (y >= 0) && (z >= 0)) {
      return((x % 10 === y % 10) || (x % 10 === z % 10) || (z % 10 === y % 10));

    } else {
      return 'error';
    }

  };
  // console.log(ex43(32, 3331, 33333333232));

  function ex44(a, b, c) {
    return((a >= 20) && ((a < b) || (a < c))) || ((b >= 20) && ((b < a) || (b < c))) ||
      ((c >= 20) && ((c < a) || (c < b)))
  };

  // console.log(ex44(22, 3, 3));

  function ex45(a, b) {

    return((a === 15) || (b == 15)) || ((a + b == 15) || (Math.abs(a - b) === 15))
  };

  // console.log(ex45(24, 39));
  function ex46(a, b) {
    if(a >= 0 && b >= 0) {
      if(((a % 7 === 0) || (a % 11 === 0)) && ((b % 7 === 0) || (b % 11 === 0))) {
        return true;
      } else {
        return false;
      }
    }
  }
  // console.log(ex46(22, 70));
  function ex48(str) {
    var newStr = '';
    for(var i = str.length - 1; i >= 0; i--) {
      newStr += str.charAt(i);
    };
    return newStr;
  };
  // console.log(ex48('janek'));

  function ex49(str) {
    var newStr = '';
    for(var i = 0; i < str.length; i++) {
      newStr += String.fromCharCode(str[i].charCodeAt() + 1);

    };

    return newStr;
  };
  // console.log(ex49('abcd'));

  function ex50(str) {
    var a = str.split(" ");
    for(var i = 0; i < a.length; i++) {
      a[i] = a[i][0].toUpperCase() + a[i].substring(1);
    };

    return a.join(" ");

  };
  // console.log(ex50("super cool exercise"));

  function ex51(a) {
    return Math.floor(a / 60) + " hours, " + (a % 60) + " minutes";
  };

  // console.log(ex51(20));

  function ex52(str) {
    return str.split('').sort();
  };

  // console.log(ex52('jancio'));

  function ex53(str) {
    return(/a...b/.test(str)) || (/b...a/.test(str));
  };

  // console.log(ex53('aoooba'));

  function ex54(str) {
    return str.replace(/[^aeiou]/g, "").length;
  };
  // console.log(ex54('jajajoja'));

  function ex55(str) {
    return str.replace(/[^p]/g, "").length === str.replace(/[^t]/g, "").length;
  };

  function ex56(a, b) {
    var c = a / b;
    return c.toString().replace(/\./g, ",");
  };

  // console.log(ex56(3, 2));

  function ex57(str, a) {
    var newStr = str;
    if(a < 1) {
      return false;
    } else {
      // for(var i = 1; i < a; i++) {
      //   newStr += str;
      // };
      newStr = str.repeat(a);
    }


    return newStr;
  }
  // console.log(ex57("raz ", 3));

  function ex58(str) {
    if(str.length < 3) {
      return false;
    } else {
      return str.substr(str.length - 3).repeat(4);
    };
  }
  // console.log(ex58('jajko'));

  function ex59(str) {
    if(str.length % 2 !== 0) {
      return false;
    } else {
      return str.substr(0, str.length / 2);
    }
  };
  // console.log(ex59('jajoja'));

  function ex60(str) {
    return str.substring(1, str.length - 1);
  };
  // console.log(ex60('Alt-Hohenschoenhausen'));

  function ex61(a, b) {

    return a.substr(1) + b.substr(1);

  };

  // console.log(ex61("yayo", "mayo"));

  function ex62(str) {
    return str.substr(str.length - 3) + str.substr(0, str.length - 3);
  };

  // console.log(ex62("Aschaffenburg"));

  function ex63(str) {
    return str.substr((Math.floor(str.length / 2) - 1), 3);
  };

  // console.log(ex63('0123456'));

  function ex64(a, b) {
    var m = Math.min(a.length, b.length);
    return a.substr(0, m) + b.substr(0, m);

  };
  // console.log(ex64('ja', 'nein'));

  function ex65(str) {
    if(str.length < 6) {
      return false;
    } else {
      return str.indexOf("Script") === str.length - 6;
    }
  };

  // console.log(ex65('JohnDoeScript'));

  function ex66(str) {
    var a = str.substr(0, 3);
    if(a === "Los" || a === "New") {
      return str;
    } else {
      return 'blank';
    }
  };
  // console.log(ex66("Los Angeles"));

  function ex67(str) {
    var start = 0;
    var stop = str.length;
    if(str.charAt(0) === "P") {
      start++;
    };
    if(str.charAt(stop - 1) === "P") {
      stop--;
    };
    return str.substring(start, stop);
  }
  // console.log(ex67('PPPPP'));

  function ex68(str, n) {

    if(str.length < n) {
      return false;
    } else {
      return str.substr(0, n) + str.substr(str.length - n, n);
    }

  };

  // console.log(ex68("Hafnarfjordur", 1));

  function ex69(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;

  };
  // console.log(ex69([1, 3, 5.6]));

  function ex70(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length - 1; i++) {
      newArr[i] = arr[i + 1]
    };
    newArr[arr.length - 1] = arr[0];
    return newArr;
  };
  // console.log(ex70([1, 2, 3, 5, 2123, 2]));



  function ex71(arr) {
    if(arr.length === 0) {
      return false;
    } else if(arr[0] === 1 || arr[arr.length - 1] === 1) {
      return true;
    } else {
      return false;
    }
  };
  // console.log(ex71([2, 1, 1]));

  function ex72(arr) {
    return(arr[0] === arr[arr.length - 1]) ? true : false;
  };

  // console.log(ex72([1, 2, 1]));

  function ex73(arr) {
    return arr.reverse();
  };

  // console.log(ex73([1, 2, 3]));

  function ex74(arr) {

    var larger = Math.max(arr[0], arr[arr.length - 1]);
    for(var i = 0; i < arr.length; i++) {
      arr[i] = larger;
    };


    return arr;


  };

  // console.log(ex74([1, 2, 3, 2 * 2]));

  function ex75(arr1, arr2) {

    if(arr1.length !== 3 && arr2.length !== 3) {
      return false;
    } else {
      return [arr1[1], arr2[1]];
    }

  };
  // console.log(ex75([1, 2, 3], [4, 5, 6]));

  function ex76(arr) {
    if(arr.length >= 1) {
      return [arr[0], arr[arr.length - 1]];
    } else {
      return false;
    }
  };
  // console.log(ex76([1, 2, 32]));

  function ex77(arr) {
    return((arr.indexOf(1) > -1) || (arr.indexOf(3) > -1)) && arr.length === 2;
  };
  // console.log(ex77([2, 3, 1]));

  function ex78(arr) {
    return((arr.indexOf(1) === -1) && (arr.indexOf(3) === -1)) && arr.length === 2;
  };
  // console.log(ex78([2, 4]));

  function ex80(arr) {

    if(arr.length > 0) {
      [arr[0], arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], 'test',
        arr[0]
      ];

      return arr;
    } else {
      return false;
    }



  };
  // console.log(ex80([1, 2, 3, 4, 5, 6]));

  function ex81(a) {
    if(a > 9 && a < 100) {
      return Math.floor(a / 10) + (a % 10);
    } else {
      return false;
    }
  };
  // console.log(ex81(33));

  function ex82(a, b) {

    return 10 * (Math.floor(a / 10) + Math.floor(b / 10));

  };


  // console.log(ex82(101, 122));

  function ex83(arr) {
    var longest = '';
    for(var i = 0; i < arr.length; i++) {
      if(arr[i].length > longest.length) {
        longest = arr[i];
      };
    };
    return longest;
  };

  // console.log(ex83(['one', 'two', 'three', 'four']));

  function ex84(str) {
    var newStr = '';
    for(var i = 0; i < str.length; i++) {
      if(str.charAt(i) === 'z') {
        newStr += 'a';
      } else if(str.charAt(i) === 'Z') {
        newStr += 'A';
      } else {
        newStr += String.fromCharCode(str.charCodeAt(i) + 1);
      };
    };
    return newStr;
  };
  // console.log(ex84('zZaAbcdBCD123.,-'));

  function ex85(arr) {
    var even = [];
    var odd = [];
    var sumEven = 0;
    var sumOdd = 0;

    for(var i = 0; i < arr.length; i++) {
      if(i % 2) {
        odd.push(arr[i]);
        sumOdd += arr[i];
      } else {
        even.push(arr[i]);
        sumEven += arr[i];
      };

    };
    return "even elements: " + even + " sum: " + sumEven + " odd elements: " + odd + " sum: " + sumOdd;



  };
  // console.log(ex85([0, 1, 2, 3, 4, 5, 6, 152900, 123, 1300, 146]));

  function ex86(a) {
    if(a > 0 && a < 90) {
      return 'acute angle';
    } else if(a === 90) {
      return 'right angle';
    } else if(a > 90 && a < 180) {
      return 'obtuse angle';
    } else if(a === 180) {
      return 'straight angle';
    } else {
      return 'more than 180'
    };
  };
  // console.log(ex86(118));

  function ex87(arr1, arr2) {
    var count = 0;
    if(arr1.length !== arr2.length) {
      return false;

    } else {
      for(var i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
          count++;
        }
      }
    };
    return(count < 2) ? true : false;

  };
  // console.log(ex87([2, 3, 3], [1, 2, 3]));

  function ex88(a, b, c) {
    return((a % c === 0 && b % c === 0) || (a % c !== 0 && b % c !== 0))
  };

  // console.log(ex88(4, 2, 2));

  function ex90(arr, k) {
    arr.sort(function(a, b) {
      return b - a;
    });
    if(arr.length >= k) {
      return arr[k - 1]
    } else {
      return false;
    }

  };

  // console.log(ex90([7, 2, 0], 3));

  function ex91(arr, k) {
    var greatest = 0;
    if(k <= arr.length) {
      for(var i = 0; i <= arr.length - k; i++) {
        var sum = 0;

        for(var j = i; j < i + k; j++) {
          sum += arr[j];
        };

        if(sum > greatest) {
          greatest = sum;
        }

      };
      return greatest;
    } else {
      return false;
    }
  };
  // console.log(ex91([14, 2, 3, 4, 5, 6, 7], 4));

  function ex92(arr) {
    var dif = 0;
    var greatest = 0;
    for(var i = 1; i < arr.length; i++) {
      dif = Math.abs(arr[i] - arr[i - 1]);
      if(dif > greatest) {
        greatest = dif;
      }
    };
    return greatest;
  };
  // console.log(ex92([-9991, 200, 4, 123, 4550]));

  function ex93(arr) {
    var max = 0;
    var dif = 0;
    for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j < arr.length; j++) {
        max = Math.max(Math.abs(arr[i] - arr[j]), max);

      }
    };
    return max;
  };
  // console.log(ex93([1, 12441, 2, -2, 345]));

  function ex94(arr) {

    var tor = -1;
    var gr;
    for(var i = 0; i < arr.length; i++) {
      var count = -1;
      for(var j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
          count++;

        };
        if(count > tor) {
          tor = count;
          gr = arr[j];
        }

      }

    }
    return gr;
  }
  // console.log(ex94([1, 2, 3, 4, 4, 3, 3, 4, 5, 4]));

  function ex95(arr, old, rep) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === old) {
        newArr.push(rep);
      } else {
        newArr.push(arr[i]);
      };


    };
    return "original:" + arr + " new: " + newArr;
  }

  // console.log(ex95([2, 3, 4, 5, 6, 3, 7, 8], 3, 9));

  function ex96(arr) {
    var sum = 0;
    for(var i = 1; i < arr.length; i++) {
      sum += Math.abs(arr[i] - arr[i - 1]);
    };
    return sum;
  };

  // console.log(ex96([1, 2, 3, 229, -271]));

  function ex98(arr) {
    var upper = 0;
    var lower = 0;
    for(var i = 0; i < arr.length; i++) {
      if(/[A-Z]/.test(arr[i])) {
        upper++;
      } else {
        lower++;
      }

    };
    if(lower > upper) {
      return arr.toLowerCase();

    } else {
      return arr.toUpperCase();
    }
  };

  // console.log(ex98("DONstefanOOOOO"));

  function ex99(str1, str2) {

    var a = str1.toString().split("").sort();
    var b = str2.toString().split("").sort();

    return(a === b) ? true : false;
  };

  function ex100(arr1, arr2) {
    var is = false;
    for(var i = 0; i < arr1.length; i++) {
      for(var j = 0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]) {
          is = true;
        };
      };

    };

    return is;
  };
  // console.log(ex100([1, 2, 3], [7, 4, 5]));

  function ex103(a) {
    var b = a.toString().split('');
    var max = 0;
    for(var i = 0; i < b.length; i++) {
      var newNr = [];
      for(var j = 0; j < b.length; j++) {
        if(i !== j) {
          newNr.push(b[j]);
        }

      }
      // console.log(newNr.join(""))
      max = Math.max(newNr.join(""), max);


    }
    console.log(max);
    // console.log(b);
  };

  // ex103(900095);
  function ex106(a, b) {
    var c = a / b;



    while(Number.isInteger(c)) {
      c = c / b;
      console.log(c)
    };
    // console.log(c);


  };
  // ex106(32, 2);

  function ex107(arr) {
    var count = 0;
    var sorted = arr.sort(function(a, b) {
      return b - a;
    });

    for(var i = 0; i < sorted.length - 1; i++) {
      for(var j = i + 1; j < sorted.length; j++) {
        if(sorted[i] % sorted[j] === 0) {
          count++;
          console.log(sorted[i], sorted[j]);

        }
      }
    }
    return count;
  };

  function ex108(a, b) {
    var result = 0;
    if(a.length === b.length) {
      for(var i = 0; i < a.length; i++) {
        result += a[i] * b[i];
      }
    };
    return result;
  };
  // console.log(ex108([1, 2, 3], [1, 2, 3]));

  function ex109(n) {
    var arr = [];

    for(var i = 2; i <= n; i++) {
      var count = 0;
      for(var j = i; j > 0; j--) {
        if(i % j === 0) {
          count++

        };

      };
      if(count < 3) {
        arr.push(i);
      }
    };
    return arr;
  };

  // console.log(ex109(99));

  function ex110(arr, n) {
    count = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0 && arr[i] !== n) {
        count++
      };
      if(arr[i] === n) {
        return count;
        break;
      }
    }
  };
  // console.log(ex110([1, 4, 6, 1, 4, -6, 1, 1, 2, 4], 2));

  function ex111(a, b, c) {
    if(a !== b && b !== c && c !== a) {
      return 'numbers are not equal'
    } else if(a == b) {
      return c;
    } else if(a == c) {
      return b;
    } else {
      return a;
    }
  };
  // console.log(ex111(1, 2, 1));

  function ex114(sent) {
    a = sent.split('');
    return(/[A-Z]/g.test(a[0]) && a[a.length - 1] === '.');
  };
  // console.log(ex114("Hello World."));



});
