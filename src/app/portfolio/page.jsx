"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Div from "../ui/Div";
import Portfolio from "../ui/Portfolio/Portfolio2";

const portfolioData = [
  {
    title: "Articult",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/articult.PNG",
    category: "web_development",
    btnLink: "/articult",
    btnText: "View Project",
  },
  {
    title: "Dopethreads",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/dopethreads.PNG",
    category: "web_development",
    btnLink: "/dopethreads",
    btnText: "View Project",
  },
  {
    title: "Kicks & Co",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/kicksco.png",
    category: "web_development",
    btnLink: "/kicksandco",
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
      <Div className="row gy-4"> {/* ✅ Added gy-4 for better spacing on mobile */}
        {portfolioData.slice(0, itemShow).map((item, index) => (
          <Div
            className={`col-12 col-sm-6 col-md-4 ${active === "all" ? "" : active !== item.category ? "d-none" : ""}`}
            key={index}
          >
            <Portfolio
              title={item.title}
              imageUrl={item.src}
              category={item.category}
              variant="cs-style1 cs-type1"
            />
          </Div>
        ))}
      </Div>

      <Div className="text-center mt-4">
        {portfolioData.length > itemShow && (
          <span className="cs-text_btn" onClick={() => setItemShow(itemShow + 3)}>
            <span>Load More</span>
            <Icon icon="bi:arrow-right" />
          </span>
        )}
      </Div>
    </Div>
  );
}
