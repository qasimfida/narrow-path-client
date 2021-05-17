import { container, main, whiteColor, mrAuto, mlAuto } from 'assets/jss/nextjs-material-kit-pro.js';

const subscriptionStyle = {
  main,
  mrAuto,
  mlAuto,
  wrapper: {
    height: '416px',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: 90,
  },
  container: {
    ...container,
    zIndex: 1,
  },
  title: {
    font: 'normal normal 900 36px/35px Montserrat',
    letterSpacing: '0px',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    '&, & + h4': {
      color: whiteColor,
    },
  },
  textCenter: {
    textAlign: 'center',
  },
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto',
  },
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
  left: {
    float: 'left!important',
    display: 'block',
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right',
  },
  icon: {
    width: '18px',
    height: '18px',
    top: '3px',
    position: 'relative',
  },
};

export default subscriptionStyle;
