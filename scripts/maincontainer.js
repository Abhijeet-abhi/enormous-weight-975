let left = document.getElementById("leftBtn");
  left.onclick=function(){
    let container = document.getElementById("box");
    sideScroll(container,'left',25,100,10)
  }
  let right = document.getElementById("rightBtn");
  right.onclick=function(){
    let container = document.getElementById("box");
    sideScroll(container,'right',25,100,10)
  }
  function sideScroll(element,direction,speed,distance,step){
    scrollAmount=0;
    let slideTimer = setInterval(function(){
        if(direction=="left"){
            element.scrollLeft -= step;
        }
        else{
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >=distance){
            window.clearInterval(slideTimer);
        }
    },speed); 
  }

  let index = 0;
    let slideshow = () => {
        let container = document.getElementById("slideShow");

        setInterval(() => {
            if(index === 3){
                index=0;
            }
            else if(index == 0){
                container.innerHTML=null;
                let img1 = document.createElement("img");
                img1.src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-1.png";
                let div1 = document.createElement("div");
                let h21 = document.createElement("h2");
                h21.innerText="What it feels like to have 48% more interview calls?";
                let p1 = document.createElement("p");
                p1.innerText="To get 5x more recruiter views on your profile";
                div1.append(h21,p1);
                container.append(img1,div1);
                console.log("1");
                index++;
            }
            else if(index == 1){
                container.innerHTML=null;
                let img2 = document.createElement("img");
                img2.src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-2.png";
                let div2 = document.createElement("div");
                let h22 = document.createElement("h2");
                h22.innerText="How to stand out from the millions of other resumes?";
                let p2 = document.createElement("p");
                p2.innerText="80% of resumes are rejected in 11 sec.";
                div2.append(h22,p2);
                container.append(img2,div2);
                console.log("2");
                index++;
            }
            else if(index == 2){
                container.innerHTML=null;
                let img3 = document.createElement("img");
                img3.src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-3.png";
                let div3 = document.createElement("div");
                let h23 = document.createElement("h2");
                h23.innerText="Get your profile to rank on top of recruiter searches";
                let p3 = document.createElement("p");
                p3.innerText="Unleash your profile's true capability to 10X your chances";
                div3.append(h23,p3);
                container.append(img3,div3);
                console.log("3");
                index++;
            }
            
        },5000)
    }

    slideshow();

    function scrolll(){
        let left = document.querySelector("#wfhjbox");
        left.scrollBy(350, 0)
    }
    function scrollr(){
        let right = document.querySelector("#wfhjbox");
        right.scrollBy(-350, 0)
    }

    function scrolll1(){
        let left1 = document.querySelector("#wfhjbox1");
        left1.scrollBy(350, 0)
    }
    function scrollr1(){
        let right1 = document.querySelector("#wfhjbox1");
        right1.scrollBy(-350, 0)
    }