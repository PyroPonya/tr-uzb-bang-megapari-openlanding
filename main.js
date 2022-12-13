const langSelector = document.querySelector('.lang_selector');
const langPicker = document.querySelector('.lang_picker');
const langList = document.querySelector('.lang_list');
const langListElements = document.querySelectorAll('.list_el');

let currentLanguage = '';
// lang setter
const getPrefLang = () => {
  let userLang = navigator.language || navigator.userLanguage;
  if (userLang.includes('bg')) {
    currentLanguage = 'bg';
  } else if (userLang.includes('uzb')) {
    currentLanguage = 'uzb';
  } else if (userLang.includes('tr')) {
    currentLanguage = 'tr';
  } else {
    currentLanguage = 'bg';
  }
}
getPrefLang();
// lang end
// mobile adaptation
let isMobile = false;
const checkMobile = () => {
  window.innerWidth < 500 ? isMobile = true : isMobile = false;
}
checkMobile();
window.onresize = (event) => {
  checkMobile();
  setLang(currentLanguage);
};
// 
const langs = {
  bg: {
    body: 'প্রথম জমাতে 100% বোনাস পান',
    btn: 'একটি বোনাস পান',
    bg: '/assets/bg_BG_desk.png',
    bg_mob: '/assets/bg_BG_mob.png',
  },
  uzb: {
    body: '100% birinchi depozit bonusini oling!',
    btn: 'BONUS OLISH',
    bg: '/assets/bg_UZB_desk.png',
    bg_mob: '/assets/bg_UZB_mob.png',
  },
  tr: {
    body: '%100 ilk para yatırma bonusunu alın!',
    btn: 'IKRAMIYE ALMAK',
    bg: '/assets/bg_TR_desk.png',
    bg_mob: '/assets/bg_TR_mob.png',
  },
};
// set qwerty
const setLang = (lang) => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="el_flag"></div>
    <div class="el_name">${currentLanguage.toUpperCase()}</div>`;
  el.className = 'list_el';
  el.className += ` ${currentLanguage}`;
  langPicker.innerHTML = '';
  langPicker.append(el);
  document.querySelector('.body_text').textContent = langs[lang].body;
  document.querySelector('.body_btn').textContent = langs[lang].btn;
  if (isMobile == false) {
    document.getElementsByTagName('body')[0].style.backgroundImage = `url('${langs[lang].bg}')`;
  } else {
    document.getElementsByTagName('body')[0].style.backgroundImage = `url('${langs[lang].bg_mob}')`;

  }
  location.hash = currentLanguage;
}

// lang list open/close
langSelector.addEventListener('click', (e) => {
  document.querySelector('.lang_list').classList.toggle('hide');
});
// lang list select item (slojnaya hernya tipa)
langListElements.forEach(el => el.addEventListener('click', (e) => {
  if (e.target.closest('.list_el').classList.contains('bg')) {
    currentLanguage = 'bg';
    setLang(currentLanguage);
  } else if ( e.target.closest('.list_el').classList.contains('uzb')) {
    currentLanguage = 'uzb';
    setLang(currentLanguage);
  } else if (e.target.closest('.list_el').classList.contains('tr')) {
    currentLanguage = 'tr';
    setLang(currentLanguage);
  }
}))

// initial lang
setLang(currentLanguage);