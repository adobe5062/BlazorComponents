document.addEventListener('mouseup', function (e) {
    var button = document.getElementById('dropdown-button');
    var menu = document.getElementById('dropdown-menu');
    if (!menu.contains(e.target) && !button.contains(e.target)) {
            menu.hidden = true;
    }
});

document.getElementById("dropdown-button").addEventListener(
    "click",
    () => {
        var hidden = document.getElementById("dropdown-menu").hidden;
       
        if (hidden) {
            document.getElementById("dropdown-menu").hidden = false;
        } else {
            document.getElementById("dropdown-menu").hidden = true;
        }
    },
    false
);