import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/Frequent.js';
// @material-ui/core components

import frequentAskStyle from 'assets/jss/nextjs-material-kit-pro/pages/subscriptionSections/frequentAskStyle.js';
import { makeStyles, Typography } from '@material-ui/core';
import icon from '../../assets/img/icons/check.svg';
import Accordion from '../../components/Accordion/Accordion';
import AddIcon from '@material-ui/icons/Add';
import { grayColor } from '../../assets/jss/nextjs-material-kit-pro';

const useStyles = makeStyles(frequentAskStyle);

export default function SectionPricing({ className = '' }) {
  const [active, setActive] = useState(1);
  const classes = useStyles();

  return (
    <div className={`${classes.wrapper}`}>
      <div className={className}>
        <GridContainer>
          <GridItem>
            <Typography className={classes.heading}>Frequently Asked Qustions</Typography>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <NavPills
            horizontal={{
              tabsGrid: { xs: 12, sm: 3, md: 3 },
              contentGrid: { xs: 12, sm: 9, md: 9 },
            }}
            classes={{
              root: '',
              label: classes.label,
              selected: classes.activeTab,
            }}
            color="dark"
            tabs={[
              {
                tabButton: 'General',
                tabContent: (
                  <div>
                    <Accordion
                      active={0}
                      activeColor="dark"
                      icon={<AddIcon color={grayColor[30]} fontSize={'medium'} />}
                      collapses={[
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                      ]}
                    />
                  </div>
                ),
              },
              {
                tabButton: 'Transactions',
                tabContent: (
                  <div>
                    <Accordion
                      active={0}
                      activeColor="dark"
                      icon={<AddIcon color={grayColor[30]} fontSize={'medium'} />}
                      collapses={[
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                      ]}
                    />
                  </div>
                ),
              },
              {
                tabButton: 'Pricings',
                tabContent: (
                  <div>
                    <Accordion
                      active={0}
                      activeColor="dark"
                      icon={<AddIcon color={grayColor[30]} fontSize={'medium'} />}
                      collapses={[
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                      ]}
                    />
                  </div>
                ),
              },
              {
                tabButton: 'Returns',
                tabContent: (
                  <div>
                    <Accordion
                      active={0}
                      activeColor="dark"
                      icon={<AddIcon color={grayColor[30]} fontSize={'medium'} />}
                      collapses={[
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                      ]}
                    />
                  </div>
                ),
              },
              {
                tabButton: 'Others',
                tabContent: (
                  <div>
                    <Accordion
                      active={0}
                      activeColor="dark"
                      icon={<AddIcon color={grayColor[30]} fontSize={'medium'} />}
                      collapses={[
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                        },
                        {
                          title: 'How can I install/upgrade?',
                          content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et . Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
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
    </div>
  );
}
