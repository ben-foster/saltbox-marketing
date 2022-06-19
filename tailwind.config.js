module.exports = {
  theme: {

    backgroundImage: {
      'footer-texture': "url('../../images/footer-bg.svg')",
      'ppc-bg': "url('../../images/ppc-bg.svg')",
      'home-bg': "url('../../images/home-bg.svg')",
      'seo-bg': "url('../../images/seo-bg.svg')",
      'about-bg': "url('../../images/about-bg.svg')",
      'about-bg-s': "url('../../images/about-box.svg')",
      'careers-bg': "url('../../images/careers-bg.svg')",
      'contact-purple': "url('../../images/contact-purple.svg')",
      'contact-blue': "url('../../images/contact-blue.svg')",
      'blue-violet': "linear-gradient(93.31deg, #002590 0%, #6D00C4 100%)"
    },
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
      },
      colors: {
        violet: {
          100: '#20124D',
          200: '#45007C',
          300: '#6D00C3'
        },
        gray: {
          100: '#EDF2F7',
          150: '#20124C',
          200: '#DDE5EE',
          300: '#B9C9DA',
          400: '#93A8BD',
          500: '#768A9E',
          600: '#5E7387',
          700: '#495C6F',
          800: '#293642',
          900: '#192129',
        },
        teal: {
          100: '#C3FEF6',
          200: '#91FDF2',
          300: '#62F4EA',
          400: '#3CE7E1',
          500: '#1CD4D4',
          600: '#0FB2B8',
          700: '#099AA5',
          800: '#07808D',
          900: '#056270',
        },
        blue: {
          100: '#B3ECFF',
          150: '#2617A2',
          200: '#81DEFD',
          250: '#3B83E4',
          300: '#5BD0FB',
          350: '#201A9E',
          400: '#40C3F7',
          500: '#2CB0ED',
          600: '#1991D2',
          700: '#1280BF',
          800: '#0B68A2',
          900: '#035287',
        },
        purple: {
          100: '#B4B4FD',
          200: '#9E9EFA',
          300: '#8989F5',
          400: '#6F61EF',
          500: '#513EE0',
          600: '#4825D4',
          700: '#391BB1',
          800: '#260D96',
          900: '#180381',
        },
        green: {
          100: '#1DB954'
        }
      },
      margin: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
        '-5': '-1.25rem',
        '-6': '-1.5rem',
        '-8': '-2rem',
        '-10': '-2.5rem',
        '-12': '-3rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-32': '-8rem',
        '-40': '-10rem',
        '-48': '-12rem',
        '-56': '-14rem',
        '-64': '-16rem',
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {
    maxWidth: ['responsive'],
  },
  plugins: []
}
