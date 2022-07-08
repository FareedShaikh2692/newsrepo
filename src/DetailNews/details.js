import { Container, Grid } from "@mui/material";
import { Typography } from "antd";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import RecommendedImg from "../assets/images/recommendedimage.jpeg";
import RecommendedImg1 from "../assets/images/recommendedimage1.jpg";
import { useNavigate } from "react-router-dom";
import Avtar from "../assets/images/avtar.png";
import { FaRegComment } from "react-icons/fa";
import Detailsimg from "../assets/images/details.jpg";
const Details = () => {
  const navigate = useNavigate();
  return (
    <Container style={{ paddingTop: 20, paddingBottom: 30 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <div className="detailsleftbox">
            <Typography
              style={{
                fontSize: 12,
                cursor: "pointer",
                color: "#a0a0a0",
                marginBottom: 20,
              }}
            >
              <span
                className="featuredheadertext"
                style={{
                  fontWeight: "normal",
                  fontSize: 12,
                  textShadow: "0 0 black",
                }}
                onClick={() => navigate("/")}
              >
                Home
              </span>{" "}
              > Latest news
            </Typography>
            <Typography
              style={{
                fontSize: "3rem",
                marginBottom: "0.4em",
                color: "#212121",
                fontWeight: 700,
                fontFamily: "Roboto",
                lineHeigt: "1.15",
                letterSpacing: "-0.04em",
              }}
            >
              I got a job as a teacher after wanting so much; Accident while
              going to join his brother; The family lost two children in the
              accident
            </Typography>
            <Grid container style={{ alignItems: "center", marginBottom: 30 }}>
              <Grid item xs style={{ maxWidth: "fit-content" }}>
                <img
                  src={Avtar}
                  alt="avtar"
                  style={{ width: 35, borderRadius: "100%", marginRight: 5 }}
                />
              </Grid>
              <Grid item xs>
                <Typography
                  style={{
                    fontSize: 13,
                    fontFamily: "Roboto",
                    color: "#a0a0a0",
                    display: "flex",
                  }}
                >
                  by&nbsp;
                  <span style={{ color: "#f70d28", fontWeight: 900 }}>
                    Kolumban Online
                  </span>{" "}
                  <div className="hifindiv" /> July 8, 2022 in&nbsp;
                  <span style={{ fontWeight: 900 }}>Latest News</span>
                </Typography>
              </Grid>
              <Grid
                item
                xs
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#53585c",
                    fontWeight: 400,
                  }}
                >
                  <FaRegComment color="#2e9fff" />
                  &nbsp;0
                </Typography>
              </Grid>
            </Grid>
            <img
              src={Detailsimg}
              height={370}
              alt="detail"
              style={{ width: "-webkit-fill-available", marginBottom: 30 }}
            />
            <Typography
              style={{
                fontSize: 16,
                color: "#333333",
                fontFamily: "Roboto",
                lineHeight: "1.625em",
                wordBreak: "normal",
                fontWeight: 600,
                marginBottom: "1.25em",
              }}
            >
              Those who are close to each other in the pain of the separation of
              their brothers in the accident in Pariyaram. The bike the brothers
              were traveling in had an accident while they were going to join
              for the much-desired job. Akkarammal Lakshmanan, a resident of
              Pariyaram Patcheni Veeranmuk and P.V. Bhanumathi's sons A. Sneha
              (24), A. The deceased has been identified as Lobhesh (34) . The
              pick-up van hit the bike they were traveling on. Both of them met
              with an accident while on their way to join their work as a higher
              secondary school teacher.
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Typography
                  style={{
                    fontSize: 16,
                    color: "#333333",
                    fontFamily: "Roboto",
                    lineHeight: "1.625em",
                    wordBreak: "normal",
                    fontWeight: 600,
                    marginBottom: "1.25em",
                  }}
                >
                  The accident happened near the Alyakyam Bridge petrol pump on
                  the national highway. Manjeswaram Govt. Sneha was appointed as
                  a plus guest teacher in a higher secondary school. The
                  accident happened when he was riding his bike to Payyannur
                  railway station on his way to school.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <div className="addiv" />
              </Grid>
            </Grid>
            <Typography
              style={{
                fontSize: 16,
                color: "#333333",
                fontFamily: "Roboto",
                lineHeight: "1.625em",
                wordBreak: "normal",
                fontWeight: 600,
                marginBottom: "1.25em",
              }}
            >
              The bike stopped on seeing the bus coming from the opposite side
              near the water puddle on the national highway. The pick-up truck
              carrying the chickens was speeding and rammed into the stopped
              bike. The brothers fell into the water with their bikes. The
              pickup van overturned.
            </Typography>
            <Typography
              style={{
                fontSize: 16,
                color: "#333333",
                fontFamily: "Roboto",
                lineHeight: "1.625em",
                wordBreak: "normal",
                fontWeight: 600,
                marginBottom: "1.25em",
              }}
            >
              Cherupuzha S.I. who was in the police patrol team that reached the
              spot caught them under the car. Manoj Kanai and his team were
              taken out by the locals. The woman died on the spot and her
              brother died at the hospital. Lobhesh is a carpenter. Sister:
              Lobha.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="recommendedcontainer">
            <div className="title">
              <Typography style={{ paddingBottom: 15 }}>Recent News</Typography>
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg} alt="recommendedimage" />
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
            </div>
            <div className="addiv" />
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg1} alt="recommendedimage" />
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
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg} alt="recommendedimage" />
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
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg1} alt="recommendedimage" />
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
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg} alt="recommendedimage" />
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
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg1} alt="recommendedimage" />
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
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg} alt="recommendedimage" />
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
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg1} alt="recommendedimage" />
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
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg} alt="recommendedimage" />
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
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg1} alt="recommendedimage" />
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
            </div>
            <div style={{ marginBottom: 25 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={RecommendedImg} alt="recommendedimage" />
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
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
