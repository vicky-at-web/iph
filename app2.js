window.addEventListener('scroll', function(){
    const scrolltop = document.documentElement.scrollTop;
    console.log(document.documentElement.scrollTop);
    const one = document.querySelector('.one');
    const onescr = 10< scrolltop > -110
    one.style.transform = `matrix(1,0,0,1,${scrolltop},0)`;
    const two = document.querySelector('.two');
    two.style.transform = `matrix(1,0,0,1,-${scrolltop},0)`;
    const three = document.querySelector('.three');
    three.style.transform = `matrix(1,0,0,1,-${scrolltop},0)`;
    if(scrolltop >200){
        one.style.transform = `matrix(1,0,0,1,130,0)`;
        two.style.transform = `matrix(1,0,0,1,0,0)`;
        three.style.transform = `matrix(1,0,0,1,-130,0)`;

    }
})