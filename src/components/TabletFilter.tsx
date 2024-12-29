import React from "react";
import { Section, NotMobileFilter, FilterText } from "./TabletFilterStyles";

const TabletFilter: React.FC = () => {
  return (
    <>
      <Section>
        <NotMobileFilter>
          <FilterText style={{ opacity: 0.5, marginLeft: "2rem" }}>
            {" "}
            01
          </FilterText>
          <FilterText>OVERVIEW</FilterText>
        </NotMobileFilter>
        <NotMobileFilter>
          <FilterText style={{ opacity: 0.5, marginLeft: "2rem" }}>
            {" "}
            02
          </FilterText>
          <FilterText>INTERNAL STRUCTURE</FilterText>
        </NotMobileFilter>
        <NotMobileFilter>
          <FilterText style={{ opacity: 0.5, marginLeft: "2rem" }}>
            {" "}
            03
          </FilterText>
          <FilterText>SURFACE GEOLOGY</FilterText>
        </NotMobileFilter>
      </Section>
    </>
  );
};

export default TabletFilter;
