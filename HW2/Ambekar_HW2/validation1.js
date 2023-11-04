function validateform() {
     console.log("hello");
    var fname = document.forms["val1"]["fname"].value;
    var lname = document.forms["val1"]["lname"].value;
    var gender = document.forms["val1"]["gender"].value;
    var state = document.forms["val1"]["state"].value;

    var fnamebool = textCheck(fname, "fname", "FirstName");
    var lnamebool = textCheck(lname, "lname", "LastName");
    var genderbool = optCheck(gender, "gender", "Gender");
    var statebool = optCheck(state, "state", "State");
    if(fnamebool && lnamebool && genderbool && statebool){
         location.href = "validation2.html";
    }
    
  }

  function getNotification(bool, ID) {
     var label = document.getElementById("labelNotify" + ID);
     if (label == null) {
       label = document.createElement("LABEL");
       label.id = "labelNotify" + ID;
       // label.className = "errorMessage";
       label.setAttribute("class", "errorMessage");
     }
   
     label.innerHTML = bool
       ? ""
       : "Must contain only alphabetic or numeric characters!";
     return label;
   }

  function getImage(bool, ID) {
     var image = document.getElementById("image" + ID);
     if (image == null) {
         image = new Image(15, 15);
         image.id = "image" + ID;
     }
     image.src = bool ? './correct.png' : './wrong.png';
     return image;
 }

 function alphaNumCheck(entry) {
     let regex = /^[a-z0-9]+$/i;
     if (entry != null && entry.match(regex)) {
         return true;
     } else {
         return false;
     }
 }

 function textCheck(text, id, pid) {
     var regexCheck = alphaNumCheck(text);
     var output = getImage(regexCheck, id);
     document.getElementById(pid).appendChild(output);
     var labelNotify = getNotification(regexCheck, id);
     document.getElementById(pid).appendChild(labelNotify);
     return regexCheck;
   }

 function optCheck(val, id, pid){
     if(val != null){
          var correct = getImage(true, id);
          document.getElementById(pid).appendChild(correct);
          return true;
     }
     var wrong = getImage(false, id);
     document.getElementById(pid).appendChild(wrong);
     return false;
 }
      
