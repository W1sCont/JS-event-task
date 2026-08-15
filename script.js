function checkDigit(e){
    let key = e.key;
    if (key >= '0' && key <= '9') {
        e.preventDefault();
    }
}
document.body.addEventListener("keydown", checkDigit);