$(document).ready(function(){

    setTimeout(startShipAnim, 1000);

    function removeEndClasses() {
        //--remove the animation classes
        $( ".bd-ship" ).addClass( "bd-ship--hidden" );
        $( ".bd-ship" ).removeClass( "animated fadeOutBig" );
    }

    function removeStartClasses() {
        //--remove the animation classes
        $( ".bd-ship" ).removeClass( "animated fadeInLeft bd-ship--hidden" );
    }

    function endShipAnim(){
        //--add animation classes
        $( ".bd-ship" ).addClass( "animated fadeOutBig" );

        setTimeout(removeEndClasses, 2000);

        setTimeout(startShipAnim, 4000);

    }

    function startShipAnim() {

        $( ".bd-ship" ).removeClass( "bd-ship--hidden" );

        //--add animation classes
        $( ".bd-ship" ).addClass( "animated fadeInLeft" );

        setTimeout(removeStartClasses, 2000);

        setTimeout(endShipAnim, 10000);
    }

});