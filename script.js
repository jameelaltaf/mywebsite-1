    edu_content = document.getElementById("edu").innerHTML;
    work_conent = document.getElementById("work").innerHTML;
    project_content = document.getElementById("project").innerHTML;
    skill_content = document.getElementById("skill").innerHTML;
    contact_conent = document.getElementById("contact").innerHTML;

    document.getElementById("content").innerHTML = edu_content;

function changeDiv(i){

    switch(i) {
        case 1:
            document.getElementById("content").innerHTML = edu_content;
            break;
        case 2:
            document.getElementById("content").innerHTML = work_conent;
            break;
        case 3:
            document.getElementById("content").innerHTML = project_content;
            break;
        case 4:
            document.getElementById("content").innerHTML = skill_content;
            break;
        case 5:
            document.getElementById("content").innerHTML = contact_conent;
            break;
        default:
            document.getElementById("content").innerHTML = edu_content;
      }
}

function setColor(btn) {

    document.getElementById('btn1').classList.remove("selected");
    document.getElementById('btn2').classList.remove("selected");
    document.getElementById('btn3').classList.remove("selected");
    document.getElementById('btn4').classList.remove("selected");
    document.getElementById('btn5').classList.remove("selected");

    document.getElementById(btn).classList.add('selected');
}