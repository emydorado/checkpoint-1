class buttonLike extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode:'open'});
      this.onButtonClicked=onButtonClicked.bind('this')
    }
  
    static get observedAttributes(){
      return['message']
    }
  
    connectedCallback() {
      this.mount();
    }

    mount(){
        this.render();
        this.addEventListeners();
    }
  
    attributeChangedCallback(propName, oldVal, newVal) {
      this[propName]=newVal
      this.mount();
    }

    onButtonClicked(){
        this.onButtonClicked=getAttribute('message');
        this.getAttribute=setAttribute('message', 'holi')
    }
  
    render(){
      this.shadowRoot.innerHTML=`
      
      `
    }
  }
  
  customElements.define('button-like', buttonLike);
  export default buttonLike