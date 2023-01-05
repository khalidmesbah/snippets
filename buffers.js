function buffers() {
  const a = Buffer.allocUnsafe(10);
  a[0] = 1;
  a[1] = 2;
  a[2] = 5;
  a[3] = 2;
  a[4] = 100;
  console.log(a);
  const b = a.slice(2);
  b[0] = 6;
  console.log(a);
}
buffers();
