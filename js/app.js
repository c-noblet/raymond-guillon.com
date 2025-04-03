document.addEventListener('DOMContentLoaded', () => {
  const $burger = document.getElementById('burger');
  const $links = document.getElementById('links');
  const $lang = document.getElementById('lang-selector');

  const linksMap = [
    { fr: '/fr/', de: '/de/' },
    { fr: '/fr/contact/', de: '/de/kontakt/' },
    { fr: '/fr/carriere/', de: '/de/werdegang/' },
    { fr: '/fr/droit-civil/', de: '/de/zivilrecht/' },
    { fr: '/fr/droit-penal/', de: '/de/strafrecht/' },
    { fr: '/fr/interpretariat/', de: '/de/verhandlungsdolmetschen/' },
    { fr: '/fr/mentions-legales/', de: '/de/rechtliche-hinweise/' },
    { fr: '/fr/honoraires/', de: '/de/honorare/' },
    { fr: '/fr/traductions-actes/', de: '/de/urkundenubersetzungen/' },
    { fr: '/fr/traductions-juridiques/', de: '/de/beglaubigte-juritische-ubersetzungen/' },
    { fr: '/fr/transcriptions/', de: '/de/transkription/' },
  ]

  $lang.addEventListener('change', () => {
    const selectedLang = $lang.value;
    const currentPath = window.location.pathname;
    const currentLink = linksMap.find(link => link.fr === currentPath || link.de === currentPath);
    const newLink = currentLink[selectedLang];

    if (!newLink) {
      if (selectedLang === 'de') {
        window.location = '/de';
      }
      window.location = '/fr';
    }
    window.location = newLink;
  });

  $burger.addEventListener('click', () => {
    if ($links.style.height === '0px') {
      $links.style.height = '100vh';
      $burger.style.transform = 'rotate(-90deg)';
    } else {
      $links.style.height = '0px';
      $burger.style.transform = 'rotate(0)';
    }
    return;
  });

  return;
});
