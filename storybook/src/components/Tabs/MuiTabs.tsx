import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Completion from "../Completion/Completion";

const MuiTabs = () => {
  const [tabValue, setTabValue] = useState("rncp");

  const adminTabs = [
    {
      id: "enterprise",
      label: (
        <>
          Entreprise <Completion value={0} />
        </>
      ),
    },
    {
      id: "contract",
      label: (
        <>
          Contrat <Completion value={10} />
        </>
      ),
    },
    {
      id: "student",
      label: (
        <>
          Étudiant <Completion value={16} />
        </>
      ),
    },
    {
      id: "price",
      label: (
        <>
          Rémunération <Completion value={2} />
        </>
      ),
    },
    {
      id: "informations",
      label: (
        <>
          Infos CFA <Completion value={0} />
        </>
      ),
    },
  ];
  return (
    <>
      <Tabs
        value={tabValue}
        onChange={(e, val) => {
          const value = val as string;
          setTabValue(value);
        }}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        TabIndicatorProps={{
          children: <span className="MuiTabs-indicatorSpan" />,
        }}
      >
        {adminTabs.map((el) => {
          return (
            <Tab
              iconPosition="start"
              key={el.id}
              label={el.label}
              value={el.id}
              disableRipple
            />
          );
        })}
      </Tabs>
    </>
  );
};

export default MuiTabs;
