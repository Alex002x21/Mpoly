/*var locker_url = "https:\/\/locked4.com\/cl\/v\/8d9423";

    var iframecontents;
    var old_display;

    function og_load(options) {

        if (options) {
            var query_vars = Object.keys(options).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
            }).join('&');

            locker_url += '?' + query_vars;
        }

                    // preload
            var xhr = new XMLHttpRequest();
            xhr.open('GET', locker_url, true);
            xhr.onreadystatechange = function() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status!==200) {
                    iframecontents = false;
                    return;
                }

                iframecontents = this.responseText;
            };
            xhr.send();

            ogEditBody();
            }

            function ogEditBody() {

            var body = document.getElementsByTagName('body')[0];

            if(document.getElementsByTagName('body')[0] === undefined) {
                setTimeout(ogEditBody, 100);
                return;
            }

            var old_overflow = body.style.overflow;
            old_display = body.style.display;

                            body.style.display = 'none';
            
            ogMakeLocker();
        }

        function ogMakeLocker() {

            var body = document.getElementsByTagName('body')[0];

            if(iframecontents === undefined) {
                setTimeout(ogMakeLocker, 100);
                return;
            }

                            body.style.display = old_display;
            
            if(iframecontents !== false) {
                
                var body = document.getElementsByTagName('body')[0];

                var iframe = document.createElement('iframe');
                iframe.name = 'iframe';
                iframe.scrolling = 'yes';
                iframe.frameborder = '0';
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.position = 'fixed';
                iframe.style.top = 0;
                iframe.style.left = 0;
                iframe.style.zIndex = 16777271;
                iframe.id = 'test_iframe';
                body.appendChild(iframe);
                iframe = document.getElementById("test_iframe");
                iframe.contentDocument.write(iframecontents);
                
            }
        }

    
function og_getScriptURL() {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    var src = myScript.src;
    return src.split('?')[0];
}

function call_locker(options) {
    og_load(options);
}

function og_call(options) {
    og_load(options);
}

            og_load();
    
var ogblock = false;*/