import * as Component from './components/indexPadre.js'
import {productsData} from './data/data.js'

class indexAbuelo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'})
  }
  connectedCallback() {
    this.render();
  }

  render(){
    productsData.forEach((product)=>{
        this.shadowRoot.innerHTML+=`
        <producto-card
        title='${product.title}'
        description='${product.description}'
        value='${product.value}'
        instock='${product.instock.available}'
        ></producto-card>
        
    `
    })
    
  }
}
 
customElements.define('app-container', indexAbuelo);
export default indexAbuelo