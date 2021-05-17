import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/NavPills.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
// @material-ui/core components

import pricingStyle from 'assets/jss/nextjs-material-kit-pro/pages/pricingSections/pricingStyle.js';
import { makeStyles } from '@material-ui/core';
import icon from '../../assets/img/icons/check.svg';

const useStyles = pricingStyle;

export default function SectionPricing() {
  const [active, setActive] = useState(1);
  const classes = useStyles();

  const plans = [
    {
      title: 'Free',
      price: '0',
      package: '',
      features: [
        'free  Forever',
        'Access to hundreds of places',
        'Filter Serveral Categories',
        'Find places that matches your  interest near you',
        'filter dozens of categories',
        'create one favirotes list',
        'book hotels',
        'Purchase admission tickets',
      ],
    },
    {
      title: 'Occasional Explorer',
      price: '5',
      package: 'per Quater',
      features: [
        '3-Moth Subscription',
        'Access to hundreds of places',
        'Filter Dozens of Categories',
        'Find places that matches your  interest near you',
        'filter Multiple favirote list ',
        'save favirotes filters',
        'generate master iternerary',
        'Generate Route',
        'turn-by-turn navigation',
        'book hotels',
        'purchase admission tickets',
        'bridge and tunnel heights for rVs',
        'Travel resources (fuel, rest areas, charging stations, etc.)',
        ' much more - see features for fill list',
      ],
    },
    {
      title: 'Serious Road Tripper',
      price: '15',
      package: 'per Year',
      features: [
        'Annual Subscription',
        'Access to hundreds of places',
        'Filter Dozens of Categories',
        'Find places that matches your  interest near you',
        'filter Multiple favirote list ',
        'save favirotes filters',
        'generate master iternerary',
        'Generate Route',
        'Route optimization',
        'turn-by-turn navigation',
        'book hotels',
        'purchase admission tickets',
        'bridge and tunnel heights for rVs',
        'Travel resources (fuel, rest areas, charging stations, etc.)',
        ' much more - see features for fill list',
      ],
    },
  ];

  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        {plans.map((plan, i) => (
          <GridItem xs={10} sm={6} md={4} className={classes.dFlex}>
            <Card
              plain
              pricing
              className={classes.card + ' ' + (active === i ? classes.bgPrimary : '')}
            >
              <CardBody pricing className={classes.cardBody}>
                <h6 className={classes.title + ' ' + (active === i ? classes.clrWhite : '')}>
                  {plan.title}
                </h6>
                <hr
                  className={
                    classes.divider +
                    ' ' +
                    (i === 0 ? classes.w60 : '') +
                    ' ' +
                    (i === active ? classes.bgWhite : '')
                  }
                />
                <h1 className={classes.rate + ' ' + (active === i ? classes.clrWhite : '')}>
                  ${plan.price}{' '}
                  <span className={classes.package}>
                    {' '}
                    {plan.title !== 'Free' && '/'} {plan.package}
                  </span>
                </h1>
                <ul className={classes.list}>
                  {plan.features.map((feature) => (
                    <li className={classes.listItem + ' ' + (active === i ? classes.clrWhite : '')}>
                      <img src={icon} className={classes.listIcon} /> <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <Button
                className={classes.button}
                href="#pablo"
                color={active === i ? 'white' : 'primary'}
                round
              >
                Get started
              </Button>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}
