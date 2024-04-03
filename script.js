var tl = gsap.timeline();

tl.from("nav .logo", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
});
tl.from("nav ul li", {
  y: 100,
  duration: 1,
  opacity: 0,
  rotate: 180,
  stagger: 0.4,
});
tl.from("nav .buttons", {
  x: 100,
  duration: 1,
  opacity: 0,
});

tl.from(".main h1", {
  y: 200,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});

tl.from(".main>img", {
  scale: 0,
  opacity: 0,
  stagger: 0.4,
  duration: 1,
});

tl.from(".main>h5", {
  scale: 0,
  opacity: 0,
  duration: 2,
});

tl.to("h5", {
  y: 30,
  repeat: -1,
  duration: 0.5,
  yoyo: true,
});
