class animate{
    
    constructor(debug){ // an array of list of ids of screens on the page
        
        // Blink engine detection
        
        this.DEBUG = debug;
        this.offsets = [];   
        this.screens = []; // screens's sizes  
        this.setAllScreens();

        
        this.span = document.createElement('span');
        this.span.classList.add('pageYOffset');
        this.span.setAttribute('title', `PXs value to animate a section/s after a user scrolls X PXs down.`);
        this.span.appendChild(document.createTextNode(`scroll to see window.pageYOffset value`));
        console.log(`Are you debugging?: ${this.DEBUG}`);
        if (this.DEBUG === true) {            
            document.body.appendChild(this.span);
        }
        window.addEventListener('scroll', (e) => {
            if (this.DEBUG) {
                // console.log(e);
                // const test = document.querySelector(`[data-offset="${this.offsets[0]}"]`);
                this.span.textContent = window.pageYOffset;                
            }
            document.querySelector(`[data-offset="${this.offsets[0]}"]`);
            let path = {};
            path.pageY = window.scrollY || e.path[1].pageYOffset;
            
            if (path) {

                for (let i = 0; i < this.offsets.length; i++) {
                    const offset = this.offsets[i];
                    if(offset <= path.pageY){
                        this.animateScreen(document.querySelector(`[data-offset="${this.offsets[i]}"]`));
                    }
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
        console.log(this.screens);
        if (this.DEBUG) {
            console.log(this.screens);
        }
        
        let attrs = [];

        for (let i = 0; i < this.screens.length; i++) {
            attrs[i] = this.screens[i].getAttribute('data-offset');
        }
        if (attrs.length === 0) {
            console.log(0);
            const alert = document.createElement('div');
            alert.classList.add('animate');
            alert.classList.add('modal-alert');
            alert.appendChild(document.createTextNode('You have not used any animation of scrollAnimator. You need to unlink the lib, if you don`t use it!'));
            document.body.appendChild(alert);
            document.querySelector('.modal-alert').classList.add('pop-up');
        }
        this.offsets = attrs;       
            
    }

    animateScreen(screen){
        if (this.DEBUG) {
            console.log(screen);    
        }
        
        const elements = screen.querySelectorAll('[data-animations]');
        console.log(elements);
        if(elements.length === 0){
            // console.log(screen);            
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
            console.log(screen);
            if (screen.hasAttribute('data-animations')) {
                const classNames = screen.getAttribute('data-animations');
                
                let classes = classNames.split(' ');
                classes.forEach(className => {
                    if (!screen.classList.contains(className)) {
                        screen.className += ' ' + className;
                        screen.setAttribute('data-animations', '');
                    }
                });
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