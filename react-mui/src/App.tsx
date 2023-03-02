import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import CloseIcon from '@mui/icons-material/Cancel';

interface ITabs {
  tab: string[];
}

export default function BasicTable(props: ITabs) {
  const tabList = props.tab;
  const [bits , setBits] = React.useState(tabList.map((tab) => false));

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {tabList.map((tabName, index) => (
            <Tab
              label={tabName}
              key={index}
              iconPosition="end"
              icon={bits[index] == true ? <CloseIcon/> : ""}
              onMouseEnter={() => { 
                setBits(bits.map((item , i) => {
                  if (i === index) {
                    return true;
                  }
                  return false;
                }));
                console.log(index);
              }}
              onMouseLeave={() => {
                setBits(
                  bits.map((item,i) => {
                    return false;
                  })
                )
                console.log("on mouseover" + index);
              }}
            ></Tab>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
