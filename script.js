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

    //add delete button
    const deleteBtn = document.createElement('div')
      deleteBtn.innerHTML="&#10006;"
      deleteBtn.classList.add('delete-btn')
      const img_wrapper=document.createElement('div')
      img_wrapper.appendChild(img)
      img_wrapper.appendChild(deleteBtn)
    
    contentEle.appendChild(img_wrapper)
    img_wrapper.classList.add('absolute')
    deleteBtn.addEventListener('click', () => {
      let btn=deleteBtn 
      $(btn).parent().remove()
  })
    
    $(img_wrapper).draggable()
  })
})

//Append Ele-Div Master function
let createSubmitField=function(type, title, classParam){
  elementType = type
  elementTitle = title
  const eleDiv =document.createElement('div')
  eleDiv.classList.add('ele-div')
  eleDiv.classList.add('submit-field')
  const submitField=document.createElement('div')
  const inputForm=document.createElement('form')
  const eleTitle=document.createElement('h3')
  eleTitle.innerText=elementTitle
  eleTitle.classList.add('ele-title')
  eleDiv.appendChild(eleTitle)
  //Create text-area for input box
  const textArea=document.createElement('textarea')
  textArea.classList.add('text-area')
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
      classParam=classParam
      //add optional class param
      if(classParam){
      eleDiv2.classList.add(classParam)
      console.log('class param active')
      }
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

let addDblIndentParagraph=function(){
  createSubmitField('P', 'addDblIndentParagraph', 'dbl-indent-para')
}

let addIndentParagraph=function(){
  createSubmitField('P', 'addIndentParagraph', 'indent-para')
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
  arrow.src="red-arrow.png"
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
  let white=false
  const box = document.createElement('div')
  //create white-text radio buttons
  const white_wrapper=document.createElement('div')
  const radioButton=document.createElement('input')
  radioButton.type="radio"
  radioButton.onChange=()=>{
    if(radioButton.checked){
      white=true
    }
  }
  white_wrapper.appendChild(radioButton)
  white_wrapper.classList.add('w-w')
  box.appendChild(white_wrapper)


  box.classList.add('box')
  const form = document.createElement('form')
  const boxInput=document.createElement('textarea')
  boxInput.classList.add('input-text-area')
  const button = document.createElement('button')
  button.innerText='Submit'
  button.classList.add('submit-btn')
  //Create bold button
  // const boldBtn=document.createElement('input')
  // boldBtn.type='checkbox'
  // boldBtn.classList.add('bold-btn')
  // button.innerText='Submit'
  // boldBtn.innerText= 'Bold'
  // //Append boldBtn to form
     form.appendChild(boxInput)
     form.appendChild(button)

  // let isBold=''
  // boldBtn.addEventListener('click', () => {
  //     $(boldBtn).change(function(){
  //         if(this.checked === true)
  //         {isBold ='true'}
  //     })
  // })
    //  form.appendChild(boldBtn)
  form.addEventListener('submit', function(e){
      const paragraph=document.createElement('p')
      if(white){
        console.log('white')
        paragraph.classList.add("white")
      }
      e.preventDefault()
      box.remove()
      const box2=document.createElement('span')
      paragraph.innerHTML=boxInput.value
      box2.classList.add('text-box')
      // if(isBold==='true'){
      //     box2.classList.add('bold')
      // }
      box2.appendChild(paragraph)
      

      box2.addEventListener('dblclick', function(){
          box2.classList.toggle("hide-box-border")
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
}



//select control buttons
const controlBtn = document.querySelectorAll(".control-button")

//select control button images
const controlBtnImgs = document.querySelectorAll(".control-btn-img")


let controlButtonImages = [
  'images/title.png',
  'images/h3.png',
  'images/reg-para.png',
  'images/indent.png',
  'images/dbl-indent.png',
  'images/arrow.png',
  'images/plus.png',
  'images/minus.png',
  'images/text-box.png',
  'images/done.png', 
  'images/save.png',
  'images/upload.png',

]

let whiteControlButtonImages = [
  'images/white/title.png',
  'images/white/h3.png',
  'images/white/reg-para.png',
  'images/white/indent.png',
  'images/white/dbl-indent.png',
  'images/white/arrow.png',
  'images/white/plus.png',
  'images/white/minus.png',
  'images/white/text-box.png',
  'images/white/done.png', 
  'images/white/save.png',
  'images/white/upload.png',
]

let blackControlButtonImages = [
  'images/black/title.png',
  'images/black/h3.png',
  'images/black/reg-para.png',
  'images/black/indent.png',
  'images/black/dbl-indent.png',
  'images/black/arrow.png',
  'images/black/plus.png',
  'images/black/minus.png',
  'images/black/text-box.png',
  'images/black/done.png', 
  'images/black/save.png',
  'images/black/upload.png',
]

const controlBtnsArray = Array.prototype.slice.call(controlBtn)
console.log(controlBtnsArray)

controlBtn.forEach(btn=>{
  btn.addEventListener('mouseover', function(){
    let index = controlBtnsArray.indexOf(btn)
    console.log(index)
    btn.style.backgroundColor="white"
    btn.style.borderColor="black"
    
    console.log(btn.firstChild)
    btn.firstChild.src=blackControlButtonImages[index]
})
})
  
controlBtn.forEach(btn=>{
  btn.addEventListener('mouseleave', function(){
    let index = controlBtnsArray.indexOf(btn)
    btn.style.backgroundColor="black"
    btn.style.borderColor="white"
    btn.firstChild.src=whiteControlButtonImages[index]


})
})



