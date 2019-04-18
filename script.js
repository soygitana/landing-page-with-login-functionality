document.querySelector('.main-button').addEventListener("click", function () {
  document.querySelector('.modal-wrap').classList.add('active');
  document.querySelector('.page').classList.add('dim')
})


document.querySelector('span.hide').addEventListener("click", function () {
  document.querySelector('.modal-wrap').classList.remove('active');
  document.querySelector('page').classList.remove('dim')
});

function objectifyForm(formArray) {

  var returnArray = {};
  for (var i = 0; i < formArray.length; i++) {
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}

var formData = objectifyForm($('#myForm').serializeArray());

var request = $.ajax({
  type: "POST",
  url: "https://recruitment-api.pyt1.stg.jmr.pl/login",
  data: JSON.stringify(formData),
  contentType: "application/json; charset=utf-8",
  dataType: "json"
});