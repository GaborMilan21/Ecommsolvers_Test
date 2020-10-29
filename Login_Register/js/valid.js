//validáció 


//Login formban lévő "name=email" értékkel rendelkező tag 
var email = document.forms['form']['email'];
//Login formban lévő "name=pass" értékkel rendelkező tag 
var password = document.forms['form']['pass'];

//Login formban lévő "id=email_error" értékkel rendelkező tag. Megadott értéke "display:none", vagyis nem jelenik meg a blokk. 
var email_error = document.getElementById('email_error');
//Login formban lévő "id=pass_error" értékkel rendelkező tag. Megadott értéke "display:none", vagyis nem jelenik meg a blokk. 
var pass_error = document.getElementById('pass_error');

//Ellenőrzi az inputok állapotát a függvény meghívásával.
email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

    //Validáció, ami a form "beteljesülésénél" végrehajtja önmagát.
    function validated() {
        //Ha az email inputban lévő érték hossza kisebb mint 9, megjeleníti az "email_error"-t.
        if (email.value.length < 9) {
            email_error.style.display = "block";
            email.style.border = "1px solid red";
            email.focus();
            return false;
        }
    //Ha a password inputban lévő érték hossza kisebb mint 9, megjeleníti a "pass_error"-t.
        if (password.value.length < 6) {
            pass_error.style.display = "block";
            password.style.border = "1px solid red";
            password.focus();
            return false;
        }
    }

//Ha az email inputban lévő érték hossza nagyobb-egyenlő mint 9, eltűnteti az "email_error"-t.
function email_Verify(){
    if(email.value.length >= 8){
        email_error.style.display = "none";
        email.style.border = "none";
        return true;
    }
}

//Ha a passowrd inputban lévő érték hossza nagyobb-egyenlő mint 6, eltűnteti a "pass_error"-t.
function pass_Verify(){
    if(password.value.length >= 5){
        pass_error.style.display = "none";
        password.style.border = "none";
        return true;
    }
}

//----------------------------------------------------------------------


//Register formban lévő "name=email" értékkel rendelkező tag 
var email2 = document.forms['form2']['email'];
//Register formban lévő "name=pass" értékkel rendelkező tag 
var password2 = document.forms['form2']['pass'];
var fname = document.forms['form2']['fname'];
var lname = document.forms['form2']['lname'];

//Register formban lévő "id=email2_error" értékkel rendelkező tag. Megadott értéke "display:none", vagyis nem jelenik meg a blokk. 
var email2_error = document.getElementById('email2_error');
//Register formban lévő "id=pass2_error" értékkel rendelkező tag. Megadott értéke "display:none", vagyis nem jelenik meg a blokk. 
var pass2_error = document.getElementById('pass2_error');
//Register formban lévő "id=short1_error" értékkel rendelkező tag. Megadott értéke "display:none", vagyis nem jelenik meg a blokk.
var short1_error = document.getElementById('short1_error');
//Register formban lévő "id=short2_error" értékkel rendelkező tag. Megadott értéke "display:none", vagyis nem jelenik meg a blokk.
var short2_error = document.getElementById('short2_error');

//Ellenőrzi az inputok állapotát a függvény meghívásával.
email2.addEventListener('textInput', email2_Verify);
password2.addEventListener('textInput', pass2_Verify);
fname.addEventListener('textInput', fname_Verify);
lname.addEventListener('textInput', lname_Verify);

    //Validáció, ami a form "beteljesülésénél" végrehajtja önmagát.
    function reg_validated() {
        //Ha az email2 inputban lévő érték hossza kisebb mint 9, megjeleníti az "email2_error"-t.
        if (email2.value.length < 9) {
            email2_error.style.display = "block";
            email2.style.border = "1px solid red";
            email2.focus();
            return false;
        }
    //Ha a password2 inputban lévő érték hossza kisebb mint 9, megjeleníti a "pass2_error"-t.
        if (password2.value.length < 6) {
            pass2_error.style.display = "block";
            password2.style.border = "1px solid red";
            password2.focus();
            return false;
        }
    //Ha a fname inputban üres, megjelenik a "short1_error".
        if (fname.value.length < 1) {
            short1_error.style.display = "block";
            fname.style.border = "1px solid red";
            fname.focus();
            return false;
        }
    //Ha a lname inputban üres, megjelenik a "short2_error".
        if (lname.value.length < 1) {
            short2_error.style.display = "block";
            lname.style.border = "1px solid red";
            lname.focus();
            return false;
        }
    }

//Ha az email2 inputban lévő érték hossza nagyobb-egyenlő mint 9, eltűnteti az "email2_error"-t.
function email2_Verify(){
    if(email2.value.length > 8){
        email2_error.style.display = "none";
        email2.style.border = "none";
        return true;
    }
}

//Ha a passowrd2 inputban lévő érték hossza nagyobb mint 5, eltűnteti a "pass2_error"-t.
function pass2_Verify(){
    if(password2.value.length >= 5){
        pass2_error.style.display = "none";
        password2.style.border = "none";
        return true;
    }
}

//Ha a fname input nem üres, eltűnteti a "short1_error"-t.
function fname_Verify(){
    if(fname.value.length >= 0){
        short1_error.style.display = "none";
        fname.style.border = "none";
        return true;
    }
}

//Ha a lname input nem üres, eltűnteti a "short2_error"-t.
function lname_Verify(){
    if(lname.value.length >= 0){
        short2_error.style.display = "none";
        lname.style.border = "none";
        return true;
    }
}

