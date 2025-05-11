
        function getUrlParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }


        window.onload = function() {
            const url = getUrlParameter('url'); 

            if (url) {

                document.getElementById('gameframe').src = decodeURIComponent(url);
            } else {

                document.getElementById('gameframe').src = '/404.html';
            }
        }


        function goFullscreen() {
            const iframe = document.getElementById('gameframe');
            
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) { 
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { 
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { 
                iframe.msRequestFullscreen();
            }
        }
