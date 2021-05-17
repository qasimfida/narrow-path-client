import { makeStyles } from '@material-ui/core';
import {
  mrAuto,
  mlAuto,
  cardTitle,
  whiteColor,
  infoColor,
  hexToRgb,
} from 'assets/jss/nextjs-material-kit-pro.js';

const pricingStyle = makeStyles(() => ({
  mrAuto,
  mlAuto,
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + ' !important',
    '& small': {
      color: 'rgba(' + hexToRgb(whiteColor) + ',0.8)!important',
    },
  },
  dFlex: {
    display: 'flex',
  },
  textCenter: {
    textAlign: 'center',
  },
  pricingSection: {
    padding: '80px 0px',
  },
  textInfo: {
    color: infoColor[0] + ' !important',
  },
  card: {
    border: '1px solid #707070',
    borderRadius: '0px 50px',
    padding: '52px 40px',
    marginTop: '12px',
  },
  cardBody: {
    padding: '0 !important',
  },
  listItem: {
    font: 'normal normal bold 14px/20px Roboto',
    letterSpacing: '0px',
    color: '#000000 !important',
    textTransform: 'capitalize',
    textAlign: 'left !important',
    display: 'flex',
    padding: '12px 0 !important',
    borderBottom: 'none !important',
  },
  list: {
    textAlign: 'left',
    margin: '0 0 40px 0 !important',
    maxWidth: 'auto',
  },
  listIcon: {
    marginRight: '16px',
    height: '14px',
    width: '14px',
  },
  title: {
    font: ' normal normal 900 22px/26px Roboto',
    letterSpacing: '0px',
    color: '#000000',
    textAlign: 'left',
    marginBotton: '8px',
    display: 'flex',
    '& span': {
      marginLeft: '8px',
    },
  },
  rate: {
    font: 'normal normal 900 40px/40px Roboto',
    letterSpacing: '0px',
    color: '#0F0F0F',
    textAlign: 'left',
    margin: '0 0 36px 0 !important',
  },
  package: {
    font: 'normal normal 500 14px/40px Roboto',
    letterSpacing: '0px',
    textAlign: 'left',
    opacity: 0.71,
  },
  button: {
    boxShadow: ' 0px 3px 6px #00000029',
    borderRadius: '24px',
    font: 'normal normal bold 14px/17px Roboto',
    letterSpacing: '0.03px',
    width: '100%',
    maxWidth: '218px',
    height: '48px',
  },
  divider: {
    width: '154px',
    height: '5px',
    backgroundColor: '#6E00E3',
    marginLeft: 0,
    marginBottom: '20px',
  },
  w60: {
    width: '60px',
  },
  bgWhite: {
    backgroundColor: '#fff !important',
  },
  bgPrimary: {
    backgroundColor: '#6E00E3 !important',
  },
  clrPrimary: {
    color: '#6E00E3 !important',
  },
  clrWhite: {
    color: '#fff !important',
  },
}));

export default pricingStyle;
