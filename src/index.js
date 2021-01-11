import Polyglot from 'node-polyglot';
class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot({locale: 'ja'});
    this.currentLocale = 'ja';

    // polyglot.locale()でも設定可能
    // this.polyglot = new Polyglot({locale: 'ja'});
  }

  setup() {
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */

    if (this.currentLocale === 'ja') {
      this.polyglot.extend({
        'hello': 'こんにちは、世界',
      });
    }

    if (this.currentLocale === 'en') {
      this.polyglot.extend({
        'hello': 'Hello, world',
      });
    }
  }

  updateLocale(e) {
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */

    // if(this.currentLocale === 'ja') {
    //   this.currentLocale = 'en';
    // }

    // if(this.currentLocale === 'en') {
    //   this.currentLocale = 'ja';
    // }
  }

  showMessage() {
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */
    this.setup();
    const mainField = document.getElementById('main');
    mainField.innerHTML = `<h1>${this.polyglot.t('hello')}</h1>`; 
  }
}

const tranlatedMessage = new TranslationApp();
tranlatedMessage.showMessage();


// localStorage.setItem('message', tranlatedMessage);


// {
// const button1 = document.getElementById('button1');
// button1.addEventListener('click', app.updateLocale);


// const button2 = document.getElementById('button2');
// button2.addEventListener("click", app.updateLocale);
// }
