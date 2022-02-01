const themes = {
  light: {
    colorBackground: '#fafafc',
    colorBackgroundDarker: '#282a36',
    colorBackgroundCard: '#FFF',
    colorMenuTopBackground: '#f4f4fa',
    colorMenuTopBorder: '#0000001a',
    colorTextPrimary: '#18153a',
    colorTextSecondary: '#f2eff5',
    colorTextPrimaryLight: '#FFF',
    colorTitlePrimary: '#18153a',
    colorIconPrimary: '#242055',
    colorBackgroundButton: '#2b2730',
    colorBlockquote: '#231e50',
    colorIconBasePrimary: '#43334d',
    colorIconBaseSecondary: '#574464',
    colorBorderPrimary: '#312d369a',
    colorSeparateBorder: '#0000001a',
    colorScrollbarLighter: '#c2c1c4',
    colorScrollbarDarker: '#9d96a3',
    colorLinkPrimary: '#2b1f55',
    colorLinkSecondary: '#673db6',
    colorBackgroundLinkButton: '#7340c418',
    colorSlickDots: '#000'
  },

  dark: {
    colorBackground: '#20202c',
    colorBackgroundDarker: '#2e2e3f',
    colorBackgroundCard: '#FFF',
    colorMenuTopBackground: '#272736',
    colorMenuTopBorder: '#c9cad30d',
    colorTextPrimary: '#dbdaec',
    colorTextSecondary: '#f2eff5',
    colorTextPrimaryLight: '#FFF',
    colorTitlePrimary: '#f9f9fc',
    colorIconPrimary: '#242055',
    colorBackgroundButton: '#2b2730',
    colorBlockquote: '#231e50',
    colorIconBasePrimary: '#d7d6e7',
    colorIconBaseSecondary: '#cac9da',
    colorBorderPrimary: '#312d369a',
    colorSeparateBorder: '#dad6eb1a',
    colorScrollbarLighter: '#404052',
    colorScrollbarDarker: '#4c4c5e',
    colorLinkPrimary: '#609cf7',
    colorLinkSecondary: '#4a8ae9',
    colorBackgroundLinkButton: '#7340c418',
    colorSlickDots: '#FFF'
  }
}

const toggleThemeButton = document.querySelector('#theme-mode-button');
const toggleThemeCheckbox = document.querySelector('.toggle-theme-checkbox');

toggleThemeButton.addEventListener('click', () => {
  if (toggleThemeCheckbox.checked) {
    toggleThemeCheckbox.checked = false;
    localStorage.setItem('Theme', 'light');
  } else {
    toggleThemeCheckbox.checked = true;
    localStorage.setItem('Theme', 'dark');
  }
  
  setTheme(localStorage.Theme);
});

if (localStorage.Theme === undefined) localStorage.setItem('Theme', 'light');
setTheme(localStorage.Theme);
localStorage.Theme === 'dark' ? toggleThemeCheckbox.checked = true : toggleThemeCheckbox.checked = false;

function setTheme(newTheme) {
  const themeColors = themes[newTheme];

  Object.keys(themeColors).map((key) => {
      document.querySelector('html').style.setProperty(`--${key}`, themeColors[key]);
  });

  const toggleThemeButtonIcon = document.querySelector('#theme-mode-button i');
  const themeTooltip = document.querySelector('.theme-tooltip');

  if (newTheme === 'dark') {
    toggleThemeButtonIcon.setAttribute('class', 'far fa-sun');
    themeTooltip.innerHTML = 'Modo Claro';
  } else {
    toggleThemeButtonIcon.setAttribute('class', 'fa fa-sun');
    themeTooltip.innerHTML = 'Modo Escuro';
  }
}
