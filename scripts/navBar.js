  
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.getElementById('nav').classList.toggle('active');
});

document.querySelector('.nav-title').addEventListener('mouseenter', () => {
  document.querySelector('.left-bracket').style.paddingRight = "8px";
  document.querySelector('.left-bracket').style.color = "#D34759";
  document.querySelector('.right-bracket').style.paddingLeft = "8px";
  document.querySelector('.right-bracket').style.color = "#D34759";

});

document.querySelector('.nav-title').addEventListener('mouseleave', () => {
  document.querySelector('.left-bracket').style.paddingRight = "0px";
  document.querySelector('.left-bracket').style.color = "#323648";
  document.querySelector('.right-bracket').style.paddingLeft = "0px";
  document.querySelector('.right-bracket').style.color = "#323648";
});


for (let i=0; i<100; i++) {
  console.log( i + '👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀');
}
