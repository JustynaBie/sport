$(function(){

  var athletsListItems = document.querySelectorAll(".athlets__list__item"); //array of all athlets__list__item
  var counterAthlets = 0; //variable to indicate the athlets__list__item which is active
  var athletsIndicator = document.querySelector(".athlets__indicator").children; //array of athlets__indicator
  var smallesWidth = false; //variable which is true when the widh of window is less than 440px

//function to check if the max-width is less than 440px
  function testMatch(){
    var mW = window.matchMedia("(max-width: 440px)");
    mW.addListener(widthChange);
    widthChange(mW);
  }

  function widthChange(mW){
      if(mW.matches){
        smallesWidth = true;
      }else{
        smallesWidth = false;
      }
  }

  testMatch();

//function which give event on click to athlets__list__item
  function changeAthletsInfo(){
    for(var i=0; i<athletsListItems.length; i++){
        athletsListItems[i].addEventListener("click", function(event){
          if(smallesWidth === true){
            athletsListItems[counterAthlets].classList.remove("list-item--active");
            athletsIndicator[counterAthlets].classList.remove("active");
            if(counterAthlets === 2){
              counterAthlets = -1;
            }
            counterAthlets++
            athletsListItems[counterAthlets].classList.add("list-item--active");
            athletsIndicator[counterAthlets].classList.add("active");
          }
        });
      }
  };
changeAthletsInfo();

});
