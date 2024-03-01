class masInfo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode:'open'});
    }
  
    static get observedAttributes(){
      return['materials','sizesavailable','brand','origin']
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(propName, oldVal, newVal) {
      this[propName]=newVal
      this.render();
    }
  
    render(){
      this.shadowRoot.innerHTML=`
      <section>
      <h1>${this.materials}</h1>
      <p>${this.sizesavailable}</p>
      <p><strong>${this.brand}</strong></p>
      <p>${this.origin}</p>
      </section>
      `
    }
  }
  
  customElements.define('mas-info', masInfo);
  export default masInfo