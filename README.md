# scrollAnimator
 Page scrollAnimator in VanillaJS

Animate.css ichida joylashgan odat ko'p ishlatiladigan effectlar uchun classlar yaratilgan. 


`fade-in, to-left, to-top, to-right, to-bottom, skew, pop-up, glitch, zoom-in`

Foydalanish:

1. animatsiya bloklar(section) larni **data-threshold** attributi berib chiqamiz. 
   **data-threshold**  qiymatini SETUP mode da **data-threshold** berilgan block elementlarni chap tepa qismida scroll qilishiz bilan ko'rinadi.

2. **data-threshold** berib chiqilgan konteyner ichidagi elementlarga animatsiya berib chiqamiz.
   

  **animate** class standart class uni barcha scrollAnimator animatsiyasi ishlatiladigan elementlarga qo'shamiz.
  ```HTML
  <div class="animate"></div>
  ```
  endi esa **animate** class qo'shilgan elementga animatsiya nomini `data-animations="bu yerga"`  yozamiz.


  ```HTML
  <div class="animate" data-animations="to-bottom"></div>
  ```

  scroll bo'lishi bilan elementlar ekranda animatsiya bilan paydo bo'lishi uchun, animatsiya bo'lishi kerak bo'lgan section(blok) belgilab olib, kerakli elementlarni ushlab turadigan section(parent = ota) elementga `data-threshold="100"`   bu attributni yozib qo'ying.

  ```HTML
  <div class="section" data-threshold="100">
    <div class="animate" data-animations="to-bottom"></div>
  </div>
  ```

  Agar siz animatsiya vaqtini boshqarmoqchi bo'lsangiz unda, **data-animations** ga s1, s2, s3, s4, s5  qo'shib qo'ying. bo'sh joy bo'lishi kerak orasida.
  ```HTML
  <div class="section" data-threshold="100">
    <div class="content animate" data-animations="to-bottom s2"></div>
  </div>
  ```
  **content** klasli li div kerakli nuqtaga yetgandan keyin 2s kutib keyin animatsiya boshlanadi.


3. so'nggi qadam bu asosiy JS kutubxonani ulash.
  ```HTML
  <script src="js/animate.js"></script>
  ```
4. **animate**  obyektini hosil qiling.
  ```HTML
  <script>
    const Animater = new animate(true);
  </script>
  ```

  <h3>Misol uchun</h3>

  <h4>HTML blokni belgilaymiz(data-threshold orqali.) ma'lum bir qismi( %da ) ekranda ko'ringanda animatsiya paydo bo'lishi belgilaymiz. qo'shimcha tarzda animatsiyalarni turini va vaqtini belgilaymiz.</h4>

  ```HTML
  <section class="sec4" data-threshold="1300">
      <h2 class="animate" data-animations="fade-in">section 4</h2>
      <div class="content animate" data-animations="fade-in s-2">content text</div>
  </section>
  ```

  <h4>Bu esa kutubxonani ulash uchun script tegi. </h4>
  ```HTML
  <script src="js/animate.js"></script>
  <script>
    const Animater = new animate(true);
  </script>
  ```

`#DEBUG(SETUP) mode ni yoqib kerakli animatsiyalarni sozlab olgandan keyin oddiy modega o'tkizing.`

Demo fayl **demo** papkasida joylashgan yoki [Bu yerda](https://parmonov98.github.io/scrollAnimator/demo/)

Agar o'zingizni animatsiya effektlarizni qo'shmoqchi bo'lsangiz, marhamat, **src** papka ichidagi **animate.css** fayldagi effektlar qo'shib push request qiling. 

Proyekt uchun ishlatilgan texnlogiyalar:
1. HTML
2. scss/css
3. Babel/VanillaJS


Ayni vaqtdagi qilinishi kerak ishlar:
1. Animatsiya effektlarini yaratish/ko'paytirish.
2. takliflar bering. elementlar ustida yana qanday boshqaruv bo'lishini xohlaysiz?