"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Div from "../ui/Div";
import Portfolio from "../ui/Portfolio/Portfolio2";
import SectionHeading from "../ui/SectionHeading";
import Spacing from "../ui/Spacing";

const portfolioData = [
  {
    title: "Articult",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/articult.PNG",
    category: "web_development",
    btnLink: "/articult",
    link: "https://articult.in/",
    btnText: "View Project",
  },
  {
    title: "Dopethreads",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/dopethreads.PNG",
    category: "web_development",
    link: "https://dopethreads.in/",
    btnLink: "/dopethreads",
    btnText: "View Project",
  },
  {
    title: "Kicks & Co",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/kicksco.png",
    category: "web_development",
    btnLink: "/kicksandco",
    link: "https://www.kicksandco.in/",
    btnText: "View Project",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(7);

  return (
    <Div className="container">
      <Div className="cs-portfolio_1_heading">
        <Div className="cs-filter_menu cs-style1"></Div>
      </Div>
      <Spacing lg="90" md="45" />
      <Div className="col-xl-4 text-center w-100">
        <SectionHeading title="Explore our work" subtitle="Our Portfolio" />
        <Spacing lg="90" md="45" />
      </Div>
      <Div className="row gy-4">
        {portfolioData.slice(0, itemShow).map((item, index) => (
          <Div
            className={`col-12 col-sm-6 col-md-4 ${
              active === "all" ? "" : active !== item.category ? "d-none" : ""
            }`}
            key={index}
          >
            <Portfolio
              title={item.title}
              imageUrl={item.src}
              link={item.link}
              category={item.category}
              variant="cs-style1 cs-type1"
            />
          </Div>
        ))}
      </Div>

      <Div className="text-center mt-4">
        {portfolioData.length > itemShow && (
          <span
            className="cs-text_btn"
            onClick={() => setItemShow(itemShow + 3)}
          >
            <span>Load More</span>
            <Icon icon="bi:arrow-right" />
          </span>
        )}
      </Div>
    </Div>
  );
}
