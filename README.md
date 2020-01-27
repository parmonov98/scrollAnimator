# scrollAnimator
 Page scrollAnimator in VanillaJS

<h3>Example</h3>

birinchi o'rinda animate.css ichida joylashgan odat ko'p ishlatiladigan effectlar uchun classlar yaratilgan. 
 fade-in, to-left, to-top, to-right, to-bottom, skew, pop-up

Foydalanish:

birinchi o'rinda kerakli animatsiyani biz elementga biriktiramiz.
animate class standart class uni barcha scrollAnimator ishlatiladigan elementlarga qo'shamiz.

endi esa kerakli animatsiya nomini data-animations="bu yerga"  yozamiz va elementga biriktiramiz.
<pre>
`
<div class="features__items_i animate" data-animations=" to-right">
  here your code goes.
</div>
`
</pre>


scroll bo'lishi bilan elementlar ekranda animatsiya bilan paydo bo'lishi uchun scroll ni window.pageYOffset   belgilab olib, 
kerakli elementsni ushlab turadigan parent(ota) elementga data-offset="yozib"   bu attributni yozib qo'ying.
