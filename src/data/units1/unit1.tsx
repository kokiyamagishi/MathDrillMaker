import React from "react";
import { UnitData } from "../units2";
import { ItemGrid } from "@/components/illustrations";
import { EditableText } from "@/components/EditableText";
import unit1Json from "../json/grade1/unit1.json";

export const unit1Data: UnitData = {
    unitNumber: unit1Json.unitNumber,
    unitTitle: unit1Json.unitTitle,
    unitGoal: unit1Json.unitGoal,
    textbookRef: unit1Json.textbookRef,
    keyPoints: {
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <p>
            <EditableText dataPath="keyPoints.paragraph">{unit1Json.keyPoints.paragraph}</EditableText>
          </p>
          <div className="math-illustration" style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "12px", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
              <ItemGrid item="🐶" count={unit1Json.keyPoints.dogCount} columns={4} backgroundColor="#E3F2FD" dataPath="keyPoints.dogCount" />
              <ItemGrid item="🐱" count={unit1Json.keyPoints.catCount} columns={4} backgroundColor="#FFF9C4" dataPath="keyPoints.catCount" />
            </div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#D32F2F" }}>
              <EditableText dataPath="keyPoints.resultText">{unit1Json.keyPoints.resultText}</EditableText>
            </div>
          </div>
        </div>
      ),
      hint: {
        text: unit1Json.keyPoints.hintText,
        isBlue: true,
      },
    },
    basicProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              <EditableText dataPath="basicProblems.p1Title">{unit1Json.basicProblems.p1Title}</EditableText>
              <span className="point-label">
                <EditableText dataPath="basicProblems.p1PointsLabel">{unit1Json.basicProblems.p1PointsLabel}</EditableText>
              </span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ minWidth: "150px" }}>{"(1) ລົດ 🚗 ກັບ ລົດຖີບ 🚲"}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <ItemGrid item="🚗" count={unit1Json.basicProblems.p1Item1Count} columns={6} dataPath="basicProblems.p1Item1Count" />
                  <ItemGrid item="🚲" count={unit1Json.basicProblems.p1Item2Count} columns={6} dataPath="basicProblems.p1Item2Count" />
                </div>
                <div style={{ minWidth: "120px" }}>{"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ minWidth: "150px" }}>{"(2) ແອັບເປິ້ນ 🍎 ກັບ ກ້ວຍ 🍌"}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <ItemGrid item="🍎" count={unit1Json.basicProblems.p2Item1Count} columns={7} dataPath="basicProblems.p2Item1Count" />
                  <ItemGrid item="🍌" count={unit1Json.basicProblems.p2Item2Count} columns={7} dataPath="basicProblems.p2Item2Count" />
                </div>
                <div style={{ minWidth: "120px" }}>{"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ minWidth: "150px" }}>{"(3) ໝີ 🐻 ກັບ ກະຕ່າຍ 🐰"}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <ItemGrid item="🐻" count={unit1Json.basicProblems.p3Item1Count} columns={8} dataPath="basicProblems.p3Item1Count" />
                  <ItemGrid item="🐰" count={unit1Json.basicProblems.p3Item2Count} columns={8} dataPath="basicProblems.p3Item2Count" />
                </div>
                <div style={{ minWidth: "120px" }}>{"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span></div>
              </div>
            </div>
          </div>
        ),
      },
      {
        number: 2,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              <EditableText dataPath="basicProblems.p2Title">{unit1Json.basicProblems.p2Title}</EditableText>
              <span className="point-label">
                <EditableText dataPath="basicProblems.p2PointsLabel">{unit1Json.basicProblems.p2PointsLabel}</EditableText>
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ minWidth: "150px" }}>{"(1) ເສື້ອ 👕 ກັບ ໂສ້ງ 👖"}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                <ItemGrid item="👕" count={unit1Json.basicProblems.p2Sub1Item1Count} columns={5} dataPath="basicProblems.p2Sub1Item1Count" />
                <ItemGrid item="👖" count={unit1Json.basicProblems.p2Sub1Item2Count} columns={5} dataPath="basicProblems.p2Sub1Item2Count" />
              </div>
              <div style={{ minWidth: "120px" }}>{"ຕອບ: "} <span className="answer-blank" style={{ minWidth: "50px" }}></span></div>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                <EditableText dataPath="challengeProblems.title">{unit1Json.challengeProblems.title}</EditableText>
                <span className="point-label">
                  <EditableText dataPath="challengeProblems.pointsLabel">{unit1Json.challengeProblems.pointsLabel}</EditableText>
                </span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px", border: "2px solid #2196F3", borderRadius: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "20px", fontWeight: "bold", width: "100px" }, whiteSpace: "nowrap"}>{"ກົບ 🐸:"}</span>
                  <ItemGrid item="🐸" count={unit1Json.challengeProblems.frogCount} columns={6} backgroundColor="#E8F5E9" dataPath="challengeProblems.frogCount" />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "20px", fontWeight: "bold", width: "100px" }, whiteSpace: "nowrap"}>{"ເຕົ່າ 🐢:"}</span>
                  <ItemGrid item="🐢" count={unit1Json.challengeProblems.turtleCount} columns={6} backgroundColor="#E8F5E9" dataPath="challengeProblems.turtleCount" />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "20px", fontWeight: "bold", width: "100px" }, whiteSpace: "nowrap"}>{"ປາ 🐟:"}</span>
                  <ItemGrid item="🐟" count={unit1Json.challengeProblems.fishCount} columns={6} backgroundColor="#E8F5E9" dataPath="challengeProblems.fishCount" />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "20px", fontWeight: "bold", width: "100px" }, whiteSpace: "nowrap"}>{"ປູ 🦀:"}</span>
                  <ItemGrid item="🦀" count={unit1Json.challengeProblems.crabCount} columns={6} backgroundColor="#E8F5E9" dataPath="challengeProblems.crabCount" />
                </div>
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px", marginTop: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>
                    <EditableText dataPath="challengeProblems.sub1Text">{unit1Json.challengeProblems.sub1Text}</EditableText>
                  </span>
                  <span className="answer-blank" style={{ minWidth: "120px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>
                    <EditableText dataPath="challengeProblems.sub2Text">{unit1Json.challengeProblems.sub2Text}</EditableText>
                  </span>
                  <span className="answer-blank" style={{ minWidth: "120px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>
                    <EditableText dataPath="challengeProblems.sub3Text">{unit1Json.challengeProblems.sub3Text}</EditableText>
                  </span>
                  <span className="answer-blank" style={{ minWidth: "120px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>
                    <EditableText dataPath="challengeProblems.sub4Text">{unit1Json.challengeProblems.sub4Text}</EditableText>
                  </span>
                  <span className="answer-blank" style={{ minWidth: "100px" }}></span>
                  <span>{" ກັບ "}</span>
                  <span className="answer-blank" style={{ minWidth: "100px" }}></span>
                </div>
              </div>
            </div>
          ),
        }
      ],
      hintIndex: 0,
      hintText: unit1Json.challengeProblems.hintText
    },
    summaryProblems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p>
              <EditableText dataPath="summaryProblems.title">{unit1Json.summaryProblems.title}</EditableText>
              <span className="point-label">
                <EditableText dataPath="summaryProblems.pointsLabel">{unit1Json.summaryProblems.pointsLabel}</EditableText>
              </span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
              <div>
                <p>
                  <EditableText dataPath="summaryProblems.q1Text">{unit1Json.summaryProblems.q1Text}</EditableText>
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: "16px", marginTop: "12px", width: "fit-content" }}>
                  <ItemGrid item="⚽" count={unit1Json.summaryProblems.q1Item1Count} columns={7} dataPath="summaryProblems.q1Item1Count" />
                  <ItemGrid item="🏸" count={unit1Json.summaryProblems.q1Item2Count} columns={9} dataPath="summaryProblems.q1Item2Count" />
                </div>
                <p style={{ marginTop: "12px" }}>{"ຕອບ: "} <span className="answer-blank"></span></p>
              </div>
              <div>
                <p>
                  <EditableText dataPath="summaryProblems.q2Text">{unit1Json.summaryProblems.q2Text}</EditableText>
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: "16px", marginTop: "12px", width: "fit-content" }}>
                  <ItemGrid item="✏️" count={unit1Json.summaryProblems.q2Item1Count} columns={8} backgroundColor="#FFF3E0" dataPath="summaryProblems.q2Item1Count" />
                  <ItemGrid item="🧽" count={unit1Json.summaryProblems.q2Item2Count} columns={6} backgroundColor="#FFF3E0" dataPath="summaryProblems.q2Item2Count" />
                </div>
                <p style={{ marginTop: "12px" }}>{"ຕອບ: "} <span className="answer-blank"></span></p>
              </div>
              <div>
                <p>
                  <EditableText dataPath="summaryProblems.q3Text">{unit1Json.summaryProblems.q3Text}</EditableText>
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: "16px", marginTop: "12px", width: "fit-content" }}>
                  <ItemGrid item="🍎" count={unit1Json.summaryProblems.q3Item1Count} columns={5} backgroundColor="#E8F5E9" dataPath="summaryProblems.q3Item1Count" />
                  <ItemGrid item="🍊" count={unit1Json.summaryProblems.q3Item2Count} columns={8} backgroundColor="#E8F5E9" dataPath="summaryProblems.q3Item2Count" />
                </div>
                <p style={{ marginTop: "12px" }}>{"ຕອບ: "} <span className="answer-blank"></span></p>
              </div>
              <div>
                <p>
                  <EditableText dataPath="summaryProblems.q4Text">{unit1Json.summaryProblems.q4Text}</EditableText>
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: "16px", marginTop: "12px", width: "fit-content" }}>
                  <ItemGrid item="🚗" count={unit1Json.summaryProblems.q4Item1Count} columns={4} backgroundColor="#E3F2FD" dataPath="summaryProblems.q4Item1Count" />
                  <ItemGrid item="🚲" count={unit1Json.summaryProblems.q4Item2Count} columns={6} backgroundColor="#E3F2FD" dataPath="summaryProblems.q4Item2Count" />
                </div>
                <p style={{ marginTop: "12px" }}>{"ຕອບ: "} <span className="answer-blank"></span></p>
              </div>
            </div>
          </div>
        ),
      }
    ],
    answers: {
      items: [
        {
          questionNumber: 1,
          answers: [
            <span key="1"><EditableText dataPath="answers.a1_1">{unit1Json.answers.a1_1}</EditableText></span>,
            <span key="2"><EditableText dataPath="answers.a1_2">{unit1Json.answers.a1_2}</EditableText></span>,
            <span key="3"><EditableText dataPath="answers.a1_3">{unit1Json.answers.a1_3}</EditableText></span>,
          ]
        },
        {
          questionNumber: 2,
          answers: [
            <span key="4"><EditableText dataPath="answers.a2_1">{unit1Json.answers.a2_1}</EditableText></span>,
          ]
        },
        {
          questionNumber: "ທ້າທາຍ 1",
          answers: [
            <span key="5"><EditableText dataPath="answers.challenge">{unit1Json.answers.challenge}</EditableText></span>
          ]
        },
        {
          questionNumber: "ທົດສອບປະຈຳບົດ 1",
          answers: [
            <span key="6"><EditableText dataPath="answers.summary">{unit1Json.answers.summary}</EditableText></span>
          ]
        }
      ],
      advice: (
        <EditableText dataPath="answers.advice">
          {unit1Json.answers.advice}
        </EditableText>
      )
    }
  };
