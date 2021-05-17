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
import Accordion from '../../components/Accordion/Accordion';

const useStyles = pricingStyle;

export default function SectionPricing({ className = '' }) {
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
    <div className={` ${className} ${classes.wrapper}`}>
      <GridContainer>
        <GridItem>
          <h2>Frequently Asked Qustions</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <NavPills
          horizontal={{
            tabsGrid: { xs: 12, sm: 3, md: 3 },
            contentGrid: { xs: 12, sm: 9, md: 9 },
          }}
          classes={{
            root: 'asdf',
            label: classes.label,
            selected: classes.activeTab,
          }}
          color="dark"
          tabs={[
            {
              tabButton: 'Profile',
              tabContent: (
                <div>
                  <Accordion
                    active={0}
                    activeColor="rose"
                    icon="+"
                    collapses={[
                      {
                        title: 'Collapsible group Item #1',
                        content:
                          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
                      },
                      {
                        title: 'Collapsible group Item #2',
                        content:
                          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
                      },
                      {
                        title: 'Collapsible group Item #3',
                        content:
                          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
                      },
                    ]}
                  />
                </div>
              ),
            },
            {
              tabButton: 'Profile',
              tabContent: (
                <div>
                  <Accordion
                    active={0}
                    activeColor="rose"
                    icon="+"
                    collapses={[
                      {
                        title: 'Collapsible group Item #1',
                        content:
                          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
                      },
                      {
                        title: 'Collapsible group Item #2',
                        content:
                          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
                      },
                      {
                        title: 'Collapsible group Item #3',
                        content:
                          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
                      },
                    ]}
                  />
                </div>
              ),
            },
          ]}
        />
      </GridContainer>
    </div>
  );
}
