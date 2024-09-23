const target = document.querySelectorAll('.target');

const options =  {
    threshold : 0.3 //sayfa içinde görünme oranı
}

const callBack =
  (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }else{
            entry.target.classList.remove('active');
        }
    })
  }
  
const observer = new IntersectionObserver(callBack, options);
target.forEach((target) =>{
    observer.observe(target)
})