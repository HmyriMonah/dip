/* eslint-disable no-undef */


//open form buttons
const firstThemeOpenButton = document.getElementById('first-html-theme');
const secondThemeOpenButton = document.getElementById('second-html-theme');
const thirdThemeOpenButton = document.getElementById('third-html-theme');
const fourthThemeOpenButton = document.getElementById('fourth-html-theme');
const fifthThemeOpenButton = document.getElementById('fifth-html-theme');
const sixthThemeOpenButton = document.getElementById('sixth-html-theme');
const seventhThemeOpenButton = document.getElementById('seventh-html-theme');

const formsList = document.getElementsByClassName('theory-form');

//forms
const firstTheme = document.getElementById('first-theme-form');
const secondThemeForm = document.getElementById('second-theme-form');
const thirdThemeForm = document.getElementById('third-theme-form');
const fourthThemeForm = document.getElementById('fourth-theme-form');
const fifthThemeForm = document.getElementById('fifth-theme-form');
const sixthThemeForm = document.getElementById('sixth-theme-form');
const seventhThemeForm = document.getElementById('seventh-theme-form');



const content = document.getElementById('main-content');

const listNext = document.getElementsByClassName('next navigation'); //list next buttons

const listPrevious = document.getElementsByClassName('previous navigation'); //list Previous buttons

listNext[0].onclick = function () {
  firstTheme.classList.remove('theory-form-flex');
  secondThemeForm.classList.add('theory-form-flex');
};

listNext[1].onclick = function () {
  secondThemeForm.classList.remove('theory-form-flex');
  thirdThemeForm.classList.add('theory-form-flex');
};

listNext[2].onclick = function () {
  thirdThemeForm.classList.remove('theory-form-flex');
  fourthThemeForm.classList.add('theory-form-flex');
};

listNext[3].onclick = function () {
  fourthThemeForm.classList.remove('theory-form-flex');
  fifthThemeForm.classList.add('theory-form-flex');
};

listNext[4].onclick = function () {
  fifthThemeForm.classList.remove('theory-form-flex');
  sixthThemeForm.classList.add('theory-form-flex');
};

listNext[5].onclick = function () {
  sixthThemeForm.classList.remove('theory-form-flex');
  seventhThemeForm.classList.add('theory-form-flex');
};

listPrevious[0].onclick = function () {
  secondThemeForm.classList.remove('theory-form-flex');
  firstTheme.classList.add('theory-form-flex');
};

listPrevious[1].onclick = function () {
  thirdThemeForm.classList.remove('theory-form-flex');
  secondThemeForm.classList.add('theory-form-flex');
};

listPrevious[2].onclick = function () {
  fourthThemeForm.classList.remove('theory-form-flex');
  thirdThemeForm.classList.add('theory-form-flex');
};

listPrevious[3].onclick = function () {
  fifthThemeForm.classList.remove('theory-form-flex');
  fourthThemeForm.classList.add('theory-form-flex');
};

listPrevious[4].onclick = function () {
  sixthThemeForm.classList.remove('theory-form-flex');
  fifthThemeForm.classList.add('theory-form-flex');
};

listPrevious[5].onclick = function () {
  seventhThemeForm.classList.remove('theory-form-flex');
  sixthThemeForm.classList.add('theory-form-flex');
};

function closeForms() {
  Array.from(formsList).forEach((elem) => {
    elem.classList.remove('theory-form-flex');
  });
}

function showContent() {
  document.body.classList.remove('darkBackGround');
  content.classList.remove('content-hidden');
  closeForms();
}

//close theory form
document.onclick = function () {
  if (event.target.className == 'close' || event.target.className == 'closeForm navigation') {
    showContent();
  }
};

