// pc
const snsListWrap = document.querySelector('.pc .header_sns > .list-wrap');
const btnMenu = document.querySelector('.pc .btnMenu');
const gnbHeader = document.querySelector('.pc .header_gnb');
const gnbListHeader = Array.from(document.querySelectorAll('.pc .header_gnb_list'));
const gnbListHeaderMobile = Array.from(document.querySelectorAll('.mo .header_gnb_content .list'));
const logoHeader = document.querySelector('.pc .header_logo');
const section = Array.from(document.querySelectorAll('.section'));
const main = document.querySelector('#main');
const intro = document.querySelector('#intro');
const btnCharacterImg = Array.from(document.querySelectorAll('.characterImg_btn'));
const InfoCharacter = Array.from(document.querySelectorAll('.characterInfo'));
const InfocharacterImg = Array.from(document.querySelectorAll('.characterInfo_img'));
const btnReturnCharacter = Array.from(document.querySelectorAll('.btnReturn'));
const charAni = document.querySelector('#charAni');
const siblings = t => [...t.parentElement.children].filter(e => e != t);
// mobile
const btnMenuMo = document.querySelector('.mo .btnMenu');
const gnbContentMo = document.querySelector('.mo .header_gnb_content');
const gnbLogo = document.querySelector('.mo .header_gnb_logo');

let countBoxPc = document.querySelector('.pc #count');
let countBoxMo = document.querySelector('.mo #count');

const levelBar1 = document.querySelector('.level-1 .bar');
const levelBar2 = document.querySelector('.level-2 .bar');
const levelBar3 = document.querySelector('.level-3 .bar');
const levelBar4 = document.querySelector('.level-4 .bar');
const levelBar5 = document.querySelector('.level-5 .bar');
const levelBar6 = document.querySelector('.level-6 .bar');
const levelCheck1 = document.querySelector('.box_level-bar_check1');
const levelCheck2 = document.querySelector('.box_level-bar_check2');
const levelCheck3 = document.querySelector('.box_level-bar_check3');
const levelCheck4 = document.querySelector('.box_level-bar_check4');
const levelCheck5 = document.querySelector('.box_level-bar_check5');

const checkBoxAll = document.getElementById('checkboxAll');
const checkBox1 = document.getElementById('checkPersonal');
const checkBox2 = document.getElementById('checkEvent');

const checkBoxAllMo = document.getElementById('checkboxAllMo');
const checkBoxMo1 = document.getElementById('checkPersonalMo');
const checkBoxMo2 = document.getElementById('checkEventMo');

const modalBtn1 = document.getElementsByClassName('side-area_form_btn')[0];
const modalBtn2 = document.getElementsByClassName('side-area_form_btn')[1];
const modalBtnMo1 = document.getElementsByClassName('side-area_form_btn')[2];
const modalBtnMo2 = document.getElementsByClassName('side-area_form_btn')[3];
const modalBtnClose1 = document.getElementsByClassName('btn-modalClose')[0];
const modalBtnClose2 = document.getElementsByClassName('btn-modalClose')[1];
const modalBackground1 = document.getElementsByClassName('reservation_modal')[0];
const modalBackground2 = document.getElementsByClassName('reservation_modal')[1];
const modal1 = document.getElementsByClassName('modal')[0];
const modal2 = document.getElementsByClassName('modal')[1];

//checkBox
checkBoxAll.addEventListener('click', () => {
  if (checkBoxAll.checked) {
    checkBox1.checked = true;
    checkBox2.checked = true;
  } else {
    checkBox1.checked = false;
    checkBox2.checked = false;
  }
});
checkBoxAllMo.addEventListener('click', () => {
  if (checkBoxAllMo.checked) {
    checkBoxMo1.checked = true;
    checkBoxMo2.checked = true;
  } else {
    checkBoxMo1.checked = false;
    checkBoxMo2.checked = false;
  }
});
function checkBoxEvent(a, b) {
  if (a.checked === false) {
    checkBoxAll.checked = false;
  }
  if (a.checked && b.checked) {
    checkBoxAll.checked = true;
  }
}
function checkBoxEventMo(a, b) {
  if (a.checked === false) {
    checkBoxAllMo.checked = false;
  }
  if (a.checked && b.checked) {
    checkBoxAllMo.checked = true;
  }
}

