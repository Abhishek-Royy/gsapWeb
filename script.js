gsap.from("nav .logo", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
});
gsap.from("nav ul li:nth-child(1)", {
  y: 100,
  duration: 1,
  delay: 0.4,
  opacity: 0,
  rotate: 180,
});
gsap.from("nav ul li:nth-child(2)", {
  y: -100,
  duration: 1,
  delay: 0.4,
  opacity: 0,
  rotate: 180,
});
gsap.from("nav ul li:nth-child(3)", {
  y: 100,
  duration: 1,
  delay: 0.4,
  opacity: 0,
  rotate: 180,
});
gsap.from("nav .buttons", {
  x: 100,
  duration: 1,
  delay: 1,
  opacity: 0,
});
