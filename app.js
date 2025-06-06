const mainVideo = document.querySelector('.current-video');
const preview = document.querySelector('.next-video');
const previewMask = document.querySelector('.next-preview-mask');

const movielist = [
  'video/hero-1.mp4',
  'video/hero-2.mp4',
  'video/hero-3.mp4',
  'video/hero-4.mp4'
];

let index = 0;
let nextIndex = 1;

previewMask.addEventListener('click', () => {
  mainVideo.src = movielist[index];
  mainVideo.load();

  mainVideo.addEventListener('canplay', function handlePlayOnce() {
    mainVideo.play();
    mainVideo.removeEventListener('canplay', handlePlayOnce);
  });

  // Preload next video
  preview.src = movielist[nextIndex];
  preview.currentTime = 0;
  preview.load();
  preview.pause();

  index = nextIndex;
  nextIndex = (nextIndex + 1) % movielist.length;
});


const cards = document.querySelectorAll('.info-cards .card');
cards.forEach((card, index) => {
  const video = card.querySelector('video');
  
  // For the last card (index 5 if total 6 cards), do nothing — video plays autoplay by itself
  if (index === cards.length - 1) {
    return; // skip hover events for last card
  }

  if (video) {
    card.addEventListener('mouseenter', () => {
      video.play();
    });
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  }
});

