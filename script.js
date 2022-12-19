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
let createSubmitField=function(type, title){
  elementType = type
  elementTitle = title
  const eleDiv =document.createElement('div')
  eleDiv.classList.add('ele-div')
  eleDiv.classList.add('submit-field')
  const submitField=document.createElement('div')
  const inputForm=document.createElement('form')
  const eleTitle=document.createElement('h3')
  eleTitle.innerText=elementTitle + ' content'
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
      $(contentEle).printThis()

 
    }



let addTitle=function(){
  createSubmitField('H1', 'Title')
}

let addSubtitle=function(){
  createSubmitField('H3', 'Subtitle')   
}

let addParagraph=function(){
  createSubmitField('P', 'Paragraph')
}

let addPage = function(){
  contentEle.style.height = (contentEle.offsetHeight + 50) + "px"
}

let decPage = function(){
  contentEle.style.height = (contentEle.offsetHeight - 50) + "px"
}

let complete = function() {
  let deleteBtns = document.querySelectorAll('.delete-btn')
  deleteBtns.forEach(btn => btn.remove())
}

//Add arrow function
 let addArrow = function(){
  const arrowWrapper=document.createElement('div')
  const arrow=document.createElement('img')
  arrowWrapper.classList.add('arrow-wrapper')
  arrowWrapper.classList.add('absolute')
  arrow.classList.add('arrow')
  arrow.classList.add('absolute')
  arrow.src="arrow.png"
  const deleteBtn = document.createElement('div')
      deleteBtn.innerHTML="&#10006;"
      deleteBtn.classList.add('delete-btn')
      
  arrowWrapper.appendChild(deleteBtn)
  arrowWrapper.appendChild(arrow)
  contentEle.appendChild(arrowWrapper)
  deleteBtn.addEventListener('click', () => {
      let btn=deleteBtn 
      $(btn).parent().remove()
  })
  $(arrowWrapper).draggable({
          containment: "parent"
        })

  // $(arrowWrapper).draggable()
  // $(arrow).resizable()

  let tmpAnimation = 0
  $(arrowWrapper).click(function() {
      var element = $(arrowWrapper)
      tmpAnimation = tmpAnimation + 10

      $({degrees: tmpAnimation-10}).animate({degrees: tmpAnimation}, {
          duration: 1000,
          step: function (now) {
              element.css({
                  transform: 'rotate(' + now + 'deg)'
              })
          }
      })

  })

}

let addBox = function() {
  const box = document.createElement('div')
  box.classList.add('box')
  const form = document.createElement('form')
  const boxInput=document.createElement('textarea')
  const button = document.createElement('button')
  //Create bold button
  const boldBtn=document.createElement('input')
  boldBtn.type='checkbox'
  boldBtn.classList.add('bold-btn')
  button.innerText='Submit'
  boldBtn.innerText= 'Bold'
  //Append boldBtn to form
  form.appendChild(button)
  form.appendChild(boxInput)
  let isBold=''
  boldBtn.addEventListener('click', () => {
      $(boldBtn).change(function(){
          if(this.checked === true)
          {isBold ='true'}
      })
  })
  form.appendChild(boldBtn)
  form.addEventListener('submit', function(e){
      const paragraph=document.createElement('p')
      e.preventDefault()
      box.remove()
      const box2=document.createElement('span')
      paragraph.innerHTML=boxInput.value
      box2.classList.add('text-box')
      if(isBold==='true'){
          box2.classList.add('bold')
      }
      box2.appendChild(paragraph)
      box2.addEventListener('dblclick', function(){
          box2.classList.toggle("hide")
      })
      //Create delete button
      const deleteBtn = document.createElement('div')
      deleteBtn.innerHTML="&#10006;"
      deleteBtn.classList.add('delete-btn')
      deleteBtn.addEventListener('click', () => {
      let btn=deleteBtn 
      $(btn).parent().remove()
  })
      box2.appendChild(deleteBtn)
      contentEle.appendChild(box2)

      $(box2).draggable()

  })
  box.appendChild(form)
  contentEle.appendChild(box)
  $(box).resizable()
}