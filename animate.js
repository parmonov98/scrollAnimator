class animate{
    
    constructor(debug){ // an array of list of ids of screens on the page
        
        // Blink engine detection
        
        this.DEBUG = debug;
        this.offsets = [];   
        this.screens = []; // screens's sizes  
        this.setAllScreens();

        window.addEventListener('scroll', (e) => {
            if (this.DEBUG) {
                console.log(e);
                //console.log(e.path[1].pageYOffset);
                const test = document.querySelector(`[data-offset="${this.offsets[0]}"]`);
                console.log(test);            
            }
            document.querySelector(`[data-offset="${this.offsets[0]}"]`);

            for (let i = 0; i < this.offsets.length; i++) {
                const offset = this.offsets[i];
                if(offset <= e.path[1].pageYOffset || offset <= e.pageY){
                    this.animateScreen(document.querySelector(`[data-offset="${this.offsets[i]}"]`));
                }
            }
        });
    }

    checkBrowser(){
        let browsers = [
            {name:opera,isThis: false}, 
            {name:firefox,isThis:false},
            {name:chrome,isThis:false},
            {name:IE,isThis:false},
            {name:Edge,isThis:false},
            {name:safari,isThis:false}
        ];
        // Chrome 1 - 71
        var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        browsers[0].isThis = isChrome;

        // Opera 8.0+
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        browsers[0].isThis = isOpera;
        
        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';
        browsers[0].isThis = isFirefox;
        // Safari 3.0+ "[object HTMLElementConstructor]" 
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        browsers[0].isThis = isSafari;
        // Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        browsers[0].isThis = isIE;
        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
        browsers[0].isThis = isEdge;
        
        browsers.forEach(browser => {
            if (browser.isThis) {
                return browser.name;
            }else
                return null;
        });
    }


    setAllScreens(){
        this.screens = document.querySelectorAll("[data-offset]");
        if (this.DEBUG) {
            console.log(this.screens);
        }
        
        let attrs = [];

        for (let i = 0; i < this.screens.length; i++) {
            attrs[i] = this.screens[i].getAttribute('data-offset');
        }

        this.offsets = attrs;       
            
    }

    animateScreen(screen){
        if (this.DEBUG) {
            console.log(screen);    
        }
        
        const elements = screen.querySelectorAll('[data-animations]');

        if(elements.length === 0){
            console.log(screen);            
            if(screen.getAttribute('data-animations').trim() != ''){
                const classNames = screen.getAttribute('data-animations');
                
                let classes = classNames.split(' ');
                classes.forEach(className => {
                    if (!screen.classList.contains(className)) {
                        screen.className += ' ' + className;
                        screen.setAttribute('data-animations', '');
                    }
                });
                
            }
            
            
        }else{
            
            if (this.DEBUG) {
                console.log(elements);
            }
            
            elements.forEach(el => {
                
            if(el.getAttribute('data-animations').trim() != ''){

                const classNames = el.getAttribute('data-animations');
                let classes = classNames.split(" ");               
                classes.forEach(className => { // className
                    if (!el.classList.contains(className)) {
                        el.className += ' ' + el.getAttribute('data-animations');
                        el.setAttribute('data-animations', '');
                    }                     
                });
            }
                
            });
        }
        

    }
}