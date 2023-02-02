import { html } from 'lit-element';

export const cardsData = [
  {
    image: {
      srcset: [
        { src: './assets/images/main/ecosystem/training/smartup-training-card-mobile.jpg', media: '(max-width: 414px)' },
        { src: './assets/images/main/ecosystem/training/smartup-training-card.jpg', media: '(min-width: 414px)' },
      ],
      srcsetDesktop: [
        { src: '.', media: '(max-width: 1100px)' },
        { src: './assets/images/main/ecosystem/training/smartup-training-card.jpg', media: '(min-width: 1100px)' },
      ],
      src: './assets/images/main/ecosystem/training/smartup-training-card.jpg',
      alt: 'Smartup Training',
    },
    title: 'SMARTUP_TRAINING',
    subtitle: 'Training',
    body: html`<lit-i18n>SMARTUP_TRAINING_P</lit-i18n>`,
    urlButton: '/training',
  },
  {
    image: {
      srcset: [
        { src: './assets/images/main/ecosystem/community/smartup-community-card-mobile.jpg', media: '(max-width: 414px)' },
        { src: './assets/images/main/ecosystem/community/smartup-community-card.jpg', media: '(min-width: 414px)' },
      ],
      srcsetDesktop: [
        { src: './assets/images/main/ecosystem/community/smartup-community-card-mobile.jpg', media: '(max-width: 1100px)' },
        { src: './assets/images/main/ecosystem/community/smartup-community-card.jpg', media: '(min-width: 1100px)' },
      ],
      src: './assets/images/main/ecosystem/community/smartup-community-card.jpg',
      alt: 'SmartUp Community',
    },
    title: 'SMARTUP_COMMUNITY',
    subtitle: 'Community',
    body: html`<lit-i18n>SMARTUP_COMMUNITY_P</lit-i18n>`,
    urlButton: '/community',
  },
  {
    image: {
      srcset: [
        { src: './assets/images/main/ecosystem/career/smartup-career-card-mobile.jpg', media: '(max-width: 414px)' },
        { src: './assets/images/main/ecosystem/career/smartup-career-card.jpg', media: '(min-width: 414px)' },
      ],
      srcsetDesktop: [
        { src: './assets/images/main/ecosystem/career/smartup-career-card-mobile.jpg', media: '(max-width: 1100px)' },
        { src: './assets/images/main/ecosystem/career/smartup-career-card.jpg', media: '(min-width: 1100px)' },
      ],
      src: './assets/images/main/ecosystem/career/smartup-career-card.jpg',
      alt: 'SmartUp Career',
    },
    title: 'SMARTUP_CAREER',
    subtitle: 'Career',
    body: html`<lit-i18n>SMARTUP_CAREER_P</lit-i18n>`,
    urlButton: '/career',
  },
];
