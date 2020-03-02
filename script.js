const menuItem = [...document.getElementsByClassName('menu__item')];
const submenu = [...document.getElementsByClassName('submenu')];

menuItem.forEach(function(item, i) {
	item.addEventListener('mouseover' , event => {
		submenu[i].classList.add('submenu-active'); 
		submenu[i].addEventListener('mouseout', event => {
        	submenu[i].classList.remove('submenu-active');
    	});
	});
});
