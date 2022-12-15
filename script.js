const addEleDivBtn = document.querySelector('#add-ele-div')
const addImgBtn = document.querySelector('#add-img')
const contentEle = document.querySelector('.content-div')

//Add Ele-Div function
let addEleDiv =function() {

}

addEleDivBtn.addEventListener('click', function() {
    const eleDiv =document.createElement('div')
    eleDiv.classList.add('ele-div')
    contentEle.appendChild(eleDiv)
    $(eleDiv).draggable()
})


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