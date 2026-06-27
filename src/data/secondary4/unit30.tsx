import React from "react";
import { UnitData } from "../units2";

export const unit30Data: UnitData = {
  unitNumber: 30,
  unitTitle: "ພາກທີ IV - ບົດທີ 30: ຄວາມຮູ້ທົ່ວໄປກ່ຽວກັບເວກເຕີ (Introduction to Vectors)",
  unitGoal: "ຮຽນຮູ້ກ່ຽວກັບປະລິມານສະກາແລ ແລະ ປະລິມານເວກເຕີ, ທິດທາງ ແລະ ຂະໜາດຂອງເວກເຕີ, ເວກເຕີທີ່ຂະໜານກັນ, ເວກເຕີທີ່ເທົ່າກັນ ແລະ ເວກເຕີກົງກັນຂ້າມ",
  textbookRef: "ປຶ້ມແບບຮຽນ ມ.4 ໜ້າ 139-144",
  subSections: [
    {
      title: "1. ປະລິມານສະກາແລ ແລະ ເວກເຕີ (Scalar & Vector Quantities)",
      keyPoint: {
        title: "ນິຍາມສະກາແລ ແລະ ເວກເຕີ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ໃນຟີຊິກສາດ ແລະ ຄະນິດສາດ, ປະລິມານແບ່ງອອກເປັນສອງປະເພດໃຫຍ່:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#E3F2FD", borderRadius: "8px", border: "1px solid #90CAF9" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0D47A1" }}>{"1. ປະລິມານສະກາແລ (Scalar Quantity):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ແມ່ນປະລິມານທີ່ມີແຕ່ຂະໜາດພຽງຢ່າງດຽວ (ບໍ່ມີທິດທາງ)."}
                <br />
                {"- ຕົວຢ່າງ: ມວນສານ, ອຸນຫະພູມ, ເວລາ, ຄວາມໄວສະເລ່ຍ (ເຊັ່ນ: ລົດແລ່ນ 60 km/h)."}
              </p>
            </div>
            <div style={{ padding: "16px", backgroundColor: "#E8F5E9", borderRadius: "8px", border: "1px solid #A5D6A7" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2E7D32" }}>{"2. ປະລິມານເວກເຕີ (Vector Quantity):"}</span>
              <p style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", marginTop: "8px" }}>
                {"ແມ່ນປະລິມານທີ່ມີທັງຂະໜາດ, ທິດ ແລະ ລວງ (ມີທິດທາງຊີ້ບອກແນ່ນອນ)."}
                <br />
                {"- ຕົວຢ່າງ: ຄວາມໄວເວກເຕີ (ເຊັ່ນ: ລົດແລ່ນໄປທາງທິດໃຕ້ດ້ວຍຄວາມໄວ 60 km/h), ຄວາມແຮງ, ຄວາມເລັ່ງ."}
              </p>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ເວກເຕີ AB ຈະມີເມັດ A ເປັນເມັດເລີ່ມຕົ້ນ (Origin) ແລະ B ເປັນເມັດປາຍ (Terminal). ຂະໜາດຂອງມັນຂຽນແທນດ້ວຍ |AB|.",
          isBlue: true
        }
      },
      problems: [
        {
          number: 1,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຈຳແນກປະລິມານຕໍ່ໄປນີ້ວ່າເປັນ ສະກາແລ ຫຼື ເວກເຕີ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) 'ເຮືອແລ່ນໄປທາງທິດເໜືອດ້ວຍຄວາມໄວ 15 km/h' ⇒ ແມ່ນປະລິມານ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) 'ກ້ອນຫີນມີມວນສານ 5 ກິໂລກຣາມ' ⇒ ແມ່ນປະລິມານ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 2,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ຈົ່ງຈຳແນກປະລິມານຕໍ່ໄປນີ້ວ່າເປັນ ສະກາແລ ຫຼື ເວກເຕີ (ຊຸດທີ 2): "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) 'ລົດແລ່ນໄປທາງທິດໃຕ້ດ້ວຍຄວາມໄວ 80 km/h' ⇒ ແມ່ນປະລິມານ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) 'ນ້ຳໜັກຂອງປຶ້ມແມ່ນ 2 ກິໂລກຣາມ' ⇒ ແມ່ນປະລິມານ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      title: "2. ເວກເຕີທີ່ເທົ່າກັນ, ຂະໜານກັນ ແລະ ກົງກັນຂ້າມ (Equal, Parallel & Opposite Vectors)",
      keyPoint: {
        title: "ຄຸນລັກສະນະການສົມທຽບເວກເຕີ",
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ການສົມທຽບເວກເຕີສອງຕົວ u ແລະ v ໃດໆ:"}
            </p>
            <div style={{ padding: "16px", backgroundColor: "#FFF3E0", borderRadius: "8px", border: "1px solid #FFE0B2" }}>
              <ul style={{ fontSize: "1.20rem", margin: 0, lineHeight: "1.6", paddingLeft: "24px" }}>
                <li><strong>{"ເວກເຕີຂະໜານກັນ (Parallel, u ∥ v):"}</strong>{" ມີທິດທາງດຽວກັນ ຫຼື ກົງກັນຂ້າມກັນ (ຢູ່ວາງເທິງເສັ້ນຊື່ດຽວກັນ ຫຼື ຂະໜານກັນ)."}</li>
                <li><strong>{"ເວກເຕີເທົ່າກັນ (Equal, u = v):"}</strong>{" ມີທັງຂະໜາດເທົ່າກັນ ແລະ ທິດທາງດຽວກັນ."}</li>
                <li><strong>{"`ເວກເຕີກົງກັນຂ້າມ` (Opposite, u = -v):"}</strong>{" ມີຂະໜາດເທົ່າກັນ ແຕ່ມີທິດທາງກົງກັນຂ້າມ."}</li>
              </ul>
            </div>
          </div>
        ),
        hint: {
          text: "💡 ໃນຮູບຫົກແຈສະເໝີ ABCDEF ທີ່ມີເມັດໃຈກາງ O: ເຮົາໄດ້ AB = ED, BC = FE, ແລະ AB = -BA ສະເໝີ!",
          isBlue: false
        }
      },
      problems: [
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນຮູບຫົກແຈສະເໝີ ABCDEF, ຈົ່ງກຳນົດຄວາມສຳພັນລະຫວ່າງເວກເຕີ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ເວກເຕີທີ່ເທົ່າກັນກັບ AB ແມ່ນເວກເຕີ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ເວກເຕີກົງກັນຂ້າມກັບ BC (ໝາຍເຖິງ -BC) ແມ່ນເວກເຕີ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        },
        {
          number: 4,
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#2C3E50", margin: 0 }}>
                {"ໃນຮູບກ່ອງສາກ ABCD-EFGH, ຈົ່ງຊອກຫາເວກເຕີທີ່ເທົ່າກັນ: "}<span className="point-label">{"(ຂໍ້ລະ 2.5 ຄະແນນ, ລວມ 5 ຄະແນນ)"}</span>
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(1) ເວກເຕີທີ່ເທົ່າກັນກັບ AB ແມ່ນເວກເຕີ DC, EF, ແລະ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
                  <span>{"(2) ເວກເຕີກົງກັນຂ້າມກັບ DA ແມ່ນເວກເຕີ BC ແລະ"}</span>
                  <span className="answer-blank" style={{ display: "inline-block", width: "80px", height: "42px" }}></span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  ],
  challengeProblems: {
    problems: [
      {
        number: 1,
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#E65100", margin: 0 }}>
              {"ໂຈດບັນຫາໄລຍະທາງ ແລະ ທິດທາງ (Vector Displacement): "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
            </p>
            <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
              {"ນົກໂຕໜຶ່ງເລີ່ມບິນໄປທາງທິດເວັນຕົກສຽງເໜືອເປັນໄລຍະທາງ 2 ກິໂລແມັດ, ຈາກນັ້ນບິນໄປທາງທິດເວັນອອກສຽງເໜືອເປັນໄລຍະທາງ 2 ກິໂລແມັດ. ຈົ່ງຊອກຫາໄລຍະຫ່າງທັງໝົດລະຫວ່າງນົກກັບຈຸດເລີ່ມຕົ້ນ?"}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.375rem", flexWrap: "wrap" }}>
              <span>{"ຕອບ: ໄລຍະຫ່າງແມ່ນ"}</span>
              <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
              <span>{" ກິໂລແມັດ (ຂຽນຮູບຮ່າງ √)"}</span>
            </div>
          </div>
        )
      }
    ],
    hintIndex: 0,
    hintText: "ການບິນໄປທິດເວັນຕົກສຽງເໜືອ ແລະ ທິດເວັນອອກສຽງເໜືອ ປະກອບກັນເປັນມຸມສາກ 90° ເພາະທິດທັງສອງຕັ້ງສາກກັນ. ດັ່ງນັ້ນ ໄລຍະຫ່າງແມ່ນຂ້າງກົງສາກຂອງຮູບສາມແຈສາກທີ່ມີສອງຂ້າງສາກຍາວ 2 ແລະ 2 ⇒ ໄລຍະຫ່າງ = √(2² + 2²) = √8 = 2√2 ກິໂລແມັດ!"
  },
  summaryProblems: [
    {
      number: 1,
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "1.375rem", fontWeight: "bold", color: "#006064", margin: 0 }}>
            {"ຄຸນລັກສະນະເວກເຕີກົງກັນຂ້າມ: "}<span className="point-label">{"(5 ຄະແນນ)"}</span>
          </p>
          <p style={{ fontSize: "1.375rem", margin: 0, lineHeight: "1.6" }}>
            {"ຜົນບວກຂອງສອງເວກເຕີກົງກັນຂ້າມ AB + BA ແມ່ນເວກເຕີໃດ?"}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "1.375rem" }}>
            <span>{"ຕອບ: ເວກເຕີ"}</span>
            <span className="answer-blank" style={{ display: "inline-block", width: "100px", height: "42px" }}></span>
          </div>
        </div>
      )
    }
  ],
  answers: {
    items: [
      {
        questionNumber: 1,
        answers: [
          <span key="1-1">{"ເວກເຕີ (ຄິດໄລ່: ຍ້ອນມີທັງຂະໜາດ 15 km/h ແລະ ທິດທາງຄືທິດເໜືອ)"}</span>,
          <span key="1-2">{"ສະກາແລ (ຄິດໄລ່: ຍ້ອນມີແຕ່ຂະໜາດ 5 ກິໂລກຣາມ, ບໍ່ມີທິດທາງ)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="2-1">{"ED (ຄິດໄລ່: ໃນຮູບຫົກແຈສະເໝີ, ຂ້າງ AB ແລະ ED ຂະໜານກັນ ແລະ ມີທິດທາງດຽວກັນ)"}</span>,
          <span key="2-2">{"FE (ຄິດໄລ່: ເພາະ BC = EF ⇒ -BC = FE)"}</span>
        ]
      },
      {
        questionNumber: 4,
        answers: [
          <span key="3-1">{"HG (ຄິດໄລ່: ຂ້າງທັງສີ່ AB, DC, EF, HG ແມ່ນຂະໜານກັນ ແລະ ຍາວເທົ່າກັນໃນຮູບກ່ອງສາກ)"}</span>,
          <span key="3-2">{"HE (ຄິດໄລ່: ເພາະ DA = EH ⇒ -DA = HE)"}</span>
        ]
      },
      {
        questionNumber: "ທ້າທາຍ 1",
        answers: [
          <span key="c1">{"2√2 (ຄິດໄລ່: ຍ້ອນທິດທັງສອງຕັ້ງສາກກັນ ⇒ ໄລຍະຫ່າງ = √(2² + 2²) = √8 = 2√2)"}</span>
        ]
      },
      {
        questionNumber: "ທົດສອບປະຈຳບົດ 1",
        answers: [
          <span key="s1">{"ສູນ (ຄິດໄລ່: AB + BA = AA = 0, ເຊິ່ງແມ່ນເວກເຕີສູນ)"}</span>
        ]
      },
      {
        questionNumber: 2,
        answers: [
          <span key="u30-ans-2-1">{"ເວກເຕີ (ຄິດໄລ່: ຍ້ອນມີທັງຂະໜາດ 80 km/h ແລະ ທິດທາງຄືທິດໃຕ້)"}</span>,
          <span key="u30-ans-2-2">{"ສະກາແລ (ຄິດໄລ່: ຍ້ອນມີແຕ່ຂະໜາດ 2 ກິໂລກຣາມ, ບໍ່ມີທິດທາງ)"}</span>
        ]
      }
    ],
    advice: "ເກັ່ງຫຼາຍ! ການເຂົ້າໃຈຄວາມຮູ້ທົ່ວໄປກ່ຽວກັບເວກເຕີ ຈະຊ່ວຍໃຫ້ເຈົ້າມີພື້ນຖານທີ່ແໜ້ນໜາໃນການຮຽນເລຂາຄະນິດວິເຄາະ ແລະ ຟີຊິກສາດຂັ້ນສູງ. ສູ້ໆຕໍ່ໄປເດີ້!"
  }
};
