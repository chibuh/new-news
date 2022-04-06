import * as React from "react";
import "./NewsPage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img from "../../assets/Ch4.png";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const ActionAreaCard = (props) => {
  console.log(props.title);
  return (
    <div className="ExploreNewsCard">
      <Card sx={{ minWidth: 200, maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.image_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

let itemList = [];

export default function NewsPage() {
  const apiKey = "pub_627699c02880394a23fc0a1c7f1b39bffa58";
  const [value, setValue] = React.useState("top");
  let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${value}&language=en`;
  const [tableData, setTableData] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    // itemList.push(<ActionAreaCard />);
    const loadData = async () => {
      await fetch(url)
        .then((response) => response.text())
        .then((result) => {
          itemList = [];
          setTableData(JSON.parse(result));
          Update();
        })
        .catch((error) => console.log("error", error));
    };

    const timer = setTimeout(() => {
      loadData();
    }, 10);
  }, [value]);

  function Update() {
    if (tableData) {
      tableData.results.forEach((item, index) => {
        if (index > 50) {
        } else if (item.image_url) {
          if (item.content) {
            itemList.push(
              <ActionAreaCard
                title={item.title.slice(0, 20)}
                image_url={item.image_url}
                content={item.content.slice(0, 50)}
              />
            );
          } else {
            itemList.push(
              <ActionAreaCard
                title={item.title.slice(0, 20)}
                image_url={item.image_url}
                content={item.content}
              />
            );
          }
        } else {
          if (item.content) {
            itemList.push(
              <ActionAreaCard
                title={item.title.slice(0, 20)}
                image_url={img}
                content={item.content.slice(0, 50)}
              />
            );
          } else {
            itemList.push(
              <ActionAreaCard
                title={item.title.slice(0, 20)}
                image_url={img}
                content={item.content}
              />
            );
          }
        }
      });

      console.log(tableData.totalResults, tableData.status);
      console.log(itemList);
    }
  }

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="scrollable auto tabs example"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab value="top" label="top" />
            <Tab value="sports" label="sports" />
            <Tab value="entertainment" label="entertainment" />
            <Tab value="business" label="business" />
            <Tab value="food" label="food" />
          </Tabs>
        </Box>

        <div className="NewsMiddleWrap" id="newsTrial">
          {itemList}
        </div>
      </TabContext>
    </>
  );
}
