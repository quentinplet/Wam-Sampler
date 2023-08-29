
class HTMLPrompt extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        #prompt-container {
          border: 1px solid #ccc;
          padding: 10px;
          margin-top: 5px;
          width: 250px;
          display : flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-wrap : wrap;
          gap: 5px
        }

        input {
          width: 100%;
          padding: 5px;
          margin-top: 2px;
        }
        

      </style>
      <div id="prompt-container">
        <slot></slot>
        <input id="input-field-prompt" type="text" placeholder="Enter your response">
        <button id="submit-button">Ok</button>
        <button id="close-button">Close</button>
      </div>
    `;

    this.inputField = this.shadowRoot.getElementById('input-field-prompt');
    this.submitButton = this.shadowRoot.getElementById('submit-button');
    this.closeButton = this.shadowRoot.getElementById('close-button');

    this.inputField.addEventListener('keydown', (evt) => {
      if(evt.key === "Enter") {
        this.onSubmit(evt);
      }
    });

    this.promiseResolve = null;

    this.submitButton.addEventListener('click', (evt) => this.onSubmit(evt));
    
    this.closeButton.addEventListener('click', (evt) => this.onClose(evt));
    this.closeEvent = new Event('promptClosed');
  }

  async showPrompt(message) {
    this.shadowRoot.getElementById('input-field-prompt').placeholder=message;
    this.parentNode.appendChild(this);
    return new Promise((resolve) => {
      this.promiseResolve = resolve;
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    evt.stopPropagation(); 
    this.response = this.inputField.value;
    this.closePrompt();
    if (this.promiseResolve) {
      this.promiseResolve(this.response);
    }
  }
  
  onClose(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.closePrompt();
  }

  closePrompt() {
   
    if(this.isConnected){
      this.parentNode.removeChild(this);
      this.dispatchEvent(this.closeEvent);
    }
  }
}

customElements.define('html-prompt', HTMLPrompt);
