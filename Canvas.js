
let images = []
let imagesLoaded = 0;
let canvas = document.getElementById('frame')
let context = canvas.getContext('2d');

let frames = {
    currentindex: 0,
    maxindex: 49
};

function preloadImages() {
    for (let i = 1; i <= frames.maxindex; i++) {
        console.log(i)
        let imageurl = `/canvas/ese-hero-sequence${i.toString().padStart(2,"0")}.webp`

        let img = new Image();
        img.src = imageurl
        img.onload = function () {
            imagesLoaded++;
            if (imagesLoaded === frames.maxindex) {
                loadImage(frames.currentindex);
                StartAnimation()
            }
        }
        images.push(img)

    }
}

function loadImage(index) {
    if (index >= 0 && index <= frames.maxindex) {
        let img = images[index];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width
        const scaleY = canvas.height / img.height

        const scale = Math.max(scaleX, scaleY)

        const newWidth = img.width * scale
        const newheight = img.height * scale

        const offsetX = (canvas.width - newWidth) / 2
        const offsetY = (canvas.height - newheight) / 2

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.imageSmoothingQuality = "high"
        context.imageSmoothingEnabled = true
        context.drawImage(img, offsetX, offsetY, newWidth, newheight)

        frames.currentindex = index

    }
}


function StartAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".parent",
        scroller:"#main",
            start: "top top",
            scrub: 2,
            // markers: true
        }
    })
   tl.to(frames,{
    currentindex: frames.maxindex,
    onUpdate:function(){
        loadImage(Math.floor(frames.currentindex))
    
    }
   })
}


preloadImages()