function load(){
  toggleSelected(0);
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("sidebar-toggle").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("sidebar-toggle").style.marginLeft = "0";

}

var coll = document.getElementsByClassName("exp-collapsibleBtn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var selected=-1;

function toggleSelected(index){
  const tabItems = document.getElementsByClassName('prj-tab-item');
  const tabs = document.getElementsByClassName('prj-tab');

  var limit = Math.min(tabItems.length, tabs.length);

  if(index==null || index<0 || index>= limit){
    return;
  }

  if(selected!=null && selected>=0 && selected<limit){
    tabItems[selected].classList.remove('selected');
    tabs[selected].classList.remove('selected');
  }
  tabItems[index].classList.add('selected');
  tabs[index].classList.add('selected');
  selected=index;
}
