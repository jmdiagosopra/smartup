import{L as t,S as e,c as i,h as s,g as a}from"./chunk-3dad17c8.js";import{a as n,s as o}from"./chunk-7e592414.js";import"./chunk-9de70b05.js";customElements.define("smartup-career-top-card",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
        }

        section {
          position: relative;
          height: 100%;
          width: 100%;
          padding: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: var(--app-title-font-size-mobile, 18px);
          background-image: url('./assets/images/career/smartup_career_component_card1image-mobile.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center 20%;
          overflow: hidden;
        }

        section:before {
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background-color: #CD6B79;
          background-image: linear-gradient(#e80b2c, black); 
          opacity: 0.8;
        }

        .default-text {
          width: 80%;
          z-index: 1;
          margin-top: 220px;
          text-align: center;
          color: white;
          opacity: 0;
          transition: all 1s ease-out;
        }

        .center-text {
          margin: 0;
          opacity: 1;
        }

        @media (min-width: 768px) {
          section {
            background-image: url('./assets/images/career/smartup_career_component_card1image.jpg');
          }
          .default-text {
            width: 70%;
            margin-top: 300px;
          }

          .center-text {
            margin: 0;
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
      `]}static get properties(){return{textDisplacement:{type:Boolean}}}constructor(){super(),this.textDisplacement=!1}render(){return s`
        <section tabindex="0">
          <p class="default-text ${this.textDisplacement?"center-text":""}"><lit-i18n>SMARTUP_CAREER_COMPONENT_CARDONE_TEXT</lit-i18n></p>
        </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.5,callback:this._handleIntersection.bind(this)}})):this.textDisplacement=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this}}))}_handleIntersection([{isIntersecting:t}]){this.textDisplacement=t,t&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this}}))}});customElements.define("smartup-career",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
        }

        smartup-career-top-card {
          height: 296px;
        }

        @media (min-width: 768px) {

          smartup-career-top-card {
            height: 25vw;
          }
        }
      `]}static get properties(){return{bottomCardsData:{type:Array}}}constructor(){super(),this.bottomCardsData=[]}render(){return s`
        <section aria-label="SMARTUP CAREER" tabindex="0">
          <h1 class="title section-header" aria-label="SMARTUP CAREER" tabindex="0">
            <lit-i18n>SMARTUP_CAREER_COMPONENT_TITLE</lit-i18n>
          </h1>
          <smartup-career-top-card></smartup-career-top-card>
          <bottomcards-container .cardsData="${this.bottomCardsData}"></bottomcards-container>
        </section> 
    `}});const r=[{logoUrl:"./assets/images/career/ninja-rojo.png",title:"Smarter Promise",text:"Aquellas personas que se encuentran \n           formándose en SmartUp Training para \n           alcanzar un nivel Competent en los ejes \n           de Tech Skills, Soft Skills y Cultura Digital."},{logoUrl:"./assets/images/career/ninja-amarillo.png",title:"Smarter",text:"Toda persona perteneciente a \n           la Comunidad Digital con un nivel \n           Competente o superior en los ejes de\n           Tech Skills, Soft Skills y Cultura Digital."},{logoUrl:"./assets/images/career/ninja-verde.png",title:"Smarter Lead",text:"Son referentes técnicos dentro de \n           sus proyectos y el resto de compañeros\n           les reconocen como tal. Ejercen de\n           mentores de los Smarters."},{logoUrl:"./assets/images/career/ninja-azul.png",title:"Smarter Xpert",text:"Son profesionales con un nivel Expert\n           o superior en los ejes de Tech Skills, Soft\n           Skills y Cultura Digital. Mentorizan a los\n           Smarter Leads y son personas clave a\n           nivel de compañía."}];customElements.define("smarter-path",class extends t{static get styles(){return[e,i`
      section {
        overflow: hidden;
        height: 700px;
        display: flex;
        flex-direction: column;
      }
      .background-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-image: url('./assets/images/career/road.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        transition: all 2s ease 1.5s;
      }
      .background-container::before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
      }

      .steps-container-background {
        opacity: 1;
      }

      .container:before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7));
      }

      .container {
        height: 100vh;
        padding: 10px;
        position: relative;
        overflow: hidden;
        margin: 0;
        display: flex;
        flex-direction: column;
      }

      .cover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
        transition: all 2s ease;
      }

      .cover-animation {
        left: 100vw;
      }

      .ninja-container {
        position: absolute;
        height: 150vh;
        width: 150vw;
        border-radius: 50%;
        top: 150px;
        left: -10px;
        transform: translateX(-25vw);
        padding: 0px;
        margin: 30px 0px 0px;
        display: flex;
        justify-content: center;
      }

      #container-ninja {
        top: 0%;
        left: 0px; 
        border: 8px solid var(--app-primary-color, #CC0033);
        transition: 1s;
      }
      
      .ninja-list {
        --dimension-padre: 150vw;;
        margin: 0px;
        padding: 0px;
        position: relative;
        width: var(--dimension-padre);
        height: var(--dimension-padre);
        border-radius: 50%;
        transition: 1s;
      }

      .single-card {
        list-style: none;
        --dimension-little: calc(var(--dimension-padre) * 0.03);
        --radious-little: calc(var(--dimension-little) / 2);
        width: var(--dimension-little);
        height: var(--dimension-little);
        background-color: var(--app-primary-color, #CC0033);
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 8px solid var(--app-primary-color, #CC0033);
      }

      .first {
        position: absolute;
        top: calc(-1% - var(--radious-little));
        left: calc(50% - var(--radious-little)); 
        transition: 1s;
      }

      .second {
        position: absolute;
        top: calc(6% - var(--radious-little));  
        left: calc(75% - var(--radious-little)); 
        transition: 1s;
      }

      .third {
        position: absolute;
        left: calc(93% - var(--radious-little));
        top: calc(24% - var(--radious-little));
        transition: 1s;
      }

      .fourth {
        position: absolute;
        top: calc(50% - var(--radious-little));  
        left: calc(100% - var(--radious-little)); 
        transition: 1s;
      }

      .fifth {
        position: absolute;
        top: calc(75% - var(--radious-little));  
        left: calc(93% - var(--radious-little)); 
        transition: 1s;
      }

      .sixth {
        position: absolute;
        top: calc(93% - var(--radious-little));  
        left: calc(75% - var(--radious-little)); 
        transition: 1s;
      }
      
      .seventh {
        position: absolute;
        top: calc(100% - var(--radious-little));  
        left: calc(49% - var(--radious-little)); 
        transition: 1s;
      }

      .eighth {
        position: absolute;
        top: calc(93% - var(--radious-little));  
        left: calc(24% - var(--radious-little)); 
        transition: 1s;
      }

      .nineth {
        position: absolute;
        top: calc(75% - var(--radious-little));  
        left: calc(6% - var(--radious-little)); 
        transition: 1s;
      }

      .tenth {
        position: absolute;
        top: calc(50% - var(--radious-little));  
        left: calc(-1% - var(--radious-little)); 
        transition: 1s;
      }

      .eleventh {
        position: absolute;
        top: calc(24% - var(--radious-little));  
        left: calc(6% - var(--radious-little)); 
        transition: 1s;
      }
      
      .last {
        position: absolute;
        top: calc(5.5% - var(--radious-little));  
        left: calc(25% - var(--radious-little)); 
        transition: 1s;
      }

      .single-card img {
        transition: 1s;
        width: 0px;
      }

      .focused-ninja {
        transition: 1s;
        --dimension-little: calc(var(--dimension-padre) * 0.08);
        width: var(--dimension-little);
        height: var(--dimension-little);
        background-color: white;
      }

      .focused-ninja img {
        transition: 1s;
        transition-delay: 0.5s;
        --dimension-little: calc(var(--dimension-padre) * 0.08);
        width: var(--dimension-little);
      }

      .slider-container {
        position: absolute;
        top: 320px;
        left: 50%;
        transform: translateX(-50%);
        width: 700px;
        height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row nowrap;
        margin: 0;
      }

      .slider-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        height: 200px;
        width: 550px;
      }
      
      .text-animation {
        animation: fadeIn 2s ease;
      }

      @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
      }

      .slider-container h3 {
        color: var(--app-primary-color, #CC0033);
        font-size: 32px;
        text-align: center;
        margin: 0;
      }
      
      .slider-container p {
        padding: 0 10px;
        font-size: 16px;
        text-align: center;
        margin: 0;
      }

      .arrow-button {
        cursor: pointer;
        background: transparent;
        border: 0;
        width: 27px;
        height: 15px;
        padding: 0;
      }

      .arrow-button.next {
        transform: rotateZ(-90deg); 
      }

      .arrow-button.prev {
        transform: rotateZ(90deg);
      }

      .arrow-button svg {
        width: 100%;
        height: 100%;
      }

      .arrow-button svg * {
        stroke-width: 2px;
        stroke: var(--app-primary-color, #CC0033);
      }

      .arrow-button:hover svg *,
      .arrow-button:active svg * {
        stroke: #8f0024;
      }

      .button {
        z-index: 2;
        display: flex;
        justify-content: center;
        padding: 50px;
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%);
      }

      a {
        margin: 0 !important;
      }

      svg > path {
        stroke: rgb(204, 0, 51);
        stroke-width: 1.3;
      }
      `]}static get properties(){return{animated:{type:Boolean},pathSteps:{type:Array},stepSelected:{type:Number},num:{type:Number},degrees:{type:Number},initialClass:{type:Array},position:{type:Array}}}constructor(){super(),this.animated=!1,this.stepSelected=0,this.initialClass=["first","second","third","fourth","fifth","sixth","seventh","eighth","nineth","tenth","eleventh","last"],this.position=[0,1,2,3,4,5,6,7,8,9,10,11],this.pathSteps=[...r,...r,...r],this.num=0,this.degrees=30}render(){return s`
    <section>
      <div class="container">
        <div class="background-container ${this.animated?"steps-container-background":""}"></div>
        <ul class="ninja-container">
          <div class="ninja-list" id="container-ninja">
            ${this.pathSteps.map((t,e)=>s`
            <li class="ninja-list single-card" id="ninja-${e}">
                <img class="ninja-image" src=${t.logoUrl} alt=${t.title}>
            </li>
            `)}
          </div>
        </ul>
        <div class="slider-container">
          <button id="prev" aria-label="${a("PREV_REVIEW",!0)}" class="arrow-button prev" @click="${()=>this._clickedArrow("left")}">
            <div class="rotate-left">${n}</div>
          </button>
          <div class="slider-content">
            <h3 tabindex="0">${this.pathSteps[this.stepSelected].title}</h3>
            <p tabindex="0">${this.pathSteps[this.stepSelected].text}</p>
          </div>
          <button id="next" aria-label="${a("NEXT_REVIEW",!0)}" class="arrow-button next" @click="${()=>this._clickedArrow("right")}">
            <div class="rotate-right">${n}</div>
          </button>
        </div>
        <div class="cover ${this.animated?"cover-animation":""}"></div>
        <div class="button">
          <a href="mailto:seleccion@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${a("WANT_TO_BE_SMARTER_BTN_A11Y",!0)}">
            <lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n>
          </a>
        </div>
      </div>
    </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.8,callback:this._handleIntersection.bind(this)}})):this.animated=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this._unobserveIntersection()}_unobserveIntersection(){this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.8}}))}_handleIntersection([{isIntersecting:t}]){this.animated=t,t&&this._unobserveIntersection(.8)}firstUpdated(){this._getPosition()}_getPosition(){const t=this.shadowRoot.querySelectorAll(".single-card");for(let e=0;e<t.length;e++)t[e].classList.add(this.initialClass[e]),t[e].setAttribute("data-index",this.position[e]),0===this.position[e]?t[e].classList.add("focused-ninja"):t[e].classList.remove("focused-ninja")}_rotate(t){let e="L"===t?this.num+this.degrees:this.num-this.degrees;this.num=e%360;let i=-this.num;this.shadowRoot.querySelector(".ninja-list").style.transform="rotate("+this.num+"deg)";const s=this.shadowRoot.querySelectorAll(".single-card");for(let a=0;a<s.length;a++)s[a].style.transform="rotate("+i+"deg)"}_switchText(t){const e=this.shadowRoot.querySelector(".slider-content");e.classList.add("text-animation"),"left"===t&&this.stepSelected>0?this.stepSelected--:"left"===t&&0===this.stepSelected&&(this.stepSelected=this.pathSteps.length-1),"right"===t&&this.stepSelected<this.pathSteps.length-1?this.stepSelected++:"right"===t&&this.stepSelected===this.pathSteps.length-1&&(this.stepSelected=0),setTimeout(()=>{e.classList.remove("text-animation")},1e3)}_clickedArrow(t){if(this.shadowRoot.getElementById("next").disabled=!0,this.shadowRoot.getElementById("prev").disabled=!0,"left"===t){let t=this.position.shift();this.position.push(t),this._switchText("left"),this._rotate("L")}else if("right"===t){let t=this.position.pop();this.position.unshift(t),this._switchText("right"),this._rotate("R")}setTimeout(()=>{this.shadowRoot.getElementById("next").disabled=!1,this.shadowRoot.getElementById("prev").disabled=!1},1e3),this._setFocus()}_setFocus(){const t=this.shadowRoot.querySelectorAll(".single-card");for(let e=0;e<t.length;e++)t[e].setAttribute("data-index",this.position[e]),0===this.position[e]?t[e].classList.add("focused-ninja"):t[e].classList.remove("focused-ninja")}});customElements.define("smarter-path-mobile",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
          position: relative;
        }

        section {
          height: 630px;
          padding: 20px;
          background-image: url('./assets/images/career/road-mobile.jpg');
          background-size: cover;
          background-position: center;
        }

        .steps-container:before {
          content: "";
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
          position: absolute;
        }

        .step-card {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          position: relative;
        }

        .icon-outer-circle {
          background-color: var(--app-primary-color, #CC0033);
          border-radius: 80px;
          padding: 1px;
          height: fit-content;
          z-index: 1;
          opacity: 0;
          transform: translateX(-100px);
        }

        .circle-1 {
          transition: transform 0.5s ease, opacity 0.5s ease, padding 0.5s ease, margin 0.5s ease;
        }
        
        .circle-2 {
          transition: transform 0.5s ease 0.15s, opacity 0.5s ease 0.15s, padding 0.5s ease, margin 0.5s ease;
        }
        
        .circle-3 {
          transition: transform 0.5s ease 0.3s, opacity 0.5s ease 0.3s, padding 0.5s ease, margin 0.5s ease;
        }
        
        .circle-4 {
          transition: transform 0.5s ease 0.45s, opacity 0.5s ease 0.45s, padding 0.5s ease, margin 0.5s ease;
        }

        .circle-entrance-animation {
          opacity: 1;
          transform: translateX(0px);
        }

        .icon-outer-circle-bold {
          padding: 4px;
          margin-left: -3px;
          margin-right: -3px;
        }

        .icon-inner-circle {
          background-color: #fff;
          border-radius: 60px;
        }
        
        .icon-inner-circle img {
          width: 100px;
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            margin-top: -20px;
           }
          to {
            opacity: 1;
            margin-top: 0;
           }
        }

        .step-text {
          z-index: 10;
          animation: slide-down 0.5s ease;
          opacity: 0;
          margin-left: 20px;
          transition: opacity 0.5s ease 1s;
        }

        .step-text-entrance-animation {
          opacity: 1;
        }

        .step-text h3 {
          color: var(--app-primary-color, #CC0033);
          margin: 0;
          font-size: 18px;
        }
        
        .step-text p {
          font-size: 11px;
          margin: 0;
        }

        .connector-line {
          width: 1px;
          border-right: 1px solid var(--app-primary-color, #CC0033);
          position: absolute;
          bottom: -45px;
          left: 50px;
          margin-bottom: 30px;
          height: 0;
          transition: all 1s linear 0.5s;
        }

        .step-card:last-child .connector-line {
          display: none;
        }

        .line-animation {
          margin-bottom: 0;
          height: 60px;
        }
        
        .button {
          z-index: 2;
          display: flex;
          justify-content: center;
          padding: 50px;
          margin: 0;
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 100%;
          box-sizing: border-box;
        }

        a {
          margin: 0 !important;
        }

        svg > path {
          stroke: rgb(204, 0, 51);
          stroke-width: 1.3;
        }
      `]}static get properties(){return{animated:{type:Boolean},pathSteps:{type:Array},stepSelected:{type:String}}}constructor(){super(),this.animated=!1,this.pathSteps=r,this.stepSelected=this.pathSteps[0].title}render(){return s`
      <section aria-label="${a("SMARTUP",!0)}" tabindex="0">
        <div class="steps-container">
          ${this._generateSteps()}
        </div>
        <div class="button">
          <a href="mailto:BeConnectedSpain@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${a("WANT_TO_BE_SMARTER_BTN_A11Y",!0)}">
            <lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n>
          </a>
        </div>
      </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.8,callback:this._handleIntersection.bind(this)}})):this.animated=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this._unobserveIntersection()}_generateSteps(){return this.pathSteps.map((t,e)=>s`
        <div class="step-card">
          <div class="icon-outer-circle
                      circle-${e+1}
                      ${this.stepSelected===t.title?"icon-outer-circle-bold":""}
                      ${this.animated?"circle-entrance-animation":""}">
            <div class="icon-inner-circle" @click="${()=>this._selectStep(t.title)}">
              <img src=${t.logoUrl} alt="${t.title} icon">
            </div>
          </div>
          ${this.stepSelected===t.title?s`
            <div class="step-text ${this.animated?"step-text-entrance-animation":""}">
              <h3>${t.title}</h3>
              <p>${t.text}</p>
            </div>
          `:""}
          <div class="connector-line ${this.animated?"line-animation":""}"></div>
        </div>
      `)}_selectStep(t){this.stepSelected=t}_unobserveIntersection(){this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.8}}))}_handleIntersection([{isIntersecting:t}]){this.animated=t,t&&this._unobserveIntersection(.8)}});customElements.define("smarter-path-desktop",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
          position: relative;
        }

        .steps-container {
          position: relative;
          height: 75vh;
          overflow: hidden;
        }

        .background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.9;
          background-image: url('./assets/images/career/road.jpg');
          background-size: cover;
          background-position-x: center;
          background-position-y: 31%;
          background-blend-mode: lighten;
          transition: all 1s ease 1.4s;
        }

        .steps-container-background {
          opacity: 1;
        }

        .steps-container:before {
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
        }

        .ring {
          position: absolute;
          width: 150vw;
          height: 150vw;
          top: 140px;
          left: -26.2vw;
          border: 10px solid var(--app-primary-color, #CC0033);
          border-radius: 1000vw;
        }
        
        .cover {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #fff;
          transition: all 1s ease;
        }

        .cover-animation {
          left: 100vw;
        }

        .ball-big {
          position: absolute;
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          height: 280px;
          border-radius: 280px;
          border: 10px solid var(--app-primary-color, #CC0033);
          background-color: #fff;
          overflow: hidden;
          clip-path: circle(0% at 50% 50%);
          transition: all 0.5s ease 1.2s;
        }

        .big-ball-entrance {
          clip-path: circle(50% at 50% 50%);
        }
        
        .ball-small-1, .ball-small-2 {
          position: absolute;
          margin-top: 20px;
          width: 70px;
          height: 70px;
          border-radius: 70px;
          background-color: var(--app-primary-color, #CC0033);
          clip-path: circle(0% at 50% 50%);
          transition: all 0.5s ease 0.8s;
        }
        
        .small-balls-entrance {
          clip-path: circle(50% at 50% 50%);
        }

        .ball-small-1 {
          left: 25%;
        }
        
        .ball-small-2 {
          right: 25%;
        }

        .ninja-image {
          width: 100%;
          margin: 0;
        }

        .slider {
          position: absolute;
          top: 350px;
          left: 50%;
          transform: translateX(-50%);
          width: 550px;
          height: 200px;
          overflow: hidden;
        }

        .slider-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          height: 200px;
          width: 100%;
        }
        
        .slider-text {
          width: 80%;
          opacity: 1;
          transition: all 0.2s ease;
        }

        .slider h3 {
          color: var(--app-primary-color, #CC0033);
          font-size: 32px;
          text-align: center;
        }
        
        .slider p {
          padding: 0 10px;
          font-size: 16px;
          text-align: center;
        }
        
        .slider img {
          width: 40px;
        }

        .arrow-button {
          cursor: pointer;
          background: transparent;
          border: 0;
          width: 27px;
          height: 15px;
          padding: 0;
        }

        .arrow-button.next {
          transform: rotateZ(-90deg); 
        }

        .arrow-button.prev {
          transform: rotateZ(90deg);
        }

        .arrow-button svg {
          width: 100%;
          height: 100%;
        }

        .arrow-button svg * {
          stroke-width: 2px;
          stroke: var(--app-primary-color, #CC0033);
        }

        .arrow-button:hover svg *,
        .arrow-button:active svg * {
          stroke: #8f0024;
        } 

        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        
        @keyframes slideFromRight {
          from {opacity: 0; margin-left: 200px;}
          to {opacity: 1; margin-left: 0;}
        }
        
        @keyframes slideFromLeft {
          from {opacity: 0; margin-left: -200px;}
          to {opacity: 1; margin-left: 0;}
        }

        .text-animation {
          animation: fadeIn 0.5s ease;
        }

        .ninja-animation-from-left {
          animation: slideFromLeft 0.5s ease;
        }
        
        .ninja-animation-from-right {
          animation: slideFromRight 0.5s ease;
        }

        @media screen and (max-height: 700px) {
          .steps-container {
            padding-bottom: 150px;
          }
        }
        
        @media screen and (min-width: 980px) {
          .ball-small-1, .ball-small-2 {
            margin-top: 25px;
          }

          .ball-small-1 {
            left: 28%;
          }
          
          .ball-small-2 {
            right: 28%;
          }
        }
        
        @media screen and (min-width: 1300px) {
          .ball-small-1, .ball-small-2 {
            margin-top: 32px;
          }

          .ball-small-1 {
            left: 30%;
          }
          
          .ball-small-2 {
            right: 30%;
          }
        }
        
        @media screen and (min-width: 1580px) {
          .ball-small-1, .ball-small-2 {
            margin-top: 0.6vw;
          }

          .ball-small-1 {
            left: 35%;
          }
          
          .ball-small-2 {
            right: 35%;
          }
        }
      `]}static get properties(){return{animated:{type:Boolean},pathSteps:{type:Array},stepSelected:{type:Number}}}constructor(){super(),this.animated=!1,this.pathSteps=r,this.stepSelected=0}render(){return s`
      <section>
        <div class="background-container ${this.animated?"steps-container-background":""}"></div>
        <div class="steps-container">
          <div class="ring">
            <div class="ball-small-1 ${this.animated?"small-balls-entrance":""}"></div>
            <div class="ball-big ${this.animated?"big-ball-entrance":""}">
              <img class="ninja-image" src=${this.pathSteps[this.stepSelected].logoUrl} alt=${this.pathSteps[this.stepSelected].title}>
            </div>
            <div class="ball-small-2 ${this.animated?"small-balls-entrance":""}"></div>
          </div>
          <div class="slider">
            <div class="slider-content">
              <button id="prev" aria-label="${a("PREV_BUTTON")}" class="arrow-button prev" @click="${()=>this._handleArrowClick("left")}">${n}</button>
              <div class="slider-text">
                <h3 tabindex="0">${this.pathSteps[this.stepSelected].title}</h3>
                <p tabindex="0">${this.pathSteps[this.stepSelected].text}</p>
              </div>
              <button id="next" aria-label="${a("NEXT_BUTTON")}" class="arrow-button next" @click="${()=>this._handleArrowClick("right")}">${n}</button>
            </div>
          </div>
          <div class="cover ${this.animated?"cover-animation":""}"></div>
        </div>
      </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.8,callback:this._handleIntersection.bind(this)}})):this.animated=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this._unobserveIntersection()}_handleArrowClick(t){const e=this.shadowRoot.querySelector(".slider-text"),i=this.shadowRoot.querySelector(".ninja-image");e.classList.add("text-animation"),"left"===t?i.classList.add("ninja-animation-from-left"):i.classList.add("ninja-animation-from-right"),"left"===t&&this.stepSelected>0?this.stepSelected--:"left"===t&&0===this.stepSelected&&(this.stepSelected=this.pathSteps.length-1),"right"===t&&this.stepSelected<this.pathSteps.length-1?this.stepSelected++:"right"===t&&3===this.stepSelected&&(this.stepSelected=0),setTimeout(()=>{e.classList.remove("text-animation"),i.classList.remove("ninja-animation-from-right","ninja-animation-from-left")},500)}_unobserveIntersection(){this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.8}}))}_handleIntersection([{isIntersecting:t}]){this.animated=t,t&&this._unobserveIntersection(.8)}});customElements.define("smarter-path-desk",class extends t{static get styles(){return[e,i`
      :host{
        
      }

      section {
        overflow: hidden;
        height: 700px;
        display: flex;
        flex-direction: column;
      }
      .background-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-image: url('../../../../assets/images/career/road.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-blend-mode: lighten;
        transition: all 2s ease 2.2s;
      }

      .steps-container-background {
        opacity: 0.3;
      }

      .container:before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7));
      }

      .container {
        height: 100vh;
        padding: 10px;
        position: relative;
        overflow: hidden;
        margin: 0;
      }

      .cover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
        transition: all 2s ease;
      }

      .cover-animation {
        left: 100vw;
      }

      .ninja-container{
        position: absolute;
        border: 10px solid var(--app-primary-color, #CC0033);
        height: 150vh;
        width: 150vw;
        border-radius: 50%;
        top: 150px;
        left: -10px;
        transform: translateX(-25vw);
        padding: 0px;
        margin: 30px 0px 0px;
        display: flex;
        justify-content: center;
      }
      
      .ninja-list-container {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .single-card {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: var(--app-primary-color, #CC0033);
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 10px solid var(--app-primary-color, #CC0033);
        transform: translateX(-50%);
      }

      .single-card img {
        transition: 2s;
        width: 0px;
      }

      .focused-ninja {
        transition: 2s;
        width: 250px;
        transform: translate(-50%, 25%);
        height: 250px;
        border-radius: 250px;
        background-color: white;
      }

      .focused-ninja img {
        transition: 2s;
        width: 200px;
      }

      .slider-container {
        position: absolute;
        top: 300px;
        left: 50%;
        transform: translateX(-50%);
        width: 700px;
        height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row nowrap;
        margin: 0;
      }

      .slider-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        height: 200px;
        width: 550px;
      }
      
      .text-animation {
        animation: fadeIn 2s ease;
      }

      @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
      }

      .slider-container h3 {
        color: var(--app-primary-color, #CC0033);
        font-size: 32px;
        text-align: center;
        margin: 0;
      }
      
      .slider-container p {
        padding: 0 10px;
        font-size: 16px;
        text-align: center;
        margin: 0;
      }

      .arrow-button {
        cursor: pointer;
        background: transparent;
        border: 0;
        width: 27px;
        height: 15px;
        padding: 0;
      }

      .arrow-button.next {
        transform: rotateZ(-90deg); 
      }

      .arrow-button.prev {
        transform: rotateZ(90deg);
      }

      .arrow-button svg {
        width: 100%;
        height: 100%;
      }

      .arrow-button svg * {
        stroke-width: 2px;
        stroke: var(--app-primary-color, #CC0033);
      }

      .arrow-button:hover svg *,
      .arrow-button:active svg * {
        stroke: #8f0024;
      }

      .button {
        z-index: 2;
        display: flex;
        justify-content: center;
        padding: 50px;
      }

      a {
        margin: 0 !important;
      }

      svg > path {
        stroke: rgb(204, 0, 51);
        stroke-width: 1.3;
      }
      `]}static get properties(){return{animated:{type:Boolean},pathSteps:{type:Array},stepSelected:{type:Number},angle:{type:Array}}}constructor(){super(),this.animated=!1,this.pathSteps=[...r,...r],this.stepSelected=0,this.angle=[4.712,5.498,6.284,.785,1.571,2.356,3.142,3.927]}render(){return s`
    <section>
      <div class="container">
        <div class="background-container ${this.animated?"steps-container-background":""}"></div>
        <ul class="ninja-container">
          <div class="ninja-list-container">
            ${this.pathSteps.map((t,e)=>s`
            <li class="single-card ninja-${e}" id="ninja-${e}" style="left:; top:;">
                <img class="ninja-image" src=${t.logoUrl} alt=${t.title}>
            </li>
            `)}
          </div>
        </ul>
        <div class="slider-container">
          <button id="prev" aria-label="${a("PREV_REVIEW",!0)}" class="arrow-button prev" @click="${()=>this._clickedArrow("left")}">
            <div class="rotate-left">${n}</div>
          </button>
          <div class="slider-content">
            <h3 tabindex="0">${this.pathSteps[this.stepSelected].title}</h3>
            <p tabindex="0">${this.pathSteps[this.stepSelected].text}</p>
          </div>
          <button id="next" aria-label="${a("NEXT_REVIEW",!0)}" class="arrow-button next" @click="${()=>this._clickedArrow("right")}">
            <div class="rotate-right">${n}</div>
          </button>
        </div>
        <div class="cover ${this.animated?"cover-animation":""}"></div>
      </div>
      <div class="button">
        <a href="mailto:seleccion@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${a("WANT_TO_BE_SMARTER_BTN_A11Y",!0)}">
          <lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n>
        </a>
      </div>
    </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.8,callback:this._handleIntersection.bind(this)}})):this.animated=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this._unobserveIntersection()}_unobserveIntersection(){this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.8}}))}_handleIntersection([{isIntersecting:t}]){this.animated=t,t&&this._unobserveIntersection(.8)}firstUpdated(){this._getPosition(this.angle)}_getPosition(t){let e=1400+800*Math.cos(t),i=600+800*Math.sin(t),s=this.shadowRoot.querySelectorAll("li");for(let a=0;a<s.length;a++)e=1400+800*Math.cos(t[a]),i=600+800*Math.sin(t[a])-20,s[a].style.left=e+"px",s[a].style.top=i+"px",s[a].style.marginLeft="0%",s[a].style.transition="2s",5.498===t[a]?(s[a].style.marginLeft="70%",s[a].style.left="0px"):3.927===t[a]&&(s[a].style.marginLeft="30%",s[a].style.left="0px"),4.712===t[a]?(s[a].classList.add("focused-ninja"),s[a].style.marginLeft="50%",s[a].style.left="0px"):(s[a].classList.remove("focused-ninja"),s[a].style.transition="2s"),6.284===t[a]?(e=1400+800*Math.cos(t[a])*5,i=600+800*Math.sin(t[a])+600,s[a].style.left=e+"px",s[a].style.top=i+"px"):3.142===t[a]&&(e=1400+800*Math.cos(t[a])-600,i=600+800*Math.sin(t[a])-400,s[a].style.left=e+"px",s[a].style.top=i+"px")}_switchText(t){const e=this.shadowRoot.querySelector(".slider-content");e.classList.add("text-animation"),"left"===t&&this.stepSelected>0?this.stepSelected--:"left"===t&&0===this.stepSelected&&(this.stepSelected=this.pathSteps.length-1),"right"===t&&this.stepSelected<this.pathSteps.length-1?this.stepSelected++:"right"===t&&this.stepSelected===this.pathSteps.length-1&&(this.stepSelected=0),setTimeout(()=>{e.classList.remove("text-animation")},500)}_clickedArrow(t){if(this.shadowRoot.getElementById("next").disabled=!0,this.shadowRoot.getElementById("prev").disabled=!0,"left"===t){let t=this.angle.shift();this.angle.push(t),this._switchText("left")}else if("right"===t){let t=this.angle.pop();this.angle.unshift(t),this._switchText("right")}setTimeout(()=>{this.shadowRoot.getElementById("next").disabled=!1,this.shadowRoot.getElementById("prev").disabled=!1},2e3),this._getPosition(this.angle)}});customElements.define("smarter-path-container",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
        }
      `]}static get properties(){return{device:{String:String}}}constructor(){super(),this._detectDevice()}render(){return s`
      <section aria-label="SMARTUP PATH" tabindex="0">
        <h1 class="title section-header" tabindex="0">
          <lit-i18n>SMARTER_PATH</lit-i18n>
        </h1>

        ${"mobile"===this.device?s`<smarter-path-mobile></smarter-path-mobile>`:s`<smarter-path></smarter-path>`}
      </section>
    `}connectedCallback(){super.connectedCallback(),window.matchMedia("(min-width: 768px)").addListener(()=>{this._detectDevice()},!0)}disconnectedCallback(){super.disconnectedCallback(),window.matchMedia("(min-width: 768px)").removeListener(()=>{this._detectDevice()},!0)}_detectDevice(){this.device=window.innerWidth<768?"mobile":"desktop"}});const l=[{text:"SMARTUP_CAREER_COMPONENT_CARDTWO_TEXT",image:"url(./assets/images/career/smartup_career_component_card2image.jpg)"},{text:"SMARTUP_CAREER_COMPONENT_CARDTHREE_TEXT",image:"url(./assets/images/career/smartup_career_component_card3image.jpg)"},{text:"SMARTUP_CAREER_COMPONENT_CARDFOUR_TEXT",image:"url(./assets/images/career/smartup_career_component_card4image.jpg)"}];window.customElements.define("smartup-career-view",class extends t{static get styles(){return[e,i`
        :host {
          height: 100%;
        }

        video {
          transform: scale(1.1);
          filter: blur(3px);
          opacity: .8;
          position: relative;
          top: 0;
          left: 0;
          width: auto;
          z-index: -1;
          object-fit: cover;
          height: 100%;
          width: 100%;
        }

        @media (max-width: 420px) {
          video {
            width: 300%;
            left: -540px;
          }
        }

        @media (min-width: 420px) and (max-width: 768px) {
          video {
            width: 200%;
            left: -450px;
          }
        }
      `]}render(){return s`
      <hero-element .literals="${["SMARTUP_CAREER","SMARTUP_CAREER_SUBTITLE"]}" .scrollTo="${"smartup-career"}">
        <video slot="video" autoplay loop muted playsinline poster="./assets/videos/career-video-poster.png">
          <source src="./assets/videos/career-video.mp4" type="video/mp4">
        </video>
      </hero-element>
      <smartup-career .bottomCardsData="${l}"></smartup-career>
      <smarter-path-container></smarter-path-container>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("scroll-automatic",t=>this._scrollMe(t))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("scroll-automatic",t=>this._scrollMe(t))}_scrollMe(t){const e=parseInt(getComputedStyle(this).getPropertyValue("--header-height")),i=this.shadowRoot.querySelector(t.detail.elementScroll).offsetTop;o({headerHeight:e,elemenToScroll:i})}});
//# sourceMappingURL=index-325218cd.js.map
