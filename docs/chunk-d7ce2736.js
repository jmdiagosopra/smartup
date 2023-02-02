import{L as t,S as e,c as i,h as s}from"./chunk-42178d44.js";customElements.define("bottom-card",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
        }

        section {
          position: relative;
          height: 296px;
          display: flex;
          align-items: center;
          padding: 0px;
          background: black;
          overflow: hidden;
          font-size: var(--app-title-font-size-mobile, 18px);
        }

        .default-opacity {
          position: absolute;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          opacity: 1;
          transition: opacity 1s;
        }

        .opacity-decreased {
          opacity: 0.5;
        }

        .default-text {
          width: 100%;
          z-index: 1;
          color: white;
          text-align: center;
          transition: all 1s ease-out;
          margin: 80% 0 0;
          padding: 50px;
        }

        .center-text {
          margin: 0;
        }

        @media (min-width: 768px) {
          section {
            height: 100%;
          }

          p {
            font-size: var(--app-paragraph-font-size-mobile, 16px);
          }
        }

        @media (min-width: 1100px) {
          p {
            font-size: var(--app-subtitle-font-size, 24px);
          }
        }
      `]}static get properties(){return{decreasedOpacity:{type:Boolean},centeredText:{type:Boolean},text:{type:String},backgroundImage:{type:String}}}constructor(){super(),this.decreasedOpacity=!1,this.centeredText=!1,this.text="",this.backgroundImage=""}render(){return s`
        <section tabindex="0">
          <p class="default-text ${this.centeredText?"center-text":""}"><lit-i18n>${this.text}</lit-i18n></p>
          <div class="default-opacity ${this.decreasedOpacity?"opacity-decreased":""}" style="background-image: ${this.backgroundImage}"></div>
        </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.6,callback:this._handleIntersection.bind(this)}})):(this.decreasedOpacity=!0,this.centeredText=!0)}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this}}))}_handleIntersection([{isIntersecting:t}]){this.decreasedOpacity=t,this.centeredText=t,t&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.6}}))}});customElements.define("bottomcards-container",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
        }

        @media (min-width: 768px) {
          .bottom-cards-container {
            display: flex;
          }
          
          bottom-card {
            flex: 1 1 0;
            height: calc(100vw / 3);
          }
        }
      `]}static get properties(){return{cardsData:{type:Array}}}constructor(){super(),this.cardsData=[]}render(){return s`
        <section class="bottom-cards-container">
            ${this._printBottomCards()}
          </div>
        </section> 
    `}_printBottomCards(){return this.cardsData=this.cardsData||[],this.cardsData.map(t=>s`<bottom-card .backgroundImage="${t.image}" .text="${t.text}"></bottom-card>`)}});
//# sourceMappingURL=chunk-d7ce2736.js.map
