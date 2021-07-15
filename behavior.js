function reactiveNav () {
    console.log('testing')
    var x = document.getElementById('main_nav');
    if(x.className === 'main_nav')  {
        x.className += 'responsive';
} else  {x.className = 'main_nav';}}