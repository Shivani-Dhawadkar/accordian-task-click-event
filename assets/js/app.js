//alert("hello");
 let cl = console.log;


 const allCardHeader = [...document.querySelectorAll(".accoGroup .card-header")];

 const onTabHeadHandler = (eve) =>{
    cl(eve.target)
    eve.target.nextElementSibling.classList.toggle('active')
 }










 allCardHeader.forEach(heading => {
    heading.addEventListener('click', onTabHeadHandler)
 })