checkBox1.addEventListener('click', () => {
  checkBoxEvent(checkBox1, checkBox2);
});
checkBox2.addEventListener('click', () => {
  checkBoxEvent(checkBox2, checkBox1);
});
checkBoxMo1.addEventListener('click', () => {
  checkBoxEventMo(checkBoxMo1, checkBoxMo2);
});
checkBoxMo2.addEventListener('click', () => {
  checkBoxEventMo(checkBoxMo2, checkBoxMo1);
});

//modal
modalBtn1.addEventListener('click', () => {
  document.getElementsByClassName('reservation_modal')[0].classList.add('on');
});
modalBtn2.addEventListener('click', () => {
  document.getElementsByClassName('reservation_modal')[1].classList.add('on');
});
modalBtnMo1.addEventListener('click', () => {
  document.getElementsByClassName('reservation_modal')[0].classList.add('on');
});
modalBtnMo2.addEventListener('click', () => {
  document.getElementsByClassName('reservation_modal')[1].classList.add('on');
});

modalBtnClose1.addEventListener('click', () => {
  document.getElementsByClassName('reservation_modal')[0].classList.remove('on');
});
modalBtnClose2.addEventListener('click', () => {
  document.getElementsByClassName('reservation_modal')[1].classList.remove('on');
});

modalBackground1.addEventListener('click', () => {
  document.getElementsByClassName('reservation_modal')[0].classList.remove('on');
});
modalBackground2.addEventListener('click', () => {
  document.getElementsByClassName('reservation_modal')[1].classList.remove('on');
});

//데이터버블링방지
https: modal1.addEventListener('click', e => {
  e.stopPropagation();
});
modal2.addEventListener('click', e => {
  e.stopPropagation();
});

function levelBar(reCount) {
  if (reCount < 50000) {
    levelBar1.style.width = '' + (reCount / 50000) * 100 + '%' + '';
  } else {
    levelBar1.style.width = '100%';
    levelCheck1.classList.add('on');
    document.getElementsByClassName('img-complete')[0].classList.add('on');
    document.getElementsByClassName('img-complete')[5].classList.add('on');
    document.getElementsByClassName('contents')[0].classList.add('on');
  }
  if (reCount < 100000) {
    levelBar2.style.width = '' + ((reCount - 50000) / 50000) * 100 + '%' + '';
  } else {
    levelBar2.style.width = '100%';
    levelCheck2.classList.add('on');
    document.getElementsByClassName('img-complete')[1].classList.add('on');
    document.getElementsByClassName('img-complete')[6].classList.add('on');
    document.getElementsByClassName('contents')[1].classList.add('on');
  }
  if (reCount < 300000) {
    levelBar3.style.width = '' + ((reCount - 100000) / 200000) * 100 + '%' + '';
  } else {
    levelBar3.style.width = '100%';
    levelCheck3.classList.add('on');
    document.getElementsByClassName('img-complete')[2].classList.add('on');
    document.getElementsByClassName('img-complete')[7].classList.add('on');
    document.getElementsByClassName('contents')[2].classList.add('on');
  }
  if (reCount < 500000) {
    levelBar4.style.width = '' + ((reCount - 300000) / 200000) * 100 + '%' + '';
  } else {
    levelBar4.style.width = '100%';
    levelCheck4.classList.add('on');
    document.getElementsByClassName('img-complete')[3].classList.add('on');
    document.getElementsByClassName('img-complete')[8].classList.add('on');
    document.getElementsByClassName('contents')[3].classList.add('on');
  }
  if (reCount < 1000000) {
    levelBar5.style.width = '' + ((reCount - 500000) / 500000) * 100 + '%' + '';
  } else {
    levelBar5.style.width = '100%';
    levelBar6.style.width = '100%';
    levelCheck5.classList.add('on');
    document.getElementsByClassName('img-complete')[4].classList.add('on');
    document.getElementsByClassName('img-complete')[9].classList.add('on');
    document.getElementsByClassName('contents')[4].classList.add('on');
  }
}

