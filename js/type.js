
const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleleting = false;
  }
  
  TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;
  //get the current text
    const fullTxt = this.words[current];
  //console.log(fullTxt);
  
  
    if(this.isDeleleting) {
    //Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  }else {
  //Add char
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  
  this.txtElement.innerHTML = ` <span style="border-right: 0.2rem solid yellow;" class="txt"> ${this.txt}</span>`;
  let typeSpeed = 300;
  if(this.isDeleleting) {
    typeSpeed /= 2;
  
  }
  
  if(!this.isDeleleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
  
        this.isDeleleting = true;
  } else if(this.isDeleleting && this.txt === '') {
        this.isDeleleting = false;
        //move to next word
        this.wordIndex++;
        //pause before typing
        typeSpeed = 250;
  }
    setTimeout(() => this.type(), typeSpeed);
  }
  
  
  //init
  document.addEventListener('DOMContentLoaded', init);
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-word'));
    const wait = txtElement.getAttribute('data-wait');
  
    new TypeWriter(txtElement, words, wait);
  }

  var close = document.getElementsByClassName("closebtn");
var i;
  close.onclick = function(){
    var div = document.getElementById("alert");
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }

  





  