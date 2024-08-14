import React from "react";
import { FooterCategoryData } from "./__fixtures___";
import { FooterLinks } from "./FooterLinks";

export const FooterCategory = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {FooterCategoryData.map((catergory, index) => {
        return (
          <FooterLinks
            category={catergory.name}
            links={catergory.links}
            key={index}
          />
        );
      })}
    </div>
  );
};
