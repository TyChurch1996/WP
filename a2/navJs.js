 function loadInfo(showndata) {
     var shown = document.getElementById(showndata);
     var home = document.getElementById('homeInfo');
     var intro = document.getElementById('intro');
     var additionalCommentsIntro = document.getElementById('homeInfo');
     var letters = document.getElementById('lettersAndPost');
     var battleAction = document.getElementById('descriptionsOfBattleAction');
     var places = document.getElementById('places');
     var links = document.getElementById('linksToRelatedMaterial');
     var comments = document.getElementById('Comments');

     home.style.display = "none";
     intro.style.display = "none";
     additionalcommentsintro.style.display = "none";
     letters.style.display = "none";
     battleAction.style.display = "none";
     places.style.display = "none";
     links.style.display = "none";
     comments.style.display = "none";

     shown.style.display = "inline-block";
     if (shown == intro) {

         additionalcommentsintro.style.display = "block";
     }


 }
