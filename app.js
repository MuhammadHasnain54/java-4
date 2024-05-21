alert("Welcome To Mobile Phone Recomender");

let budget = prompt("How Much is Your budget (Low / Medium / High) ");
document.write("1 : your budget is = " , budget ,"<br>");

let system = prompt("Which System Do You Prefer ( Android / Ios ) ");
document.write("2 : You Prefer The System Of   " ,system , "<br>");

let camera = prompt ( "Which Type Of Camera Quality Do You Need ( Low / Medium / High");
document.write(" 3 : You need ",camera , " Camera Quality <br>")

let battery = prompt("Which battery life do you prefer (short/average/long)");
document.write("4 :Your perefer battery life is = " , battery , "<br>");


var screenSize = prompt("Which screen size do you prefer (small/medium/large)");
document.write("5 :Your prefer screen size is = " , screenSize, "<br><br>");


document.write(" <h3> Based on your prefences , we recommend the following mobile phone <br><br> </h3>");


if(budget == "Low" || camera == "Low" || battery == "short"){
    document.write("Price: 25000 PKR <br>");
    if (system == "andriod" || system == "Andriod") {
        document.write("<br> SAMSUNG A10s")
    }else{
        document.write("<br> I Phone 5s");
    }

}
if(budget == "medium" || camera == "medium" || battery == "medium"){
    document.write("Price: 45000 PKR <br>");
    if (system == "andriod" || system == "Andriod") {
        document.write("realme C45")
    }else{
        document.write("I Phone x");
    }

}
if(budget == "High" || camera == "High" || battery == "long"){
    document.write("Price: 100000 PKR <br>");
    if (system =  "andriod" || system == "Andriod") {
        document.write("SAMSUNG S20 ")
    }else{
        document.write("I Phone 11");
    }

}

