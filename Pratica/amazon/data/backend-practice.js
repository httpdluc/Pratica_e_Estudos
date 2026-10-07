const back = new XMLHttpRequest();

back.addEventListener('load', () => {
  console.log(back.response);
}); 

back.open('GET', 'https://supersimplebackend.dev');
back.send();
