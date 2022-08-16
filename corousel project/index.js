
console.log("Hello world");
let slideCount=1;


function moveToslide(slideNumber)
{
    let margin=slideNumber*100;
    document.querySelector('.slider').style.transition="0.5s";
    document.querySelector('.slider').style.marginLeft=-margin+"%";
   
}

function nextSlide()
{

        slideCount++;
        moveToslide(slideCount);
   if(slideCount==5)
    {
        slideCount=1;
        setTimeout(function(){
            document.querySelector('.slider').style.marginLeft="-100%";
            document.querySelector('.slider').style.transition="0s";
        },500)
    }
}
function prevSlide()
{
    slideCount--;
    moveToslide(slideCount);
    if(slideCount==0)
    {
        slideCount=4;
        setTimeout(function(){
            document.querySelector('.slider').style.marginLeft="-400%";
            document.querySelector('.slider').style.transition="0s";
        },500)
    }
}
