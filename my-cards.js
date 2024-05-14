class Cards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    return this;
  }

  //     <div id="card" style="background-color: red">
  //     <h3>Card 1</h3>
  //     <p>
  //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
  //       accusantium possimus et, quasi beatae odit. Qui, maxime. Aperiam
  //       assumenda sapiente quis unde nobis exercitationem amet nostrum
  //       dolorem. Corrupti, quia architecto repellendus perferendis earum, sed
  //       praesentium, ullam quae pariatur ipsum saepe? Animi dolorem iure quis
  //       hic. Tempore illum hic qui deleniti, necessitatibus laboriosam nobis
  //       quia nihil et dolorum amet velit consectetur ut sapiente a optio quasi
  //       explicabo reprehenderit harum, provident totam nemo. Deleniti quas
  //       impedit quos quia perspiciatis dolor earum magnam?
  //     </p>
  //   </div>

  connectedCallback() {
    //add media queries to the shadowDom
    const style = document.createElement("style");
    style.textContent += ``;
    this.shadowRoot.appendChild(style);

    this.init = function (config) {
      debugger;
    };
  }
}
customElements.define("my-cards", Cards);
