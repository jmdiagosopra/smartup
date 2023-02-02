import{L as t,S as e,c as i,h as s,g as n}from"./chunk-3dad17c8.js";import{d as a,c as r,e as o,a as d,s as c}from"./chunk-7e592414.js";import{t as l}from"./chunk-85ef2c0a.js";let p;customElements.define("smartup-community-header",class extends t{static get styles(){return[e,i`
        #red-gradient {
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(rgba(203, 71, 71, 0.7), rgba(0, 0, 0, 0.5));
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 1;
        }

        #smartup-community-section {
          height: 254px;
          overflow: hidden;
          position: relative;
        }

        .background-image-parallax {
          background-image: url('/assets/images/community/smartup-community/wolf.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: absolute;
          width: 100vw;
          height: 140vh;
          bottom: 0;
        }

        #smartup-community-header {
          color: #fff;
          font-size: 16px;
          text-align: center;
          padding-top: 40px;
          width: 82vw;
          margin: 12px auto;
        }

        .smartup-experience-circles-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          bottom: -18px;
        }

        .smartup-community-circle {
          display: block;
          background-color: #fff;
          width: 20px;
          height: 20px;
          border-radius: 200px;
          margin-bottom: 0px;
          opacity: 0;
        }

        #circle-0 {
          width: 3px;
          height: 3px;
          transition: all 1s ease;
        }

        #circle-1 {
          width: 7px;
          height: 7px;
          transition: all 1s ease 0.2s;
        }

        #circle-2 {
          width: 13px;
          height: 13px;
          transition: all 1s ease 0.4s;
        }

        #circle-3 {
          width: 29px;
          height: 29px;
          transition: all 1s ease 0.6s;
        }

        .animated {
          opacity: 1;
          margin-bottom: 10px;
        }

        @media screen and (min-width: 768px) {
          #smartup-community-section {
            background-size: 200%;
            height: 427px;
          }

          #smartup-community-header {
            width: 724px;
            height: 132px;
            font-size: 23px;
            padding-top: 100px;
          }

          .smartup-experience-circles-container {
            margin-bottom: -50px;
          }

          .smartup-community-circle {
            margin-bottom: 0px;
          }

          #circle-0 {
            width: 7px;
            height: 7px;
          }

          #circle-1 {
            width: 22px;
            height: 22px;
          }

          #circle-2 {
            width: 43px;
            height: 43px;
          }

          #circle-3 {
            width: 122px;
            height: 122px;
          }

          .animated {
            margin-bottom: 14px;
          }
        }

        @media screen and (min-width: 1200px) {
          #smartup-community-section {
            background-size: 120%;
          }
        }
        
        @media screen and (max-width: 360px) {
          #smartup-community-header {
            padding-top: 20px;
          }
        }
      `]}static get properties(){return{animated:{type:Boolean}}}constructor(){super(),this.animated=!1}render(){return s`
      <section>
        <div id='smartup-community-section'>
          <div id='red-gradient'>
            <p id='smartup-community-header' tabindex="0">
              <lit-i18n>SMARTUP_COMMUNITY_HEADER</lit-i18n>
            </p>
            <div class='smartup-experience-circles-container'>
              ${this._generateCircles}
            </div>
          </div>
          <div class="background-image-parallax"></div>
        </div>
      </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?(this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.7,callback:this._handleIntersection.bind(this)}})),this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:0,callback:this._handleParallaxIntersection.bind(this)}}))):this.animated=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&(this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubles:!0,composed:!0,detail:{element:this,threshold:1}})),this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:0,callback:this._handleParallaxIntersection.bind(this)}})))}get _generateCircles(){return new Array(4).fill("").map((t,e)=>s`<div class='smartup-community-circle ${this.animated?"animated":""}' id='circle-${e}'></div>`)}_handleIntersection([{isIntersecting:t}]){this.animated=t}_handleParallaxIntersection([{isIntersecting:t}]){p=this.shadowRoot.querySelector(".background-image-parallax"),t?window.addEventListener("scroll",this._parallaxAnimation,!1):window.removeEventListener("scroll",this._parallaxAnimation,!1)}_parallaxAnimation(){requestAnimationFrame(function(){const t=window.pageYOffset;p.style.top=30-.5*t+"px"})}});const h={FIRST:.5};customElements.define("smartup-community-bottom-circle",class extends t{static get styles(){return[e,i`
        :host {
          display: block;
        }

        .circle {
          opacity: 0;
          width: 240px;
          height: 240px;
          margin: 10px 10px;
          border-radius: 50%;
          background-size: cover;
          overflow: hidden;
        }
        
        div.circle div.text-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0,0,0,0.5);
          height: 100%;
          width: 100%;
        }
  
        div.circle div p {
          display: none;
          color: white;
          display: block;
          white-space: pre-line;
          text-align: center;
          margin-top: 0;
        }   

        .appearing {
          animation: first_appearance 1s ease-out forwards;
        }

        @keyframes first_appearance { 
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media(min-width: 768px) {
          div.circle div.text-container {
            background-color: rgba(0,0,0,0);
            transition: all 0.2s ease;
          }

          div.circle div.text-container:hover {
            background-color: rgba(0,0,0,0.5);
          }

          div.circle div p {
            display: none;
            color: white;
          }

          div.circle div.text-container:hover p {
            display: block;
          }
        }

        @media(min-width: 1200px) {
          .circle {
            width: 350px;
            height: 350px;
            margin: 70px 30px 150px 30px;
          }
        }
      `]}static get properties(){return{image:{type:String},circleText:{type:String},increasedOpacity:{type:Boolean}}}constructor(){super(),this.image="",this.circleText="",this.increasedOpacity=!1}render(){return s`
        <div class="circle ${this.increasedOpacity?"appearing":""}" style="background-image: url(${this.image})">
          <div class="text-container">
            <p>
              <lit-i18n>${this.circleText}</lit-i18n>
            </p>
          </div>
        </div>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:h.FIRST,callback:this._handleIntersection.bind(this)}})):this.increasedOpacity=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver?this._unobserveIntersection(h.FIRST):this.increasedOpacity=!1}_unobserveIntersection(t){this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:t}}))}_handleIntersection([{isIntersecting:t}]){this.increasedOpacity=t,t&&this._unobserveIntersection(h.FIRST)}});customElements.define("smartup-community-bottom",class extends t{static get styles(){return[i`
        :host {
          display: block;
        }

        section {
          height: auto;
          padding: 10px;
          background: #CD6B79;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        #oval {
          width: 100%;
          height: 100%;
          border-radius: 0 0 100% 0;
          background-color: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }

        .ramp-cover {
          width: 100vw;
          height: 100%;
          background-color: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }

        .ramp-cover-big-display {
          transition: all 2s ease;
        }

        .ramp-cover-small-display {
          transition: all 2.5s ease;
        }

        .ramp-visible {
          top: 100%;
        }

        @media(min-width: 768px) {
          section {
            padding: 20px 10px;
            flex-direction: row;
          }

          .ramp-cover {
            top: 0;
            left: 0;
          }

          .ramp-visible {
            left: 100vw;
          }
        }
        `]}static get properties(){return{circlesData:{type:Array},gradientRampAppearing:{type:Boolean},THRESHOLDS:{type:Number},animationDelay:{type:Number}}}constructor(){super(),this.circlesData=[],this.gradientRampAppearing=!1,this.THRESHOLDS=window.innerHeight>=720?.9:.7,this.screenHeight=window.innerHeight>=720?"big":"small"}render(){return s`
      <section>
        <div id="oval"></div>
        <div class="ramp-cover ${"big"===this.screenHeight?"ramp-cover-big-display":"ramp-cover-small-display"} ${this.gradientRampAppearing?"ramp-visible":""}"></div>
        ${this._toPrintCircles()}
      </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:this.THRESHOLDS,callback:this._handleIntersection.bind(this)}})):this.gradientRampAppearing=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver?this._unobserveIntersection(this.THRESHOLDS):this.gradientRampAppearing=!1}_toPrintCircles(){return this.circlesData.map(t=>s`<smartup-community-bottom-circle .image="${t.image}" .circleText="${t.text}"></smartup-community-bottom-circle>`)}_unobserveIntersection(t){this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:t}}))}_handleIntersection([{isIntersecting:t}]){this.gradientRampAppearing=t,t&&this._unobserveIntersection(this.THRESHOLDS)}});const m=[{image:"/assets/images/community/smartup-community/communityphoto1.jpg",text:"SMARTUP_COMMUNITY_FIRSTCIRCLE_TEXT"},{image:"/assets/images/community/smartup-community/communityphoto2.jpg",text:"SMARTUP_COMMUNITY_SECONDCIRCLE_TEXT"},{image:"/assets/images/community/smartup-community/communityphoto3.jpg",text:"SMARTUP_COMMUNITY_THIRDCIRCLE_TEXT"}];let u;customElements.define("smartup-community",class extends t{static get styles(){return[e]}static get properties(){return{smartupCommunityCircles:{type:Array}}}render(){return s`
      <section>
        <h1 class="title section-header" aria-label="${n("SMARTUP_COMMUNITY_TITLE",!0)}" tabindex="0">
          <lit-i18n>SMARTUP_COMMUNITY_TITLE</lit-i18n>
        </h1>
        <smartup-community-header></smartup-community-header>
        <smartup-community-bottom .circlesData="${m}"></smartup-community-bottom>
      </section>
    `}});customElements.define("smarter-leads",class extends t{static get styles(){return[e,i`
      :host{
        display: block;
      }

      section {
        background-color: black;
        overflow: hidden;
      }

      section h1.title.section-header{
        background-color: white;
        position: absolute;
        width: 100%;
        z-index: 1;
      }

      section p.paragraph {
        background-color: white;
        width: 100%;
        margin: 0;
        margin-top: 55px;
        padding: 0px 18px 26px 18px;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
      }

      .image {
        position: relative;
        height: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        color: var(--app-light-text-color, white);
      }

      .logos {
        z-index: 1;
      }

      .inside {
        position: relative;
        width: 100%;
        padding: 0 20px 10px;
        box-sizing: border-box;
        z-index: 1;
      }

      .inside p {
        margin: 0;
      }

      .develop.inside {
        text-align: start;
        bottom: -100px;
        opacity: 0;
        transition: all 1.2s linear;
      }

      .develop.inside.animated {
        bottom: 0;
        opacity: 1;
      }


      .coaching.inside {
        text-align: center;
        bottom: -100px;
        opacity: 0;
        transition: all 1.6s linear;
      }

      .coaching.inside.animated {
        bottom: 0;
        opacity: 1;
      }

      .community.inside {
        text-align: end;
        bottom: -100px;
        opacity: 0;
        transition: all 2s linear;
      }

      .community.inside.animated {
        bottom: 0;
        opacity: 1;
      }

      svg.smarter-icon {
        height: 80px;
        text-align: end;
        padding: 10px;
        box-sizing: border-box;
        fill: currentColor;
      }

      .image-background {
        position: absolute;
        width: 100%;
        height: 300%;
        background-image: url('/assets/images/community/smarter-leads/smarter-leads-image.jpg');
        background-repeat: no-repeat;
        background-size: cover;    
        background-position: center;
        opacity: 0.5;
      }

      @media (min-width: 550px) {
        .inside {
          width: 550px;
          margin: auto;
        }
      }

      @media (min-width: 768px) {
        .image {
          align-items: center;
          height: 600px;
        }

        .image-background {
          bottom: -1000px;
        }

        section p.paragraph {
          position: absolute;
          width: 100%;
          margin-top: 400px;
          max-width: 800px;
          left: 50%;
          transform: translate(-50%);
          text-align: center;
          background-color: transparent;
          color: white;
          z-index: 1;
          font-size: 18px;
          transition: all 1.5s ease;
          opacity: 0;
        }

        section p.paragraph.animated {
          margin-top: 200px;
          opacity: 1;
        }

        .logos {
          position: relative;
          bottom: -30%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          width: 500px;
          margin-top: 15%;
          transition: all 1.5s ease;
          opacity: 0;
        }

        .logos.animated {
          bottom: 0;
          opacity: 1;
        }

        .develop.inside, .coaching.inside, .community.inside {
          transition: none;
        }

        .image-background {
          background-position: 20% 30%;
        }
      }

      @media (min-width: 1200px) {
        section p.paragraph {
          font-size: 20px;
        }
        
        .logos {
          margin-top: 12%;
        }
      }
    `]}static get properties(){return{animated:{type:Boolean}}}constructor(){super(),this.animated=!1}render(){return s`
      <section aria-label="${n("SMARTER_LEADS_PROGRAM_TITLE",!0)}" tabindex="0">
        <h1 class="title section-header" aria-label="${n("SMARTER_LEADS_PROGRAM_TITLE",!0)}" tabindex="0">
          <lit-i18n>SMARTER_LEADS_PROGRAM_TITLE</lit-i18n>
        </h1>
        <p class="paragraph ${this.animated?"animated":""}" tabindex="0"><lit-i18n>SMARTER_LEADS_PROGRAM_PARAGRAPH</lit-i18n></p>
        <div class="image">
          <div class="logos ${this.animated?"animated":""}">
            <div class="develop inside ${this.animated?"animated":""}">
              <div class="logo">${a}</div>
              <p tabindex="0"><lit-i18n>SMARTER_LEADS_PROGRAM_DEVELOP</lit-i18n></p>
            </div>
            <div class="coaching inside ${this.animated?"animated":""}">
              <div class="logo">${r}</div>
              <p tabindex="0"><lit-i18n>SMARTER_LEADS_PROGRAM_COACHING</lit-i18n></p>
            </div>
            <div class="community inside ${this.animated?"animated":""}">
              <div class="logo">${o}</div>
              <p tabindex="0"><lit-i18n>SMARTER_LEADS_PROGRAM_COMMUNITY</lit-i18n></p>
            </div>
          </div>
          <div class="image-background"></div>
        </div>
      </section>
    `}connectedCallback(){super.connectedCallback(),window.IntersectionObserver?(this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.5,callback:this._handleIntersection.bind(this)}})),this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:0,callback:this._handleParallaxIntersection.bind(this)}}))):this.animated=!0}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&(this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.5}})),this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:0,callback:this._handleParallaxIntersection.bind(this)}})))}_handleIntersection([{isIntersecting:t}]){this.animated=t}_handleParallaxIntersection([{isIntersecting:t}]){u=this.shadowRoot.querySelector(".image-background"),t?window.addEventListener("scroll",this._parallaxAnimation,!1):window.removeEventListener("scroll",this._parallaxAnimation,!1)}_parallaxAnimation(){requestAnimationFrame(function(){const t=window.pageYOffset;u.style.top=550-.5*t+"px"})}});customElements.define("smarter-feed-tweet",class extends t{static get styles(){return[e,i`
      :host {
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100%;
        width: 100%;
      }

      .tweet {
        height: fit-content;
        padding: 0 10px 10px;
        width: 88%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
      }

      .tweet-link {
        text-decoration: none;
        color: black;
      }

      .tweet-logo {
        height: 100%;
        margin-right: 5px;
      }

      .logo {
        height: 55px;
      }

      .data-top {
        width: 100%;
        display: flex;
        flex-direction: row;
      }

      .header {
        width: 100%;
        display: flex;
        flex-direction: raw;
        white-space:nowrap;
      }

      .text {
        margin: 0;
      }

      .user-info{
        margin-left: 5px;
      }

      .user {
        padding-right: 10px;
        color: grey;
      }

      .date {
        width: 100%;
        padding: 0 10px;
        color: grey;
      }

      .tweet-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
      }

      .tweet-text {
        width: 100%;
        display: flex;
        align-items: center;
        flex-grow: 1;
        overflow-y: hidden;
        margin-bottom: 25px;
      }

      .tweet-image {
        height: 200px;
        width: 100%;
        flex-grow: 1;
        border-radius: 7px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }

      @media (min-width: 550px) {
        .tweet-image {
          height: 300px;
        }
      }

      @media (min-width: 768px) {
        .tweet {
          max-width: 700px;
          font-size: 18px;
        }

        .tweet-image {
          height: 350px;
        }
      }
    `]}static get properties(){return{tweet:{type:Object},tweetIndex:{type:Number},tweetParsed:{type:Object}}}constructor(){super(),this.tweet={},this.tweetParsed={}}render(){return s`
      <div class="tweet" id="${this.tweetIndex}">
        <a class="tweet-link" href="${this.tweetParsed.url}">
          <div class="header">
            <div class="tweet-logo">
              <img class="logo" src="../../../../assets/images/community/smarter-feed/logoSopraTwiter.png" alt="logo">
            </div>
            <div class="data-top">
              <div class="user-info">
                <p class="text name"><b>${this.tweetParsed.name}</b></p>
                <p class="text user">${this.tweetParsed.user}</p>
              </div>
              <p class="text date">${this.tweetParsed.date}</p>
            </div>
          </div>
          <div class="tweet-content">
            <div class="tweet-text">${this.tweetParsed.text}</div>
            <div class="tweet-image" style="background-image: url('${this.tweetParsed.picture}')"></div>
          </div>
        </a>
      </div>
    `}firstUpdated(){this._parseTweet(this.tweet)}_parseTweet(t){const e=new Date(t.created_at),i=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"][e.getMonth()],s=t.extended_tweet.full_text.split(" ");let n="";s.forEach(t=>{t.includes("http")||(n=n+t+" ")}),this.tweetParsed={name:t.user.name,user:t.user.screen_name,date:e.getDate()+" "+i+".",picture:t.extended_tweet.entities.media[0].media_url_https,url:t.extended_tweet.entities.media[0].expanded_url,text:n}}});const g="from:SopraSteria_ES lang:es",b="10",x="2359",v=30,w=5,y=1;customElements.define("smarter-feed",class extends t{static get styles(){return[e,i`
      :host{
        display: block;
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

      .tweets-container {
        position: relative;
        overflow: hidden;
        background-color: white;
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

      .arrow-button {
        display: none;
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

      .bar {
        width: 88%;
        margin: 10px auto 0;
        height: 5px;
        background-color: grey;
      }

      @keyframes growToRight {
        from {width: 0;}
        to {width: 100%;}
      }

      .red-bar {
        height: 100%;
        width: 0;
        background-color: var(--app-primary-color, #CC0033);
      }

      .red-bar-animation {
        animation: growToRight 6s linear infinite;
      }

      smarter-feed-tweet {
        display: flex;
        justify-content: center;
      }

      .button {
        height: 48px;
        padding: 50px;
        display: flex;
        justify-content: center;
      }

      .button > a {
        margin: 0 !important;
      }

      @media (min-width: 768px) {
        .tweets-container {
          display: flex;
          flex-direction: column;
          padding: 0 10% 0;
          box-sizing: border-box;
          height: 590px;
        }

        .arrow-button {
          display: block;
          width: 40px;
          height: 20px;
          z-index: 2;
        }
 
        .arrow-button.next {
          right: 5%;
        } 

         .arrow-button.prev {
          left: 5%;
        } 

        .bar {
          width: 88%;
          max-width: 700px;
        }
      }

      @media (min-width: 1350px) {
        .arrow-button.next {
          right: 10%;
        } 

         .arrow-button.prev {
          left: 10%;
        }
      }
    `]}static get properties(){return{ApiUrl:{type:String},coordinate:{type:Number},index:{type:Number},tweets:{type:Array},fetchData:{type:Object},timer:{type:Number},auto:{type:Boolean},interval:{type:Number},animationClass:{type:Boolean},minTouchLength:{type:Number},minTouchAngle:{type:Number}}}constructor(){super(),this.index=0,this.coordinate=0,this.animationSpeed=.6,this.auto=!0,this.timer=6e3,this.interval=null,this.minTouchLength=70,this.minTouchAngle=30,this.animationClass=!0,this.tweets=[],this.ApiUrl="/tweets.json";let t=this._getFromDate(),e=this._getToDate(),i={query:g,maxResults:b,fromDate:t,toDate:e};this.fetchParams={method:"POST",body:JSON.stringify(i),headers:{"content-type":"application/json"}},this._fetchTweets(this.ApiUrl,this.fetchParams),this._focusEventsActive=[],this.EVENTS={mouseenter:"mouse",mouseleave:"mouse",focusin:"focus",focusout:"focus"}}render(){return s`
      <section aria-label="${n("SMARTER_FEED_TITLE",!0)}" tabindex="0">
        <h1 class="title section-header" aria-label="${n("SMARTER_FEED_TITLE",!0)}" tabindex="0">
          <lit-i18n>SMARTER_FEED_TITLE</lit-i18n>
        </h1>
        <div class="tweets-container">
          <button id="prev" aria-label="${n("PREV_BUTTON")}" class="arrow-button prev" @click="${()=>this.showNext(!1)}">${d}</button>

          <div id="slide" class="slider-container">
            ${this.tweets.map((t,e)=>s`
            <div class="single-tweet" .style="${"transform: translateX("+this.coordinate+"px); transition: transform "+this.animationSpeed+"s"}">
              <smarter-feed-tweet .tweet="${t}" index="${this.index===e}"></smarter-feed-tweet>
            </div>
            `)}
          </div>

          <button id="next" aria-label="${n("NEXT_BUTTON")}" class="arrow-button next" @click="${()=>this.showNext(!0)}">${d}</button>

          <div class="bar">
            <div class="red-bar red-bar-animation"></div>
          </div>
        </div>
        <div class="button">
          <a href="mailto:bedigital@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${n("WANT_TO_BE_SMARTER_BTN_A11Y",!0)}">
            <lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n>
          </a>
        </div>
      </section>
    `}firstUpdated(){l(this,"#slide"),this._addEventListeners(),window.addEventListener("resize",this.setCoordinate.bind(this)),this.auto&&this.setAutoInterval()}connectedCallback(){super.connectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("start-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.3,callback:([{isIntersecting:t}])=>this._isIntersecting=t}}))}disconnectedCallback(){super.disconnectedCallback(),window.IntersectionObserver&&this.dispatchEvent(new CustomEvent("stop-observing-intersection",{bubbles:!0,composed:!0,detail:{element:this,threshold:.3}}))}_addEventListeners(){const t=this.shadowRoot.querySelector("#slide");t.addEventListener("stopInterval",()=>{clearInterval(this.interval)}),t.addEventListener("resetInterval",()=>{this.auto&&this._startAutoplay()}),t.addEventListener("setPosition",this.setNewPosition),t.addEventListener("focusin",this._stopAutoplay.bind(this)),t.addEventListener("mouseenter",this._stopAutoplay.bind(this)),t.addEventListener("mouseleave",this.startInterval.bind(this)),t.addEventListener("focusout",this.startInterval.bind(this))}showNext(t){this.shadowRoot.querySelector(".red-bar").classList.remove("red-bar-animation"),this.setIndex(t),this.setTweet()}_next(){this.showNext(!0)}_prev(){this.showNext(!1)}setTweet(){this.setCoordinate(),this._startAutoplay()}setIndex(t){this.index===this.tweets.length-1&&t?this.index=0:0!==this.index||t?t?this.index++:this.index--:this.index=this.tweets.length-1}setCoordinate(){this.coordinate=-this.shadowRoot.querySelector("#slide").clientWidth*this.index}setAutoInterval(){this.interval=setInterval(()=>{this._isIntersecting&&this.showNext(!0)},this.timer)}_startAutoplay(){clearInterval(this.interval),this.setAutoInterval(),null!==this.shadowRoot.querySelector(".red-bar")&&this.shadowRoot.querySelector(".red-bar").classList.add("red-bar-animation")}_stopAutoplay(t){this._focusEventsActive.push(this.EVENTS[t.type]),clearInterval(this.interval),this.auto=!1,setTimeout(()=>{this.shadowRoot.querySelector(".red-bar").classList.remove("red-bar-animation")},100)}setNewPosition(t){this.index=t.detail,this.setTweet()}startInterval(t){this._focusEventsActive=this._focusEventsActive.filter(e=>e!==this.EVENTS[t.type]),0===this._focusEventsActive.length&&(this._startAutoplay(),this.auto=!0)}_getFromDate(){let t=new Date;return t.setDate(t.getDate()-v),t=t.getFullYear()+this._datePieceFormatter(t.getMonth()+y)+this._datePieceFormatter(t.getDate())+x}_getToDate(){let t=new Date;return t=t.getFullYear()+this._datePieceFormatter(t.getMonth()+y)+this._datePieceFormatter(t.getDate())+this._datePieceFormatter(t.getHours()-2)+this._datePieceFormatter(t.getMinutes()-w)}_datePieceFormatter(t){return("0"+t).slice(-2)}_fetchTweets(t,e){fetch(t,e).then(t=>t.json()).then(t=>{this.tweets=t.results.filter(t=>{if(((t,e)=>t.reduce((t,e)=>t&&t[e]?t[e]:null,e))(["extended_tweet","entities","media",0,"media_url_https"],t))return t.extended_tweet})}).catch(()=>{this.shadowRoot.querySelector("section").setAttribute("style","display: none;")})}});window.customElements.define("smartup-community-view",class extends t{static get styles(){return[e,i`
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
      <hero-element .literals="${["SMARTUP_COMMUNITY","SMARTUP_COMMUNITY_SUBTITLE"]}" .scrollTo="${"smartup-community"}">
        <video slot="video" autoplay loop muted playsinline poster="/assets/videos/community-video-poster.jpg">
          <source src="/assets/videos/community-video.mp4" type="video/mp4">
        </video>
      </hero-element>
      <smartup-community></smartup-community>
      <smarter-leads></smarter-leads>
      <smarter-feed></smarter-feed>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("scroll-automatic",t=>this._scrollMe(t))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("scroll-automatic",t=>this._scrollMe(t))}_scrollMe(t){const e=parseInt(getComputedStyle(this).getPropertyValue("--header-height")),i=this.shadowRoot.querySelector(t.detail.elementScroll).offsetTop;c({headerHeight:e,elemenToScroll:i})}});
//# sourceMappingURL=index-67f3a913.js.map
