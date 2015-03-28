/*
 * (C) 2013-2015 Muthiah Annamalai <urbantamil.com>
 */

 /*
 * Section for onscreen keyboard interaction with form widgets
 */
// function definitions
var showKb = function (widgetName) {
    $(widgetName).keyboard({layout:'tamil-tamil99-mod',
                            alwaysOpen: true,
                            usePreview: true});
};

var destroyKb = function( widgetName ) {
    if ( $(widgetName).data('keyboard') )
        $(widgetName).getkeyboard().destroy();
};

// function changes onscreen keyboard behavior based on checkbox state
var toggleOnScreenKBD = function(){
    var kbd_state = $('#kbd_show').prop('checked');
        
    if ( !kbd_state ) {
        //close kbd and exit fcn
        func = destroyKb;
    } else {
        //redo and assign the keyboard jQuery hookups
        func = showKb;
    }    
};

/*
 *  setup the hooks
 */
function visual_kbd_init() {    
    showKb();
    $(document).tooltip();
};

document.addEventListener('DOMContentLoaded', function () {
  tamil_setup();
  visual_kbd_init();
  $('#word').keyboard({language:'tamil',layout:'tamil-tamil99-mod',alwaysShow:true});
});
