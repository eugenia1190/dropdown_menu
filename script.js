const menuItem = [...document.getElementsByClassName('menu__item')];
const menuItemTitle = [...document.getElementsByClassName('menu__item-title')];
const submenu = [...document.getElementsByClassName('submenu')];

menuItemTitle.forEach(function(elem, i) {
	menuItemTitle[i].addEventListener('mouseover' , event => {
		submenu[i].classList.add('submenu-active'); 
		menuItem[i].addEventListener('mouseout', event => {
        	submenu[i].classList.remove('submenu-active');
    	});
	});
});
