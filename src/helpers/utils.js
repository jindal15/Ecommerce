export const isDesktop = () => {
  return window.innerWidth >= 1200;
};

export const isMobile = () => {
  return window.innerWidth < 768;
};
