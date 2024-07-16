document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.nav-item');
    var tabContents = document.querySelectorAll('.tab');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
            }
            this.classList.add('active');

            var target = this.getAttribute('data-tab');
            for (var k = 0; k < tabContents.length; k++) {
                tabContents[k].classList.remove('active');
                if (tabContents[k].id === target) {
                    tabContents[k].classList.add('active');
                }
            }
        });
    }
});
