# scrollAnimator
 Page scrollAnimator in VanillaJS

<h3>Example</h3>

birinchi o'rinda animate.css ichida joylashgan odat ko'p ishlatiladigan effectlar uchun classlar yaratilgan. 
 fade-in, to-left, to-top, to-right, to-bottom, skew, pop-up

Foydalanish:

birinchi o'rinda kerakli animatsiyani biz elementga biriktiramiz.
animate class standart class uni barcha scrollAnimator ishlatiladigan elementlarga qo'shamiz.

endi esa kerakli animatsiya nomini data-animations="bu yerga"  yozamiz va elementga biriktiramiz.

```HTML
<div class="features__items_i animate" data-animations="to-right s-2">
  `here your code goes.
</div>
```


scroll bo'lishi bilan elementlar ekranda animatsiya bilan paydo bo'lishi uchun scroll ni window.pageYOffset belgilab olib, 
kerakli elementlarni ushlab turadigan parent(ota) elementga `data-offset="100"`   bu attributni yozib qo'ying.

```HTML
<script src="js/animate.js"></script>
<script>
	 const Animater = new animate(true);
</script>
```

**animate.js** faylini ulang va **animate**  obyektini hosil qiling.
