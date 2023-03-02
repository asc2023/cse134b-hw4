const dialog = document.querySelector('#dialog4');
const btn = document.querySelector('#cancel');
const btn2 = document.querySelector("#confirm")
const dialog2 = document.querySelector('#dialog3');
const dialog3 = document.querySelector('#dialog5');
btn.addEventListener('click',()=>{
    dialog.close();
});

document.getElementById("alert-btn").addEventListener('click',()=>{
    dialog2.close();
});
document.getElementById("cancel").addEventListener('click',()=>{
    console.log("closed modal");
    myCancelFunction();
});
document.getElementById("confirm").addEventListener('click',()=>{
    console.log("closed modal true");
    myConfirmFunction();
    dialog.close();
});
document.getElementById("dialog-btn").addEventListener('click',()=>{
    console.log("closed modal true");
    myDialogFunction();
    dialog3.close();
});

export function myAlertFunction()
{
    var dialog = document.querySelector('dialog');
    dialogPolyfill.registerDialog(dialog);
}

export function myConfirmFunction()
{
    document.getElementById("output").innerHTML ="The value returned by the confirm method is :: true";
    document.getElementById("output").style.display = "block";
}
export function myDialogFunction()
{
    var x = document.getElementById("myName").value;
    document.getElementById("output").innerHTML = "Hello! "+ x;
    document.getElementById("output").style.display="block"; 
}
export function myCancelFunction()
{
    document.getElementById("output").innerHTML ="The value returned by the confirm method is :: false";
    document.getElementById("output").style.display = "block";
}
export function mySafeDialogFunction()
{

}