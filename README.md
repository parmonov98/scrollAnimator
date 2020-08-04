# scrollAnimator
 Page scrollAnimator in VanillaJS

birinchi o'rinda animate.css ichida joylashgan odat ko'p ishlatiladigan effectlar uchun classlar yaratilgan. 
fade-in, to-left, to-top, to-right, to-bottom, skew, pop-up, glitch

Foydalanish:

birinchi o'rinda kerakli animatsiyani biz elementga biriktiramiz.
**animate** class standart class uni barcha scrollAnimator animatsiyasi ishlatiladigan elementlarga qo'shamiz.
```HTML
<div class="animate"></div>
```
endi esa **animate** class qo'shilgan elementga animatsiya nomini `data-animations="bu yerga"`  yozamiz.


```HTML
<div class="animate" data-animations="to-bottom"></div>
```

scroll bo'lishi bilan elementlar ekranda animatsiya bilan paydo bo'lishi uchun scroll ni window pageYOffset belgilab olib,  kerakli elementlarni ushlab turadigan section(parent = ota) elementga `data-offset="100"`   bu attributni yozib qo'ying.

```HTML
<div class="section" data-offset="100">
  <div class="animate" data-animations="to-bottom"></div>
</div>
```

Agar siz animatsiya vaqtini boshqarmoqchi bo'lsangiz unda, **data-animations** ga s1, s2, s3, s4, s5  qo'shib qo'ying. bo'sh joy bo'lishi kerak orasida.
```HTML
<div class="section" data-offset="100">
  <div class="content animate" data-animations="to-bottom s2"></div>
</div>
```
**content** klasli li div kerakli nuqtaga yetgandan keyin 2s kutib keyin animatsiya boshlanadi.


va so'nggi qadam bu asosiy JS kutubxonani ulash.
```HTML
<script src="js/animate.js"></script>
<script>
	 const Animater = new animate(true);
</script>
```

**animate.js** faylini ulang va **animate**  obyektini hosil qiling.

Demo fayl **demo** papkasida joylashgan.
yoki https://parmonov98.github.io/scrollAnimator/demo/



<h3>Misol uchun</h3>

<h4>HTML blokni belgilaymiz(data-offset orqali.) uni ichida o'sha nuqtaga yetkandan keyin animatsiya bo'ladigan elemenlarga animatsiya turini va vaqtini belgilaymiz.</h4>

```HTML
<section class="sec4" data-offset="1300">
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

#DEBUG(SETUP) mode ni yoqib kerakli animatsiyalarni sozlab olgandan keyin oddiy modega o'tkizing.


Agar o'zingizni animatsiya effektlarizni qo'shmoqchi bo'lsangiz, marhamat, **src** papka ichidagi **animate.css** fayldagi effektlar qo'shib push request qiling. 

Proyekt uchun ishlatilgan texnlogiyalar:
1. HTML
2. scss/css
3. Babel/VanillaJS


Ayni vaqtdagi qilinishi kerak ishlar:
1. Animatsiya effektlarini yaratish/ko'paytirish.
2. Turli xil o'lchamli ekranlarda ham bir xil natija olish yoki yondashuvni o'zgartirish orqali animatsiya ishga tushish vaqtini aniq sozlash sifatini oshirish.
