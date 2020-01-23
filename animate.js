class animate{
    screens = []; // screens's sizes  
    offsets = [];   
    DEBUG = false;

    constructor(){ // an array of list of ids of screens on the page
        this.setAllScreens();

        window.addEventListener('scroll', (e) => {
            //console.log(e);
            console.log(e.path[1].pageYOffset);
            
            const test = document.querySelector(`[data-offset="${this.offsets[0]}"]`);
            //console.log(test);
            

            document.querySelector(`[data-offset="${this.offsets[0]}"]`)
            for (let i = 0; i < this.offsets.length; i++) {
                const offset = this.offsets[i];
                if(offset <= e.path[1].pageYOffset){
                    this.animateScreen(document.querySelector(`[data-offset="${this.offsets[i]}"]`));
                }
            }
        });
    }

    setAllScreens(){
        this.screens = document.querySelectorAll("[data-offset]");
        //console.log(this.screens);
        let attrs = [];

        for (let i = 0; i < this.screens.length; i++) {
            attrs[i] = this.screens[i].getAttribute('data-offset');
        }

        this.offsets = attrs;       
            
    }

    animateScreen(screen){
        //console.log(screen);

        const elements = screen.querySelectorAll('[data-animations]');
        if(elements.length === 0){
            const classes = screen.getAttribute('data-animations');
            if (screen.classList.contains(classes)) {
                
            }else{
                screen.className += ' ' + classes;
            }
            
        }else{
            //console.log(elements);
            elements.forEach(el => {
                if (!el.classList.contains(el.getAttribute('data-animations'))) {
                    el.className += ' ' + el.getAttribute('data-animations');
                }                    
            });
        }
        

    }
}