import Polyglot from 'node-polyglot';
class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = 'ja';

    // polyglot.locale()でも設定可能
    // this.polyglot = new Polyglot({locale: 'ja'});
  }

  setup() {
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */
    const currentLocale = this.currentLocale;
    this.currentLocale = 'en';
    console.log(this.currentLocale);

    if (currentLocale === 'ja') {
      this.polyglot.extend({
        'hello': 'こんにちは、世界',
      });
    }

    if (currentLocale === 'en') {
      this.polyglot.extend({
        'Hello': 'こんにちは、世界',
      });
    }
  }


  updateLocale(e) {
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */
    let locale = e.target.dataset.locale;

    if (locale === 'ja') {
      this.currentLocale = 'ja';
    }

    if (locale === 'en') {
      this.currentLocale = 'en';
    }
  }


  showMessage() {
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */

    const mainField = document.getElementById('main');

console.log(this.polyglot.t('Hello'));
      // mainField.innerHTML = `<h1>${this.polyglot.t('hello')}</h1>`;

    // mainField.innerHTML = `<h1>${this.polyglot.t('Hello')}</h1>`;
  }
  
}

const tranlatedMessage = new TranslationApp();
tranlatedMessage.setup();
tranlatedMessage.showMessage();

// {
//   const button1 = document.getElementById('button1');
//   button1.addEventListener('click', tranlatedMessage.updateLocale);


//   const button2 = document.getElementById('button2');
//   button2.addEventListener("click", tranlatedMessage.updateLocale);
// }
