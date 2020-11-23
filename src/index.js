import Polyglot from 'node-polyglot';

let currentLocale = 'ja';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
  }

  setup() {
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */
    if (currentLocale === 'ja') {
      this.polyglot.extend({
        hello: 'こんにちは、世界',
      });

      this.polyglot.t('hello');
    }
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

    message.innerHTML = this.setup(currentLocale);
  }
}

const tranlatedMessage = new TranslationApp({});
tranlatedMessage.showMessage();

// {
// const button1 = document.getElementById('button1');
// button1.addEventListener('click', app.updateLocale);

// const button2 = document.getElementById('button2');
// button2.addEventListener("click", app.updateLocale);
// }
