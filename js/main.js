// Tabs projects
const tabsBtn = document.querySelectorAll(".projects-list-item")
const tabsItems = document.querySelectorAll(".projects-content")

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        

        tabsBtn.forEach(function(item){
            item.classList.remove('projects-list-item-active');
        });

        tabsItems.forEach(function(item){
            item.classList.remove('projects-content-active');
        });

        currentBtn.classList.add('projects-list-item-active');

        currentTab.classList.add('projects-content-active');
    });
});

document.querySelector('.projects-list-item').click();


// Tabs persons
const ptabsBtn = document.querySelectorAll(".persons-radio")
const ptabsItems = document.querySelectorAll(".persons-element")

ptabsBtn.forEach(function(items) {
    items.addEventListener("click", function() {
        let currentBtnp = items;
        let tabIdp = currentBtnp.getAttribute('data-tab');
        let currentTabp = document.querySelector(tabIdp);
        

        ptabsBtn.forEach(function(items){
            items.classList.remove('persons-radio-active');
        });

        ptabsItems.forEach(function(items){
            items.classList.remove('persons-element-active');
        });

        currentBtnp.classList.add('persons-radio-active');

        currentTabp.classList.add('persons-element-active');
    });
});

document.querySelector('.persons-radio').click();
