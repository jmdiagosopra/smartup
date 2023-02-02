import{L as t,S as e,c as i,h as s,g as o}from"./chunk-3dad17c8.js";import{a as n,s as a}from"./chunk-7e592414.js";import"./chunk-9de70b05.js";customElements.define("smart-up",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
        }

        .image-deploy {
          max-width: 100%;
          min-width: 100%;
          height: 367px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url("./assets/images/training/image-deploy-mobile.jpg") no-repeat;
          background-size: cover;
          background-position-y: 88%;
          background-position-x: 28%;
          padding: 0px 35px;
          box-sizing: border-box;
        }

        .image-deploy:before {
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background-color: #CD6B79;
          background-image: linear-gradient(#CB4747, black); 
          opacity: 0.8;
        }

        .box-deploy {
          position: relative;  
          width: 50px;
          height: 10%;
          font-size: 1rem;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          white-space: pre-line;
          transition: all 1s ease;
        }

        .animated {
          width: 90%;
          height: 80%;
        }

        .top-left-corner {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          left: 0;
          border-left: 3px solid white;
          border-top: 3px solid white;
          transition: transform 1s ease;
        }

        .animated .top-left-corner {
          transform:rotate(360deg);
        }

        .bottom-right-corner {
          width: 30px;
          height: 30px;
          position: absolute;
          bottom: 0;
          right: 0;
          border-right: 3px solid white;
          border-bottom: 3px solid white;
          transition: transform 1s ease;
        }

        .animated .bottom-right-corner {
          transform:rotate(360deg);
        }

        .box-deploy p {
          display: flex;
          justify-content: center;
          opacity: 0;
          padding: 10px;
          min-width: 180px;
        }

        .animated p {
          opacity: 1;
          margin: 0;
          transition: opacity 0.5s ease 1s;
        }

        @media (min-width: 400px) {
          .animated {
            height: 60%;
          }
        }

        @media (min-width: 768px) {
          .box-deploy {
            white-space: initial;
            width: 49px;
            transition : all 0.8s ease;
            height: 10%;
          }

          .animated {
            width: 600px;
            height: 30%;
          }

          .top-left-corner {
            top: -2px;
            left: -5px;
          }

          .image-deploy {
            background: url("./assets/images/training/image-deploy.jpg") no-repeat fixed;
            background-size: cover;
            background-position-y: 0;
            background-position-x: 0;
          }
        }
      `]}static get properties(){return{animated:{type:Boolean},smartUpBottomCardsData:{type:Array}}}constructor(){super(),this.animated=!1,this.smartUpBottomCardsData=[]}render(){return s`
        <section aria-label="${o("SMARTUP",!0)}" tabindex="0">
          <h1 class="title section-header" aria-label="${o("SMARTUP",!0)}" tabindex="0">
            <lit-i18n>SMARTUP</lit-i18n>
          </h1>
          <div class="image-deploy">
            <div class="box-deploy ${this.animated?"animated":""}">
            <div class="top-left-corner"></div>
                <p tabindex="0">
                  <lit-i18n>SMARTUP_BOX_TEXT</lit-i18n>
                </p>
            <div class="bottom-right-corner"></div>
            </div>
          </div>
          <bottomcards-container .cardsData="${this.smartUpBottomCardsData}"></bottomcards-container>
        </section>
    `}firstUpdated(){if(window.IntersectionObserver){const t=this.shadowRoot.querySelector(".image-deploy");this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:t,threshold:.7,callback:this._handleIntersection.bind(this)}}))}else this.animated=!0}disconnectedCallback(){if(super.disconnectedCallback(),window.IntersectionObserver){const t=this.shadowRoot.querySelector(".image-deploy");this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:t,threshold:.7}}))}}_handleIntersection([{isIntersecting:t}]){this.animated=t}});customElements.define("technical-coaches",class extends t{static get styles(){return[e,i`
        .container {
          position: relative;
          width: 100%;
          background: url('./assets/images/training/coaches.jpg');
          background-size: cover;
          background-position: center;
        }

        .container::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-color: #CD6B79;
          background-image: linear-gradient(#CB4747, black);
          opacity: 0.8;
        }

        .filter {
          background-color: rgba(152, 55, 55, 0.69);
          padding: 10px;
        }

        .filter > p {
          position: relative;
          text-align: center;
          padding: 0px;
          font-size: 20px;
          font-weight: bold;
          color: white;
        }

        h3 {
          position: relative;
          text-align: center;
          color: white;
          margin: 0;
          transition: all 1s;
          margin-top: 40px;
          font-size: 18px;
        }

        h4 {
          margin: 0;
        }

        h5 {
          margin: 0;
          font-weight: 400;
        }

        p {
          will-change: transform;
          transition: all 1s;
        }

        .coaches {
          display: flex;
          position: relative;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 40px;
        }

        .coach {
          width: 200px;
          height: 200px;
          margin: 15px;
          background-size: 220%;
          background-repeat: no-repeat;
          overflow: hidden;
          border-radius: 100%;
          position: relative;
          transition: all 1s;
          cursor: pointer;
        }
        
        .hover:before {
          content:"";
          position: absolute;
          width: 200px;
          height: 200px;
          top: 0; left: 0;
          background-color: rgba(0,0,0,0.4);
          border-radius: 100%;
          animation: fadein 1s;
        }
        
        .coach-first {
          background-image: url('./assets/images/main/our-cracks/josediago.jpeg');
          background-size: cover;
          background-position: 0px 0px;
          background-position: 0% 0%;
        }
        
        .coach-second {
          background-image: url('./assets/images/main/our-cracks/arturozarzalejo.jpeg');
          background-size: cover;
          background-position: 0% 0%;
        }
        
        .coach-third {
          background-image: url('./assets/images/main/our-cracks/oriolfurnells.jpeg');
          background-size: cover;
          background-position: 0% 0%;
        }
        
        .coach-fourth {
          background-image: url('./assets/images/main/our-cracks/alfonsoestepa.jpg');
          background-size: cover;
          background-position: 0% 0%;
        }
        
        .card {
          display: none;
          padding: 20px;
        }

        .card:before {
          content: "";
          align-items: center;
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-color: white;
          opacity: 0.6;
        }

        .card > p {
          padding: 0px;
          font-weight: 500;
          width: 100%;
          float: right;
        }

        .card > h2, .card > h3, .card > p {
          position: relative;
          text-align: center;
          color: black;
        }

        .card > h2 {
          color: #CC0033;
        }

        .card > h3 {
          font-weight: 600;
        }

        .name {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          margin-top: 100%;
          color: white;
          will-change: transform;
          position: relative;
          border-radius: 100%;
          transition: all 1s;
        }

        .show {
          margin-top: 0;
        }

        svg {
          width: 50px;
          opacity: 0;
          transform: rotate(90deg);
          will-change: transform;
          transition: opacity 3s;
        }

        .arrow {
          position: absolute;
          background: none;
          border: none;
          height: 100px;
          padding: 20px;
          bottom: 0;
          cursor: pointer;
        }

        .remove-margin {
          margin: 0 !important;
          padding: 0 !important;
        }

        .coach-open {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          will-change: transform;
          transition: all 1s;
          width: 100%;
          height: 500px;
          border-radius: 0;
          margin: 0;
          padding: 0;
        }

        .text-close {
          opacity: 0;
          height: 0;
          padding: 0;
          margin: 0;
        }

        .expanded .bio {
          animation: fadein 2s 800ms;
          animation-fill-mode: backwards;
        }

        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .expanded .card {
          display: block;
        }
        
        .expanded svg {
          opacity: 1;
        }

        .button {
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

        @media screen and (min-width: 500px) {
          .coach-first {
            background-image: url('./assets/images/main/our-cracks/josediago.jpeg');
          }

          .coach-second {
            background-image: url('./assets/images/main/our-cracks/arturozarzalejo.jpeg');
          }

          .coach-third {
            background-image: url('./assets/images/main/our-cracks/oriolfurnells.jpeg');
          }

          .coach-fourth {
            background-image: url('./assets/images/main/our-cracks/alfonsoestepa.jpg');
          }
        }

        @media screen and (min-width: 768px) {
          .coaches {
            display: flex;
            flex-direction: unset;
          }

          .coach:before {
            display: none;
          }

          @keyframes light-fadein {
          from { background-color: rgba(0,0,0,0); }
          to { background-color: rgba(0,0,0,0.4); }
        }

          .hover:hover::before {
            display: block;
            animation: light-fadein 0.7s ease;
          }

          .coach-open {
            background-size: 100%;
          }

          .filter > p {
            font-size: 22px;
          }

          .card > p {
            width: 50%;
          }

          .coach:hover > .name {
            margin-top: 0;
          }

          .card {
            padding: 50px;
            padding-left: 0;
          }

          .card > h2, .card > h3, .card > p {
            text-align: right;
          }

          .filter {
            padding: 50px;
          }
        }

        @media screen and (min-width: 1024px) {
          .coach-open {
            background-position: center -35px;
          }
        }

        @media screen and (min-width: 1300px) {
          .coach-open {
            background-position: center -145px;
          }
        }
      `]}static get properties(){return{animated:{type:Boolean},device:{type:String},opened:{type:Boolean}}}constructor(){super(),this.animated=!1,this.opened=!1,this._detectDevice()}render(){return s`
      <section aria-label="${o("TECHNICAL_COACHES",!0)}" tabindex="0">
        <h1 class="title section-header" aria-label="${o("TECHNICAL_COACHES",!0)}" tabindex="0">
          <lit-i18n>TECHNICAL_COACHES</lit-i18n>
        </h1>
        <div class="container">
          <div class="filter">
              <p tabindex="0"><lit-i18n>TECHNICAL_COACHES_P</lit-i18n></p>
              <h3 tabindex="0"><lit-i18n>TECHNICAL_COACHES_SUBTITLE</lit-i18n></h3>
              <div class="coaches">
                <div class="coach hover coach-first" @click="${()=>this._openBio("first",this)}">
                  <div class="name first-title ${this.animated&&"mobile"===this.device?"show":""}">
                    <h4 tabindex="0"><lit-i18n>TECHNICAL_COACH_1_NAME</lit-i18n></h4>
                    <h5 tabindex="0"><lit-i18n>TECHNICAL_COACH_1_SUBTITLE</lit-i18n></h5>
                  </div>
                  <div class="card">
                    <h2 tabindex="0"><lit-i18n>TECHNICAL_COACH_1_NAME</lit-i18n></h2>
                    <h3 tabindex="0"><lit-i18n>TECHNICAL_COACH_1_SUBTITLE</lit-i18n></h3>
                    <p class="bio" tabindex="0"><lit-i18n>TECHNICAL_COACH_1_BIO</lit-i18n></p>
                    <button class="arrow" @click="${()=>this._closeBio("first",this)}">${n}</button>
                  </div>
                </div>
                <div class="coach hover coach-second" @click="${()=>this._openBio("second",this)}">
                  <div class="name second-title ${this.animated&&"mobile"===this.device?"show":""}">
                    <h4 tabindex="0"><lit-i18n>TECHNICAL_COACH_2_NAME</lit-i18n></h4>
                    <h5 tabindex="0"><lit-i18n>TECHNICAL_COACH_2_SUBTITLE</lit-i18n></h5>
                  </div>
                  <div class="card">
                    <h2 tabindex="0"><lit-i18n>TECHNICAL_COACH_2_NAME</lit-i18n></h2>
                    <h3 tabindex="0"><lit-i18n>TECHNICAL_COACH_2_SUBTITLE</lit-i18n></h3>
                    <p class="bio" tabindex="0"><lit-i18n>TECHNICAL_COACH_2_BIO</lit-i18n></p>
                    <button class="arrow" @click="${()=>this._closeBio("second",this)}">${n}</button>
                  </div>
                </div>
                <div class="coach hover coach-third" @click="${()=>this._openBio("third",this)}">
                  <div class="name third-title ${this.animated&&"mobile"===this.device?"show":""}">
                    <h4 tabindex="0"><lit-i18n>TECHNICAL_COACH_3_NAME</lit-i18n></h4>
                    <h5 tabindex="0"><lit-i18n>TECHNICAL_COACH_3_SUBTITLE</lit-i18n></h5>
                  </div>
                  <div class="card">
                    <h2 tabindex="0"><lit-i18n>TECHNICAL_COACH_3_NAME</lit-i18n></h2>
                    <h3 tabindex="0"><lit-i18n>TECHNICAL_COACH_3_SUBTITLE</lit-i18n></h3>
                    <p class="bio" tabindex="0"><lit-i18n>TECHNICAL_COACH_3_BIO</lit-i18n></p>
                    <button class="arrow" @click="${()=>this._closeBio("third",this)}">${n}</button>
                  </div>
                  </div>
                  <div class="coach hover coach-fourth" @click="${()=>this._openBio("fourth",this)}">
                  <div class="name fourth-title ${this.animated&&"mobile"===this.device?"show":""}">
                    <h4 tabindex="0"><lit-i18n>TECHNICAL_COACH_4_NAME</lit-i18n></h4>
                    <h5 tabindex="0"><lit-i18n>TECHNICAL_COACH_4_SUBTITLE</lit-i18n></h5>
                  </div>
                  <div class="card">
                    <h2 tabindex="0"><lit-i18n>TECHNICAL_COACH_4_NAME</lit-i18n></h2>
                    <h3 tabindex="0"><lit-i18n>TECHNICAL_COACH_4_SUBTITLE</lit-i18n></h3>
                    <p class="bio" tabindex="0"><lit-i18n>TECHNICAL_COACH_4_BIO</lit-i18n></p>
                    <button class="arrow" @click="${()=>this._closeBio("fourth",this)}">${n}</button>
                  </div>
                </div>
          </div>
        </div>

        <div class="button">
          <a href="mailto:bedigital@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${o("WANT_TO_BE_SMARTER_BTN_A11Y",!0)}">
            <lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n>
          </a>
        </div>
      </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.5,callback:([{isIntersecting:t}])=>this.animated=t}})):this.animated=!0,window.matchMedia("(min-width: 768px)").addListener(()=>{this._detectDevice()},!0)}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,element:{view:this,threshold:.5}})),window.matchMedia("(min-width: 768px)").removeListener(()=>{this._detectDevice()},!0)}_detectDevice(){this.device=window.innerWidth<768?"mobile":"desktop"}_openBio(t){this.shadowRoot.querySelector(".expanded")||this.opened||(setTimeout(()=>{this.shadowRoot.querySelector(".filter").classList.add("remove-margin"),this.shadowRoot.querySelector(".coaches").classList.add("remove-margin"),this.shadowRoot.querySelector(".coach-"+t).classList.add("coach-open"),this.shadowRoot.querySelector("p").classList.add("text-close"),this.shadowRoot.querySelector("h3").classList.add("text-close"),this.shadowRoot.querySelector("."+t+"-title").style.display="none";for(let e=0;e<this.shadowRoot.querySelectorAll(".coach").length;e++){let i=["first","second","third","fourth"];this.shadowRoot.querySelector(`.coach-${i[e]}`).classList.remove("hover"),t!==i[e]&&(this.shadowRoot.querySelector(`.coach-${i[e]}`).style.display="none")}this.shadowRoot.querySelector(".container").classList.add("expanded"),this._scrollWhenOpen()},0),this.opened=!0)}_closeBio(t){setTimeout(()=>{let e=["first","second","third","fourth"];this.shadowRoot.querySelector(".filter").classList.remove("remove-margin"),this.shadowRoot.querySelector(".container").classList.remove("expanded"),this.shadowRoot.querySelector(".coaches").classList.remove("remove-margin"),this.shadowRoot.querySelector(".coach-"+t).classList.remove("coach-open"),this.shadowRoot.querySelector("p").classList.remove("text-close"),this.shadowRoot.querySelector("h3").classList.remove("text-close"),setTimeout(()=>{this.shadowRoot.querySelector("."+t+"-title").style.display="";for(let t=0;t<this.shadowRoot.querySelectorAll(".coach").length;t++)this.shadowRoot.querySelector(`.coach-${e[t]}`).classList.add("hover");this.opened=!1},1e3);for(let i=0;i<this.shadowRoot.querySelectorAll(".coach").length;i++)t!==e[t]&&(this.shadowRoot.querySelector(`.coach-${e[i]}`).style.display="block")},0)}_scrollWhenOpen(){setTimeout(()=>{const t=parseInt(getComputedStyle(this).getPropertyValue("--header-height"));window.scrollTo({left:0,top:this.shadowRoot.querySelector("section").offsetTop-t,behavior:"smooth"})},500)}});const r={FIRST:.5,SECOND:.8};customElements.define("single-tech-track",class extends t{static get styles(){return[e,i`
        :host {
          display: block;
        }

        section {
          position: relative;
        }

        section h2 {
          font-size: 18px;
          opacity: 0;
        }

        .content {
          opacity: 0;
        }

        .index-1 {
          height: 440px;
        }

        .index-2 {
          height: 700px;
          color: #fff;
        }

        .index-3 {
          height: 610px;
        }
        
        section img {
          opacity: 0;
          position: absolute;
          right: 0;
          bottom: -80px;
          width: 220px;
          height: 227px;
          z-index: 1;
        }

        .index-3 img {
          bottom: 0;
        }
        
        .text-container {
          font-size: 16px;
          margin: 20px 26px 10px 26px;
        } 

        .text-container h2 {
          text-align: left;
        } 

        .right-side h2 {
          text-align: right;
        } 

        .right-side .skills-container {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .clear {
          clear: both;
        }

        .skills-container p {
          font-weight: bold;
          margin: 0px;
        }
        
        section img.right {
          margin: 0;
          left: 0;
          bottom: 0;
        }

        .single-tech-track-container .right-side {
          background-color: #CD6B79;
          text-align: right;
          margin-right: 0;
          padding: 70px 20px;
          height: 400px;
        }

        .bottom-to-top-default {
          opacity: 0;
        }

        .h2appearingFirst {
          margin-top: 30px;
          color: #CD6B79;
          animation: first_appearance 1s ease-out forwards;
        }

        .right-side .h2appearingFirst {
          color: #fff;
        }

        .bottom-to-top-effect {
          animation: bottom_to_top 1s ease 0.5s forwards;
        }

        .appearing {
          animation: last_appearance 1s ease-in forwards;
        }

        @keyframes first_appearance { 
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
          
        }
        
        @keyframes bottom_to_top { 
          0% {
            opacity: 0;
            margin-top: 60px;
          }
          100% {
            opacity: 1;
            margin-top: 0px;
          }
        }

        @keyframes last_appearance { 
          0% {
            opacity: 0;
          }
          60% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          section h2 {
            font-size: 26px;
            font-weight: 900;
          }

          section div.text-container {
            font-size: 18px;
            width: 60%;
          }

          section.single-tech-track-container {
            display: flex;
            height: 470px;
          }

          section.single-tech-track-container div.right-side {
            width: 100%;
          }
          
          section.single-tech-track-container div.right-side p {
            float: right;
            width: 600px;
            margin-left: 12vw;
          }

          .single-tech-track-container .right-side {
            padding: 100px 20px;
          }

          .content p {
            width: 600px;
          }

          section.single-tech-track-container div.text-container {
            padding-right: 250px;
          }

          section.single-tech-track-container.right div.text-container {
            padding: 50px 20px;
            margin-right: 0;
          }

          section img.right {
            margin: 0;
            margin-top: 0px;
            bottom: -40px;
            left: 0;
          }

          section img {
            width: 32vw;
            height: 32vw;
            max-width: 440px;
            max-height: 440px;
          }
          
        }
      `]}static get properties(){return{header:{type:String},textAlign:{type:String},description:{type:String},skills:{type:Array},src:{type:String},srcset:{type:Array},paddingTop:{type:Boolean},opacityChange:{type:Boolean},textDisplacement:{type:Boolean},imageAppearing:{type:Boolean},index:{type:Number}}}constructor(){super(),this.header="",this.textAlign="",this.description="",this.skills=[],this.src="",this.srcset=[],this.opacityChange=!1,this.textDisplacement=!1,this.imageAppearing=!1,this.paddingTop=!1,this.index=0}render(){return s`
     <section class="single-tech-track-container index-${this.index} ${this.textAlign} ${this.paddingTop?"bottom-single-tech-track":""}">
      <div class="text-container ${"right"==this.textAlign?"right-side":""}">
        <h2 class="${this.textDisplacement?"h2appearingFirst":""}" tabindex="0">${this.header}</h2>
        <div class="content ${this.textDisplacement?"bottom-to-top-effect":""}">
          <p tabindex="0">${this.description}</p>
          <div class="clear"></div>
          <div class="skills-container" tabindex="0"> ${this._printSkills()}
        </div>
        </div>
      </div>
      <picture>
        ${this.srcset.map(t=>s`
          <source srcset="${t.src}" media="${t.media}">
        `)}
        <img src=${this.src} class="${this.textAlign} ${this.imageAppearing?"appearing":""}">
      </picture>
    </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?(this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:r.FIRST,callback:this._handleIntersection.bind(this)}})),this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:r.SECOND,callback:this._handleSecondIntersection.bind(this)}}))):(this.opacityChange=!0,this.textDisplacement=!0)}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&(this._unobserveIntersection(r.FIRST),this._unobserveIntersection(r.SECOND))}_handleIntersection([{isIntersecting:t}]){this.opacityChange=t,this.textDisplacement=t,t&&this._unobserveIntersection(r.FIRST)}_handleSecondIntersection([{isIntersecting:t}]){this.imageAppearing=t,t&&this._unobserveIntersection(r.SECOND)}_unobserveIntersection(t){this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:t}}))}_printSkills(){return this.skills=this.skills||[],this.skills.map(t=>s`<p>${t}</p>`)}});customElements.define("tech-skills-tracks",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
        }
      `]}static get properties(){return{singleTechTracks:{type:Array}}}constructor(){super(),this.singleTechTracks=[]}render(){return s`
      <section class="container"> 
        <h1 class="title section-header">
        TECH SKILLS TRACKS
        </h1>
        <div>
          ${this.singleTechTracks.map((t,e)=>s`
            <single-tech-track
              .src="${t.src}"
              .srcset="${t.srcset}"
              .header="${o(t.title,!0)}"
              .description="${o(t.description,!0)}"
              .skills="${o(t.skills,!0)}"
              .textAlign="${t.textAlign}"
              .paddingTop="${t.paddingTop}"
              .index="${e+1}"
            ></single-tech-track>`)}
        </div>
      </section>
    `}});customElements.define("soft-skills",class extends t{static get styles(){return[e,i`
        :host{
          display: block;
        }

        section h1.title.section-header {
          font-size: 17px;
        }

        section .container-soft-skills {
          overflow: hidden;
          height: auto;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .container-soft-skills h2{
          font-size: 20px;
        }

        .container-soft-skills p {
          font-size: 14px;
        }

        .container-soft-skills img {
          position: absolute;
          z-index: 1;
          opacity: 0.2;
          width: 75%;
        }

        .container-soft-skills div{
          position:relative;
        } 

        .container-soft-skills .wrapper-right {
          top: 0;
          width: 100%;
          right: 100%;
          height: 50%;
          background-color: #D8D8D8;
          transition: right 1s ease-in;
        }

        .container-soft-skills div.wrapper-left{
          bottom: 0;
          width: 100%;
          left: 100%;
          height: 50%;
          background-color: #CD6B79;
          transition: left 1s ease-in;
        }

        .container-soft-skills .text-skills-right {
          width: 90%;
          margin: 20% auto;
        }
        
        .container-soft-skills .text-skills-right h2 {
          color:rgb(0, 0, 0);
        }

        .container-soft-skills .text-skills-right h2, .container-soft-skills .text-skills-right p {
          text-align: left;
        }

        .container-soft-skills .text-skills-left {
          width: 90%;
          margin: 20% auto;
        }

        .container-soft-skills .text-skills-left h2, .container-soft-skills .text-skills-left p {
          text-align: right;
          color: white;
        }

        .text-skills-left p {
          white-space: pre-line;
        }

        .container-soft-skills div.wrapper-right.animated {
          right: 0%;
        }

        .container-soft-skills div.wrapper-left.animated {
          left: 0%;
        }

        @media (min-width: 768px) {
          section h1.title.section-header {
            font-size: var(--app-title-font-size-desktop, 32px);
            padding: 26px 120px;
          }

          section.container-soft-skills h2 {
            font-size: 24px;
          }

          section.container-soft-skills {
            flex-direction: inherit;
            align-items: center;
            height: 592px;
            overflow: hidden;
          }
          
          section.container-soft-skills .wrapper-right, section.container-soft-skills .wrapper-left{
            height: 100%;
          }

          section.container-soft-skills .wrapper-right {
            clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
            -webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%)
          }

          section.container-soft-skills .wrapper-left {
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 3% 100%);
            -webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 3% 100%);
            margin-left: -14.6%;
            height: 90%;
            align-self: flex-start;
          }

          .container-soft-skills img {
              width: auto;
              height: 120%
          }

          section.container-soft-skills .text-skills-right {
            margin: 10% 5% 20%;
            width: 65%;
          }

          section.container-soft-skills .text-skills-right p {
            font-size: 20px;
          }

          section.container-soft-skills .text-skills-left {
            margin: 10% 25% 20%;
            width: 70%;
          }

          section.container-soft-skills .text-skills-left p {
            font-size: 20px;
          }
        }
      `]}static get properties(){return{animated:{type:Boolean}}}constructor(){super(),this.animated=!1}render(){return s`
      <section aria-label="${o("SOFT_SKILLS",!0)}" tabindex="0">
        <h1 class="title section-header" aria-label="${o("SOFT_SKILLS",!0)}" tabindex="0">
          <lit-i18n>SOFT_SKILLS</lit-i18n>
        </h1>
        <section class="container-soft-skills">
          <div class="wrapper-right ${this.animated?"animated":""}">
            <div class="text-skills-right">
              <h2 tabindex="0">
                <lit-i18n>SOFT_SKILLS_TITLE</lit-i18n>
              </h2>
              <p tabindex="0">
                <lit-i18n>SOFT_SKILLS_TEXT</lit-i18n>
              </p>
              <p tabindex="0">
                <lit-i18n>SOFT_SKILLS_SECOND_TEXT</lit-i18n>
              </p>
            </div>
          </div>
          <img src="./assets/images/training/white_ninja.svg">
          <div class="wrapper-left ${this.animated?"animated":""}">
            <div class="text-skills-left ${this.animated?"animated":""}">
              <h2 tabindex="0">
                <lit-i18n>CULTURA_DIGITAL_TITLE</lit-i18n>
              </h2>
              <p tabindex="0">
                <lit-i18n>CULTURA_DIGITAL_TEXT</lit-i18n>
              </p>
            </div>
          </div>
        </section>
      </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.5,callback:this._handleIntersection.bind(this)}})):this.animated=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubles:!0,composed:!0,detail:{element:this,threshold:.5}}))}_handleIntersection([{isIntersecting:t}]){this.animated=t,t&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.5}}))}});const c=[{title:"TECHSKILLSTRACKS_FRONTENDTRACK_TITLE",description:"TECHSKILLSTRACKS_FRONTENDTRACK_DESCRIPTION",skills:"TECHSKILLSTRACKS_FRONTENDTRACK_SKILLS",src:"./assets/images/training/tech-skills-tracks-front-end-image-resized.jpg",srcset:[{src:"./assets/images/training/tech-skills-tracks-front-end-image-resized-mobile.jpg",media:"(max-width: 768px)"},{src:"./assets/images/training/tech-skills-tracks-front-end-image-resized.jpg",media:"(min-width: 768px)"}],textAlign:"left"},{title:"TECHSKILLSTRACKS_BACKENDTRACK_TITLE",description:"TECHSKILLSTRACKS_BACKENDTRACK_DESCRIPTION",skills:"TECHSKILLSTRACKS_BACKENDTRACK_SKILLS",src:"./assets/images/training/tech-skills-tracks-back-end-image-resized.jpg",srcset:[{src:"./assets/images/training/tech-skills-tracks-back-end-image-resized-mobile.jpg",media:"(max-width: 768px)"},{src:"./assets/images/training/tech-skills-tracks-back-end-image-resized.jpg",media:"(min-width: 768px)"}],textAlign:"right"},{title:"TECHSKILLSTRACKS_QATRACK_TITLE",description:"TECHSKILLSTRACKS_QATRACK_DESCRIPTION",skills:"TECHSKILLSTRACKS_QATRACK_SKILLS",src:"./assets/images/training/tech-skills-tracks-qa-image-resized.jpg",srcset:[{src:"./assets/images/training/tech-skills-tracks-qa-image-resized-mobile.jpg",media:"(max-width: 768px)"},{src:"./assets/images/training/tech-skills-tracks-qa-image-resized.jpg",media:"(min-width: 768px)"}],textAlign:"left",paddingTop:!0}],l=[{text:"SMARTUP_BOTTOM_CARDONE_TEXT",image:"url(./assets/images/training/card1.jpg)"},{text:"SMARTUP_BOTTOM_CARDTWO_TEXT",image:"url(./assets/images/training/card2.jpg)"},{text:"SMARTUP_BOTTOM_CARDTHREE_TEXT",image:"url(./assets/images/training/card3.jpg)"}];window.customElements.define("training-view",class extends t{static get styles(){return[e,i`
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
      `]}render(){return s`
      <hero-element .literals="${["TRAINING_XPERIENCE","TRAINING_XPERIENCE_SUBTITLE"]}" .scrollTo="${"smart-up"}">
      <video slot="video" autoplay loop muted playsinline poster="./assets/videos/training-video-poster.jpg">
        <source src="./assets/videos/training-video.mp4" type="video/mp4">
      </video>
      </hero-element>
      <smart-up .smartUpBottomCardsData="${l}"></smart-up>
      <tech-skills-tracks .singleTechTracks="${c}"></tech-skills-tracks>
      <soft-skills></soft-skills>
      <technical-coaches></technical-coaches>
   `}connectedCallback(){super.connectedCallback(),this.addEventListener("scroll-automatic",t=>this._scrollMe(t))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("scroll-automatic",t=>this._scrollMe(t))}_scrollMe(t){const e=parseInt(getComputedStyle(this).getPropertyValue("--header-height")),i=this.shadowRoot.querySelector(t.detail.elementScroll).offsetTop;a({headerHeight:e,elemenToScroll:i})}});
//# sourceMappingURL=index-d57a7df9.js.map
