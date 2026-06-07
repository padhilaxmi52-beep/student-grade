
function calculateResult(){

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    let marks = [s1, s2, s3, s4, s5];

    for(let i=0; i<marks.length; i++){
        if(marks[i] < 0 || marks[i] > 100){
            alert("Enter marks between 0 and 100");
            return;
        }
    }

    let total = s1 + s2 + s3 + s4 + s5;
    let percentage = total / 5;

    let grade;

    if(percentage >= 90){
        grade = "A";
    }
    else if(percentage >= 80){
        grade = "B";
    }
    else if(percentage >= 70){
        grade = "C";
    }
    else if(percentage >= 60){
        grade = "D";
    }
    else{
        grade = "F";
    }

    let status = "Pass";

    if(
        s1 < 35 ||
        s2 < 35 ||
        s3 < 35 ||
        s4 < 35 ||
        s5 < 35
    ){
        status = "Fail";
    }

    document.getElementById("result").innerHTML =
        "<p>Total Marks: " + total + "</p>" +
        "<p>Percentage: " + percentage.toFixed(2) + "%</p>" +
        "<p>Grade: " + grade + "</p>" +
        "<p>Status: " + status + "</p>";
}