const menuItem = [...document.getElementsByClassName('menu__item')];
const submenu = [...document.getElementsByClassName('submenu')];
const menuItemTitle = [...document.getElementsByClassName('menu__item-title')];
menuItem.forEach(function(item, i) {
	item.addEventListener('mouseover' , event => {
		submenu[i].classList.add('submenu-active');
		menuItemTitle[i].classList.add('menu__item-title-active');
		submenu[i].addEventListener('mouseout', event => {
        	submenu[i].classList.remove('submenu-active');
        	menuItemTitle[i].classList.remove('menu__item-title-active');
    	});
	});
});
