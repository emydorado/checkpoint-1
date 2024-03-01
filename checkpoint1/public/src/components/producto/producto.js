class Producto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
  }

  static get observedAttributes(){
    return['title','description','value','instock']
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
    <h1>${this.title}</h1>
    <p>${this.description}</p>
    <p><strong>${this.value}</strong></p>
    <p>${this.instock || 'No disponible'}</p>
    </section>
    `
  }
}

customElements.define('producto-card', Producto);
export default Producto