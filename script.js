function mod(n, m) {
  return ((n % m) + m) % m;
}
document.getElementById('fuck').innerText = mod(-new Date().getDay()+6-1, 7) + ' days until Friday!'

