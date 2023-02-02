> 🛠🤓 Status: Work In Progress 🥒🥑

# SmartUp Xperience

This is the public website fot the SmartUp program. It uses [LitElement](https://lit-element.polymer-project.org/guide), [Redux](https://redux.js.org/introduction/getting-started), [Pwa-helpers](https://github.com/Polymer/pwa-helpers), [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). 

This project was created using the `pwa-starter-kit` template provided by the Polymer team. 

## Setup

#### Install node dependencies 

After cloning the project from the repository, install the dependencies using npm. Please make sure you're using **at least Node v10.3.0** (v10.15.3, latest LTS, is preferred) as older versions are not supported.

    cd public-web
    npm install

## Developing

**Rollup** is used for the builds and development. Livereload is configured, which makes developing a lot easier and faster.

    npm run dev

This command serves the app at `http://127.0.0.1:3000` and opens it in your default browser.

Before pushing your changes and/or building, it is advised to check if the code you have written adheres to the style rules enforced by our ESLint configuration. You can do so with the following command:

    npm run lint

Additionally you can run `npn run lint:fix` to solve every problem than can be fixed automatically. If you are using VSCode, there is [an extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to check this while you type and automatically fix files on save.

To run the project with the "Twitter Component" (**\<smarter-feed\>**) you should serve the "JsonServer" first.

    npm start

This will serve a fake-twitter API on 3001 to test this component, then serve our project on 3000.

### Router

Routing is being handled with [@vaadin/router - npm](https://www.npmjs.com/package/@vaadin/router).

Vaadin Router is a small and powerful client-side router JS library. It uses the widely adopted express.js syntax for routes (/users/:id) to map URLs to Web Component views. All features one might expect from a modern router are supported: async route resolution, animated transitions, navigation guards, redirects, and more. It is framework-agnostic and works equally well with all Web Components regardless of how they are created (Polymer / SkateJS / Stencil / Angular / Vue / etc).

Vaadin Router is a good fit for developers that do not want to go all-in with one framework, and prefer to have freedom in picking the components that work best for their specific needs.

### IntersectionObservers

As the number of [IntersectionObservers](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API) was increasing because of the amount of animations depending on scroll events, the generation of IntersectionObservers was taken out from each class and centralized inside `app-shell.js`.

App-shell will create _one observer for each threshold_. That way, if there are multiple items with the same observer, only one IntersectionObserver will be created to observe them all. It also allows to have multiple observers observing the same element with different thresholds and different callback functions. The drawback is that you have to specify the threshold when launching the unobserve event.

#### Observe

To create a new IntersectionObserver (or use an existing one) and set it to observe your component, the component must dispatch a new event:

```js
this.dispatchEvent(new CustomEvent('start-observing-intersection', {
    bubbles: true,
    composed: true,
    detail: { element: this, threshold: 0.3, callback: this.callbackFn },
}));
```

That event must be composed and bubble. The details must include:

- __element__: the element to be observed.
- __threshold__: the threshold of the IntersectionObserver. Value from 0 (0% of the component shown) to 1 (100%). Defaults to 0.99.
- __callback__: reference to the callback function to be called. It will receive an array with only one element to mock the behaviour of one IntersectionObserver observing one element. e.g:
    - ```js
        callbackFn = ([{isIntersecting}]) => {}
        ```


If the element to observe is the element itself (this), the event must be thrown inside the `connectedCallback` function. If it's observing an element inside the element, the event must be thrown inside `firstUpdated` as the element must be rendered to be obtained by querySelector.

#### Unobserve

To unobserve one element the component must dispatch the following event:

```js
this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
    bubbles: true,
    composed: true,
    detail: { element: this, threshold: 0.3 },
}));
```

It must also bubble and be composed. The details must include:

- __element__: the element to be observed.
- __threshold__: the threshold of the IntersectionObserver created. Must be the same as the threshold used to create the observer. Defaults to 0.99.

This unobserve event must be launched at least inside `disconnectedCallback`.

## Conventions

### CSS
Always leave a blank line between CSS rules.
By all members`s convention and to facilitate reading and avoiding unnecessary spaces

Good 👍
```css
.foo {
    color: red;
}

.bar {
    background-color: blue;
}
```
Bad 👎
```css
.foo {
    color: red;
}
.bar {
    background-color: blue;
}
```

### Imports order
In JS files, always group imports by type and leave a blank line between different groups.
This order was decided from the most generic to the most concrete to create a convention to adjust from now.
Use the following order:

1. NPM packages
2. Project-wide dependencies
3. Component specific dependencies

Good 👍
```js
import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

import './components/lit-i18n';
import { get as i18n } from './components/lit-i18n';

import './hero-element';
```
Bad 👎
```js
import { get as i18n } from './components/lit-i18n';
import './hero-element';
import { LitElement, html, css } from 'lit-element';
import './components/lit-i18n';
import { connect } from 'pwa-helpers/connect-mixin.js';
```
Also bad 👎
```js
import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import './components/lit-i18n';
import { get as i18n } from './components/lit-i18n';
import './hero-element';
```

### Classes
#### Methods order
The decision to order and group the methods has been made to keep the same structure in all components and to make them more clear and readale.
First we group what refers to the methods of litelement, then WC spec and finally to the custom methods.
In component classes, keep the following order:

1. Styles
2. Properties
3. Constructor
4. Render
5. Lifecycle methods
    - shouldUpdate()
    - update()
    - firstUpdated()
    - updated
5. WC spec methods
    - connectedCallback()
    - disconnectedCallback()
6. Custom methods

Also, to prevent ESLint errors related to not documenting built-in methods, wrap items 1 to 5 in a block like this:

```js
class Foo extends LitElement {
    /** eslint-disable require-jsdoc */
    static get styles() {...}
    static get properties() {...}
    render()
    // etc
    /** eslint-disable require-jsdoc */
}
```

#### Static data
When components need static data (like carousels), place it in an external file.
This decision has been made to make the structure clearer
Good 👍
```js
// foo-data.js
export const data = [
    'Paca Garte',
    'Benito Camela',
];

//foo-component.js
//...
import { data } from './foo-data.js';

class FooComponent extends LitElement {
    //...
    render() {
        return html`
            <ul>
                ${data.map((name) => html`<li>${name}</li>`}
            </ul>
        `;
    }
}
```
Bad 👎
```js
class FooComponent extends LitElement {
    //...
    constructor() {
        this.fooData = [
            'Paca Garte',
            'Benito Camela',
        ];
    }
    render() {
        return html`
            <ul>
                ${this.fooData.map((name) => html`<li>${name}</li>`}
            </ul>
        `;
    }
}
```

#### Naming
- **Custom events**: all lowercase, separated by hyphens if needed _(Ex: `button-clicked`)_
- **Private properties/methods**: although there is no such thing as _private_ in JavaScript (yet), it is recommended to prepend an underscore before all properties or methods that you don't want to be accessed from outside your component _(Ex: `_processData()`)_
- **CSS Classes**: all lowercase, separated by hyphens if needed _(Ex: `.form-button`)_

#### JSDoc
Keep a blank line between descriptions and @tags when documenting functions with JSDoc.

Good 👍
```js
/**
 * Pets a kitten
 * 
 * @param {Kitten} kitten The kitten to be petted
 */
function petKitten(kitten) {
    //...
}
```

#### Constants
When a class needs constants, define them outside the class itself.

Good 👍
```js
const EVENTS = {
    foo: 'foo',
    bar: 'bar',
};

class FooComponent extends LitElement {
    // ...
}
```

#### Common files
There are three files with project-wide exports:
- **Styles** (`/src/components/shared-styles.js`): common styles such as headings or section paddings.
- **SVGs** (`/src/components/my-icons.js`): all SVG files, exported as components
- **Constants** (`/src/constants.js`): things such as email addresses, external links, etc. that are needed in several places across the project

#### Commented code
**Nope**. Use git.

## Building

When everything is ready, run the following command to generate a fresh build.

    npm run build

#### Preview the build

There is also a command to serve the static files after a build. Just run the following:

    npm run serve:build

This will start a server in the build directory.

## Running tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester) against the browsers currently installed on your machine:

    npm run serve:test

This will run the suite of tests on all installed browsers. Alternatively, you can run tests only on your browser by running `npm run serve:test` and then going to `http://127.0.0.1:4000/test/unit/`. You can also just run tests for an specific component by adding the name of the file that contains those tests, e.g. `http://127.0.0.1:4000/test/unit/hero-element.html`.

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

Read More here [daffl/launchpad](https://github.com/daffl/launchpad#environment-variables-impacting-local-browsers-detection)

## Workflow

We use `git-flow` to create our branches for new features and hotfixes, along with their rules for merging those into `develop` and updating `master`. For more information about `git-flow` you can read [Daniel Kummer's cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/).

Following these rules, you should always create your new branches from `develop` and once you're done you must create a **Pull Request** and **only the administrators can approve and merge your branch into `develop`**. 

In general, we use English as our main language when coding. So, every commit, comment on pull requests, line of code, comment in code and documentation **has** to be written in English. 

### Semantic commits

We like our commit messages to be **clear** and describe the content of the commit itself. Also, we use [semantic commits](https://seesparkbox.com/foundry/semantic_commit_messages) messages and this makes our `git log` easier to read and understand. 

Commit type | Description                                                        |
------------|--------------------------------------------------------------------|
feat        | new                                                                |
fix         | bug fix                                                            |
docs        | changes to documentation                                           |
style       | formatting, missing semi colons, etc; no code change               |
refactor    | refactoring production code                                        |
test        | adding missing tests, refactoring tests; no production code change |
chore       | updating grunt tasks etc; no production code change                |

An example of a semantic commit of type `chore` could be

    git commit -m "chore: added semantic commit section to readme file" 


## Video optimization (SmartersReviews Component) - HandBrake

Download Handbrake from the [official website](https://handbrake.fr/downloads.php), which is available for all major operative systems. 

Open the program and click on _Open source_ button at the top left corner and select video. After that, click on _Dimensions_ tag, define _Storage Size_ (220x220) and finally click on _Start_ button.

## Generate responsive images

Although images are automatically optimized on build time, it's good to serve pictures of the right size for each device. This can be done by providing multiple sources linked to responsive breakpoints using `srcset` attribute on `img` tags.

As this can get tedious really quick, we use [a cool tool](https://www.responsivebreakpoints.com/) provided by Cloudinary which automatizes the generation of the required images and even provides a ready-to-go code snippet.

The default settings work very well, so it's a matter of uploading the picture, downloading the generated images and adding the code snippet whenever the original image was placed. Just remember to rewrite the routes so they point to the correct assets path.

## Work with a Json Server

With the aim of be able to consume a fictional api instead of a local module with an object's array, we decided to create a JsonServer that simulates an external API, which one brings us some tweet's data that we use on our component "SmartUp Feed", inside of the Community view. 

Little explanation of the api folder, where is mounter the Json Server:

- There is a fold called "endpoints", where are included the different routes that we can consume. For the moment, there is just one configured endpoint: '/tweets', with a 'GET' request, and this responses with the data of five tweets. This number is customizable in the server.js file.

- There is another file, called "server.js", that includes the dependencies needed, and two functions: one for starting the server, and other to configure the server. 

For the moment, this stands up on port "3001", to don't interfere with our local project, that stands up on port "3000".

An script on package.json was created to stand up the server, and the console command to launch the server is: "npm run jsonserver".
