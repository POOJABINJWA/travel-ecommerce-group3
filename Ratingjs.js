const stars = document.querySelectorAll(".stars i ");
console.log(stars);

// using loop
 stars.forEach((star , index1) => {
    star.addEventListener("click",() =>{

 stars.forEach((star , index2) =>{
   index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
 });

    });
 });
