function idleTimerFooter() {
    var footertime;
    window.addEventListener("load", resetTimerFooter);
    window.addEventListener("mousemove", resetTimerFooter);
    window.addEventListener("mousedown", resetTimerFooter);
    window.addEventListener("click", resetTimerFooter);
    window.addEventListener("scroll", resetTimerFooter);
    window.addEventListener("keypress", resetTimerFooter);

    function Room_next() {
        var footerwanted = document.getElementsByName("room");
        for (var i = 0; i < footerwanted.length; ++i) {
            if (footerwanted[i].checked == true) {
                if (i == footerwanted.length - 1)
                {
                    document.getElementsByName("room")[0].checked = true;
                } else {
                    document.getElementsByName("room")[i + 1].checked = true;
                }
                break;
                }
            }
        }
    function resetTimerFooter() {
        clearInterval(footertime);
        footertime = setInterval(Room_next, 60000);
    }
}
idleTimerFooter();