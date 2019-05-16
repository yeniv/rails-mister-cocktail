import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Look at all these crazy cocktails", "Look at them!", "Make them!!!", "No seriously...", "Don't make me come down there"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
