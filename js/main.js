const tin = document.querySelector("#tin");
const submitButton = document.querySelector("#submit-button");
const files = document.querySelectorAll(".file-upload");
const fileSubmit = document.querySelector("#file-upload-submit");

const fileUpdate = document.querySelector("#update-file-upload-submit");
const sellerData = [
  '000000000',
  '000000001'
]

if(submitButton){
  submitButton.addEventListener('click',() => {
    sellerFormSubmit(tin.value);
  })
}



function sellerFormSubmit(value){
  if (sellerData.indexOf(value) == -1){
    console.log('')
    window.location.href = "no-records-found.html";
  }
  else{
    console.log('Existing Seller')
    window.location.href = "existing-brokers-sellers-options.html";
  }
}



if(fileSubmit){
  fileSubmit.addEventListener('click', () => {  
    fileUploadValidation(files)
  })
}


function fileUploadValidation(element){
  if(
    element[0].value == '' ||
    element[1].value == '' ||
    element[2].value == '' ||
    element[3].value == ''
  ){
    window.location.href = 'accreditation-process-pending.html';
  }
  else{
    window.location.href = 'accreditation-process-successful.html'
  }
}


if(fileUpdate){
  fileUpdate.addEventListener('click', () => {  
    fileUpdateValidation(files)
  })
}

function fileUpdateValidation(element){
  if(
    element[0].value == '' ||
    element[1].value == '' ||
    element[2].value == '' ||
    element[3].value == ''
  ){
    window.location.href = 'update-information-process-successful.html';
  }
  else{
    window.location.href = 'update-information-process-successful.html'
  }
}