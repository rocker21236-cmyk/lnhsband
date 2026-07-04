const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
if(menu){menu.addEventListener('click',()=>links.classList.toggle('open'));}
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
