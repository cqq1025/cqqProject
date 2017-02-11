var line = new Vivus(
    'draw1', 
    {type: 'oneByOne', duration: 50, start: 'autostart', dashGap: 20, forceRender: false},
    function () {
        if (window.console) {
            console.log('Animation finished. [log triggered from callback]');
        }
    })
