const yourDate = new Date("2023-02-19T00:00:26"),
// music = ['ngamphaohoa', 'noinaycoanh', 'nguoiamphu'];
music = ['ngamphaohoa'];
document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";

      document.querySelector("date1").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);

// js for preload
$(document).ready(function() {
      
            $('#preload').delay(6000).fadeOut('fast', function() {
                $('body').removeClass('preloading');
            });


        let mailBox = document.querySelector('.mail')
        var mySong = document.getElementById("song")
        mailBox.onclick = function(){
            if(mySong.paused){
                mySong.play()
            }
            // mailBox.classList.toggle('active')
            // boxmail.classList.add('active')
            document.querySelector('.ss-op').style.display = 'none';
 
            if(mySong.paused){
                mySong.play()
            }
        }
    });
    
   

// js for text

    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2")
  };
  
//   const texts = [
//       "Anh",
//       "Yêu",
//       "Em",
//     //   "Bé",
//     //   "Của",
//     //   "Anh",
//     //   "Nhiềuu",
//       "♥♥♥",
//     //   "by @ck của em"
//   ];
  
  const morphTime = 1;
  const cooldownTime = 0.18;
  
  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;
  
  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  
  function doMorph() {
      morph -= cooldown;
      cooldown = 0;
  
      let fraction = morph / morphTime;
  
      if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
      }
  
      setMorph(fraction);
  }
  
  function setMorph(fraction) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  }
  
  function doCooldown() {
      morph = 0;
  
      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";
  
      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
  }
  
  function animate() {
      requestAnimationFrame(animate);
  
      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;
  
      cooldown -= dt;
  
      if (cooldown <= 0) {
          if (shouldIncrementIndex) {
              textIndex++;
          }
  
          doMorph();
      } else {
          doCooldown();
      }
  }
  
  animate();
  
  
  
  
  
  
  
  
  
  //hoa roiiii
  
  