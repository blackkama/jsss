
function valid(form) {
var fail=false;
var name=form.name.value;
var email=form.email.value;
var password=form.password.value;
var repassword=form.repassword.value;
if(name == "" || name == " ")
         fail="Вы не вели имя";
if(email == "" || email == " ")
         fail="Вы не ввели почту";
else if(password == "")
         fail="Вы не ввели пароль";
else if(password != repassword)
         fail="Пароли не соводают";
 if(fail){
  alert(fail)
  return false;
  }
  else {
  return true;
  }
	
	
}