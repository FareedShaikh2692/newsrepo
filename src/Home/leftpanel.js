import { Grid } from "@mui/material";
import { Typography, Button } from "antd";
import React, { useState } from "react";
import {
  AiTwotoneThunderbolt,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NewsImage from "../assets/images/newsimage.jpg";
import NewsImage1 from "../assets/images/newsimage1.jpg";
import NewsImage2 from "../assets/images/newsimage5.jpg";
import NewsImage3 from "../assets/images/newsimage4.jpg";
import NewsImage4 from "../assets/images/newsimage3.jpg";
import NewsImage5 from "../assets/images/newsimage2.jpg";
import Loadmore from "../assets/images/loadmore.jpg";
import Loadmore1 from "../assets/images/loadmore1.jpg";
import Loadmore2 from "../assets/images/loadmore2.jpg";
import Loadmore3 from "../assets/images/loadmore3.jpg";
import Loadmore4 from "../assets/images/loadmore4.jpg";
import Loadmore5 from "../assets/images/loadmore5.jpg";
import "../App.css";
import { useNavigate } from "react-router-dom";
const Leftpanel = () => {
  const [currentslide, setcurrentslide] = useState(0);
  const [currentnewsslide, setcurrentnewsslide] = useState(0);
  const [loadmorevalue, setloadmorevalue] = useState(3);
  const [loader, setloader] = useState(false);
  const [tabval, settabval] = useState("all");
  const navigate = useNavigate();
  const updatecurrentslide = (index) => {
    if (currentslide !== index) {
      setcurrentslide(index);
    }
  };
  const updatecurrentnewsslide = (index) => {
    if (currentnewsslide !== index) {
      setcurrentnewsslide(index);
    }
  };
  var loadmoredata = [
    {
      imgsrc: Loadmore,
      floatingtext: "latest news",
      description:
        "Asylum case: Sister Sefi and Fr. Thomas Kottur was also released",
      date: "june 25, 2022",
    },
    {
      imgsrc: Loadmore1,
      floatingtext: "latest news",
      description:
        "Kattappana resident arrested for trying to set fire to his wife and 2 daughters",
      date: "june 25, 2022",
    },
    {
      imgsrc: Loadmore2,
      floatingtext: "idukki",
      description:
        "Department of Motor Vehicles with 'Operation Race' to catch racers",
      date: "june 25, 2022",
    },
    {
      imgsrc: Loadmore3,
      floatingtext: "entertainment",
      description: `A bamboo stick and 100 ml of kerosene: Katana "Pampa" will cross - Kunjumon Chettan is a local star`,
      date: "june 24, 2022",
    },
    {
      imgsrc: Loadmore4,
      floatingtext: "latest news",
      description: "Drunkenness: Father seriously injured by son's stabbing",
      date: "june 24, 2022",
    },
    {
      imgsrc: Loadmore5,
      floatingtext: "latest news",
      description: "Body of missing tourist found in Anakulam river",
      date: "june 24, 2022",
    },
  ];
  return (
    <>
      <Grid container style={{ marginBottom: 30 }}>
        <Grid item xs={2} className="titleclass">
          <div
            style={{
              marginRight: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <AiTwotoneThunderbolt />
          </div>
          <Typography style={{ fontWeight: 600 }}>newsflash</Typography>
        </Grid>
        <Grid item xs={8} className="carouseldiv">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            useKeyboardArrows={false}
            autoPlay={true}
            stopOnHover={true}
            interval={2000}
            dynamicHeight={true}
            axis={"vertical"}
            selectedItem={currentslide}
            onChange={updatecurrentslide}
            // animationHandler={"fade"}
          >
            <div onClick={() => navigate("/details")}>
              <p style={{ margin: 0 }}>
                Accused escaped after overturning autorickshaw in movie style at
                Kumali Attapallath 3{" "}
              </p>
            </div>
            <div onClick={() => navigate("/details")}>
              <p style={{ margin: 0 }}>
                88 jacks, spans, shutters and patutas were stolen from the
                church: trio arrested 53 mins{" "}
              </p>
            </div>
            <div onClick={() => navigate("/details")}>
              <p style={{ margin: 0 }}>
                Bike riding: Newgen riders sentenced 'community service' 2 hours{" "}
                <span style={{ color: "#a0a0a0", fontSize: 11 }}>ago</span>
              </p>
            </div>
          </Carousel>
        </Grid>
        <Grid item xs className="carouselcontroldiv">
          <div
            onClick={() => setcurrentslide(currentslide - 1)}
            className="carouselcontrolbtn"
            style={{
              borderRight: "1px solid #eee",
              borderLeft: "1px solid #eee",
            }}
          >
            <AiOutlineLeft />
          </div>
          <div
            onClick={() => setcurrentslide(currentslide + 1)}
            className="carouselcontrolbtn"
          >
            <AiOutlineRight />
          </div>
        </Grid>
      </Grid>
      <div style={{ position: "relative" }} className="newscarousel">
        <Carousel
          infiniteLoop={true}
          useKeyboardArrows={true}
          axis="horizontal"
          thumbWidth={120}
          showArrows={false}
          selectedItem={currentnewsslide}
          onChange={updatecurrentnewsslide}
          showIndicators={false}
          showStatus={false}
          dynamicHeight={true}
          swipeable={true}
          swipeScrollTolerance={5}
          emulateTouch={true}
        >
          <div>
            <img src={NewsImage} alt="newsimamge" />
            <div className="carouselimagetext">
              <div style={{ maxWidth: "80%", padding: "0 30px" }}>
                <div className="headertext">
                  <Typography>IDUKKI</Typography>
                </div>
                <div className="paratext">
                  <Typography>Rita in the bathroom. As ASI is dead</Typography>
                </div>
                <div className="bottomtext">
                  <Typography>
                    by columban online{" "}
                    <span style={{ fontWeight: "normal", marginLeft: 5 }}>
                      june 26, 2022
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="carouselcontrolbuttons">
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide + 1)}
                className="carouselcontrolbtn"
              >
                <AiOutlineRight />
              </div>
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide - 1)}
                className="carouselcontrolbtn carouselcontrolbtn1"
              >
                <AiOutlineLeft />
              </div>
            </div>
          </div>
          <div>
            <img src={NewsImage1} alt="newsimamge1" />
            <div className="carouselimagetext">
              <div style={{ maxWidth: "80%", padding: "0 30px" }}>
                <div className="headertext">
                  <Typography>IDUKKI</Typography>
                </div>
                <div className="paratext">
                  <Typography>
                    Wild buffalo attack: Housewife escapes with a headache
                  </Typography>
                </div>
                <div className="bottomtext">
                  <Typography>
                    by columban online{" "}
                    <span style={{ fontWeight: "normal", marginLeft: 5 }}>
                      june 26, 2022
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="carouselcontrolbuttons">
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide + 1)}
                className="carouselcontrolbtn"
              >
                <AiOutlineRight />
              </div>
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide - 1)}
                className="carouselcontrolbtn carouselcontrolbtn1"
              >
                <AiOutlineLeft />
              </div>
            </div>
          </div>
          <div>
            <img src={NewsImage2} alt="newsimamge2" />
            <div className="carouselimagetext">
              <div style={{ maxWidth: "80%", padding: "0 30px" }}>
                <div className="headertext">
                  <Typography>LATEST NEWS</Typography>
                </div>
                <div className="paratext">
                  <Typography>
                    KSRTC Lightning Bus "Lightning" Jumps Hump: Passenger
                    Suffers Spinal Injury
                  </Typography>
                </div>
                <div className="bottomtext">
                  <Typography>
                    by columban online{" "}
                    <span style={{ fontWeight: "normal", marginLeft: 5 }}>
                      june 26, 2022
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="carouselcontrolbuttons">
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide + 1)}
                className="carouselcontrolbtn"
              >
                <AiOutlineRight />
              </div>
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide - 1)}
                className="carouselcontrolbtn carouselcontrolbtn1"
              >
                <AiOutlineLeft />
              </div>
            </div>
          </div>
          <div>
            <img src={NewsImage3} alt="newsimamge3" />
            <div className="carouselimagetext">
              <div style={{ maxWidth: "80%", padding: "0 30px" }}>
                <div className="headertext">
                  <Typography>IDUKKI</Typography>
                </div>
                <div className="paratext">
                  <Typography>
                    Goods Traveler Crashed: A major disaster averted
                  </Typography>
                </div>
                <div className="bottomtext">
                  <Typography>
                    by columban online{" "}
                    <span style={{ fontWeight: "normal", marginLeft: 5 }}>
                      june 26, 2022
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="carouselcontrolbuttons">
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide + 1)}
                className="carouselcontrolbtn"
              >
                <AiOutlineRight />
              </div>
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide - 1)}
                className="carouselcontrolbtn carouselcontrolbtn1"
              >
                <AiOutlineLeft />
              </div>
            </div>
          </div>
          <div>
            <img src={NewsImage4} alt="newsimamge4" />
            <div className="carouselimagetext">
              <div style={{ maxWidth: "80%", padding: "0 30px" }}>
                <div className="headertext">
                  <Typography>IDUKKI</Typography>
                </div>
                <div className="paratext">
                  <Typography>
                    Mass Online Auction: Cardamom pushes farmers into crisis
                  </Typography>
                </div>
                <div className="bottomtext">
                  <Typography>
                    by columban online{" "}
                    <span style={{ fontWeight: "normal", marginLeft: 5 }}>
                      june 26, 2022
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="carouselcontrolbuttons">
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide + 1)}
                className="carouselcontrolbtn"
              >
                <AiOutlineRight />
              </div>
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide - 1)}
                className="carouselcontrolbtn carouselcontrolbtn1"
              >
                <AiOutlineLeft />
              </div>
            </div>
          </div>
          <div>
            <img src={NewsImage5} alt="newsimamge5" />
            <div className="carouselimagetext">
              <div style={{ maxWidth: "80%", padding: "0 30px" }}>
                <div className="headertext">
                  <Typography>LATEST News</Typography>
                </div>
                <div className="paratext">
                  <Typography>
                    Son remanded in custody for stabbing father to death
                  </Typography>
                </div>
                <div className="bottomtext">
                  <Typography>
                    by columban online{" "}
                    <span style={{ fontWeight: "normal", marginLeft: 5 }}>
                      june 25, 2022
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="carouselcontrolbuttons">
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide + 1)}
                className="carouselcontrolbtn"
              >
                <AiOutlineRight />
              </div>
              <div
                onClick={() => setcurrentnewsslide(currentnewsslide - 1)}
                className="carouselcontrolbtn carouselcontrolbtn1"
              >
                <AiOutlineLeft />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="featuredstorydiv">
        <Typography>
          Featured<span style={{ color: "#f70d28" }}>Stories</span>
        </Typography>
        <hr />
      </div>
      <Grid container spacing={3} style={{ marginBottom: 50 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={NewsImage1} alt="newsimg" height={250} />
            <Typography>IDUKKI</Typography>
          </div>
        </Grid>
        <Grid item xs>
          <Typography className="featuredheadertext">
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
      <div className="loadmorecontainer" style={{ marginBottom: 20 }}>
        <Grid container spacing={4}>
          {[...Array(100)].slice(0, loadmorevalue).map((item, index) => (
            <Grid item xs={4}>
              <Grid container spacing={1}>
                <Grid item xs={12} className="featuredstorynews">
                  <img
                    src={loadmoredata[index % 6].imgsrc}
                    alt="recommendedimage"
                    height={180}
                  />
                  <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
                    {loadmoredata[index % 6].floatingtext}
                  </Typography>
                </Grid>
                <Grid item xs={12} className="text">
                  <Typography style={{ marginBottom: 5 }}>
                    {loadmoredata[index % 6].description}
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
                      {loadmoredata[index % 6].date}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <div className="loadmorebtncontainer">
          <hr />
          <button
            className="loadmorebtn"
            onClick={() => {
              setloader(true);
              setTimeout(() => {
                setloadmorevalue(loadmorevalue + 3);
                setloader(false);
              }, 1000);
            }}
          >
            {loader ? "Loading..." : "Load More"}
          </button>
          <hr />
        </div>
      </div>
      <div className="mainbusinesssection">
        <div className="businesssection">
          <div>
            <Typography>Business</Typography>
          </div>
          <div className="seconddiv">
            <Typography
              style={{
                color: tabval === "all" && "black",
                fontWeight: tabval === "all" && 900,
              }}
              onClick={() => settabval("all")}
            >
              All
            </Typography>
            <Typography
              style={{
                color: tabval === "latestnews" && "black",
                fontWeight: tabval === "latestnews" && 900,
              }}
              onClick={() => settabval("latestnews")}
            >
              Latest news
            </Typography>
            <Typography
              style={{
                color: tabval === "politics" && "black",
                fontWeight: tabval === "politics" && 900,
              }}
              onClick={() => settabval("politics")}
            >
              politics
            </Typography>
            <Typography
              style={{
                color: tabval === "science" && "black",
                fontWeight: tabval === "science" && 900,
              }}
              onClick={() => settabval("science")}
            >
              science
            </Typography>
            <Typography
              style={{
                color: tabval === "world" && "black",
                fontWeight: tabval === "world" && 900,
              }}
              onClick={() => settabval("world")}
            >
              world
            </Typography>
          </div>
        </div>
      </div>
      <Grid container spacing={4} style={{ marginBottom: 20 }}>
        <Grid item xs={6} className="businessimgcontainer">
          <img src={Loadmore} alt="load" />
          <div className="businessinnercontainer">
            <Typography className="firsttext">
              Asylum case: Sister Sefi and Fr. Thomas Kottur was also released
            </Typography>
            <Typography className="secondtext">
              <AiOutlineClockCircle />
              June 27, 2022
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} className="businessimgcontainer">
          <img src={Loadmore4} alt="load" />
          <div className="businessinnercontainer">
            <Typography className="firsttext">
              Drunkenness: Father seriously injured by son's stabbing
            </Typography>
            <Typography className="secondtext">
              <AiOutlineClockCircle />
              June 27, 2022
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className="loadmorecontainer">
        <div style={{ marginBottom: 25 }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={Loadmore3} alt="recommendedimage" />
                </Grid>
                <Grid item xs className="text">
                  <Typography style={{ marginBottom: 5 }}>
                    Fire breaks out from gas cylinder in Marayur: Family of
                    three miraculously escapes
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
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={Loadmore1} alt="recommendedimage" />
                </Grid>
                <Grid item xs className="text">
                  <Typography style={{ marginBottom: 5 }}>
                    Kattappana resident arrested for trying to set fire to his
                    wife and 2 daughters
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
          </Grid>
        </div>
        <div style={{ marginBottom: 25 }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={Loadmore2} alt="recommendedimage" />
                </Grid>
                <Grid item xs className="text">
                  <Typography style={{ marginBottom: 5 }}>
                    Department of Motor Vehicles with 'Operation Race' to catch
                    racers
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
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={Loadmore5} alt="recommendedimage" />
                </Grid>
                <Grid item xs className="text">
                  <Typography style={{ marginBottom: 5 }}>
                    Body of missing tourist found in Anakulam river
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
          </Grid>
        </div>
      </div>
      <div className="title">
        <Typography style={{ paddingBottom: 15 }}>Worldwide</Typography>
      </div>
      <div>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <div className="featuredstorynews">
              <img src={Loadmore} alt="recommendedimage" height={180} />
              <Typography style={{ bottom: 10, top: "auto", left: 15 }}>
                Latest news
              </Typography>
            </div>
            <Typography
              className="featuredheadertext"
              style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
            <Typography className="featuredparatext">
              Munnar: A cow died in another tiger attack in the plantation area.
              A cow belonging to Shakti, a resident of Devikulam Estate Factory
              Division, was killed. As tigers used to kill livestock ...
            </Typography>
            <Button className="featuredbutton">Read more</Button>
          </Grid>
          <Grid item xs={6} className="loadmorecontainer">
            {/* <Grid item xs={6}> */}
            <Grid container spacing={2} style={{ marginBottom: 25 }}>
              <Grid item xs={5}>
                <img src={Loadmore3} alt="recommendedimage" />
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
            <Grid container spacing={2} style={{ marginBottom: 25 }}>
              <Grid item xs={5}>
                <img src={Loadmore3} alt="recommendedimage" />
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
            <Grid container spacing={2} style={{ marginBottom: 25 }}>
              <Grid item xs={5}>
                <img src={Loadmore3} alt="recommendedimage" />
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
            <Grid container spacing={2} style={{ marginBottom: 25 }}>
              <Grid item xs={5}>
                <img src={Loadmore3} alt="recommendedimage" />
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
            {/* </Grid> */}
          </Grid>
        </Grid>
        <div className="loadmorebtncontainer" style={{ marginBottom: 20 }}>
          <hr />
          <button
            className="loadmorebtn"
            // onClick={() => {
            //   setloader(true);
            //   setTimeout(() => {
            //     setloadmorevalue(loadmorevalue + 3);
            //     setloader(false);
            //   }, 1000);
            // }}
            style={{
              minWidth: "auto",
              margin: "0",
              marginLeft: 20,
              marginRight: 10,
              padding: "0 10px",
            }}
          >
            <AiOutlineLeft />
          </button>
          <button
            className="loadmorebtn"
            // onClick={() => {
            //   setloader(true);
            //   setTimeout(() => {
            //     setloadmorevalue(loadmorevalue + 3);
            //     setloader(false);
            //   }, 1000);
            // }}
            style={{
              minWidth: "auto",
              margin: "0",
              marginRight: 20,
              padding: "0 10px",
            }}
          >
            <AiOutlineRight />
          </button>
          <hr />
        </div>
      </div>
      <div className="mainbusinesssection">
        <div className="businesssection">
          <div>
            <Typography>Techno</Typography>
          </div>
          <div className="seconddiv">
            <Typography
              style={{
                color: tabval === "all" && "black",
                fontWeight: tabval === "all" && 900,
              }}
              onClick={() => settabval("all")}
            >
              All
            </Typography>
            <Typography
              style={{
                color: tabval === "latestnews" && "black",
                fontWeight: tabval === "latestnews" && 900,
              }}
              onClick={() => settabval("latestnews")}
            >
              The poem
            </Typography>
            <Typography
              style={{
                color: tabval === "politics" && "black",
                fontWeight: tabval === "politics" && 900,
              }}
              onClick={() => settabval("politics")}
            >
              gadget
            </Typography>
            <Typography
              style={{
                color: tabval === "science" && "black",
                fontWeight: tabval === "science" && 900,
              }}
              onClick={() => settabval("science")}
            >
              science
            </Typography>
            <Typography
              style={{
                color: tabval === "world" && "black",
                fontWeight: tabval === "world" && 900,
              }}
              onClick={() => settabval("world")}
            >
              story
            </Typography>
            <Typography
              style={{
                color: tabval === "startup" && "black",
                fontWeight: tabval === "startup" && 900,
              }}
              onClick={() => settabval("startup")}
            >
              startup
            </Typography>
          </div>
        </div>
      </div>
      <Grid container spacing={3} style={{ marginBottom: 30 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore2} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: 30 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore2} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: 30 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore2} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
      <div className="title">
        <Typography style={{ paddingBottom: 15 }}>Politics</Typography>
      </div>
      <Grid container spacing={3} style={{ marginBottom: 20 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>IDUKKI</Typography>
            <div
              className="businessinnercontainer"
              style={{
                width: "-webkit-fill-available",
                background:
                  "linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.1) 50%)",
              }}
            >
              <Typography
                className="firsttext"
                style={{
                  background: "transparent",
                  position: "unset",
                }}
              >
                Asylum case: Sister Sefi and Fr. Thomas Kottur was also released
              </Typography>
              <Typography
                className="secondtext"
                style={{
                  position: "unset",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AiOutlineClockCircle />
                &nbsp; June 27, 2022
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore3} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>latest news</Typography>
            <div
              className="businessinnercontainer"
              style={{
                width: "-webkit-fill-available",
                background:
                  "linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.1) 50%)",
              }}
            >
              <Typography
                className="firsttext"
                style={{
                  background: "transparent",
                  position: "unset",
                }}
              >
                Asylum case: Sister Sefi and Fr. Thomas Kottur was also released
              </Typography>
              <Typography
                className="secondtext"
                style={{
                  position: "unset",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AiOutlineClockCircle />
                &nbsp; June 27, 2022
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore4} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>latest news</Typography>
            <div
              className="businessinnercontainer"
              style={{
                width: "-webkit-fill-available",
                background:
                  "linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.1) 50%)",
              }}
            >
              <Typography
                className="firsttext"
                style={{
                  background: "transparent",
                  position: "unset",
                }}
              >
                Asylum case: Sister Sefi and Fr. Thomas Kottur was also released
              </Typography>
              <Typography
                className="secondtext"
                style={{
                  position: "unset",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AiOutlineClockCircle />
                &nbsp; June 27, 2022
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore1} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>IDUKKI</Typography>
            <div
              className="businessinnercontainer"
              style={{
                width: "-webkit-fill-available",
                background:
                  "linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.1) 50%)",
              }}
            >
              <Typography
                className="firsttext"
                style={{
                  background: "transparent",
                  position: "unset",
                }}
              >
                Asylum case: Sister Sefi and Fr. Thomas Kottur was also released
              </Typography>
              <Typography
                className="secondtext"
                style={{
                  position: "unset",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AiOutlineClockCircle />
                &nbsp; June 27, 2022
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="title" style={{ marginTop: 30 }}>
        <Typography style={{ paddingBottom: 15 }}>Lifestyle</Typography>
      </div>
      <div>
        <Grid container spacing={4} style={{ marginBottom: 30 }}>
          <Grid item xs={6}>
            <div className="featuredstorynews">
              <img src={Loadmore5} alt="recommendedimage" height={180} />
              <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
            </div>
          </Grid>
          <Grid item xs={6} style={{ marginBottom: 20 }}>
            <Typography
              className="featuredheadertext"
              style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
            <Typography className="featuredparatext">
              Munnar: A cow died in another tiger attack in the plantation area.
              A cow belonging to Shakti, a resident of Devikulam Estate Factory
              Division, was killed. As tigers used to kill livestock ...
            </Typography>
            <Button className="featuredbutton">Read more</Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginBottom: 20 }}>
          <Grid item xs={6} className="loadmorecontainer">
            {/* <Grid item xs={6}> */}
            <Grid container spacing={2} style={{ marginBottom: 25 }}>
              <Grid item xs={5}>
                <img src={Loadmore3} alt="recommendedimage" />
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
          <Grid item xs={6} className="loadmorecontainer">
            {/* <Grid item xs={6}> */}
            <Grid container spacing={2} style={{ marginBottom: 25 }}>
              <Grid item xs={5}>
                <img src={Loadmore3} alt="recommendedimage" />
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
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} className="loadmorecontainer">
            {/* <Grid item xs={6}> */}
            <Grid container spacing={2} style={{ marginBottom: 25 }}>
              <Grid item xs={5}>
                <img src={Loadmore3} alt="recommendedimage" />
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
          <Grid item xs={6} className="loadmorecontainer">
            {/* <Grid item xs={6}> */}
            <Grid container spacing={2} style={{ marginBottom: 25 }}>
              <Grid item xs={5}>
                <img src={Loadmore3} alt="recommendedimage" />
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
        </Grid>
        <div className="loadmorebtncontainer" style={{ marginBottom: 20 }}>
          <hr />
          <button
            className="loadmorebtn"
            // onClick={() => {
            //   setloader(true);
            //   setTimeout(() => {
            //     setloadmorevalue(loadmorevalue + 3);
            //     setloader(false);
            //   }, 1000);
            // }}
          >
            Load more
          </button>
          <hr />
        </div>
      </div>
      <div style={{ height: 200, marginBottom: 30 }}>
        <div
          className="addiv"
          style={{
            position: "absolute",
            width: "90%",
            left: "5%",
            background: "#f5f5f5",
            marginBottom: 30,
            height: 200,
          }}
        />
      </div>
      <div className="title">
        <Typography style={{ paddingBottom: 15 }}>Latest Post</Typography>
      </div>{" "}
      <Grid container spacing={4} style={{ marginBottom: 30 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore2} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
          </div>
        </Grid>
        <Grid item xs={6} style={{ marginBottom: 20 }}>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginBottom: 30 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore2} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
          </div>
        </Grid>
        <Grid item xs={6} style={{ marginBottom: 20 }}>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginBottom: 30 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore2} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
          </div>
        </Grid>
        <Grid item xs={6} style={{ marginBottom: 20 }}>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginBottom: 30 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore2} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
          </div>
        </Grid>
        <Grid item xs={6} style={{ marginBottom: 20 }}>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginBottom: 30 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore2} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
          </div>
        </Grid>
        <Grid item xs={6} style={{ marginBottom: 20 }}>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginBottom: 30 }}>
        <Grid item xs={6}>
          <div className="featuredstorynews">
            <img src={Loadmore2} alt="recommendedimage" height={250} />
            <Typography style={{ top: 10, left: 15 }}>Latest news</Typography>
          </div>
        </Grid>
        <Grid item xs={6} style={{ marginBottom: 20 }}>
          <Typography
            className="featuredheadertext"
            style={{ fontSize: 20, marginTop: 15, marginBottom: 5 }}
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
          <Typography className="featuredparatext">
            Munnar: A cow died in another tiger attack in the plantation area. A
            cow belonging to Shakti, a resident of Devikulam Estate Factory
            Division, was killed. As tigers used to kill livestock ...
          </Typography>
          <Button className="featuredbutton">Read more</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Leftpanel;
