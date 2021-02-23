import Polyglot from 'node-polyglot';
class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = localStorage.getItem('localeData') || 'ja';

    // polyglot.locale()でも設定可能
    // this.polyglot = new Polyglot({locale: 'ja'});
  }

  setup() {
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */

    const currentLocale = this.currentLocale;

    if (currentLocale === 'ja') {
      this.polyglot.extend({
        'hello': 'こんにちは、世界',
      });
    }

    if (currentLocale === 'en') {
      this.polyglot.extend({
        'hello': 'Hello, world',
      });
    }
  }

  updateLocale(e) {
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */

    this.setup();

    let newLocale = e.target.dataset.locale;
    console.log(newLocale);

    localStorage.setItem('localeData', newLocale);
  }


  showMessage() {
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */

    const mainField = document.getElementById('main');
    mainField.innerHTML = `<h1>${this.polyglot.t('hello')}</h1>`;
  }
}

const app = new TranslationApp();
app.setup();
app.showMessage();


{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale.bind(app));

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale.bind(app));
}