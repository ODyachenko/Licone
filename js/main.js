// Smooth Scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault(),
    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top,
      },
      500
    );
});

// Ratio Carousel
let ratioCarousel = function () {
  let upturn = function upturn() {
    window.addEventListener('resize', checkPosition);
    window.addEventListener('DOMContentLoaded', checkPosition());
    function checkPosition() {
      if (
        window.matchMedia('(max-width: 1219px)').matches &&
        !$('.ratio__list').hasClass('slick-initialized')
      ) {
        $('.ratio__list').slick({
          infinite: false,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      } else if (
        window.matchMedia('(min-width: 1219px)').matches &&
        $('.ratio__list').hasClass('slick-initialized')
      ) {
        if ($('.ratio__list').hasClass('slick-initialized')) {
          $('.ratio__list').slick('unslick');
        }
      }
    }
  };
  upturn();
};

// Benefits Carousel
let benefitsCarousel = function () {
  let upturn = function upturn() {
    window.addEventListener('resize', checkPosition);
    window.addEventListener('DOMContentLoaded', checkPosition());
    function checkPosition() {
      if (
        window.matchMedia('(max-width: 1219px)').matches &&
        !$('.benefits__list').hasClass('slick-initialized')
      ) {
        $('.benefits__list').slick({
          infinite: true,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      } else if (
        window.matchMedia('(min-width: 1219px)').matches &&
        $('.benefits__list').hasClass('slick-initialized')
      ) {
        if ($('.benefits__list').hasClass('slick-initialized')) {
          $('.benefits__list').slick('unslick');
        }
      }
    }
  };
  upturn();
};

// Show/Hide popup window
const popupLinks = document.querySelectorAll('.ever-popup-btn');
const popupWindow = document.querySelector('.ever-popup-build');
const closeBtn = document.querySelector('.close');
let firstRender = true;

for (let link of popupLinks) {
  link.addEventListener('click', function () {
    popupWindow.classList.add('show');
  });
}
document.body.addEventListener('mouseleave', function () {
  if (firstRender) {
    popupWindow.classList.add('show');
    firstRender = false;
  }
});
closeBtn.addEventListener('click', function () {
  popupWindow.classList.remove('show');
});

function main() {
  ratioCarousel();
  benefitsCarousel();

  // Structure Carousel
  $('.structure__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Reviews Carousel
  $(document).ready(function () {
    $('.reviews__list').slick({
      mobileFirst: !0,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      infinite: !1,
      dots: !0,
      adaptiveHeight: !0,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            adaptiveHeight: !1,
          },
        },
      ],
    });
  });
}

// Show/HideEffectText
let effectBtn = document.querySelectorAll('.effect__list-btn');

for (let i = 0; i < effectBtn.length; i++) {
  effectBtn[i].addEventListener('click', function (event) {
    let badge = event.target;
    toggleShow(badge);
  });
}

function toggleShow(elem) {
  let effectText = elem.parentElement.previousElementSibling;
  let effectTextFullHeight = effectText.children[0].offsetHeight;

  if (elem.innerHTML == '-') {
    elem.innerHTML = '+';
    elem.style.cssText = 'transform: translate3d(-50%, -50%, 0)';
    if (document.documentElement.clientWidth < 1024) {
      effectText.style.height = '80px';
    } else if (
      document.documentElement.clientWidth >= 1024 &&
      document.documentElement.clientWidth < 1330
    ) {
      effectText.style.height = '60px';
    } else {
      effectText.style.height = '70px';
    }
  } else {
    elem.innerHTML = '-';
    elem.style.cssText = 'transform: translate3d(-57%, -56%, 0)';
    effectText.style.height = effectTextFullHeight + 'px';
  }
}

// Post Date
const months = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ],
  monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
  days = [
    'วันอาทิตย์',
    'วันจันทร์',
    'วันอังคาร',
    'วันพุธ',
    'วันพฤหัส',
    'วันศุกร์',
    'วันเสาร์',
  ],
  daysMin = ['', '', '', '', '', '', ''],
  seasons = ['ฤดูหนาว', 'วสันต์', 'หน้าร้อน', 'ฤดูใบไม้ร่วง'];
function postDate(
  daysName,
  daysMinName,
  monthsName,
  monthsMinName,
  seasonsName
) {
  const _counterLength = 60;
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, 'date-');
    innerDate(counter, 'date');
  }
  function innerDate(counter, dateType) {
    let newCounter;
    dateType === 'date-' ? (newCounter = -counter) : (newCounter = counter);
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + newCounter * _msInDay),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear() + 543;
    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
    const dateClass = dateType + counter,
      nodeList = document.querySelectorAll('.' + dateClass);
    for (let i = 0; i < nodeList.length; i++) {
      const dateFormat = nodeList[i].dataset.format;
      dateFormat !== undefined && dateFormat !== ''
        ? (nodeList[i].innerHTML = String(
            changeFormat(dayDefault, _month, _year, dateFormat, newCounter)
          ))
        : (nodeList[i].innerHTML = defaultDate);
    }
  }
  function changeFormat(_day, _month, _year, format, counter) {
    let innerFormat = format;
    const testFormat = ['dd', 'mm', 'yyyy', 'monthFull', 'year'],
      dateFormat = {
        dd: _day,
        mm: addZero(_month),
        yyyy: _year,
        monthFull: getMonthName(_month, monthsName, true),
        year: getYearWithCounter(_year, counter),
      };
    for (let i = 0; i < testFormat.length; i++) {
      let string = testFormat[i];
      let regExp = new RegExp(string);
      innerFormat = innerFormat.replace(regExp, dateFormat[string]);
    }
    return innerFormat.split(' ').join(' ');
  }
  function getMonthName(_month, monthsName, bigFirstLetter, counter) {
    const monthCounter = !!counter ? counter : 0;
    let month;
    _month + monthCounter > 12
      ? (month = monthCounter - (12 - _month))
      : (month = _month + monthCounter);
    _month + monthCounter <= 0
      ? (month = 12 + monthCounter + 1)
      : (month = _month + monthCounter);
    return changeFirstLetter(bigFirstLetter, monthsName[month - 1]);
  }
  function getYearWithCounter(year, counter) {
    return year + counter;
  }
  function addZero(numb) {
    return numb < 10 ? '0' + numb : numb;
  }
  function changeFirstLetter(isBig, str) {
    return isBig && str && str.length > 0
      ? str[0].toUpperCase() + str.slice(1)
      : str;
  }
}
if (document.body.classList.contains('ev-date')) {
  document.addEventListener('DOMContentLoaded', function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
}

// Lazy Loading
if (document.documentElement.clientWidth < 480) {
  window.addEventListener(
    'scroll',
    function () {
      return setTimeout(main, 1000);
    },
    {
      once: true,
    }
  );
} else {
  main();
}
