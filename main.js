/** 
 * @description HTML Component builder
 * @example new HTML("div")
 */
class HTML {
    constructor(tag) {
        this.tag = document.createElement(tag)
    }
}
/**
 * @description HTML Attributes helper
 */
class Attributes {
    /**
     * @param {HTMLElement} target is the HTML element for which to modify attributes
     */
    constructor(target){
        this.target = target;
    }
    /** The 'css' operation will semantically set inline css for an HTML element. */
    css(string){
        this.target.style += string;
    }
    /** The 'set' operation will set *any general HTML element attribute, not limited to specific domains. e.g 'css'  */
    set(argsv){
        argsv.forEach(([k, v]) => {
            this.target.setAttribute(k, v);
        })
    }
}
class Component extends HTML {
    constructor(){
        super();
    }
}
class Hero {

}
class Section {
    
}
class Article {

}