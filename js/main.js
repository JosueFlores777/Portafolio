const nav = document.querySelector('.nav'),
        navList = nav.querySelectorAll('li'),
        totalnavali = navList.length;
          for (let i = 0; i < totalnavali; i++) {
           const a=navList[i].querySelector("a");
           a.addEventListener("click",function(){
            for(let j=0; j<totalnavali;j++){
                navList[j].querySelector("a").classList.remove("active");
              
              }
              this.classList.add("active");
              showSection(this);
           })
          }
function showSection(element){
  console.log(element.getAttribute("href").split("#"));
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  toggleAside();
});

function toggleAside() {
  aside.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
  var galleryItems = document.querySelectorAll('.art-grid-item');
  galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var url = item.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
});