// gnbHeader
function gnbHeaderFnc() {
  if (gnbHeader.classList.contains('off')) {
    gnbHeader.classList.replace('off', 'on');
  } else {
    gnbHeader.classList.replace('on', 'off');
  }
}

function gnbHeaderMobileFnc() {
  if (gnbContentMo.classList.contains('off')) {
    gnbContentMo.classList.replace('off', 'on');
    gnbLogo.setAttribute('style', 'opacity: 0;');
  } else {
    gnbContentMo.classList.replace('on', 'off');
    gnbLogo.setAttribute('style', 'opacity: 1;');
  }
}

// characterhandler
function characterhandlerFnc(button, index) {
  if (button.classList.contains('characterImg_btn')) {
    InfoCharacter.map(f => f.classList.remove('on'));
    !InfoCharacter[index].classList.contains('on') && InfoCharacter[index].classList.add('on');
    !InfoCharacter[index + 7].classList.contains('on') && InfoCharacter[index + 7].classList.add('on');
  } else if (button.classList.contains('btnReturn')) {
    InfoCharacter.map(f => f.classList.remove('on'));
  } else if (button.classList.contains('characterInfo_img')) {
    InfoCharacter.map(f => f.classList.remove('on'));
  } else {
    return false;
  }
}

function introType(e) {
  if (e === 'intro' || e === 3) {
    setTimeout(type1Fnc, 500);
    setTimeout(type2Fnc, 1200);
    setTimeout(type3Fnc, 2400);
  } else {
    clearTimeout(type1Fnc);
    clearTimeout(type2Fnc);
    clearTimeout(type3Fnc);
    document.querySelector('#type1').innerHTML = '';
    document.querySelector('#type2').innerHTML = '';
    document.querySelector('#type3').innerHTML = '';
  }
  function type1Fnc() {
    TypeHangul.type('#type1', {
      text: '"통제불능입니다."',
      intervalType: 20,
      humanize: 0.5,
    });
  }
  function type2Fnc() {
    TypeHangul.type('#type2', {
      text: '세상이 무너지고 세워진 지하도시 신도림.',
      intervalType: 20,
      humanize: 0.5,
    });
  }
  function type3Fnc() {
    TypeHangul.type('#type3', {
      text: '그곳에 들어가지 못하고 생존한 소년들이 지하도시의 비밀을 파해친다!',
      intervalType: 20,
      humanize: 0.5,
    });
  }
}

function communityType(e) {
  if (e === 'community' || e === 7) {
    setTimeout(type4Fnc, 1000);
    setTimeout(type5Fnc, 2000);
    setTimeout(type6Fnc, 2800);
    setTimeout(type7Fnc, 3400);
  } else {
    clearTimeout(type4Fnc);
    clearTimeout(type5Fnc);
    clearTimeout(type6Fnc);
    clearTimeout(type7Fnc);
    document.querySelector('#type4').innerHTML = '';
    document.querySelector('#type5').innerHTML = '';
    document.querySelector('#type6').innerHTML = '';
    document.querySelector('#type7').innerHTML = '';
  }
  function type4Fnc() {
    document.querySelector('#type4').setAttribute('style', 'opacity:1');
    TypeHangul.type('#type4', {
      text: '공식커뮤니티에 모든 정보가 있습니다.',
      intervalType: 20,
      humanize: 0.5,
    });
  }
  function type5Fnc() {
    document.querySelector('#type5').setAttribute('style', 'opacity:1');
    TypeHangul.type('#type5', {
      text: '공식카페에서 저와 함께 이야기',
      intervalType: 20,
      humanize: 0.5,
    });
  }
  function type6Fnc() {
    document.querySelector('#type6').setAttribute('style', 'opacity:1');
    TypeHangul.type('#type6', {
      text: '나누시는 건 어떤가요?',
      intervalType: 20,
      humanize: 0.5,
    });
  }
  function type7Fnc() {
    document.querySelector('#type7').setAttribute('style', 'opacity:1');
    TypeHangul.type('#type7', {
      text: '안내해 드릴까요?',
      intervalType: 20,
      humanize: 0.5,
    });
  }
}

