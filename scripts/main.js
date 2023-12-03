let isCouponAdded = false;
let couponName = null;
const makePurchaseButton = document.getElementById("make-purchase");
const couponButton = document.getElementById("coupon-submit");
const badge = document.getElementById("cart-count");
const empty = document.getElementById("empty");
const calculationEntry = document.getElementById("cart");
const error = document.getElementById("error");
const coupon = document.getElementById("couponName");

function addToCart(name, price) {
  const totalPrice = getTextElementValueById("total-price");
  const inTotal = totalPrice + price;
  const count = calculationEntry.childElementCount;
  const discountedAmount = (inTotal * 0.2).toFixed(2);

  const empty = document.getElementById("empty");
  const couponButton = document.getElementById("coupon-submit");
  const makePurchaseButton = document.getElementById("make-purchase");

  if (count > 0) {
    badge.classList.remove("hidden");
    badge.innerText = count;

    disabledButtonHandler(makePurchaseButton, true);
  }
  empty.classList.add("hidden");
  if (inTotal >= 200) {
    disabledButtonHandler(couponButton, true);
  }
  addCartEntry(name);
  setTextElementValueById("total-price", inTotal.toFixed(2));
  if (isCouponAdded) {
    setTextElementValueById("discount", discountedAmount);
    setTextElementValueById("total", (inTotal - discountedAmount).toFixed(2));
  } else {
    setTextElementValueById("total", inTotal.toFixed(2));
  }
}

function couponSubmit() {
  const couponValue = getInputFieldValueById("coupon");
  const totalPrice = getTextElementValueById("total-price");

  if (couponValue === "SELL200") {
    coupon.classList.remove("hidden");
    coupon.innerText = couponValue;
    isCouponAdded = true;
    discountedAmount = (totalPrice * 0.2).toFixed(2);

    setTextElementValueById("discount", discountedAmount);
    setTextElementValueById(
      "total",
      (totalPrice - discountedAmount).toFixed(2)
    );

    const p = document.createElement("p");
    error.innerHTML = `                <p class="text-sm text-green-400">Coupon added successfully.</p>
    `;
    error.appendChild(p);
  } else {
    const p = document.createElement("p");
    error.innerHTML = `                <p class="text-sm text-red-400">Coupon is not valid. Try Another.</p>
    `;
    error.appendChild(p);
  }
}
function addCartEntry(name) {
  const count = calculationEntry.childElementCount;

  const p = document.createElement("p");
  p.classList.add("my-4");
  p.classList.add("font-semibold");
  p.innerHTML = `${count}. ${name} `;

  calculationEntry.appendChild(p);
}

function clearTheCart() {
  isCouponAdded = false;
  setTextElementValueById("total-price", 0);
  setTextElementValueById("discount", 0);
  setTextElementValueById("total", 0);
  const coupon = document.getElementById("couponName");
  coupon.classList.add("hidden");
  badge.classList.add("hidden");
  error.innerHTML = ``;
  calculationEntry.innerHTML = `<p id="empty" class="text-red-500 text-xl font-bold">
  Your Cart Is Empty Now.
</p>`;
  disabledButtonHandler(makePurchaseButton, false);
  disabledButtonHandler(couponButton, false);
}
function showMore() {
  const show = document.getElementById("show-more");
  const moreItems = document.getElementById("hidden");
  show.classList.add("hidden");
  moreItems.classList.remove("hidden");
}
