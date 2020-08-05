class animate{
    
    constructor(debug){ // an array of list of ids of screens on the page
        
        // Blink engine detection
        
        this.DEBUG = debug;
        this.offsets = [];   
        this.screens = []; // screens's sizes  
        this.setAllScreens();

        
        
        this.span = document.createElement('span');
        this.span.classList.add('pageYOffset');
        this.span.setAttribute('title', `You're in setup mode.`);
        this.span.appendChild(document.createTextNode(`SETUP mode`));

        console.log(`Are you debugging?: ${this.DEBUG}`);
        if (this.DEBUG === true) {            
            document.body.appendChild(this.span);
        }
        
    }

    buildThresholdList(element) {
        let thresholds = [];
        let elementHeight = element.getBoundingClientRect().height;
        for (var i=1.0; i<=elementHeight; i++) {
            var ratio = i/elementHeight;
            thresholds.push(ratio);
        }

        return thresholds;
    }

    setAllScreens(){

        this.screens = document.querySelectorAll("[data-threshold]");

        let options = {
            root: null,
            rootMargin: '0px'
          }
          
        let callback = (entries, observer) => {
            
            entries.forEach(entry => {
            
                console.log(entry);
                if (this.DEBUG) {
                    entry.target.querySelector('.threshold').textContent = Math.floor(entry.intersectionRatio*100);
                }

                // if(!e.target.dataset.offset){
                    
                // }

                if (entry.target.dataset.threshold) {
                
                    if (entry.isIntersecting === true && entry.target.dataset.threshold <= Math.floor(entry.intersectionRatio*100)) {
                        console.log(entry.target.dataset.threshold);
                        console.log(entry.intersectionRatio*100);
                        // alert(1);
                        this.animateSection(entry.target);    
                    }    
                }else{
                    // intersectionRatio, by default set to 0.5 * 100 % 
                    if (entry.isIntersecting ===true && entry.isIntersecting >= 50) {
                        this.animateSection(entry.target);    
                    }    
                }
            });
        };
        
        

        this.screens.forEach((screen) => {
            
            options.threshold = this.buildThresholdList(screen);
            this.observer = new IntersectionObserver(callback, options);
            // let target = document.querySelector('.sec8');
            this.observer.observe(screen);
        })
        
          

          

        
        
        if (this.DEBUG) {
            console.log(this.screens);
            this.screens.forEach((screen) => {
                screen.style.position = 'relative';
                // screen.style.position = 'opacity';

                const threshold = document.createElement('span');
                threshold.classList.add('threshold');
                threshold.textContent = 0;
                threshold.setAttribute('title', 'data-threshold value is % part of the element is visible on the rootElement.');
                screen.appendChild(threshold);
            })
        }
        
        let attrs = [];

        for (let i = 0; i < this.screens.length; i++) {
            attrs[i] = this.screens[i].getAttribute('data-threshold');
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
        // this.offsets = attrs;       
            
    }

    animateSection(screen){
        if (this.DEBUG) {
            console.log(screen);    
        }
        
        const elements = screen.querySelectorAll('[data-animations]');
        // console.log(elements);
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