function requestAccess() {
    let x = document.forms["form"]["request"].value;
    if (x == "" || x == "Email address") {
        alert("Email address required")
        return false;
    }
    if (x.includes("@") == false && x.includes(".com") == false) {
        alert("Invalid email address. Please try again")
        return false;
    }
}