import './ui.css'

var icons = document.querySelectorAll(".icon");
icons.forEach(icon => {
  icon.addEventListener("click" , function(e){
    parent.postMessage({ pluginMessage: { type: 'load-svg', icon : this.innerHTML , name : this.getAttribute("data-name") } }, '*')
  })  
});


var all_icons = document.querySelectorAll("[data-name]");
let icons_list = [];
all_icons.forEach(icon => {
  let name = icon.getAttribute("data-name");
  if(icons_list.filter(k => k == name ).length == 0){
    icons_list.push(name);
  }
});

var search = document.getElementById("search") as HTMLInputElement;
search.addEventListener("keyup" , function(e){
  // console.log(this.value);
  let val = this.value.toLowerCase();
  let show_icons = icons_list.filter( k => k.toLowerCase().includes (val));
  renderIcons(show_icons);

})

function renderIcons(selected_icons){
  all_icons.forEach(icon => {
    icon.classList.add("hide");
  });
  selected_icons.forEach(icon => {
    let el = document.querySelectorAll("[data-name="+icon+"]");
    el.forEach(icon_el => {
      icon_el.classList.remove("hide");
    });
  });
}