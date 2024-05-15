class Cards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    return this;
  }

  connectedCallback() {
    const container = document.createElement("div");
    container.style.cssText =
      "display: flex; align-items: center; overflow-x: auto";
    this.shadowRoot.appendChild(container);

    //add media queries to the shadowDom
    const style = document.createElement("style");
    style.textContent += `
    #card {
      min-width: 20vw;
      max-width: 30vw;
      border-radius: 10px;
      padding: 20px;
      margin: 20px;
    }

    p {
      font-size: 0.75em;
    }
    `;
    this.shadowRoot.appendChild(style);

    this.init = function (config) {
      for (const card of config.cards) {
        const cardd = document.createElement("div");
        cardd.setAttribute("id", "card");
        container.appendChild(cardd);
        cardd.style.cssText = card.styles;

        const title = document.createElement("h3");
        title.innerHTML = card.title;
        cardd.appendChild(title);

        const text = document.createElement("p");
        text.innerHTML = card.text;
        cardd.appendChild(text);
      }
    };
  }
}
customElements.define("my-cards", Cards);
