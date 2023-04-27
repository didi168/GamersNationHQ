// let menu=document.querySelector(".men");
// let menuBar=document.querySelector(".navMenu");
// let cancel=document.querySelector(".cancel");


// let navMenu=[
//   document.getElementsByTagName("h1")[1],
//   doument.getElementsByTagName("nav")[1],
// ]

function openMenu(){

  document.getElementsByClassName("navMenu")[0].style.right="0%";
  document.getElementsByClassName("navMenu")[0].style.transition="0.4s";
  document.getElementsByClassName("cover")[0].style.display="block";

}








function closeMenu(){
  document.getElementsByClassName("navMenu")[0].style.right="-70%";
  document.getElementsByClassName("navMenu")[0].style.transition="0.4s";
  document.getElementsByClassName("cover")[0].style.display="none";

}