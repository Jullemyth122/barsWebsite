gsap.registerPlugin(ScrollTrigger,CSSRulePlugin)
const slides = document.querySelectorAll('.landslide')
const titleHide = document.querySelectorAll('.introduction .hide h1')
const starter = gsap.timeline({
    ease:'easeInOutQuint'
})

console.log(slides.length)
starter.fromTo(
    slides,
    1,
    {width:'0%'},
    {width:"5.1%",
        stagger:{
            each:0.05,
            from:"center"
        },
    }
)


titleHide.forEach((elem,i) => {
    elem.innerHTML = elem.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
})

const newWrapper2 = document.querySelectorAll('.introduction .hide h1')
newWrapper2.forEach((elem,i) => {
    console.log(elem)
    starter.to(
        `.introduction .hide h1:nth-child(${i+1}) .letter`,1,
        {
            y:"0%",
            stagger:0.05
        },"-=0.25"
    )
})

const rule = CSSRulePlugin.getRule(`.introduction .title:after`)
starter.to(
    rule,
    {
        duration:1,
        cssRule:{
            width:"100%",
        }
    }
)
starter.to(
    '.img',{
        duration:0,
        opacity:1
    }
)
starter.to(
    '.imghide',{
        duration:0.5,
        y:"100%"
    }
)

const cursorIntro = document.querySelector('.cursor-intro')
const introContainer = document.querySelector('.introduction')

introContainer.addEventListener("mousemove",function s(e) {
    var rect = introContainer.getBoundingClientRect()
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    cursorIntro.style.opacity = "1"
    cursorIntro.style.left = x + "px"
    cursorIntro.style.top = y + "px"
})
introContainer.addEventListener("mouseleave", () => {
    cursorIntro.style.opacity = "0"
})

gsap.fromTo('.img',{
    width:"40%",
    height:"40%"
},{
    left:"0%",
    top:"0%",
    width:"100%",
    height:"100%",
    scrollTrigger:{
        trigger:'.introduction',
        scrub:true,
        pin:true,
        end: () => `${introContainer.clientHeight*2}`
    }
})

const pictures = document.querySelectorAll('.box .slider')
const cursor = document.querySelector('.cursor')
const cursorInside = document.querySelector('.cursor .cursor-inside')
const cursorInside2 = document.querySelector('.cursor .cursor-inside2')
const container = document.querySelector('.container')
const box = document.querySelectorAll('.box')

container.addEventListener("mousemove",function s(e){
    
    var rect = container.getBoundingClientRect()
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; 
    cursor.style.opacity = "1"
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

})

container.addEventListener("mouseleave",() => {
    cursor.style.opacity = "0"
})

// console.log(box.childNodes)


box.forEach((elem_,i)=>{

    const text = elem_.children[1].children[0].children[0]
    // console.log(text.children[0].children[0])
    console.log(text.dataset.color)
    text.addEventListener("mouseover",() => {
        text.style.color = "#fff"
        cursorInside.style.width = "100%"
        cursorInside.style.height = "100%"
        cursorInside2.style.width = "50%"
        cursorInside2.style.height = "50%"
        cursorInside2.style.background = text.dataset.color
    })
    text.addEventListener("mouseleave",() => {
        text.style.color = "#b5a23a"
        cursorInside.style.width = "10%"
        cursorInside.style.height = "10%"
        cursorInside2.style.width = "0%"
        cursorInside2.style.height = "0%"
        cursorInside2.style.background = "#fff"
    })

    const pictures_ = elem_.childNodes[5].childNodes

    const pictures_2 = elem_.children[2]

    const pictures = elem_.childNodes[5].children
    
    console.log(elem_.childNodes[5])
    
    // elem_.childNodes[5].addEventListener("mouseover",() => {
        // setInterval(() => {
        elem_.childNodes[5].addEventListener('mousemove',s)
        // },5000)
        function s(e) {
            // console.log(elem_.childNodes[5])
            var rect = elem_.childNodes[5].getBoundingClientRect();
    
            var x = e.clientX - rect.left; //x position within the element.
            var y = e.clientY - rect.top;  //y position within the element.
    
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
