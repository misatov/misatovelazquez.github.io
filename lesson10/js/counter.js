var n = localStorage.getItem('on_load_counter');

if (n === null) {
  n = " ";
}
n++;

localStorage.setItem("on_load_counter", n);

document.querySelector('.counter-item').textContent = n;