// Pageable
new Pageable('#container', {
  childSelector: '[data-anchor]', // CSS3 selector string for the pages
  anchors: ['main', 'reservation', 'reservationsub', 'intro', 'introsub', 'character', 'media', 'community'], // define the page anchors
  pips: false, // display the pips
  animation: 300, // the duration in ms of the scroll animation
  delay: 0, // the delay in ms before the scroll animation starts
  throttle: 100, // the interval in ms that the resize callback is fired
  orientation: 'vertical', // or horizontal
  swipeThreshold: 100, // swipe / mouse drag distance (px) before firing the page change event
  freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
  navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
  navNextEl: false, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
  infinite: false, // enable infinite scrolling (from 0.4.0)
  events: {
    wheel: true,
    mouse: true,
    touch: true,
    keydown: true,
  },
  onUpdate: function (e) {
    //introType(e.index);
    communityType(e.index);
    if (gnbHeader.classList.contains('on')) {
      gnbHeader.classList.replace('on', 'off');
    }
    if (e.index !== 0) {
      logoHeader.classList.add('on');
    } else {
      gnbHeader.classList.replace('off', 'on');
    }
  },
  onStart: function (e) {
    snsListWrap.classList.remove('on'); //snsHeader
    btnMenu.classList.remove('on'); //gnbMenuToggle
    logoHeader.classList.remove('on'); //logoHeader
    //introType(e);
    communityType(e);
    if (gnbHeader.classList.contains('on')) {
      gnbHeader.classList.replace('on', 'off');
    }
    if (e === 'reservation') {
    } else {
      count = 0;
      modalBackground1.classList.contains('on') && modalBackground1.classList.remove('on');
      modalBackground2.classList.contains('on') && modalBackground2.classList.remove('on');
    }
    if (e === 'character') {
    } else {
      InfoCharacter.map(f => f.classList.remove('on'));
    }
  },
  onFinish: function (e) {
    snsListWrap.classList.add('on'); //snsHeader
    btnMenu.classList.add('on'); //gnbMenuToggle
    //logoHeader
    if (e.index !== 0) {
      logoHeader.classList.add('on');
    }
    gnbListHeader.map((f, index) => {
      if (index == e.index) {
        f.classList.add('active');
        siblings(f).map(g => g.classList.remove('active'));
        if (index === 2) {
          gnbListHeader[1].classList.add('active');
          siblings(gnbListHeader[1]).map(g => g.classList.remove('active'));
        }
        if (index === 4) {
          gnbListHeader[3].classList.add('active');
          siblings(gnbListHeader[3]).map(g => g.classList.remove('active'));
        }
      }
    });
    gnbListHeaderMobile.map((f, index) => {
      if (index == e.index) {
        f.classList.add('on');
        siblings(f).map(g => g.classList.remove('on'));
        if (index === 2) {
          gnbListHeaderMobile[1].classList.add('on');
          siblings(gnbListHeaderMobile[1]).map(g => g.classList.remove('on'));
        }
        if (index === 4) {
          gnbListHeaderMobile[3].classList.add('on');
          siblings(gnbListHeaderMobile[3]).map(g => g.classList.remove('on'));
        }
      }
    });
  },
});

btnMenu.addEventListener('click', gnbHeaderFnc, false);
btnCharacterImg.map((btnChar, index) => btnChar.addEventListener('click', characterhandlerFnc.bind(null, btnChar, index), false));
btnReturnCharacter.map((btnReturn, index) => btnReturn.addEventListener('click', characterhandlerFnc.bind(null, btnReturn, index), false));
InfocharacterImg.map((infoCharacterImg, index) => infoCharacterImg.addEventListener('click', characterhandlerFnc.bind(null, infoCharacterImg, index), false));
btnMenuMo.addEventListener('click', gnbHeaderMobileFnc, false);
