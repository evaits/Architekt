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

