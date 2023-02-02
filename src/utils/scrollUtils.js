export const scroll = ((data = {}) => {
  window.scrollTo({
    left: 0,
    top: data.elemenToScroll - data.headerHeight,
    behavior: 'smooth',
  });
});