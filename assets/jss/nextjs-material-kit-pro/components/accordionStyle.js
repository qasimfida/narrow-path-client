import {
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  blackColor,
} from 'assets/jss/nextjs-material-kit-pro.js';

const accordionStyle = (theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px',
  },
  expansionPanel: {
    boxShadow: 'none',
    padding: '22px 0px',
    backgroundColor: 'transparent',

    borderBottom: '1px solid ' + grayColor[30],

    '&:before': {
      display: 'none !important',
    },
  },
  expansionPanelExpanded: {
    margin: '0 !important',
  },
  expansionPanelSummary: {
    minHeight: 'auto !important',
    // borderBottom: '1px solid ' + grayColor[6],
    padding: '0',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    color: grayColor[30],
  },
  primaryExpansionPanelSummary: {
    '&:hover': {
      color: primaryColor[0],
    },
  },
  secondaryExpansionPanelSummary: {
    '&:hover': {
      color: secondaryColor[0],
    },
  },
  warningExpansionPanelSummary: {
    '&:hover': {
      color: warningColor[0],
    },
  },
  dangerExpansionPanelSummary: {
    '&:hover': {
      color: dangerColor[0],
    },
  },
  successExpansionPanelSummary: {
    '&:hover': {
      color: successColor[0],
    },
  },
  infoExpansionPanelSummary: {
    '&:hover': {
      color: infoColor[0],
    },
  },
  roseExpansionPanelSummary: {
    '&:hover': {
      color: roseColor[0],
    },
  },
  expansionPanelSummaryExpaned: {
    color: '#7B7C7D',
    '& $expansionPanelSummaryExpandIcon': {
      [theme.breakpoints.up('md')]: {
        top: 'auto !important',
      },
      transform: 'rotate(45deg)',
      [theme.breakpoints.down('sm')]: {
        top: '10px !important',
      },
      // some jss/css to make the cards look a bit better on Internet Explorer
      '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
        display: 'inline-block !important',
        top: '10px !important',
      },
    },
  },
  primaryExpansionPanelSummaryExpaned: {
    color: primaryColor[0],
  },
  secondaryExpansionPanelSummaryExpaned: {
    color: secondaryColor[0],
  },
  warningExpansionPanelSummaryExpaned: {
    color: warningColor[0],
  },
  dangerExpansionPanelSummaryExpaned: {
    color: dangerColor[0],
  },
  successExpansionPanelSummaryExpaned: {
    color: successColor[0],
  },
  infoExpansionPanelSummaryExpaned: {
    color: infoColor[0],
  },
  roseExpansionPanelSummaryExpaned: {
    color: roseColor[0],
  },
  darkExpansionPanelSummaryExpaned: {
    // color: roseColor[0],
  },
  expansionPanelSummaryContent: {
    margin: '0 !important',
  },
  expansionPanelSummaryExpandIcon: {
    [theme.breakpoints.up('md')]: {
      top: 'auto !important',
    },
    transform: 'rotate(0deg)',
    color: 'inherit',
    right: '10px',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      top: '10px !important',
    },
    // some jss/css to make the cards look a bit better on Internet Explorer
    '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
      display: 'inline-block !important',
    },
  },
  expansionPanelSummaryExpandIconExpanded: {},
  title: {
    font: 'normal normal bold 18px/22px Roboto',
    marginTop: '0',
    marginBottom: '0',
    color: 'inherit',
    color: blackColor,
  },
  expansionPanelDetails: {
    display: 'block',
    padding: '18px 0 0',
    font: 'normal normal 500 14px/24px Roboto',
    opacity: 0.63,
    color: blackColor,
  },
});

export default accordionStyle;
