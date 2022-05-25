const pictures = document.querySelectorAll('.box .slider')
const cursor = document.querySelector('.cursor')
const container = document.querySelector('.container')
const box = document.querySelectorAll('.box')


container.addEventListener("mousemove",function s(e){
    
    var rect = container.getBoundingClientRect()
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    console.log(x,y)
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

})



box.forEach((elem_,i)=>{

    const pictures_ = elem_.childNodes[5].childNodes
    // const pictures_2 = elem_.childNodes[5].children
    const pictures_2 = elem_.children[2]


    const pictures = elem_.childNodes[5].children
    console.log(elem_.childNodes[5])
    
    // elem_.childNodes[5].addEventListener("mouseover",() => {
        // setInterval(() => {
        elem_.childNodes[5].addEventListener('mousemove',s)
        // },5000)
        function s(e) {
            console.log(elem_.childNodes[5])

            var rect = elem_.childNodes[5].getBoundingClientRect();
            console.log(rect)
            var x = e.clientX - rect.left; //x position within the element.
            var y = e.clientY - rect.top;  //y position within the element.
    
            console.log(x,y)
            console.log(e.clientX,e.clientY)

            var timesRun = 0;
            var interval = setInterval(function(){
                timesRun += 1;
                if(timesRun === pictures.length){
                    clearInterval(interval);
                }
                pictures[timesRun - 1].style.left = x + "px"
                pictures[timesRun - 1].style.top = y + "px"
            }, 200);

            for (let i = 0; i < pictures.length; i++) {
                gsap.to(pictures[i],{
                    opacity:'1',
                    ease:"none",
                    duration:0.5,
                })
                
            }
        }
    // })
    
    elem_.childNodes[5].addEventListener("mouseleave",() => {
        for (let i = 0; i < pictures.length; i++) {
            gsap.to(pictures[i],{
                opacity:'0',
                ease:"none",
                duration:1,
            })   
        }

    })

})











// gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

// const pictures = document.querySelectorAll('.box .slider')
// const cursor = document.querySelector('.cursor')
// const container = document.querySelector('.container')
// const box = document.querySelectorAll('.box')


// container.addEventListener("mousemove",function s(e){
    
//     // var rect = container.getBoundingClientRect()
//     // var x = e.clientX - rect.left; //x position within the element.
//     // var y = e.clientY - rect.top; 
//     // console.log(x,y)
//     // cursor.style.left = x + "px";
//     // cursor.style.top = y + "px";

// })

// box.forEach((elem_,i)=>{

//     elem_.addEventListener("mouseover",() => {
//         elem_.addEventListener("mousemove",function r(e) {
//             var rect = container.getBoundingClientRect()
//             var x = e.clientX - rect.left; //x position within the element.
//             var y = e.clientY - rect.top; 
//             console.log(x,y)
//             cursor.style.left = x + "px";
//             cursor.style.top = y + "px";
//         })
//         console.log(elem_)
//     })
    
//     console.log(elem_)
    
//     const pictures_ = elem_.childNodes[5].childNodes
    
//     console.log(elem_.childNodes[5].childNodes)

//     elem_.childNodes[5].addEventListener("mouseover",() => {
//         elem_.childNodes[5].addEventListener('mousemove',s)
//         function s(e) {
//             var rect = elem_.childNodes[5].getBoundingClientRect();
//             console.log(rect)
//             var x = e.clientX - rect.left; //x position within the element.
//             var y = e.clientY - rect.top;  //y position within the element.
//             console.log(x,y)
//             console.log(e.clientX,e.clientY)

//             var timesRun = 0;
//             var interval = setInterval(function(){
//                 timesRun += 1;
//                 if(timesRun === 60){
//                     clearInterval(interval);
//                 }
//                 pictures_[timesRun - 1].style.left = x + "px"
//                 pictures_[timesRun - 1].style.top = y + "px"
//             }, 100);
//             pictures_.forEach((elem,i) => {
//                 console.log(elem)
//                 gsap.to(elem,{
//                     opacity:'1',
//                     ease:"none",
//                     duration:1,
//                 })
//             })
//         }
//     })
    
//     elem_.childNodes[5].addEventListener("mouseleave",() => {
//         pictures_.forEach((elem,i) => {
//             gsap.to(elem,{
//                 opacity:'0',
//                 ease:"none",
//                 duration:1,
//             })
//         })
//     })

// })
