import React from "react";
import styled from "./Home.module.css";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import Daylist from "./Daylist";
import Weeklist from "./Weeklist";
import Monthlist from "./Monthlist";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ padding: 0 }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{ style: { background: "tomato" } }}
        >
          <Tab
            label={
              <span
                className={value === 0 ? styled.activeTab : styled.custamizeTab}
              >
                {""}day
              </span>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <span
                className={value === 1 ? styled.activeTab : styled.custamizeTab}
              >
                {""}week
              </span>
            }
            {...a11yProps(1)}
          ></Tab>
          <Tab
            label={
              <span
                className={value === 2 ? styled.activeTab : styled.custamizeTab}
              >
                {""}month
              </span>
            }
            {...a11yProps(2)}
          ></Tab>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Daylist />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Weeklist />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Monthlist />
      </TabPanel>
    </Box>
  );
}

export default Home;
