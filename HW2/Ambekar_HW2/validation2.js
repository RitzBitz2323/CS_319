function validateform(){
    valCheck = true;
    var resultEmailCheck = emailCheck(document.forms["val2"]["email"].value);
    var emailImage = getImage(Boolean(resultEmailCheck), "email");
    var labelNotifyEmail = getNotification(Boolean(resultEmailCheck), "email");
    document.getElementById("Email").appendChild(emailImage);
    document.getElementById("Email").appendChild(labelNotifyEmail);
    var resultPhoneCheck = phoneCheck(document.forms["val2"]["phone"].value);
    var phoneImage = getImage(Boolean(resultPhoneCheck), "phone");
    var labelNotifyPhone = getNotification(Boolean(resultPhoneCheck), "phone");
    document.getElementById("Phone").appendChild(phoneImage);
    document.getElementById("Phone").appendChild(labelNotifyPhone);
    var resultAddressCheck = addressCheck(document.forms["val2"]["address"].value);
    var addressImage = getImage(Boolean(resultAddressCheck), "address");
    var labelNotifyAddress = getNotification(Boolean(resultAddressCheck), "address");
    document.getElementById("Address").appendChild(addressImage);
    document.getElementById("Address").appendChild(labelNotifyAddress);
}
function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }
    var output = "";
    if(ID == "email"){
        output = "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
    }
    else if (ID == "phone"){
        output = "Phone should be in the form xxx-xxx-xxxx or xxxxxxxxxx, which x should be numeric!";
    }
    else{
        output = "Address should be in the form of city & state. Example: Omaha,NE";
    }
    label.innerHTML = bool ? "" : output;
    return label;
}
function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
      image = new Image(15, 15);
      image.id = "image" + ID;
    }
    image.src = bool ? "./correct.png" : "./wrong.png";
    return image;
  }

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
      return true;
    }
    return false;
  }

  function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
}

function phoneCheck(number) {
    let regex = /^[1-9]\d{2}-\d{3}-\d{4} || ^[1-9]/;
    if (number != null && number.length == 10 && number.match(regex)) {
      return true;
    } 
    return false;
    
  }

  function addressCheck(address){
      let regex = /^[A-Za-z]+,[A-Z]{2}$/;
      if(address != null && address.match(regex)){
          return true;
      }
      return false;
  }

  
  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }