import Link from "next/link";
import { useState } from "react";
import Div from "../Div";

export default function Portfolio2({
  title,
  subtitle,
  btnText,
  btnLink,
  imageUrl,
  link,
  category,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Div className="cs-portfolio cs-style2">
      <Div />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-lg-12">
            <Div>
              <Div>
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded w-full h-full"
                />
              </Div>
              <Link href={link} target="_blank" rel="noopener noreferrer"><h3 className="cs-portflio_imgitle mt-3">{title}</h3></Link>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
