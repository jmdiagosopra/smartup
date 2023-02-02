import{L as t,S as e,c as i,h as s,g as a}from"./chunk-3dad17c8.js";import{p as o,a as n,s as r,l as d,m as l,b as c}from"./chunk-7e592414.js";import{t as p,u as h,a as u}from"./chunk-85ef2c0a.js";const m=[{name:"Jose Manuel Diago",job:"Director / Manager",picture:"./assets/images/main/our-cracks/josediago.jpeg"},{name:"Arturo Zarzalejo",job:"Technical Coach",picture:"./assets/images/main/our-cracks/arturozarzalejo.jpeg"},{name:"Oriol Furnells",job:"Technical Coach",picture:"./assets/images/main/our-cracks/oriolfurnells.jpeg"},{name:"Alfonso Estepa",job:"Software Architech",picture:"./assets/images/main/our-cracks/alfonsoestepa.jpg"}],g=[{title:"SMARTER PROMISE",name:"ELEAZAR RIVERA",subtitle:"Backend Developer",description:"“SmartUp Xperience es una experiencia única que permite a cualquiera que no haya estado en el mundo del desarrollo poder desarrollarse como profesional, conocer a nuevos compañeros y además nos enseñan muchas tecnologías enfocadas a los negocios”\n\n“Me ha parecido una oportunidad de oro y la voy a aprovechar al máximo”",src:"./assets/videos/previews/profile1.jpg",video:"./assets/videos/video1.mp4"},{title:"SMARTER PROMISE",name:"CLAUDIA LORENZO",subtitle:"Frontend Developer",description:"“SmartUp es una gran experiencia tanto para la gente que tiene muchos años en el mundo de la programación, como para aquellos nuevos que se estén iniciando y quieran aprender casi desde cero”",src:"./assets/videos/previews/profile2.jpeg",video:"./assets/videos/video2.mp4"},{title:"SMARTER PROMISE",name:"ADRIÁN FERNÁNDEZ",subtitle:"Frontend Developer",description:"“Realizamos un aprendizaje bastante intensivo a la vez que vamos desarrollando proyectos reales para la compañía, siempre desde un marco de metodologías ágiles”",src:"./assets/videos/previews/profile3.jpeg",video:"./assets/videos/video3.mp4"},{title:"SMARTER PROMISE",name:"JACOB CASADO",subtitle:"Frontend developer",description:"“Gracias a los compañeros, al equipo técnico y a las personas que hacen posible SmartUp, pude crecer, pude sentirme uno más en esta gran comunidad y sobre todo sentirme agusto con lo que estaba haciendo”",src:"./assets/videos/previews/profile5.jpeg",video:"./assets/videos/video5.mp4"}];customElements.define("review-video",class extends t{static get styles(){return[e,i`
        .container {
          width: 220px;
          height: 220px;
          border-radius: 100%;
          position:relative;
        }

        .photo {
          width: 100%;
        }

        .play-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width:100%;
          height:100%;
          position:absolute;
          top: 0;
          background: none;
          border: none;
          cursor: pointer;
        }

        svg {
          width: 50px;
          height: 50px;
          position: absolute;
          bottom: 10px;
        }

        img {
          border-radius: 100%;
        }

        video {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          display: none;
          border-radius: 100%;
        }

        video::-webkit-media-controls {
          display: none ;
        }

        video::-webkit-media-controls-start-playback-button {
          display: none;
        }
        
      `]}static get properties(){return{card:{type:Object},isRunning:{type:Boolean},isCurrentCard:{type:Boolean}}}constructor(){super(),this.card={},this.isRunning=!1}render(){return s`
      <div class="container">
        <img id="preview" class="photo" src="${this.card.src}">
        <button @click="${this._showVideo}" class="play-icon" tabindex="${this.isCurrentCard?0:-1}" aria-label="${a("VIDEO_REF",!0)+" "+this.card.name}">${o}</button>
        <video id="video" @click="${this._stopVideo}" width="220" height="220">
            <source src="${this.card.video}" type="video/mp4">
            ${a("NOT_SUPPORTED_VIDEO",!0)}
          </video>
        </div>
        `}updated(t){t.get("isRunning")&&!this.isRunning||this._stopVideo()}_showVideo(){const t=this.shadowRoot.querySelector("#video");if(t.paused){const e=this.shadowRoot.querySelector("#preview");this.dispatchEvent(new CustomEvent("stopInterval",{composed:!0})),t.style.display="block",e.style.visibility="hidden",t.play(),t.onended=(()=>{this._stopVideo()})}else this.stopVideo()}_stopVideo(){const t=this.shadowRoot.querySelector("#preview"),e=this.shadowRoot.querySelector("#video");this.dispatchEvent(new CustomEvent("resetInterval",{composed:!0})),e.pause(),t.style.visibility="visible",e.style.display="none",e.currentTime=0}});customElements.define("review-card",class extends t{static get styles(){return i`
      :host {
        display: flex;
        flex-flow: column;
        height: 100%;
        width: 100%;
        font-size: 1rem;
        color: white;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 400px;
        text-align: center;
        position: relative;
        margin-top: 50px;
        border-top-color: var(--app-background-color, '#fff');
        background-color: var(--app-smarters-reviews-background, rgb(179, 79, 92));
      }

      .card-description {
        display: flex;
        flex-grow: 1;
        align-items: center;
        height: auto;
        hyphens: auto;
        padding: 40px;
        margin-top: -50px;
        background-color: var(--app-smarters-reviews-background, rgb(179, 79, 92));
        justify-content: center;
        white-space: pre-line;
      }

      .photo-container {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40%;
        padding: 10px;
      }

      .title {
        font-weight: bolder;
        padding: 20px;
      }

      .card-subtitle {
        border-top: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        height: auto;
        padding: 40px;
      }

      .photo {
        width: 100%;
        max-width: 220px;
        max-height: 220px;
        border-radius: 100%;
        position: absolute;
        top: -50px;
      }

      p {
        font-size: 16px;
        padding: 0;
        margin: 5px;
        text-align: center;
        font-style: italic;
      }

      .new-title {
        background-color: red;
        width: 100%;
        max-width: 100%;
        height: 20px;
      }

      .name {
        font-size: 18px;
        font-weight: 600;
      }

      @media screen and (min-width: 768px) {
        p {
          font-size: 20px;
        }
      }
 
      @media screen and (min-width: 1050px) {

        :host {
          flex-flow: row nowrap;
          min-height: 400px;
        }

        .card-info {
          width: 35%;
          height: 100%;
        }

        .card-description {
          border-left: 1px solid white;
          padding-top: 40px;
          width: 65%;
          border-top: 50px solid;
          border-top-color: var(--app-background-color, '#fff');
          margin-top: 0;
        }

        .photo-container {
          flex-grow: inherit;
          padding-bottom: 0;
        }
        
        .card-subtitle {
          border-top: 1px solid white;
          
        }

        p {
          font-size: 20px;
        }
      } 
    `}static get properties(){return{card:{type:Object},isRunning:{type:Boolean},isCurrentCard:{type:Boolean}}}render(){return s`
      <div class="card-info">
        <div class="photo-container">
          <review-video class="photo" .card="${this.card}" .isRunning="${this.isRunning}" .isCurrentCard="${this.isCurrentCard}"></review-video>
        </div>
        <span class="title">${this.card.title}</span>
        <div class="card-subtitle">
          <span class="name" tabindex="${this.isCurrentCard?1:-1}" aria-label="${this.card.name+" "+this.card.subtitle}">${this.card.name}</span>
          <span>${this.card.subtitle}</span>
        </div>
      </div>
      <div class="card-description">
        <p tabindex="${this.isCurrentCard?2:-1}">${this.card.description}</p>
      </div>
    `}});customElements.define("slide-dots",class extends t{static get styles(){return i`
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-flow: row nowrap;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .dot {
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: #8e3b52;
        border-radius: 100%;
        border: none;
        cursor: pointer;
      }

      .active {
        background-color: #d8336d;
      }
    `}static get properties(){return{index:{type:Number},nElements:{type:Number,reflect:!0},dotsArray:{type:Array}}}constructor(){super(),this.index=0,this.nElements=0,this.dotsArray=[]}render(){return s`
      ${this.dotsArray.map((t,e)=>s`<button tabindex="0" @click="${()=>this.setPosition(e)}" id="${"a"+e}" class="dot" aria-label="${a("GO_TO_REVIEW",!0)+" "+(e+1)}"></button>`)}
    `}firstUpdated(){this.setActive(this.index,"dot active")}updated(t){(this.index||t.get("index"))&&(this.setActive(this.index,"dot active"),this.setActive(t.get("index"),"dot"))}attributeChangedCallback(){const t=this.nElements,e=new Array(t).fill("");this.dotsArray=e}setActive(t,e){const i=this.shadowRoot.querySelector("#a"+t);i&&(i.classList=e)}setPosition(t){this.dispatchEvent(new CustomEvent("setPosition",{detail:t,composed:!0}))}});customElements.define("smarters-reviews",class extends t{static get styles(){return[e,i`
        section > * {
          max-width: 100%;
        }

        .slider-container {
          flex: 1 1 0;
          display: flex;
          flex-flow: row nowrap;
          height: auto;
          width: 100%;
          margin: 0;
          overflow: hidden;
        }

        .slider-container div {
          min-width: 100%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          color: grey;
          transform: translateX(0);
          transition: transform .8s;
        }

        .arrow-container {
          display: none;
        }

        .arrow {
          width: 100%;
          height: 80px;
          background: rgba(179, 79, 92, .6);
          border-color: white;
          margin-bottom: 150px;
          border: none;
          cursor: pointer;
        }

        .container {
          display: flex;
        }

        .arrow-right {
          border-radius: 0 100px 100px 0;
        }

        .arrow-left {
          border-radius: 100px 0 0 100px;
        }

        .rotate-left {
          transform: rotate(90deg);
        }

        .rotate-right {
          transform: rotate(-90deg);
        }

        button:active {
          border: none;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }

        @media screen and (min-width: 768px) {
          section {
            padding-bottom: 36px;
          }
          
          .arrow-container {
            display: grid;
            align-items: center;
            flex-basis: 40px;
            height: auto;
          }
        }

        @media screen and (min-width: 1050px) {
          slide-dots {
            z-index: 1;
            position: relative;
            margin-bottom: -50px;
          }
        }
      `]}static get properties(){return{coordinate:{type:Number},index:{type:Number},card:{type:String},speed:{type:String},auto:{type:Boolean},interval:{type:Number},isRunning:{type:Boolean},minTouchLength:{type:Number},minTouchAngle:{type:Number}}}constructor(){super(),this.coordinate=0,this.index=0,this.cards=g,this.animationSpeed=.8,this.auto=!0,this.interval=8e3,this.intervalRef=null,this.isRunning=!1,this.minTouchLength=70,this.minTouchAngle=30,this._focusEventsActive=[],this.EVENTS={mouseenter:"mouse",mouseleave:"mouse",focusin:"focus",focusout:"focus"},this.addEventListener("stopInterval",()=>{clearInterval(this.intervalRef),this.isRunning=!1}),this.addEventListener("resetInterval",()=>{this.isRunning=!0,this.auto&&this._startAutoplay()}),this.addEventListener("setPosition",this.setNewPosition),this.addEventListener("focusin",this._stopAutoplay.bind(this)),this.addEventListener("mouseenter",this._stopAutoplay.bind(this)),this.addEventListener("mouseleave",this.startInterval.bind(this)),this.addEventListener("focusout",this.startInterval.bind(this))}render(){return s`
      <section aria-label="${a("SMARTER_REVIEWS_TITLE",!0)}" tabindex="0">
        <h1 class="title section-header" aria-label="${a("SMARTER_REVIEWS_TITLE",!0)}" tabindex="0">
          <lit-i18n>SMARTER_REVIEWS_TITLE</lit-i18n>
        </h1>

        <div>
          <slide-dots .index="${this.index}" .nElements="${this.cards.length}"></slide-dots>

          <div class="container">
            <div class="arrow-container">
              <button id="left" aria-label="${a("PREV_REVIEW",!0)}" class="arrow arrow-left" @click="${()=>this.showNext(!1)}"><div class="rotate-left">${n}</div></button>
            </div>
                
            <div id="slide" class="slider-container">
              ${this.cards.map((t,e)=>s`
                <div class="single-card" .style="${"transform: translateX("+this.coordinate+"px); transition: transform "+this.animationSpeed+"s"}">
                  <review-card .card="${t}" .isRunning="${this.isRunning}" .isCurrentCard="${this.index===e}"></review-card>
                </div>
              `)}
              <div aria-live="polite" class="sr-only" tabindex="-1">
                ${a("SMARTER_REVIEWS_TITLE")+": "+a("SLIDE")+" "+(this.index+1)+" "+a("OF")+" "+Math.ceil(this.cards.length)}
              </div>
            </div>

            <div class="arrow-container">
              <button id="right" aria-label="${a("NEXT_REVIEW",!0)}" class="arrow arrow-right" @click="${()=>this.showNext(!0)}"><div class="rotate-right">${n}</div></button>
            </div>
          </div>
        </div>
      </section>
    `}firstUpdated(){p(this,"#slide"),window.addEventListener("resize",this.setCoordinate.bind(this)),this.auto&&this.setAutoInterval()}connectedCallback(){super.connectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.3,callback:([{isIntersecting:t}])=>this._isIntersecting=t}}))}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.3}}))}showNext(t){this.setIndex(t),this.setCard()}_next(){this.showNext(!0)}_prev(){this.showNext(!1)}setCard(){this.isRunning||(this.isRunning=!0),this.setCoordinate(),this.auto&&this._startAutoplay()}setIndex(t){this.index===this.cards.length-1&&t?this.index=0:0!==this.index||t?t?this.index++:this.index--:this.index=this.cards.length-1}setCoordinate(){this.coordinate=-this.shadowRoot.querySelector("#slide").clientWidth*this.index}setAutoInterval(){this.intervalRef=setInterval(()=>{this._isIntersecting&&this.showNext(!0)},this.interval)}_startAutoplay(){clearInterval(this.intervalRef),this.setAutoInterval()}setNewPosition(t){this.index=t.detail,this.setCard()}_stopAutoplay(t){this._focusEventsActive.push(this.EVENTS[t.type]),clearInterval(this.intervalRef),this.isRunning=!1,this.auto=!1}startInterval(t){this._focusEventsActive=this._focusEventsActive.filter(e=>e!==this.EVENTS[t.type]),0===this._focusEventsActive.length&&(this._startAutoplay(),this.auto=!0)}});const b=[{image:{srcset:[{src:"./assets/images/main/ecosystem/training/smartup-training-card-mobile.jpg",media:"(max-width: 414px)"},{src:"./assets/images/main/ecosystem/training/smartup-training-card.jpg",media:"(min-width: 414px)"}],srcsetDesktop:[{src:".",media:"(max-width: 1100px)"},{src:"./assets/images/main/ecosystem/training/smartup-training-card.jpg",media:"(min-width: 1100px)"}],src:"./assets/images/main/ecosystem/training/smartup-training-card.jpg",alt:"Smartup Training"},title:"SMARTUP_TRAINING",subtitle:"Training",body:s`<lit-i18n>SMARTUP_TRAINING_P</lit-i18n>`,urlButton:"./training"},{image:{srcset:[{src:"./assets/images/main/ecosystem/community/smartup-community-card-mobile.jpg",media:"(max-width: 414px)"},{src:"./assets/images/main/ecosystem/community/smartup-community-card.jpg",media:"(min-width: 414px)"}],srcsetDesktop:[{src:"./assets/images/main/ecosystem/community/smartup-community-card-mobile.jpg",media:"(max-width: 1100px)"},{src:"./assets/images/main/ecosystem/community/smartup-community-card.jpg",media:"(min-width: 1100px)"}],src:"./assets/images/main/ecosystem/community/smartup-community-card.jpg",alt:"SmartUp Community"},title:"SMARTUP_COMMUNITY",subtitle:"Community",body:s`<lit-i18n>SMARTUP_COMMUNITY_P</lit-i18n>`,urlButton:"./community"},{image:{srcset:[{src:"./assets/images/main/ecosystem/career/smartup-career-card-mobile.jpg",media:"(max-width: 414px)"},{src:"./assets/images/main/ecosystem/career/smartup-career-card.jpg",media:"(min-width: 414px)"}],srcsetDesktop:[{src:"./assets/images/main/ecosystem/career/smartup-career-card-mobile.jpg",media:"(max-width: 1100px)"},{src:"./assets/images/main/ecosystem/career/smartup-career-card.jpg",media:"(min-width: 1100px)"}],src:"./assets/images/main/ecosystem/career/smartup-career-card.jpg",alt:"SmartUp Career"},title:"SMARTUP_CAREER",subtitle:"Career",body:s`<lit-i18n>SMARTUP_CAREER_P</lit-i18n>`,urlButton:"./career"}];window.customElements.define("card-collapse",class extends t{static get styles(){return[e,i`
        :host {
          display: block;
        }

        .header {
          position: relative;
          cursor: pointer;
          display: block;
          border: 0;
          background: none;
          padding: 0;
          width: 100%;
          font-family: inherit;
          overflow: hidden;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: var(--collapse-card-overlay-background-color, transparent);
          opacity: 0.4;
          transition: background-color 0.3s ease;
        }

        .overlay[active] {
          background-color: var(--app-primary-color);
        }

        .triangle {
          margin: 0 auto;
          height: 0;
          background: white;
          transform: rotate(45deg);
          width: 25px;
          position: absolute;
          left: calc(50% - 12.5px);
          bottom: -40px;
          opacity: 0;
          transition: all 8s ease-in-out;
        }

        .triangle[active] {
          opacity: 1;
          height: 25px;
          bottom: -12.5px;
        }

        .body {
          max-height: 0;
          overflow: hidden;
        }

        .body[active] {
          max-height: 800px;
        }

        button {
          margin: 0;
        }
      `]}static get properties(){return{isOpened:{type:Boolean,attribute:"is-opened"},hasOverlay:{type:Boolean,attribute:"has-overlay"},hasTriangle:{type:Boolean,attribute:"has-triangle"},scrollTo:{type:String}}}render(){return s`
      ${this.mixinsCSS}
      <article role="region">
        <button tabindex="0" class="header" @click="${this._dispatchOpenedCard}" aria-controls="body" ?aria-expanded="${this.isOpened}">
          <slot name="header"></slot>
          <div ?active="${this.hasOverlay&&this.isOpened}" class="overlay"></div>
          ${this.hasTriangle?s`<div ?active="${this.hasTriangle&&this.isOpened}" class="triangle"></div>`:""}
        </button>
        <div ?active="${this.isOpened}" class="body" id="body" tabindex="${this.isOpened?0:-1}" ?aria-hidden="${!this.isOpened}">
          <slot name="body"></slot>
        </div>
      </article>
    `}_dispatchOpenedCard(){const t={detail:{element:this,elementScroll:this.scrollTo},bubbles:!0,composed:!0},e=new CustomEvent("opened-card",t);this.dispatchEvent(e)}get mixinsCSS(){return s`
      <style>
        article {
          @apply --card-collapse-article;
        }

        .header ::slotted(*) {
          @apply --card-collapse-header-slot;
        }

        .body {
          @apply --card-collapse-body;
        }
        
        .body ::slotted(*) {
          @apply --card-collapse-body-slot;
        }
      </style>
    `}});window.customElements.define("card-collapse-desktop",class extends t{static get styles(){return[e,i`
        :host {
          display: block;
        }

        .container-header {
          display: flex;
        }

        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          min-width: 200px;
          height: calc(100vw / 3);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border: 0;
          padding: 0;
          margin: 0;
          font-family: inherit;
        }

        .header .background-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .header h1 {
          color: var(--app-light-text-color);
          font-size: 36px;
          margin: 0;
          line-height: 40px;
          z-index: 1;
          pointer-events: none;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: black;
          opacity: 0.4;
          transition: background-color 0.3s ease;
        }

        .overlay.active,
        .overlay:hover {
          background-color: var(--app-primary-color);
        }

        .triangle {
          margin: 0 auto;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 25px solid white;
          position: absolute;
          left: calc(50% - 12.5px);
          bottom: -40px;
          opacity: 0;
          transition: all 0.5s ease;
        }

        .triangle.active {
          opacity: 1;
          bottom: -1px;
          z-index: 1;
        }

        .container-body {
          display: flex;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-out;
        }

        .container-body.active {
          max-height: 800px;
        }

        .body {
          width: 100%;
          padding: 60px 120px;
        }

        .go-to {
          position: relative;
          padding: 10px;
        }

        .go-to a {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-size: 18px;
          color: var(--app-ecosystem-background-color-primary);
          text-decoration: none;
          position: absolute;
          right: 30px;
        }

        a:hover {
          font-weight: bold;
        }

        span > * {
          white-space: pre-line;
        }
      `]}static get properties(){return{data:{type:Array},bodyList:{type:Array},urlButton:{type:String},selectedId:{type:Number},scrollTo:{type:String}}}constructor(){super(),this.scrollTo=""}render(){return s`
      <article>
        <div class="container-header">
          ${this._fetchHeader()}
        </div>
        <div class="container-body">
          <div class="body" id="body">
            ${this.bodyList}
            <div class="go-to" id="show-btns">
              <a href="${this.urlButton}">
                Ir al sitio
              </a>
            </div>
          </div>
        </div>
      </article>
    `}_fetchHeader(){return s`
      ${this.data.map((t,e)=>s`
        <button
          class="header" 
          id="${e}" 
          @click="${()=>this._onClickHeader(e)}"
          aria-label="${`${t.title} ${t.subtitle}`}"
          ?aria-expanded="${e===this.selectedId}"
          aria-controls="body"
          tabindex="${2*(e+1)-1}"
        >
          <picture>
            ${t.image.srcsetDesktop.map(t=>s`
              <source srcset="${t.src}" media="${t.media}">
            `)}
            <img class="background-img"
                 src="${t.image.src}" 
                 alt="${t.image.alt}">
          </picture>
          <h1>Smartup</h1>
          <h1>${t.subtitle}</h1>
          <div class="triangle"></div>
          <div class="overlay"></div>
        </button>
      `)}
    `}_setBody(t){this.bodyList=s`
      <span tabindex="${t===this.selectedId?-1:2*(t+1)}" ?aria-hidden="${t===this.selectedId}">
        ${this.data[t].body}
      </span>
    `}_setUrlButton(t){this.urlButton=this.data[t].urlButton}_toggleUrlButton(t){const e=this.shadowRoot.querySelector(".go-to");this.data[t].urlButton||e.remove()}_toggleElements(t){this.shadowRoot.querySelectorAll(".header").forEach(e=>{e.id===t.toString()?(e.querySelector(".triangle").classList.toggle("active"),e.querySelector(".overlay").classList.toggle("active")):(e.querySelector(".triangle").classList.remove("active"),e.querySelector(".overlay").classList.remove("active"))})}_toggleContainerBody(t){const e=this.shadowRoot.querySelector(".container-body");this.selectedId===t?(e.classList.toggle("active"),this.selectedId=null):(e.classList.add("active"),this.selectedId=t)}_onClickHeader(t){const e=parseInt(getComputedStyle(this).getPropertyValue("--header-height")),i=this.shadowRoot.querySelector(this.scrollTo).offsetTop;r({headerHeight:e,elemenToScroll:i}),this._toggleElements(t),this._setBody(t),this._toggleContainerBody(t),this._setUrlButton(t),this._toggleUrlButton(t)}});window.customElements.define("smartup-ecosystem",class extends t{static get styles(){return[e,i`
        :host {
          display: block;
          --collapse-card-overlay-background-color: black;
        }

        h1 {
          text-transform: uppercase;
        }

        .header-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .header-content h1 {
          color: var(--app-light-text-color);
          font-size: var(--app-image-text-font-size-mobile, 36px);;
          margin: 0;
          line-height: 40px;
          z-index: 1;
          white-space: pre-line;
        }

        .header-content .background-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .body-content {
          padding: 30px 20px;
        }

        .go-to {
          position: relative;
          padding: 10px;
          bottom: 20px;
        }

        .go-to a {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-size: 16px;
          color: var(--app-ecosystem-background-color-primary);
          text-decoration: none;
          position: absolute;
          right: 30px;
        }

        a:hover {
          font-weight: bold;
        }

        card-collapse-desktop {
          display: none;
        }

        @media (min-width: 768px) {
          card-collapse {
            display: none;
          }

          card-collapse-desktop {
            display: block;
          }
        }
      `]}static get properties(){return{data:{type:Array}}}constructor(){super(),this.data=b,this.addEventListener("opened-card",this._handleOpenedCard)}render(){return s`
      ${this.mixinsCSS}
      <section tabindex="0" aria-label="${a("ECOSYSTEM",!0)}">
        <h1 class="title section-header" aria-label="${a("ECOSYSTEM",!0)}" tabindex="0">
          <lit-i18n>ECOSYSTEM</lit-i18n>
        </h1>

        ${this.cardCollapseMobile}

        ${this.cardCollapseDesktop}
        
      </section>
    `}_handleOpenedCard(t){const e=void 0!==t.detail?t.detail.element:"",i=this.shadowRoot.querySelectorAll("card-collapse"),s=this._isOpened(i);i.forEach(t=>{t===e?s?setTimeout(()=>{this._handleScrollMobile(t)},400):this._handleScrollMobile(t):t.removeAttribute("is-opened")})}_isOpened(t){let e=!1;return t.forEach(t=>{e||(e=!!t.hasAttribute("is-opened"))}),e}_handleScrollMobile(t){if(t){const e=parseInt(getComputedStyle(this).getPropertyValue("--header-height"));r({elemenToScroll:t.offsetTop,headerHeight:e}),setTimeout(()=>t.focus())}this.scrollView=null,t.hasAttribute("is-opened")?(t.removeAttribute("is-opened"),this._handleOpenedCard(t)):t.setAttribute("is-opened","")}get cardCollapseMobile(){return s`
      <div class="card-collapse-container">
        ${this.data.map(t=>s`
            <card-collapse scrollTo="article" has-overlay has-triangle>
              <div slot="header">
                <div class="header-content">
                  <picture>
                    ${t.image.srcset.map(t=>s`
                      <source srcset="${t.src}" media="${t.media}">
                    `)}
                    <img class="background-img"
                         src="${t.image.src}"
                         alt="${t.image.alt}"
                    >
                  </picture>
                  <h1><lit-i18n>${t.title}</lit-i18n></h1>
                </div>
              </div>
  
              <div slot="body">
                <div class="dropdown-text-body">
                  <p>
                    ${t.body}
                  </p>
                  <div class="go-to">
                    <a href="${t.urlButton}">
                      Ir al sitio
                    </a>
                  </div>
                </div>
              </div>
            </card-collapse>
          `)}
      </div>
    `}get cardCollapseDesktop(){return s`
    <card-collapse-desktop scrollTo="article" .data="${this.data}"></card-collapse-desktop>`}get mixinsCSS(){return s`
      <style>
        card-collapse {
          --card-collapse-article: {
            margin: 0;
          }

          --card-collapse-header-slot: {
            height: 320px;
          }

          --card-collapse-body: {
            transition: max-height 0.5s ease;
          }

          --card-collapse-body-slot: {
            padding: 30px 20px;
          }
        }
      </style>
    `}});window.customElements.define("frequent-questions",class extends t{static get styles(){return[e,i`
        :host {
          display: block;
        }

        section {
          padding: 0 0 35px;
        }

        card-collapse[is-opened] {
          box-shadow: 0 2px 4px -2px #000;
        }

        p {
          margin: 0;
          padding: 1em 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .header-content .question {
          font-size: 16px;
          font-weight: bold;
          text-align: left;
        }

        .header-content .icon {
          margin-right: 7px;
          margin-left: 15px;
          font-weight: var(--app-font-weight-extrabold);
        }

        .header-content .icon svg {
          width: 15px;
          height: 16px;
        }

        .header-content .icon.active {
         transform: rotate(180deg);
        }

        .header-content .icon svg path {
          stroke: var(--app-primary-color, #CC0033);
          stroke-width: 3px;
        }

        .more-questions {
          margin: 40px 15px 0 15px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .more-questions .doubts {
          text-align: center;
          color: var(--app-frequent-questions-secondary-color, #484848);
        }

        .question-link {
          width: 275px;
        }

        .body-content, .header-content {
          transition: 1s;
          background-color: transparent;
        }

        .cliked {
          background: var(--app-frequent-questions-background-color, #F8F9F9);
          transition: 1s;
        }

        @media (min-width: 768px) {
          card-collapse[is-opened] {
            box-shadow: none;
          }
        }
      `]}constructor(){super(),this.addEventListener("opened-card",this._handleOpenedCard)}render(){return s`
      ${this.mixinsCSS}
      <section aria-label="${a("FREQUENT_QUESTIONS",!0)}" tabindex="0">
        <h1 class="title section-header" aria-label="${a("FREQUENT_QUESTIONS",!0)}" tabindex="0">
          <lit-i18n>FREQUENT_QUESTIONS</lit-i18n>
        </h1>

        <div role="list" tabindex="0" aria-label="Preguntas frecuentes">
          <card-collapse role="listitem" class="first">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION1</lit-i18n></p>
                <i class="icon">${n}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION1_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>

          <card-collapse role="listitem">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION2</lit-i18n></p>
                <i class="icon">${n}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION2_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>

          <card-collapse role="listitem">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION3</lit-i18n></p>
                <i class="icon">${n}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION3_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>

          <card-collapse role="listitem">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION4</lit-i18n></p>
                <i class="icon">${n}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION4_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>

          <card-collapse role="listitem">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION5</lit-i18n></p>
                <i class="icon">${n}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION5_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>
        </div>

        <div class="more-questions">
          <p class="doubts" tabindex="0"><lit-i18n>FREQUENT_QUESTION6</lit-i18n></p>
          <a class="primary-button big question-link" href="mailto:bedigital@soprasteria.com">
            <lit-i18n>ASK_US</lit-i18n>
          </a>
        </div>

      </section>
    `}_handleOpenedCard({detail:{element:t}}){this.shadowRoot.querySelectorAll("card-collapse").forEach(e=>{const i=e.querySelector(".header-content .icon"),s=e.querySelector(".header-content"),a=e.querySelector(".body-content");e===t?(i.classList.toggle("active"),s.classList.toggle("cliked"),a.classList.toggle("cliked"),e.hasAttribute("is-opened")?e.removeAttribute("is-opened"):e.setAttribute("is-opened","")):(i.classList.remove("active"),s.classList.remove("cliked"),a.classList.remove("cliked"),e.removeAttribute("is-opened"))})}get mixinsCSS(){return s`
      <style>
        card-collapse {
          --card-collapse-article: {
            margin: 0 15px;
            border-bottom: 1px solid var(--app-frequent-questions-border-color, #969696);
          }

          --card-collapse-header-slot: {
            height: auto;
          }

          --card-collapse-body: {
            transition: max-height 0.5s ease;
          }
        }

        card-collapse[is-opened] {
          --card-collapse-article: {
            margin: 0 15px; /*reset de margin again for override style*/
          }

          --card-collapse-body: {
            transition: max-height 2s ease-in-out;
          }
        }

        @media (min-width: 768px) {
          card-collapse {
            --card-collapse-article: {
              margin: 0 120px;
              border-bottom: 1px solid var(--app-frequent-questions-border-color, #969696);
            }
          }
          
          card-collapse[is-opened] {
            --card-collapse-article: {
              margin: 0 120px;
            }
          }
        }
      </style>
    `}});customElements.define("smartup-animation",class extends t{static get styles(){return[e,i`
        :host {
          --app-smartup-animation-red: rgb(189, 63, 73);
          --app-smartup-animation-green: rgb(119, 189, 62);
          --app-smartup-animation-blue: rgb(35, 190, 183);
          --app-smartup-animation-purple: rgb(195, 77, 211);
          --app-smartup-animation-yellow: rgb(170, 161, 41);

          --app-smartup-animation-green-light: rgb(98, 151, 55);
          --app-smartup-animation-blue-light: rgb(53, 161, 156);
          --app-smartup-animation-yellow-light: rgb(149, 141, 44);
        }
        .dark {
          --animation-background: linear-gradient(217deg, rgba(219, 146, 66, 0.8),rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(81, 123, 81, 0.8), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(50, 203, 240, 0.8), rgba(0, 0, 255, 0) 70.71%);
          --animation-box-background: rgba(0,0,0,.6);
          --animation-green: var(--app-smartup-animation-green);
          --animation-blue: var(--app-smartup-animation-blue);
          --animation-yellow: var(--app-smartup-animation-yellow);
          --animation-title: white;

          --animation-switch-back-hard: rgba(18, 18, 18, .8);
          --animation-switch-back-soft: rgba(18, 18, 18, .6);
          --animation-switch-moon-color: white;
          --animation-switch-sun-color: rgba(255,255,255, .6);

          --animation-blend-mode: unset;
        }

        .light {
          --animation-background: rgba(255,255,255,.3);
          --animation-box-background: rgba(255,255,255,.6);
          --animation-green: var(--app-smartup-animation-green-light);
          --animation-blue: var(--app-smartup-animation-blue-light);
          --animation-yellow: var(--app-smartup-animation-yellow-light);
          --animation-title: '#2b2b2b';

          --animation-switch-back-hard: rgba(18, 18, 18, .6);
          --animation-switch-back-soft: rgba(18, 18, 18, .8);
          --animation-switch-moon-color: rgba(255,255,255, .6);
          --animation-switch-sun-color: white;

          --animation-blend-mode: multiply;
        }

        .container {
          background-image: url('./assets/images/main/the-experience/background-mobile.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center; 
          background-size: cover;
          background-attachment: local;
          height: 400px;
        }

        .filter {
          position: absolute;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 400px;
          background: var(--animation-background);
          transition: background 200ms ease-in-out;
        }

        .icon {
          margin: 0px;
          mix-blend-mode: var(--animation-blend-mode);
          fill: black;
          stroke: black;
        }

        .animation {
          font-size: 30px;
          line-height: 40px;
          color: #000;
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 100%;   
        }

        .animation p {
          height: 50px;
          text-align: center;
          white-space: nowrap;
          margin: 0;
          padding-top: 20px;
          transition: all 200ms ease-in-out;
        }

        .animation b {
          overflow: hidden;
          position: relative;
          height: 40px;
          top: 0px;
        }

        .slide {
          display: flex;
          flex-direction: column;
          position: relative;
          white-space: nowrap;
          top: 0;
          left: 0;
        }

        .smart {
          font-weight: 600;
          color: var(--animation-title);
        }

        .box {
          display: flex;
          width: 95%;
          justify-content: center;
          flex-direction: column;
          background-color: var(--animation-box-background);
          align-items: center;
          border-radius: 100px;
          border-top-left-radius: 0;
          border-bottom-right-radius: 0;
          padding-bottom: 30px;
          padding-top: 30px;
          transition: background-color 200ms ease-in-out;
        }

        .box[paused] .slide,
        .box[paused] .icon {
          animation: none !important;
        }

        .red {
          color: var(--app-smartup-animation-red, rgb(189, 63, 73));
        }

        .green {
          color: var(--animation-green);
        }

        .blue {
          color: var(--animation-blue);
        }

        .purple {
          color: var(--app-smartup-animation-purple, rgb(195, 77, 211));
        }

        .yellow {
          color: var(--animation-yellow);
        }

        .switch-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 70px;
          height: 30px;
          border-right: 100%;
          display: flex;
        }

        .switch {
          width: 50%;
          height: 30px;
          display: flex;
          justify-content: center;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .switch-sun {
          border-top-left-radius: 50%;
          border-bottom-left-radius: 50%;
          background-color: var(--animation-switch-back-soft);
        }

        .switch-moon {
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
          background-color: var(--animation-switch-back-hard);
        }

        .moon {
          fill: var(--animation-switch-moon-color);
        }

        .sun {
          fill: var(--animation-switch-sun-color);
        }

        @media screen and (min-width: 500px) {
          .container {
            background-image: url('./assets/images/main/the-experience/background.jpg');
          }
        }

        @media screen and (min-width: 600px) {
          .box {
            width: auto;
          }

          .animation b {
            height: 50px;
            top: 10px;
          }

          .animation {
            font-size: 40px;
            line-height: 50px;
          }

          .icon {
            margin: 40px;
          }

          .box {
            flex-direction: unset;
            padding: 20px;
          }

          .animation p {
            margin-right: 0.3em;
            margin-top: 0;
            margin-bottom: 0;
            padding: 0;
          }
        }

        @media screen and (min-width: 768px) {
          .filter {
            flex-direction: unset;
          }

          .box {
            padding-left: 70px;
          }

          .animation {
            flex-direction: unset;
            text-align: left;
            width: auto;
          }

          .animation p {
            padding: 25px;
            padding-right: 10px;
          }

          .animation b {
            top: 25px;
          }

          .icon {
            margin: 0px;
          }
        }
        
        @media screen and (min-width: 1500px) {
          .container {
            height: 500px;
          }

          .filter {
            height: 500px;
          }
        }
      `]}static get properties(){return{wordList:{type:Array},animated:{type:Boolean},mode:{type:String}}}constructor(){super(),this.colorList=["red","green","blue","purple","yellow"],this.colorCount=0,this.wordList=[],this.mode="dark"}render(){return s`
    <style>
      p {
        color:red;
      }
    </style>
      <div class="container ${this.mode}">
        <div class="filter">
          <div class="switch-btn">
            <button class="switch switch-sun" @click="${()=>this.mode="light"}">${d}</button>
            <button class="switch switch-moon" @click="${()=>this.mode="dark"}">${l}</button>
          </div>
          <div class="box" ?paused="${!this.animated}">
            ${c}
            <div class="animation">
              <p class="smart">SmartUp es</p>
              <b>
                <div class="slide">
                  ${this.wordList?this.wordList.map((t,e)=>s`
                    <span class="${this.getColorClass(e)}">${t}</span>
                  `):[]}
                </div>
              </b>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){this._cssGenerator(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this._resetAnimationOnResize()}_cssGenerator(){const t="var(--app-smartup-animation-",e=Math.round(100/(this.wordList?this.wordList.length:[]));let i="@keyframes move {0%  { top: 0px; } ",s="@media screen and (min-width: 600px) { "+i,a="@keyframes anim { ",o="",n=0;const r=(t,e)=>t+"% { stroke: "+e+"); fill: "+e+");} ",d=(t,i)=>t*e+"% {top: -"+i+"px; } ";this.wordList=this.wordList||[],this.wordList.forEach((l,c)=>{c>0&&(i=i.concat(d(c,4*c*10)),s=s.concat(d(c,50*c)),o=o.concat(r(c*e,t+this.colorList[n]))),c===this.wordList.length-1&&(a=this._svgKeyframeFinal(n,o,t,a,r)),n=this._resetColorIndex(0===c,n)}),this._setAnimationsAndKeyframes(a,".cls-1,.cls-2,.cls-3,.cls-4,.cls-5{fill:none;}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6{stroke-miterlimit:10;}.cls-1,.cls-2{stroke-width:27px;}.cls-2{stroke-linecap:round;}.cls-3{stroke-width:35px;}.cls-4{stroke-width:26px;}.cls-5{stroke-width:18px;} ",i,s,(t,e,i,s)=>{const a=s?" animation-delay: 1s; ":"";this.shadowRoot.querySelector(t).setAttribute("style","animation: "+e+" "+i+"s; animation-iteration-count: infinite; "+a)})}getColorClass(t){return this.colorCount===this.colorList.length-1||0===t?this.colorCount=0:this.colorCount++,t===this.wordList.length-1&&this._checkLastColor(this.colorCount)?this.colorList[2]:this.colorList[this.colorCount]}_checkLastColor(t){return this.colorList[t]===this.colorList[0]}_resetColorIndex(t,e){return t||e===this.colorList.length-1?0:e+1}_svgKeyframeFinal(t,e,i,s,a){t=this._resetColorIndex(!1,t);const o=i+(this._checkLastColor(t)?this.colorList[2]:this.colorList[t]);return s.concat(a(0,o)+e+" "+a(100,o)+"} ")}_setAnimationsAndKeyframes(t,e,i,s,a){a(".slide","move",this.wordList.length,!0),a(".icon","anim",this.wordList.length,!1),this.shadowRoot.querySelector("style").innerHTML=t+e+i+"} "+s+"}"}_resetAnimationOnResize(){this.isDesktop=window.innerWidth>600,window.addEventListener("resize",this._resetAnimations.bind(this))}_resetAnimations(){const t=this.shadowRoot.querySelector(".slide"),e=this.shadowRoot.querySelector(".icon");window.innerWidth>600!==this.isDesktop&&(t.setAttribute("style","animation: none"),e.setAttribute("style","animation: none;"),setTimeout(()=>{t.setAttribute("style","animation: move "+this.wordList.length+"s; animation-iteration-count: infinite; animation-delay: 1s;"),e.setAttribute("style","animation: anim "+this.wordList.length+"s; animation-iteration-count: infinite;")}),this.isDesktop=window.innerWidth>600)}});customElements.define("the-experience",class extends t{static get styles(){return[e,i`
        :host {
          display: block;
          background-color: var(--app-background-color, white);
        }

        * {
          box-sizing: border-box;
        }

        section p,
        section div {
          padding-left: 18px;
          padding-right: 18px;
        }

        section p {
          color: var(--app-secundary-color, #4A4A4A);
          font-size: var(--app-paragraph-font-size-mobile, 16px);
          line-height: calc(20/18);
          margin: 0 0 1em;
        }

        section p.upper-text {
          text-align: left;
          width: 100%;
          margin-bottom: 26px;
          margin-left: 0;
        }

        section p.bottom-text {
          text-align: right;
          width: 100%;
          max-width: 628px;
          padding: 40px;
          margin: 12px 0 0 auto;
        }

        section div.tags-container {
          background-color: #ECECEC;
          width: 100%;
          display: flex;
          justify-content: center;
          padding-top: 30px;
          padding-bottom: 30px;
        }

        @media (min-width: 768px) {
          section p,
          section div {
            padding-left: 120px;
            padding-right: 120px;
          }

          section p {
            font-size: var(--app-paragraph-font-size-desktop, 20px);
            line-height: calc(24/20);
          }

          section p.upper-text {
            max-width: 839px; /* 719 + 120 */
          }

          section p.bottom-text {
            max-width: 748px; /* 628 + 120 */
          }
        }
      `]}static get properties(){return{animated:{type:Boolean}}}constructor(){super(),this.animated=!1,this.wordList=a("ANIMATION_WORDS_LIST",!0)}render(){if(0==!this.wordList.length)return s`
      <section aria-label="${a("THE_EXPERIENCE",!0)}" tabindex="0">
        <h1 class="title section-header">
          <lit-i18n>THE_EXPERIENCE</lit-i18n>
        </h1>
        <p class="upper-text" tabindex="0"><lit-i18n>THE_EXPERIENCE_P1</lit-i18n></p>
        <smartup-animation .wordList="${this.wordList}" ?animated="${this.animated}"></smartup-animation>
        <p class="bottom-text" tabindex="0"><lit-i18n>THE_EXPERIENCE_P2</lit-i18n></p>
      </section>
      `}firstUpdated(){window.IntersectionObserver?(this.observer=new IntersectionObserver(this._handleIntersection.bind(this)),this.observer.observe(this)):this.animated=!0,document.addEventListener("LIT_I18N_UPDATED",()=>{this.wordList=a("ANIMATION_WORDS_LIST",!0),this.requestUpdate()})}disconnectedCallback(){this.observer&&this.observer.unobserve(this)}_handleIntersection([{isIntersecting:t}]){this.animated=t}});window.customElements.define("single-crack",class extends t{static get styles(){return[e,i`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 91px 0;
        max-width: 100%;
        box-sizing: border-box;
      }

      .crack-inner {
        height: 100%;
        width: 100%;
        max-width: 189px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .crack-inner > * {
        max-width: 100%;
      }

      h2 {
        margin: 12px 0 0 0;
        color: #FFF;
        font-weight: var(--app-font-weight-normal, 400);
        font-size: 18px;
        line-height: 20px;
        text-transform: uppercase;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        color: #FFF;
        font-weight: var(--app-font-weight-light, 300);
        font-size: 18px;
        line-height: 20px;
        margin: 0;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      img {
        position: relative;
        box-sizing: border-box;
        display: block;
        border-radius: 50%;
        width: 100%;
        border-radius: 50%;
      }

      @media (min-width: 768px) {
        .crack-inner {
          max-width: 273px;
        }

        h2, p {
          font-size: var(--app-subtitle-font-size, 24px);
          line-height: 24px;
        }
      }
    `]}static get properties(){return{crack:{type:Object}}}render(){return s`
      <div class="crack-inner">
        <img src="${this.crack.picture}" alt="${this.crack.name}">
        <div>
          <h2>${this.crack.name}</h2>
          <p>${this.crack.job}</p>
        </div>
      </div>
    `}});window.customElements.define("our-cracks",class extends t{static get styles(){return[e,i`
        :host {
          width: 100%;
          background: #FFF;
        }

        section h1.title.section-header {
          font-size: 17px;
        }

        .slider-container {
          padding: 0 35px;
          width: 100%;
          max-width: 100%;
          min-width: 100%;
          position: relative;
          box-sizing: border-box;
          background-image: url("./assets/images/main/our-cracks/background-mobile.jpg");
          background-size: cover;
          background-position: center;
        }

        .slider-wrapper {
          overflow-x: hidden;
          width: 100%;
          height: 100%;
        }

        .slider-container::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--app-primary-color, #CC0033);
          opacity: 0.2;
        }

        .slider {
          display: flex;
          box-sizing: border-box;
        }

        .arrow-button {
          position: absolute;
          top: 50%;
          cursor: pointer;
          background: transparent;
          border: 0;
          width: 27px;
          height: 15px;
          padding: 0;
        }

        .arrow-button[disabled] {
          display: none;
        }

        .arrow-button.next {
          right: 17px;
          transform: rotateZ(-90deg);
        }

        .arrow-button.prev {
          left: 17px;
          transform: rotateZ(90deg);
        }

        .arrow-button svg {
          width: 100%;
          height: 100%;
        }

        .arrow-button svg * {
          stroke-width: 1px;
        }

        .arrow-button:hover svg *,
        .arrow-button:active svg * {
          stroke: var(--app-primary-color, #CC0033);
        }

        single-crack {
          flex: 1 1 0;
          box-sizing: border-box;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }

        .arrow-button svg * {
          stroke-width: 2px;
        }

        @media (min-width: 768px) {
          section h1.title.section-header {
            font-size: var(--app-title-font-size-desktop, 32px);
          }

          .slider-container {
            padding: 0 220px;
            background-image: url("./assets/images/main/our-cracks/background.jpg");
          }

          .arrow-button {
            width: 40px;
            height: 20px;
          }

          .arrow-button.next {
            /* 120 - 10px from rotating the arrow */
            right: 110px;
          }

          .arrow-button.prev {
            /* 120 - 10px from rotating the arrow */
            left: 110px;
          }
        } 
      `]}static get properties(){return{cracks:{type:Array},autoplay:{type:Boolean},index:{type:Number},speed:{type:Number},animationSpeed:{type:Number},minTouchLength:{type:Number},minTouchAngle:{type:Number},numItems:{type:Number},_buttonsDisabled:{type:Boolean}}}constructor(){super(),this.cracks=[],this.index=0,this.speed=5e3,this.animationSpeed=.7,this.minTouchLength=70,this.minTouchAngle=30,this.autoplay=!0,this._buttonsDisabled=!1,this.numItems=1,this.elementMinWidth=300,this.interval=null,this._focusEventsActive=[],this._isIntersecting=!0,this.EVENTS={mouseenter:"mouse",mouseleave:"mouse",focusin:"focus",focusout:"focus"}}render(){return s`
      <section aria-label="${a("OUR_CRACKS_TITLE",!0)}" tabindex="0">
        <h1 class="title section-header" aria-label="${a("OUR_CRACKS_TITLE",!0)}" tabindex="0">
          <lit-i18n>OUR_CRACKS_TITLE</lit-i18n>
        </h1>
        <div id="cracks-slider-container" class="slider-container">
          <button id="prev" aria-label="${a("PREV_BUTTON")}" class="arrow-button prev" ?disabled="${this._buttonsDisabled}" @click="${()=>this.clickPrev()}">${n}</button>
          <div class="slider-wrapper">
            <div class="slider" id="cracks-slider">
              ${this.cracks.map(t=>s`<single-crack id="${t.name.split(" ").join("")}" .crack="${t}"></single-crack>`)}
            </div>
          </div>
          <button id="next" aria-label="${a("NEXT_BUTTON")}" class="arrow-button next" ?disabled="${this._buttonsDisabled}" @click="${()=>this.clickNext()}">${n}</button>
          <div aria-live="polite" class="sr-only" tabindex="-1">
            ${a("OUR_CRACKS_TITLE")+": "+a(1===this.numItems?"SLIDE":"SLIDE_GROUP")+" "+(this.index+1)+" "+a("OF")+" "+Math.ceil(this.cracks.length/this.numItems)}
          </div>
        </div>
      </section>
    `}firstUpdated(){this._addEventListeners(),h(this.animationSpeed,this,"#cracks-slider"),this._updateItemsVisibility(),this._startAutoplay()}updated(){this._recalculateSliderWidth(),this._updateCarouselWidth(),u(null,this,"#cracks-slider")}connectedCallback(){super.connectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.3,callback:([{isIntersecting:t}])=>this._isIntersecting=t}})),window.addEventListener("resize",this._onWindowResize.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.3}})),window.removeEventListener("resize",this._onWindowResize.bind(this))}clickNext(){this._stopAutoplay(),this._next(),this._startAutoplay()}clickPrev(){this._stopAutoplay(),this._prev(),this._startAutoplay()}_startAutoplay(){this._stopAutoplay(),this.autoplay&&0==this._focusEventsActive.length&&this.cracks.length>this.numItems&&(this.interval=setInterval(()=>{this._isIntersecting&&this._next()},this.speed))}_stopAutoplay(){this.interval&&(clearInterval(this.interval),this.interval=void 0)}_recalculateSliderWidth(){this.sliderWidth=this.shadowRoot.querySelector(".slider-wrapper").offsetWidth;let t=Math.floor(this.sliderWidth/this.elementMinWidth);t<1&&(t=1),this.cracks.length<t&&(t=this.cracks.length),this.numItems!==t&&(this.numItems=t);const e=this.cracks.length<=this.numItems;this._buttonsDisabled!==e&&(this._buttonsDisabled=e)}_updateCarouselWidth(){this.shadowRoot.querySelector("#cracks-slider-container").style.width=this.sliderWidth+"px",this.shadowRoot.querySelector("#cracks-slider").style.width=this.cracks.length*this.sliderWidth/this.numItems+"px"}_next(){this.index++,this.index>=Math.ceil(this.cracks.length/this.numItems)&&(this.index=0),u(null,this,"#cracks-slider")}_prev(){this.index--,this.index<0&&(this.index=Math.ceil(this.cracks.length/this.numItems)-1),u(null,this,"#cracks-slider")}_updateItemsVisibility(){this.cracks.forEach((t,e)=>{const i=this.index*this.numItems,s=i+this.numItems,a=e>=i&&e<s,o=this.shadowRoot.querySelector(`#${t.name.split(" ").join("")}`);o.setAttribute("aria-hidden",!a),o.setAttribute("tabindex",a?0:-1)})}_addEventListeners(){p(this,"#cracks-slider");const t=this.shadowRoot.querySelector("#cracks-slider-container");t.addEventListener("mouseenter",this._onFocusIn.bind(this)),t.addEventListener("focusin",this._onFocusIn.bind(this)),t.addEventListener("mouseleave",this._onFocusOut.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))}_onWindowResize(){this._recalculateSliderWidth(),this.index=Math.floor(this.index/this.numItems),this._updateCarouselWidth(),u(null,this,"#cracks-slider")}_onFocusIn(t){this._focusEventsActive.push(this.EVENTS[t.type]),this._stopAutoplay()}_onFocusOut(t){this._focusEventsActive=this._focusEventsActive.filter(e=>e!==this.EVENTS[t.type]),this._startAutoplay()}});window.customElements.define("want-to-live-the-experience",class extends t{static get styles(){return[e,i`
        :host {
          display: block;
        }

        section {
          height: auto;
          padding: 0 16px 36px;
          background-color: #ECECEC;
          box-sizing: border-box;
        }

        section h1.title.section-header {
          padding: 15px 0;
        }

        section p {
          display: inline;
        }

        div.navigation-buttons {
          display: flex;
          justify-content: center;
        }

        @media screen and (min-width: 768px) {
          section {
            background-image: url('/assets/images/white_ninja.svg');
            background-repeat: no-repeat;
            background-position: right -140px center;
            font-size: 20px;
            padding: 0 0 36px;
            box-sizing: border-box;
          }

          section h1.title.section-header {
            padding: 26px 120px;
          }

          .text-want-to-live {
            padding: 0 120px;
          }
          
          section div a.primary-button {
            margin-top: 100px;
          }
        } 
      `]}render(){return s`
      <section aria-label="${a("LIVING_THE_EXPERIENCE",!0)}" tabindex="0">
        <h1 class="title section-header" aria-label="${a("LIVING_THE_EXPERIENCE",!0)}" tabindex="0"> 
          <lit-i18n>LIVING_THE_EXPERIENCE</lit-i18n>
        </h1>
        <div class="text-want-to-live">
          <p tabindex="0"> 
            <lit-i18n>LIVING_THE_EXPERIENCE_P</lit-i18n>
          </p>
        </div>
        <div class="navigation-buttons">
          <a href="mailto:bedigital@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${a("WANT_TO_BE_SMARTER_BTN_A11Y",!0)}">
            <lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n>
          </a>
        </div>
      </section>
    `}});window.customElements.define("main-view",class extends t{static get styles(){return[e,i`
        :host {
          height: 100%;
        }
        
        video {
          transform: rotate(180deg) scale(1.1);
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
      `]}render(){return s`
      <hero-element .literals="${["SMARTUP_XPERIENCE","SMARTUP_XPERIENCE_SUBTITLE"]}" .scrollTo="${"the-experience"}">
        <video slot="video" autoplay loop muted playsinline poster="./assets/videos/main-video-poster.jpg">
          <source src="./assets/videos/main-video.mp4" type="video/mp4">
        </video>
      </hero-element>
      <the-experience></the-experience>
      <smartup-ecosystem></smartup-ecosystem>
      <our-cracks .cracks="${m}"></our-cracks>
      <smarters-reviews></smarters-reviews>
      <want-to-live-the-experience></want-to-live-the-experience>
      <frequent-questions></frequent-questions>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("scroll-automatic",t=>this._scrollMe(t))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("scroll-automatic",t=>this._scrollMe(t))}_scrollMe(t){const e=parseInt(getComputedStyle(this).getPropertyValue("--header-height")),i=this.shadowRoot.querySelector(t.detail.elementScroll).offsetTop;r({headerHeight:e,elemenToScroll:i})}});
//# sourceMappingURL=index-373a4b8b.js.map
