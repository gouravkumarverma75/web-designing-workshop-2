function calculationgrade(){

    let n = parseInt(document.getElementById("subjects").value);
    let total = 0;

    for(let i = 1; i <= n; i++){

        let marks = parseFloat(prompt("Enter marks for subject " + i));
        total = total + marks;

    }

    let average = total / n;
    let grade;
    let result;

    if(average >= 90){
        grade = "A";
    }
    else if(average >= 60){
        grade = "B";
    }
    else{
        grade = "C";
    }

    if(average >= 40){
        result = "Pass";
    }
    else{
        result = "Fail";
    }

    alert("Average: " + average + "\nGrade: " + grade + "\nResult: " + result);

    document.getElementById("result").innerHTML =
        "Average: " + average + "<br>Grade: " + grade + "<br>Result: " + result;
}
