let listItems = document.getElementsByTagName('li');
const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < listItems.length; i ++) {
  console.log(listItems);
  listItems[i].style.color = colors[i]
}
