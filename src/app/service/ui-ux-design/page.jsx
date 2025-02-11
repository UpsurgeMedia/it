'use client';

import Accordion from "../../ui/Accordion";
import Cta from "../../ui/Cta";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading 
        title='UI/UX Design Services'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='UI-UX-DESIGN'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Crafting Exceptional Digital Experiences' 
          subtitle='UI/UX Design' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='User-Centered Design'
              subtitle='We create intuitive and user-friendly designs that enhance user engagement and satisfaction.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Wireframing & Prototyping'
              subtitle='Our design process includes wireframes and interactive prototypes to visualize the user journey.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Design System & Branding'
              subtitle='We build cohesive design systems and brand identities that ensure consistency across platforms.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
        </Div>
      </Div>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Common Questions About UI/UX Design' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s collaborate and design <br />something <i>extraordinary</i> together' 
          btnText='Book a Free Consultation' 
          btnLink='/contact' 
          bgSrc='/images/uiux_cta_bg.jpeg'
        />
      </Div>
    </>
  );
}