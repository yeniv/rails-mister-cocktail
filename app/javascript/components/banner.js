import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Look at all these crazy cocktails", "Look at them!", "Make them!!!", "No seriously...", "They're pretty damn tasty", "Don't beleive me?", "Fine", "Don't make me come down there"],
    typeSpeed: 65,
    loop: true
  });
}

export { loadDynamicBannerText };
