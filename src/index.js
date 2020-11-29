import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    let currentLocale = 'ja';
    this.polyglot = new Polyglot();
  }

  setup() {
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */

    if (this.currentLocale === 'ja') {
      this.polyglot.extend({
        hello: 'こんにちは、世界',
      });
    }

    // 英語の場合も翻訳データをセットしましょう
    if (this.currentLocale === 'en') {
      this.polyglot.extend({
        hello: 'Hello, world',
      });
    }

    console.log(this.currentLocale); //undefinedになる
  }

  updateLocale(e) {
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */
  }

  showMessage() {
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */

    const mainField = document.getElementById('main');
    const message = document.createElement('h1');
    mainField.appendChild(message);

    this.polyglot.t('hello');
    message.innerHTML = this.setup();
  }
}

const tranlatedMessage = new TranslationApp();
tranlatedMessage.showMessage();

// {
// const button1 = document.getElementById('button1');
// button1.addEventListener('click', app.updateLocale);

// const button2 = document.getElementById('button2');
// button2.addEventListener("click", app.updateLocale);
// }
