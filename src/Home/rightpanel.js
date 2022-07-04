import { Grid } from "@mui/material";
import { Typography } from "antd";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import RecommendedImg from "../assets/images/recommendedimage.jpeg";
import RecommendedImg1 from "../assets/images/recommendedimage1.jpg";
import MostPopularimg from "../assets/images/mostpopularimg.jpeg";
import MostPopularimg1 from "../assets/images/mostpopularimg1.jpg";
import MostPopularimg2 from "../assets/images/mostpopularimg2.jpg";

import Loadmore3 from "../assets/images/loadmore3.jpg";
import Loadmore4 from "../assets/images/loadmore4.jpg";
import Loadmore5 from "../assets/images/loadmore5.jpg";
import "../App.css";
import { FaRegComment } from "react-icons/fa";

const Rightpanel = () => {
  return (
    <>
      <div className="recommendedcontainer">
        <div className="title">
          <Typography style={{ paddingBottom: 15 }}>Recommended</Typography>
        </div>
        <div style={{ marginBottom: 25 }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <img src={RecommendedImg} alt="recommendedimage" />
            </Grid>
            <Grid item xs className="text">
              <Typography style={{ marginBottom: 5 }}>
                Fire breaks out from gas cylinder in Marayur: Family of three
                miraculously escapes
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  november 19, 2021
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <img src={RecommendedImg1} alt="recommendedimage1" />
            </Grid>
            <Grid item xs className="text">
              <Typography style={{ marginBottom: 5 }}>
                Edavapathi – Omana Krishnapilla
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  november 11, 2021
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="addiv" />{" "}
      <div className="recommendedcontainer">
        <div className="title">
          <Typography style={{ paddingBottom: 15 }}>Most Popular</Typography>
        </div>
        <div style={{ marginBottom: 25 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} className="featuredstorynews">
              <img src={MostPopularimg} alt="recommendedimage" height={180} />
              <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
                latest news
              </Typography>
            </Grid>
            <Grid item xs={12} className="text">
              <Typography style={{ marginBottom: 5 }}>
                Bike riding: Newgen riders sentenced to two days of 'community
                service'
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  june 29, 2022
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={{ marginBottom: 25 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} className="featuredstorynews">
              <img src={MostPopularimg1} alt="recommendedimage" height={180} />
              <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
                latest news
              </Typography>
            </Grid>
            <Grid item xs={12} className="text">
              <Typography style={{ marginBottom: 5 }}>
                The accused escaped by overturning an autorickshaw in cinema
                style at Kumily Attappallam
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  june 29, 2022
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} className="featuredstorynews">
              <img src={MostPopularimg2} alt="recommendedimage" height={180} />
              <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
                idukki
              </Typography>
            </Grid>
            <Grid item xs={12} className="text">
              <Typography style={{ marginBottom: 5 }}>
                No water but billed: Methotti residents are confused
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  june 29, 2022
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="addiv" />
      <div className="title">
        <Typography style={{ paddingBottom: 15 }}>Science</Typography>
      </div>
      <Grid container style={{ marginBottom: 30 }}>
        <Grid item xs>
          <div className="featuredstorynews">
            <img src={Loadmore4} alt="recommendedimage" height={180} />
            <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
              Latest news
            </Typography>
          </div>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 16, marginTop: 15, marginBottom: 5 }}
          >
            Another tiger attack in Munnar's plantation area: Cow died
          </Typography>
          <Typography className="featuredmiddletext">
            by&nbsp;
            <span
              style={{
                color: "#f70d28",
                fontWeight: 900,
                textShadow: "0 0 #f70d28",
              }}
            >
              kolumban&nbsp;online
            </span>
            &nbsp;
            <AiOutlineClockCircle
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;june&nbsp;25,&nbsp;2020&nbsp;
            <FaRegComment
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;<span style={{ fontWeight: 900 }}>0</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: 30 }}>
        <Grid item xs>
          <div className="featuredstorynews">
            <img src={Loadmore3} alt="recommendedimage" height={180} />
            <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
              Latest news
            </Typography>
          </div>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 16, marginTop: 15, marginBottom: 5 }}
          >
            Another tiger attack in Munnar's plantation area: Cow died
          </Typography>
          <Typography className="featuredmiddletext">
            by&nbsp;
            <span
              style={{
                color: "#f70d28",
                fontWeight: 900,
                textShadow: "0 0 #f70d28",
              }}
            >
              kolumban&nbsp;online
            </span>
            &nbsp;
            <AiOutlineClockCircle
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;june&nbsp;25,&nbsp;2020&nbsp;
            <FaRegComment
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;<span style={{ fontWeight: 900 }}>0</span>
          </Typography>
        </Grid>
      </Grid>{" "}
      <div className="title" style={{ marginTop: 40 }}>
        <Typography style={{ paddingBottom: 15 }}>Sports</Typography>
      </div>
      <Grid container style={{ margin: "20px 0" }}>
        <Grid
          container
          spacing={2}
          style={{ marginBottom: 25 }}
          className="loadmorecontainer"
        >
          <Grid item xs={5}>
            <img src={Loadmore5} alt="recommendedimage" />
          </Grid>
          <Grid item xs className="text">
            <Typography style={{ marginBottom: 5 }}>
              Fire breaks out from gas cylinder in Marayur: Family of three
              miraculously escapes
            </Typography>
            <div className="bottomtext">
              <AiOutlineClockCircle
                style={{
                  color: "#2e9fff",
                  textShadow: "0 0 #2e9fff",
                  fontWeight: "bolder",
                }}
              />
              <Typography style={{ paddingLeft: 5 }}>
                november 19, 2021
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container style={{ margin: "20px 0" }}>
        <Grid
          container
          spacing={2}
          style={{ marginBottom: 25 }}
          className="loadmorecontainer"
        >
          <Grid item xs={5}>
            <img src={Loadmore5} alt="recommendedimage" />
          </Grid>
          <Grid item xs className="text">
            <Typography style={{ marginBottom: 5 }}>
              Fire breaks out from gas cylinder in Marayur: Family of three
              miraculously escapes
            </Typography>
            <div className="bottomtext">
              <AiOutlineClockCircle
                style={{
                  color: "#2e9fff",
                  textShadow: "0 0 #2e9fff",
                  fontWeight: "bolder",
                }}
              />
              <Typography style={{ paddingLeft: 5 }}>
                november 19, 2021
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container style={{ margin: "20px 0" }}>
        <Grid
          container
          spacing={2}
          style={{ marginBottom: 25 }}
          className="loadmorecontainer"
        >
          <Grid item xs={5}>
            <img src={Loadmore5} alt="recommendedimage" />
          </Grid>
          <Grid item xs className="text">
            <Typography style={{ marginBottom: 5 }}>
              Fire breaks out from gas cylinder in Marayur: Family of three
              miraculously escapes
            </Typography>
            <div className="bottomtext">
              <AiOutlineClockCircle
                style={{
                  color: "#2e9fff",
                  textShadow: "0 0 #2e9fff",
                  fontWeight: "bolder",
                }}
              />
              <Typography style={{ paddingLeft: 5 }}>
                november 19, 2021
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container style={{ margin: "20px 0" }}>
        <Grid
          container
          spacing={2}
          style={{ marginBottom: 25 }}
          className="loadmorecontainer"
        >
          <Grid item xs={5}>
            <img src={Loadmore5} alt="recommendedimage" />
          </Grid>
          <Grid item xs className="text">
            <Typography style={{ marginBottom: 5 }}>
              Fire breaks out from gas cylinder in Marayur: Family of three
              miraculously escapes
            </Typography>
            <div className="bottomtext">
              <AiOutlineClockCircle
                style={{
                  color: "#2e9fff",
                  textShadow: "0 0 #2e9fff",
                  fontWeight: "bolder",
                }}
              />
              <Typography style={{ paddingLeft: 5 }}>
                november 19, 2021
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div
        className="addiv"
        style={{ height: 600, background: "#f5f5f5", margin: "0 20px" }}
      />
      <div className="title" style={{ marginTop: 40 }}>
        <Typography style={{ paddingBottom: 15 }}>Entertainment</Typography>
      </div>
      <Grid container style={{ marginBottom: 30 }}>
        <Grid item xs>
          <div className="featuredstorynews">
            <img src={Loadmore4} alt="recommendedimage" height={180} />
            <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
              Latest news
            </Typography>
          </div>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 16, marginTop: 15, marginBottom: 5 }}
          >
            Another tiger attack in Munnar's plantation area: Cow died
          </Typography>
          <Typography className="featuredmiddletext">
            by&nbsp;
            <span
              style={{
                color: "#f70d28",
                fontWeight: 900,
                textShadow: "0 0 #f70d28",
              }}
            >
              kolumban&nbsp;online
            </span>
            &nbsp;
            <AiOutlineClockCircle
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;june&nbsp;25,&nbsp;2020&nbsp;
            <FaRegComment
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;<span style={{ fontWeight: 900 }}>0</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: 30 }}>
        <Grid item xs>
          <div className="featuredstorynews">
            <img src={Loadmore3} alt="recommendedimage" height={180} />
            <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
              Latest news
            </Typography>
          </div>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 16, marginTop: 15, marginBottom: 5 }}
          >
            Another tiger attack in Munnar's plantation area: Cow died
          </Typography>
          <Typography className="featuredmiddletext">
            by&nbsp;
            <span
              style={{
                color: "#f70d28",
                fontWeight: 900,
                textShadow: "0 0 #f70d28",
              }}
            >
              kolumban&nbsp;online
            </span>
            &nbsp;
            <AiOutlineClockCircle
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;june&nbsp;25,&nbsp;2020&nbsp;
            <FaRegComment
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;<span style={{ fontWeight: 900 }}>0</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: 30 }}>
        <Grid item xs>
          <div className="featuredstorynews">
            <img src={Loadmore3} alt="recommendedimage" height={180} />
            <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
              Latest news
            </Typography>
          </div>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 16, marginTop: 15, marginBottom: 5 }}
          >
            Another tiger attack in Munnar's plantation area: Cow died
          </Typography>
          <Typography className="featuredmiddletext">
            by&nbsp;
            <span
              style={{
                color: "#f70d28",
                fontWeight: 900,
                textShadow: "0 0 #f70d28",
              }}
            >
              kolumban&nbsp;online
            </span>
            &nbsp;
            <AiOutlineClockCircle
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;june&nbsp;25,&nbsp;2020&nbsp;
            <FaRegComment
              style={{
                color: "#2e9fff",
                textShadow: "0 0 #2e9fff",
              }}
            />
            &nbsp;<span style={{ fontWeight: 900 }}>0</span>
          </Typography>
        </Grid>
      </Grid>
      <div style={{ height: 200, marginBottom: 30 }} />
      <div className="recommendedcontainer">
        <div className="title">
          <Typography style={{ paddingBottom: 15 }}>Recommended</Typography>
        </div>
        <div style={{ marginBottom: 25 }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <img src={RecommendedImg} alt="recommendedimage" />
            </Grid>
            <Grid item xs className="text">
              <Typography style={{ marginBottom: 5 }}>
                Fire breaks out from gas cylinder in Marayur: Family of three
                miraculously escapes
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  november 19, 2021
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <img src={RecommendedImg1} alt="recommendedimage1" />
            </Grid>
            <Grid item xs className="text">
              <Typography style={{ marginBottom: 5 }}>
                Edavapathi – Omana Krishnapilla
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  november 11, 2021
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="addiv" />
      <div className="recommendedcontainer">
        <div className="title">
          <Typography style={{ paddingBottom: 15 }}>Most Popular</Typography>
        </div>
        <div style={{ marginBottom: 25 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} className="featuredstorynews">
              <img src={MostPopularimg} alt="recommendedimage" height={180} />
              <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
                latest news
              </Typography>
            </Grid>
            <Grid item xs={12} className="text">
              <Typography style={{ marginBottom: 5 }}>
                Bike riding: Newgen riders sentenced to two days of 'community
                service'
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  june 29, 2022
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={{ marginBottom: 25 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} className="featuredstorynews">
              <img src={MostPopularimg1} alt="recommendedimage" height={180} />
              <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
                latest news
              </Typography>
            </Grid>
            <Grid item xs={12} className="text">
              <Typography style={{ marginBottom: 5 }}>
                The accused escaped by overturning an autorickshaw in cinema
                style at Kumily Attappallam
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  june 29, 2022
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} className="featuredstorynews">
              <img src={MostPopularimg2} alt="recommendedimage" height={180} />
              <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
                idukki
              </Typography>
            </Grid>
            <Grid item xs={12} className="text">
              <Typography style={{ marginBottom: 5 }}>
                No water but billed: Methotti residents are confused
              </Typography>
              <div className="bottomtext">
                <AiOutlineClockCircle
                  style={{
                    color: "#2e9fff",
                    textShadow: "0 0 #2e9fff",
                    fontWeight: "bolder",
                  }}
                />
                <Typography style={{ paddingLeft: 5 }}>
                  june 29, 2022
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Rightpanel;
