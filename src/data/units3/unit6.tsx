import React from "react";
import { UnitData } from "../units2";
import {
  ItemGrid,
  VerticalMath,
  Ruler,
  PlaceValueTable,
  NumberLine,
  NumberCards,
  TapeDiagram,
  Shape,
} from "@/components/illustrations";

export const unit6Data: UnitData = {
    
    unitNumber: 6,
    unitTitle: "ຈຳນວນຫຼາຍ ແລະ ການຄິດໄລ່",
    unitGoal: "ຮຽນຮູ້ຈຳນວນເຖິງ 10000, ວິທີສະແດງການບວກ ແລະ ການລົບຈຳນວນຫຼາຍ",
    textbookRef: "ປຶ້ມແບບຮຽນ ປ.3",
    keyPoints: [
      {
        hint: {
          text: "ຈຳນວນຫຼາຍສາມາດແບ່ງເປັນ ຫຼັກພັນ, ຫຼັກຮ້ອຍ, ຫຼັກສິບ ແລະ ຫຼັກໜ່ວຍ.",
        },
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
              {"6. ຈຳນວນຫຼາຍ (ຮອດ 10000) ແລະ ການຄິດໄລ່ (ພາກທີ 1)"}
            </h3>

            <div
              style={{
                backgroundColor: "#FFF3E0",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#E65100",
                }}
              >
                {
                  "1. ການແບ່ງຈຳນວນຕາມຫຼັກ (ຫຼັກພັນ, ຫຼັກຮ້ອຍ, ຫຼັກສິບ ແລະ ຫຼັກໜ່ວຍ)"
                }
              </div>
              <p style={{ fontSize: "22px", margin: 0 }}>
                {"ຕົວຢ່າງ: 3240 ແບ່ງອອກເປັນແຕ່ລະຫຼັກໄດ້ດັ່ງນີ້:"}
              </p>
              <NumberCards thousands={3} hundreds={2} tens={4} ones={0} />
              <div
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                {"3240 = 3000 + 200 + 40 + 0"}
              </div>
              <div style={{ fontSize: "22px", color: "#E65100" }}>
                {
                  "* ໝາຍເຫດ: 0 ຢູ່ຫຼັກໜ່ວຍ ໝາຍຄວາມວ່າບໍ່ມີບັດ 1. ການຮູ້ຈັກຫຼັກໜ່ວຍ (1), ຫຼັກສິບ (10), ຫຼັກຮ້ອຍ (100), ຫຼັກພັນ (1000) ແມ່ນສຳຄັນຫຼາຍ!"
                }
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#E3F2FD",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#1565C0",
                }}
              >
                {"2. ການອ່ານເສັ້ນສະແດງຈຳນວນ (Number Line)"}
              </div>
              <NumberLine
                min={0}
                max={10000}
                step={1000}
                minorStep={500}
                arrows={[
                  {
                    value: 3000,
                    label: "(1)",
                    color: "#E53935",
                    showAnswer: true,
                  },
                  {
                    value: 6500,
                    label: "(2)",
                    color: "#E53935",
                    showAnswer: true,
                  },
                ]}
                width={700}
              />
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginTop: "8px",
                }}
              >
                {"ຄຳຕອບ: (1) ແມ່ນ 3000, (2) ແມ່ນ 6500"}
              </div>
            </div>
          </div>
        ),
      },
      {
        hint: {
          text: "ການບວກລົບເລກຫຼາຍຫຼັກ ແມ່ນໃຫ້ຕັ້ງຫຼັກໃຫ້ຊື່ກັນ. ຢ່າລືມການຈື່ ແລະ ຢືມ.",
        },
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>
              {"6. ຈຳນວນຫຼາຍ ແລະ ການຄິດໄລ່ (ພາກທີ 2)"}
            </h3>

            <div
              style={{
                backgroundColor: "#E8F5E9",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#2E7D32",
                }}
              >
                {"3. ການບວກ ແລະ ການລົບເລກ 3 ຫຼັກ (ມີຕົວຈື່ ແລະ ຕົວຢືມ)"}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                  marginTop: "16px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "22px",
                      margin: "0 0 16px 0",
                    }}
                  >
                    {"ການບວກ (ມີຕົວຈື່)"}
                  </p>
                  <div
                    style={{
                      border: "2px dashed #4CAF50",
                      padding: "16px",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      display: "inline-block",
                    }}
                  >
                    <VerticalMath
                      top={358}
                      bottom={246}
                      operator="+"
                      columns={4}
                      showAnswer={true}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      maxWidth: "250px",
                      marginTop: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <p style={{ margin: "4px 0" }}>
                      {"① ຫຼັກໜ່ວຍ: 8 + 6 = 14. ຂຽນ 4 ແລ້ວຈື່ 1 ໃສ່ຫຼັກສິບ"}
                    </p>
                    <p style={{ margin: "4px 0" }}>
                      {
                        "② ຫຼັກສິບ: 5 + 4 + 1(ຈື່) = 10. ຂຽນ 0 ຈື່ 1 ໃສ່ຫຼັກຮ້ອຍ"
                      }
                    </p>
                    <p style={{ margin: "4px 0" }}>
                      {"③ ຫຼັກຮ້ອຍ: 3 + 2 + 1(ຈື່) = 6."}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "22px",
                      margin: "0 0 16px 0",
                    }}
                  >
                    {"ການລົບ (ມີຕົວຢືມ)"}
                  </p>
                  <div
                    style={{
                      border: "2px dashed #F44336",
                      padding: "16px",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      display: "inline-block",
                    }}
                  >
                    <VerticalMath
                      top={732}
                      bottom={456}
                      operator="-"
                      columns={4}
                      showAnswer={true}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      maxWidth: "250px",
                      marginTop: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <p style={{ margin: "4px 0" }}>
                      {
                        "① ຫຼັກໜ່ວຍ: 2 - 6 ບໍ່ໄດ້, ຢືມ 10 ຈາກຫຼັກສິບມາເປັນ 12. 12 - 6 = 6."
                      }
                    </p>
                    <p style={{ margin: "4px 0" }}>
                      {
                        "② ຫຼັກສິບ: ຖືກຢືມໄປເຫຼືອ 2. 2 - 5 ບໍ່ໄດ້ ຢືມຮ້ອຍມາເປັນ 12. 12 - 5 = 7."
                      }
                    </p>
                    <p style={{ margin: "4px 0" }}>
                      {"③ ຫຼັກຮ້ອຍ: ຖືກຢືມໄປເຫຼືອ 6. 6 - 4 = 2."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    basicProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <p>
                {"ຈົ່ງບອກຈຳນວນທີ່ລູກສອນຊີ້ໃສ່ໃນເສັ້ນສະແດງຈຳນວນ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 2 ຄະແນນ)"}
                </span>
              </p>
              <NumberLine
                min={0}
                max={1000}
                step={100}
                minorStep={50}
                arrows={[
                  {
                    value: 400,
                    label: "(1)",
                    color: "#1976D2",
                    showAnswer: false,
                  },
                  {
                    value: 850,
                    label: "(2)",
                    color: "#4CAF50",
                    showAnswer: false,
                  },
                ]}
                width={700}
              />
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  marginTop: "16px",
                }}
              >
                <div style={{ fontSize: "20px" }}>
                  {"(1) "}
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                </div>
                <div style={{ fontSize: "20px" }}>
                  {"(2) "}
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "80px",
                      height: "40px",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div>
            <p>
              {"ຈົ່ງປະກອບບັດລຸ່ມນີ້ໃຫ້ເປັນຈຳນວນ: "}{" "}
              <span className="point-label">{"(2 ຄະແນນ)"}</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{"(3)"}</span>
                <NumberCards thousands={2} hundreds={1} tens={5} ones={2} />
              </div>
              <div
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span>{" = "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "120px",
                    height: "40px",
                  }}
                ></span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div>
            <p>
              {"ຈົ່ງຕັ້ງບັ້ງເລກບວກລຸ່ມນີ້ (ມີຕົວຈື່): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(4)"}
                </span>
                <VerticalMath top={352} bottom={468} operator="+" columns={4} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(5)"}
                </span>
                <VerticalMath top={579} bottom={246} operator="+" columns={4} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(6)"}
                </span>
                <VerticalMath top={895} bottom={145} operator="+" columns={4} />
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 4,
        content: (
          <div>
            <p>
              {"ຈົ່ງຕັ້ງບັ້ງເລກລົບລຸ່ມນີ້ (ມີຕົວຢືມ): "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(7)"}
                </span>
                <VerticalMath top={752} bottom={426} operator="-" columns={4} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(8)"}
                </span>
                <VerticalMath top={815} bottom={347} operator="-" columns={4} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(9)"}
                </span>
                <VerticalMath top={603} bottom={258} operator="-" columns={4} />
              </div>
            </div>
          </div>
        ),
      },
    ],
    challengeProblems: {
      problems: [
        {
          number: 1,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງປຽບທຽບຈຳນວນ ໂດຍໃຊ້ເຄື່ອງໝາຍ > ຫຼື < ໃສ່ບ່ອນວ່າງ: "}{" "}
                <span className="point-label">
                  {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 2 ຄະແນນ)"}
                </span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(1)"}
                  </span>
                  <span>{"4320"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"4302"}</span>
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(2)"}
                  </span>
                  <span>{"8999"}</span>
                  <span
                    className="answer-blank"
                    style={{
                      display: "inline-block",
                      width: "50px",
                      height: "40px",
                    }}
                  ></span>
                  <span>{"9000"}</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 2,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການບວກລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(3)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ໂຮງຮຽນມີນັກຮຽນຍິງ 345 ຄົນ ແລະ ນັກຮຽນຊາຍ 386 ຄົນ. ລວມທັງໝົດມີນັກຮຽນຈັກຄົນ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <VerticalMath
                      top={345}
                      bottom={386}
                      operator="+"
                      columns={4}
                    />
                    <div>
                      <span>{"ຕອບ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "80px",
                          height: "40px",
                          margin: "0 10px",
                        }}
                      ></span>
                      <span>{"ຄົນ"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          number: 3,
          content: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>
                {"ຈົ່ງແກ້ໂຈດບັນຫາການລົບລຸ່ມນີ້: "}{" "}
                <span className="point-label">{"(4 ຄະແນນ)"}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {"(4)"}
                  </span>
                  <span style={{ fontSize: "20px", marginLeft: "12px" }}>
                    {
                      "ມີເງິນ 850 ພັນກີບ. ຊື້ເຄື່ອງໄປ 475 ພັນກີບ. ຈະເຫຼືອເງິນເທົ່າໃດ?"
                    }
                  </span>
                  <div
                    style={{
                      marginTop: "8px",
                      paddingLeft: "40px",
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <VerticalMath
                      top={850}
                      bottom={475}
                      operator="-"
                      columns={4}
                    />
                    <div>
                      <span>{"ຕອບ:"}</span>
                      <span
                        className="answer-blank"
                        style={{
                          display: "inline-block",
                          width: "80px",
                          height: "40px",
                          margin: "0 10px",
                        }}
                      ></span>
                      <span>{"ພັນກີບ"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
      hintIndex: 0,
      hintText: "ຢ່າລືມການຈື່ສຳລັບການບວກ ແລະ ການຢືມສຳລັບການລົບ.",
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ທົດສອບປະຈຳບົດ: ຈຳນວນແລະການປຽບທຽບ "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 2 ຄະແນນ, ລວມ 4 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{"(1)"}</span>
                <span>
                  {
                    "ຈຳນວນທີ່ປະກອບດ້ວຍ ຫຼັກພັນ 6, ຫຼັກຮ້ອຍ 0, ຫຼັກສິບ 5, ຫຼັກໜ່ວຍ 3 ແມ່ນ:"
                  }
                </span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "80px",
                    height: "40px",
                  }}
                ></span>
              </div>
              <div
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{"(2)"}</span>
                <span>{"ຈົ່ງໃສ່ເຄື່ອງໝາຍປຽບທຽບ (<, >): 5010 "}</span>
                <span
                  className="answer-blank"
                  style={{
                    display: "inline-block",
                    width: "50px",
                    height: "40px",
                  }}
                ></span>
                <span>{" 5100"}</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕັ້ງບັ້ງເລກບວກ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(3)"}
                </span>
                <VerticalMath top={678} bottom={254} operator="+" columns={4} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(4)"}
                </span>
                <VerticalMath top={496} bottom={135} operator="+" columns={4} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(5)"}
                </span>
                <VerticalMath top={782} bottom={349} operator="+" columns={4} />
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 3,
        content: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <p>
              {"ຈົ່ງຕັ້ງບັ້ງເລກລົບ: "}{" "}
              <span className="point-label">
                {"(ຂໍ້ລະ 1 ຄະແນນ, ລວມ 3 ຄະແນນ)"}
              </span>
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(6)"}
                </span>
                <VerticalMath top={892} bottom={555} operator="-" columns={4} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(7)"}
                </span>
                <VerticalMath top={624} bottom={378} operator="-" columns={4} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  {"(8)"}
                </span>
                <VerticalMath top={405} bottom={169} operator="-" columns={4} />
              </div>
            </div>
          </div>
        ),
      },
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1">
              {
                "(1) 400, (2) 850, (3) 2152, (4) 820, (5) 825, (6) 1040, (7) 326, (8) 468, (9) 345"
              }
            </span>,
          ],
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [<span key="2">{"(1) >, (2) <, (3) 666 ຄົນ"}</span>],
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [<span key="3">{"(1) 6053, (2) <, (3) 789, (4) 344"}</span>],
        },
      ],
      advice:
        "ການອ່ານເສັ້ນສະແດງຈຳນວນ ຕ້ອງສັງເກດເບິ່ງວ່າ 1 ຕາກະໂຣນ້ອຍໆມີຄ່າເທົ່າໃດກ່ອນເດີ!",
    },
  };