//open first dorm
firstThemeOpenButton.onclick = function () {
  firstTheme.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

//open second dorm
secondThemeOpenButton.onclick = function () {
  secondThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

//open third dorm
thirdThemeOpenButton.onclick = function () {
  thirdThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

//open fourth dorm
fourthThemeOpenButton.onclick = function () {
  fourthThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

//open fourth dorm
fifthThemeOpenButton.onclick = function () {
  fifthThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

sixthThemeOpenButton.onclick = function () {
  sixthThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

seventhThemeOpenButton.onclick = function () {
  seventhThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

function errorColor(id) {
  id.style.borderColor = '#FF0000';
  id.style.background = 'white';
}

function normalColor(id) {
  id.style.borderColor = 'green';
  id.style.background = '#03bf47';
}


const taskImgDis = document.getElementById('task-img');


const titleInput = document.getElementById('title-input');

const titleError = document.getElementById('title-error');

const titleTask = document.getElementById('code-example__title-task');

titleTask.onclick = function () {
  let firstInputString = titleInput.value;
  firstInputString = firstInputString.replace(/\s+/g, '');

  let checkedResult = checkTitle(firstInputString, '&');
  if (checkedResult.result === false) {
    errorColor(titleInput);
    titleError.innerHTML = checkedResult.message;
  } else {
    normalColor(titleInput);
    titleError.innerHTML = '';
  }
};

function checkTitle(str, sign) {
  let correctString = [];
  let equalsCorrectCount;
  let inputString = str;
  if (str.length <= 1) {
    return {
      result: false,
      message: 'Нужно что-то написать',
    };
  }
  let openTag = inputString.substring(0, 7);
  console.log(openTag);
  let closeTAg = inputString.substr(inputString.length - 8);
  console.log(closeTAg);
  console.log();
  if (openTag == '<title>' && closeTAg == '</title>') {
    let resStr = inputString.replace(openTag, '');
    resStr = resStr.replace(closeTAg, 'title изминен');
    document.title = resStr;
    return {
      result: true,
      message: 'Верно',
    };
  } else {
    if (openTag != '<title>') {
      return {
        result: false,
        message: 'У вас проблемы с открываюищим тегом',
      };
    } else {
      if (closeTAg != '</title>') {
        return {
          result: false,
          message: 'У вас проблемы с закрывающим тегом',
        };
      }
    }
  }
  let openBracketsCount = inputString.match(/[\<\?]/g);
  if (openBracketsCount == null) {
    openBracketsCount = 0;
  } else {
    openBracketsCount = inputString.match(/[\<\?]/g).length;
  }
  let closeBracketsCount = inputString.match(/[\>\?]/g);
  if (closeBracketsCount == null) {
    closeBracketsCount = 0;
  } else {
    closeBracketsCount = inputString.match(/[\>\?]/g).length;
  }
  if (openBracketsCount != closeBracketsCount) {
    console.log(openBracketsCount);
    console.log(closeBracketsCount);
    return {
      result: false,
      message: 'не верное кол-во скобок',
    };
  }
}

function titleInputTask(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    let elem = e.srcElement || e.target;
    let inputString = elem.value;
    inputString = inputString.replace(/\s+/g, '');
    let varible = inputString.substring(0, 7);
    let openBracketsCount = inputString.match(/[\(\?\<]/g);
    if (openBracketsCount == null) {
      openBracketsCount = 0;
    } else {
      openBracketsCount = inputString.match(/[\(\?\<]/g).length;
    }
    let closeBracketsCount = inputString.match(/[\)\?\<]/g);
    if (closeBracketsCount == null) {
      closeBracketsCount = 0;
    } else {
      closeBracketsCount = inputString.match(/[\)\?\<]/g).length;
    }
    console.log(checkTitle(inputString, '&'));
    if (!checkTitle(inputString, '&').result) {
      errorColor(titleInput);
      titleError.innerHTML = checkTitle(inputString, '&').message;
    } else {
      normalColor(titleInput);
      titleError.innerHTML = 'title изминен';
    }
  }
}

const imgInput = document.getElementById('img-input');

const imgError = document.getElementById('img-error');

const imgTask = document.getElementById('code-example__img-task');

imgTask.onclick = function () {
  console.log("что");
  let firstInputString = imgInput.value;
  firstInputString = firstInputString.replace(/\s+/g, '');

  let checked = checkImg(firstInputString, '&');
  if (checked.result === false) {
    errorColor(imgInput);
    imgError.innerHTML = checked.message;
    taskImgDis.style.display = "none";
  } else {
    normalColor(imgInput);
    imgError.innerHTML = '';
    taskImgDis.style.display = "block";
  }
};

function checkImg(str) {
  let correctString = [];
  let equalsCorrectCount;
  let inputString = str;
  if (str.length <= 1) {
    return {
      result: false,
      message: 'Нужно что-то написать',
    };
  }
  inputString= inputString.replace(/[\<\>]/g,'');
  let openTag = inputString.substring(0, 27);
  //let closeTAg = inputString.substr(inputString.length - 8);
  console.log(openTag);
  console.log('imgsrc="images/example.jpg"');
  if (openTag == 'imgsrc="images/example.jpg\"' || openTag== 'imgsrc="images/example.jpg'  ) {
    return {
      result: true,
      message: 'Верно',
    };
  }else {
    if(inputString.substring(0, 7)=="imgsrc=") {
       return {
      result: false,
      message: 'Ошибка в пути к файлу',
    };
    }
     return {
      result: false,
      message: 'Ошибка',
    };
  }

  let openBracketsCount = inputString.match(/[\<\?]/g);
  if (openBracketsCount == null) {
    openBracketsCount = 0;
  } else {
    openBracketsCount = inputString.match(/[\<\?]/g).length;
  }
  let closeBracketsCount = inputString.match(/[\>\?]/g);
  if (closeBracketsCount == null) {
    closeBracketsCount = 0;
  } else {
    closeBracketsCount = inputString.match(/[\>\?]/g).length;
  }
  if (openBracketsCount != closeBracketsCount) {
    console.log(openBracketsCount);
    console.log(closeBracketsCount);
    return {
      result: false,
      message: 'не верное кол-во скобок',
    };
  }
}

function imgInputTask(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    let elem = e.srcElement || e.target;
    let inputString = elem.value;
    inputString = inputString.replace(/\s+/g, '');
    let varible = inputString.substring(0, 7);
    let openBracketsCount = inputString.match(/[\(\?\<]/g);
    if (openBracketsCount == null) {
      openBracketsCount = 0;
    } else {
      openBracketsCount = inputString.match(/[\(\?\<]/g).length;
    }
    let closeBracketsCount = inputString.match(/[\)\?\<]/g);
    if (closeBracketsCount == null) {
      closeBracketsCount = 0;
    } else {
      closeBracketsCount = inputString.match(/[\)\?\<]/g).length;
    }
    console.log(checkImg(inputString));
    if (!checkImg(inputString).result) {
      errorColor(imgInput);
      imgError.innerHTML = checkImg(inputString).message;

      taskImgDis.style.display = "none";
    } else {
      normalColor(imgInput);
      imgError.innerHTML = '';
      taskImgDis.style.display = "block";
    }
  }
}

const bTagButton = document.getElementById('code-example__tag-b');

const tagBText = document.getElementById('tag-b-text');
bTagButton.onclick = function () {
  
  if(tagBText.innerHTML=='&lt;<span class="code-example__tag">b</span>&gt; <b>Текст выделяется жирным</b> &lt;/<span class="code-example__tag">b</span>&gt;') {
    tagBText.innerHTML = "Текст НЕ выделяется жирным";
  }else {
    tagBText.innerHTML = '&lt;<span class="code-example__tag">b</span>&gt; <b>Текст выделяется жирным</b> &lt;/<span class="code-example__tag">b</span>&gt;';
  }
  
}


const emTagButton = document.getElementById('code-example__tag-em');

const tagEmText = document.getElementById('tag-em-text');
emTagButton.onclick = function () {

  if(tagEmText.innerHTML=='&lt;<span class="code-example__tag">em</span>&gt; <em>Наклонный текст</em> &lt;/<span class="code-example__tag">em</span>&gt;') {
    tagEmText.innerHTML = "Текст НЕ наклонный";
  }else {
    tagEmText.innerHTML = '&lt;<span class="code-example__tag">em</span>&gt; <em>Наклонный текст</em> &lt;/<span class="code-example__tag">em</span>&gt;';
  }
  
}

const uTagButton = document.getElementById('code-example__tag-u');

const tagUText = document.getElementById('tag-u-text');
const strU=tagUText.innerHTML;
uTagButton.onclick = function () {

  if(tagUText.innerHTML==strU) {
    tagUText.innerHTML = "Текст НЕ подчеркнут";
  }else {
    tagUText.innerHTML = strU;
  }
}

const supTagButton = document.getElementById('code-example__tag-sup');

const tagSupText = document.getElementById('tag-sup-text');
const strSup=tagSupText.innerHTML;

supTagButton.onclick = function () {

  if(tagSupText.innerHTML==strSup) {
    tagSupText.innerHTML = "Текст обычный";
  }else {
    tagSupText.innerHTML = strSup;
  }
  
}

const subTagButton = document.getElementById('code-example__tag-sub');

const tagSubText = document.getElementById('tag-sub-text');
const strSub=tagSubText.innerHTML;

subTagButton.onclick = function () {

  if(tagSubText.innerHTML==strSub) {
    tagSubText.innerHTML = "Текст обычный";
  }else {
    tagSubText.innerHTML = strSub;
  }
  
}

const insTagButton = document.getElementById('code-example__tag-ins');

const tagInsText = document.getElementById('tag-ins-text');
const strIns=tagInsText.innerHTML;

insTagButton.onclick = function () {

  if(tagInsText.innerHTML==strIns) {
    tagInsText.innerHTML = "Текст обычный";
  }else {
    tagInsText.innerHTML = strIns;
  }
  
}

const delTagButton = document.getElementById('code-example__tag-del');

const tagDelText = document.getElementById('tag-del-text');
const strDel=tagDelText.innerHTML;

delTagButton.onclick = function () {

  if(tagDelText.innerHTML==strDel) {
    tagDelText.innerHTML = "Текст обычный";
  }else {
    tagDelText.innerHTML = strDel;
  }
  
}

const preTagButton = document.getElementById('code-example__tag-pre');

const tagPreText = document.getElementById('tag-pre-text');
const strPre=tagPreText.innerHTML;

preTagButton.onclick = function () {

  if(tagPreText.innerHTML==strPre) {
    tagPreText.innerHTML = "Неотформатированный текст";
  }else {
    tagPreText.innerHTML = strPre;
  }
  
}