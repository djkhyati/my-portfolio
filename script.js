console.log("Javasript is working!")
function changeColor() {
    document.body.style.backgroundColor="lightblue";
}
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', ()=>{document.body.classList.toggle('dark-theme');
      //agar dark theme hai to text xhange kare
      if(document.body.classList.contains('dark-theme'))
        {
          btn.textContent= "Switch to Light Mode";
      }
      else{
        btn.textContent="Switch to Dark Mode"
      }

});
const contactForm= document.getElementById('contact-form');
contactForm.addEventListener('submit',function(event){
    event.preventDefault();   //page ko relode hone se rokta hai
    //popup message
    alert("Thank You! YOur message has been sent to Khyati successfully. ✨");
    //Form fields ko reset karne k liye
    contactForm.reset();

});
