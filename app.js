const burger = document.querySelector('.navbar svg')

burger.addEventListener("click",()=>
{
if(burger.classList.contains('active'))
{
    gsap.to('.link',{x:"100%"});
    gsap.to('.line',{stroke:"white"});
}
else
{
    gsap.to('.link',{x:"0%"});
    gsap.to('.line',{stroke:"black"});
    gsap.fromTo('.link a', {y:0,opacity:0}, {y:15,opacity:10,delay:0.5,stagger:0.25})
}
burger.classList.toggle('active');
});

const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",

    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
});