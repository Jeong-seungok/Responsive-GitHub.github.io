const toggles = document.querySelectorAll('.toggle');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', function () {
    toggleElements();
});

function toggleElements() {
    [].forEach.call(toggles, function (toggle) {
        toggle.classList.toggle('on');
    });
};

window.addEventListener('resize',function(){
    if(window.innerWidth>1024){
        offElements();
    }
});

function offElements(){
    [].forEach.call(toggles, function (toggle) {
        toggle.classList.remove('on');
    });
}