const addEleDivBtn = document.querySelector('#add-ele-div')
const addImgBtn = document.querySelector('#add-img')
const contentEle = document.querySelector('.content-div')

//Add Ele-Div function
// addEleDivBtn.addEventListener('click', function() {
//     const eleDiv =document.createElement('div')
//     eleDiv.classList.add('ele-div')
//     contentEle.appendChild(eleDiv)
//     $(eleDiv).draggable({
//       containment: "parent"
//     })
// })

//Add Image function
addImgBtn.addEventListener("change", () => {
  let reader = new FileReader();
  reader.readAsDataURL(addImgBtn.files[0]);
  reader.addEventListener("load", () => {
    let img = document.createElement('img')
    img.src=reader.result
    contentEle.appendChild(img)
    img.classList.add('absolute')
    $(img).draggable()
  });
});

//Append Ele-Div Master function
let createSubmitField=function(type){
  elementType= type
  const eleDiv =document.createElement('div')
  eleDiv.classList.add('ele-div')
  eleDiv.classList.add('submit-field')
  const submitField=document.createElement('div')
  const inputForm=document.createElement('form')
  const eleTitle=document.createElement('h3')
  eleTitle.innerText=elementType + ' Content'
  eleTitle.classList.add('ele-title')
  eleDiv.appendChild(eleTitle)
  //Create text-area for input box
  const textArea=document.createElement('textarea')
  //Create btn for input box
  const submitBtn=document.createElement('button')
  submitBtn.innerText='Submit'
  inputForm.addEventListener('submit', (e)=>{
      console.log(elementType)
      e.preventDefault()
      const deleteBtn = document.createElement('div')
      deleteBtn.innerHTML="&#10006;"
      deleteBtn.classList.add('delete-btn')
      const eleDiv2 = document.createElement('div')
      const innerElement = document.createElement(elementType)
      innerElement.innerHTML =textArea.value
      eleDiv2.appendChild(deleteBtn)
      eleDiv2.appendChild(innerElement)
      eleDiv2.classList.add('ele-div')
      contentEle.appendChild(eleDiv2)
      eleDiv.remove()
      $(eleDiv2).draggable({
              containment: "parent"
          })
      deleteBtn.addEventListener('click', (e) => {
          let btn=deleteBtn 
          $(btn).parent().remove()
      }) 
  })
  submitBtn.classList.add('submit-btn')
  inputForm.appendChild(textArea)
 
  inputForm.appendChild(submitBtn)
  eleDiv.appendChild(inputForm)
  contentEle.appendChild(eleDiv)
}

//Print Page function
let printPDF=function(){
    $('#print-btn').click(function(){
    $('.content-div').printThis()
    })
}


let addTitle=function(){
  createSubmitField('H1')
}

let addSubtitle=function(){
  createSubmitField('H3')   
}

let addParagraph=function(){
  createSubmitField('P')
}

let addPage = function(){
  contentEle.style.height = (contentEle.offsetHeight + 50) + "px"
}

let decPage = function(){
  contentEle.style.height = (contentEle.offsetHeight - 50) + "px"
}