
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')


textarea.focus()



textarea.addEventListener('keyup', (e)=>{
    
    createTags(e.target.value)

    if(e.key === 'Enter'){
        e.target.value = ''

randomly()


    }


})



function createTags(AreaValue){

let valueArray = AreaValue.split(',').filter((item)=> item.trim() !=="").map((item) => item.trim())
tagsEl.innerHTML = ''

for(let VA of valueArray){
let span = document.createElement('span')
span.classList.add('tag')
span.innerHTML = VA
tagsEl.appendChild(span)

}


}


function randomly(){


let interval = setInterval(() => {
    
let randomPick = pickRandom()
console.log(randomPick );


}, 100);


}



function pickRandom(){

let randomTags = document.querySelectorAll('.tag') 

return randomTags[Math.floor(Math.random() * randomTags.length)]


}




// const tagsEl = document.getElementById('tags')
// const textarea = document.getElementById('textarea')

// textarea.focus()


// textarea.addEventListener('keyup', (e)=> valuing(e))
// textarea.innerHTML = ''


// function valuing(e){
// createTags(e.target.value)

// if(e.key == 'Enter'){
//     e.target.value = ''

//     randomSelect()
// }

// }



// function createTags(comingValues){
// let comingValueRcv = comingValues.split(',').filter((tag) => tag.trim() !== "").map((tag) => tag.trim())
// tagsEl.innerHTML = ''

// for(let CVR of comingValueRcv){
// console.log(CVR);
// let span = document.createElement('span')
// span.innerHTML = CVR
// span.classList.add('tag')
// tagsEl.appendChild(span)

// }

// }




// function randomSelect(){


//     let interval = setInterval(() => {

// let randomTag = pickRandom()

// if(randomTag !== undefined){

//     colorIt(randomTag)

//     setTimeout(() => {
        
//         UncolorIt(randomTag)
//     }, 100);

// }

// }, 100);

// setTimeout(() => {

//             clearInterval(interval)
    
//             setTimeout(() => {
//                 const randomTag = pickRandom()
          
//                 colorIt(randomTag)
    
//             }, 100)

//         }, 2000)

// }

// function colorIt(randomTag){
// randomTag.classList.add('highlight')

// }

// function UncolorIt(randomTag){
// randomTag.classList.remove('highlight')

// }


// function pickRandom(){

//     let randomTag = document.querySelectorAll('.tag')
//     return randomTag[Math.floor(Math.random() * randomTag.length)]


// }












