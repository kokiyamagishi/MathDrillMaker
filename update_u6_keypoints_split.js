const fs = require('fs');

let content = fs.readFileSync('src/data/units3.tsx', 'utf8');

const oldKeyPoints = `    keyPoints: {
      hint: { text: "ຈຳນວນຫຼາຍສາມາດແບ່ງເປັນ ຫຼັກພັນ, ຫຼັກຮ້ອຍ, ຫຼັກສິບ ແລະ ຫຼັກໜ່ວຍ. ຢ່າລືມການຈື່ ແລະ ຢືມ ໃນເວລາບວກລົບ." },
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"6. ຈຳນວນຫຼາຍ (ຮອດ 10000) ແລະ ການຄິດໄລ່"}</h3>
          
          <div style={{ backgroundColor: "#FFF3E0", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontWeight: "bold", fontSize: "18px", color: "#E65100" }}>{"1. ການແບ່ງຈຳນວນຕາມຫຼັກ (ຫຼັກພັນ, ຫຼັກຮ້ອຍ, ຫຼັກສິບ ແລະ ຫຼັກໜ່ວຍ)"}</div>
            <p style={{ fontSize: "20px", margin: 0 }}>{"ຕົວຢ່າງ: 3240 ແບ່ງອອກເປັນແຕ່ລະຫຼັກໄດ້ດັ່ງນີ້:"}</p>
            <NumberCards thousands={3} hundreds={2} tens={4} ones={0} />
            <div style={{ textAlign: "center", fontSize: "20px", marginTop: "10px" }}>
              {"3240 = 3000 + 200 + 40 + 0"}
            </div>
            <div style={{ fontSize: "18px", color: "#E65100" }}>
              {"* ໝາຍເຫດ: 0 ຢູ່ຫຼັກໜ່ວຍ ໝາຍຄວາມວ່າບໍ່ມີບັດ 1. ການຮູ້ຈັກຫຼັກໜ່ວຍ (1), ຫຼັກສິບ (10), ຫຼັກຮ້ອຍ (100), ຫຼັກພັນ (1000) ແມ່ນສຳຄັນຫຼາຍ!"}
            </div>
          </div>
          
          <div style={{ backgroundColor: "#E3F2FD", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontWeight: "bold", fontSize: "18px", color: "#1565C0" }}>{"2. ການອ່ານເສັ້ນສະແດງຈຳນວນ (Number Line)"}</div>
            <NumberLine
              min={0}
              max={10000}
              step={1000}
              minorStep={500}
              arrows={[
                { value: 3000, label: "(1)", color: "#E53935", showAnswer: true },
                { value: 6500, label: "(2)", color: "#E53935", showAnswer: true }
              ]}
              width={700}
            />
            <div style={{ color: "red", textAlign: "center", fontSize: "20px", fontWeight: "bold", marginTop: "8px" }}>
              {"ຄຳຕອບ: (1) ແມ່ນ 3000, (2) ແມ່ນ 6500"}
            </div>
          </div>

          <div style={{ backgroundColor: "#E8F5E9", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontWeight: "bold", fontSize: "18px", color: "#2E7D32" }}>{"3. ການບວກ ແລະ ການລົບເລກ 3 ຫຼັກ (ມີຕົວຈື່ ແລະ ຕົວຢືມ)"}</div>
            <div style={{ display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" }}>
              <div>
                <p style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px", margin: "0 0 16px 0" }}>{"ການບວກ (ມີຕົວຈື່)"}</p>
                <div style={{ border: "2px dashed #4CAF50", padding: "16px", borderRadius: "8px", backgroundColor: "#fff" }}>
                  <VerticalMath top={358} bottom={246} operator="+" columns={4} />
                </div>
                <p style={{ fontSize: "16px", maxWidth: "250px", marginTop: "16px", lineHeight: "1.5" }}>{"① 8 + 6 = 14. ຂຽນ 4 ແລ້ວຈື່ 1 ໃສ່ຫຼັກສິບ<br/>② ຫຼັກສິບ (5+4+1=10), ຂຽນ 0 ຈື່ 1 ໃສ່ຫຼັກຮ້ອຍ<br/>③ ຫຼັກຮ້ອຍ (3+2+1=6)."}</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px", margin: "0 0 16px 0" }}>{"ການລົບ (ມີຕົວຢືມ)"}</p>
                <div style={{ border: "2px dashed #F44336", padding: "16px", borderRadius: "8px", backgroundColor: "#fff" }}>
                  <VerticalMath top={732} bottom={456} operator="-" columns={4} />
                </div>
                <p style={{ fontSize: "16px", maxWidth: "250px", marginTop: "16px", lineHeight: "1.5" }}>{"① 2 ລົບ 6 ບໍ່ໄດ້, ຢືມ 10 ຈາກຫຼັກສິບມາເປັນ 12. 12-6=6.<br/>② ຫຼັກສິບເຫຼືອ 2, ລົບ 5 ບໍ່ໄດ້ ຢືມມາອີກເປັນ 12-5=7.<br/>③ ຫຼັກຮ້ອຍເຫຼືອ 6, 6-4=2."}</p>
              </div>
            </div>
          </div>

        </div>
      )
    },`;

const newKeyPoints = `    keyPoints: [
      {
        hint: { text: "ຈຳນວນຫຼາຍສາມາດແບ່ງເປັນ ຫຼັກພັນ, ຫຼັກຮ້ອຍ, ຫຼັກສິບ ແລະ ຫຼັກໜ່ວຍ." },
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"6. ຈຳນວນຫຼາຍ (ຮອດ 10000) ແລະ ການຄິດໄລ່ (ພາກທີ 1)"}</h3>
            
            <div style={{ backgroundColor: "#FFF3E0", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontWeight: "bold", fontSize: "18px", color: "#E65100" }}>{"1. ການແບ່ງຈຳນວນຕາມຫຼັກ (ຫຼັກພັນ, ຫຼັກຮ້ອຍ, ຫຼັກສິບ ແລະ ຫຼັກໜ່ວຍ)"}</div>
              <p style={{ fontSize: "20px", margin: 0 }}>{"ຕົວຢ່າງ: 3240 ແບ່ງອອກເປັນແຕ່ລະຫຼັກໄດ້ດັ່ງນີ້:"}</p>
              <NumberCards thousands={3} hundreds={2} tens={4} ones={0} />
              <div style={{ textAlign: "center", fontSize: "20px", marginTop: "10px" }}>
                {"3240 = 3000 + 200 + 40 + 0"}
              </div>
              <div style={{ fontSize: "18px", color: "#E65100" }}>
                {"* ໝາຍເຫດ: 0 ຢູ່ຫຼັກໜ່ວຍ ໝາຍຄວາມວ່າບໍ່ມີບັດ 1. ການຮູ້ຈັກຫຼັກໜ່ວຍ (1), ຫຼັກສິບ (10), ຫຼັກຮ້ອຍ (100), ຫຼັກພັນ (1000) ແມ່ນສຳຄັນຫຼາຍ!"}
              </div>
            </div>
            
            <div style={{ backgroundColor: "#E3F2FD", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontWeight: "bold", fontSize: "18px", color: "#1565C0" }}>{"2. ການອ່ານເສັ້ນສະແດງຈຳນວນ (Number Line)"}</div>
              <NumberLine
                min={0}
                max={10000}
                step={1000}
                minorStep={500}
                arrows={[
                  { value: 3000, label: "(1)", color: "#E53935", showAnswer: true },
                  { value: 6500, label: "(2)", color: "#E53935", showAnswer: true }
                ]}
                width={700}
              />
              <div style={{ color: "red", textAlign: "center", fontSize: "20px", fontWeight: "bold", marginTop: "8px" }}>
                {"ຄຳຕອບ: (1) ແມ່ນ 3000, (2) ແມ່ນ 6500"}
              </div>
            </div>
          </div>
        )
      },
      {
        hint: { text: "ການບວກລົບເລກຫຼາຍຫຼັກ ແມ່ນໃຫ້ຕັ້ງຫຼັກໃຫ້ຊື່ກັນ. ຢ່າລືມການຈື່ ແລະ ຢືມ." },
        content: (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={{ fontSize: "28px", color: "#1976D2", margin: 0 }}>{"6. ຈຳນວນຫຼາຍ ແລະ ການຄິດໄລ່ (ພາກທີ 2)"}</h3>
            
            <div style={{ backgroundColor: "#E8F5E9", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontWeight: "bold", fontSize: "18px", color: "#2E7D32" }}>{"3. ການບວກ ແລະ ການລົບເລກ 3 ຫຼັກ (ມີຕົວຈື່ ແລະ ຕົວຢືມ)"}</div>
              <div style={{ display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap", marginTop: "16px" }}>
                <div>
                  <p style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px", margin: "0 0 16px 0" }}>{"ການບວກ (ມີຕົວຈື່)"}</p>
                  <div style={{ border: "2px dashed #4CAF50", padding: "16px", borderRadius: "8px", backgroundColor: "#fff", display: "inline-block" }}>
                    <VerticalMath top={358} bottom={246} operator="+" columns={4} />
                  </div>
                  <div style={{ fontSize: "18px", maxWidth: "250px", marginTop: "16px", lineHeight: "1.6" }}>
                    <p style={{ margin: "4px 0" }}>{"① ຫຼັກໜ່ວຍ: 8 + 6 = 14. ຂຽນ 4 ແລ້ວຈື່ 1 ໃສ່ຫຼັກສິບ"}</p>
                    <p style={{ margin: "4px 0" }}>{"② ຫຼັກສິບ: 5 + 4 + 1(ຈື່) = 10. ຂຽນ 0 ຈື່ 1 ໃສ່ຫຼັກຮ້ອຍ"}</p>
                    <p style={{ margin: "4px 0" }}>{"③ ຫຼັກຮ້ອຍ: 3 + 2 + 1(ຈື່) = 6."}</p>
                  </div>
                </div>
                <div>
                  <p style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px", margin: "0 0 16px 0" }}>{"ການລົບ (ມີຕົວຢືມ)"}</p>
                  <div style={{ border: "2px dashed #F44336", padding: "16px", borderRadius: "8px", backgroundColor: "#fff", display: "inline-block" }}>
                    <VerticalMath top={732} bottom={456} operator="-" columns={4} />
                  </div>
                  <div style={{ fontSize: "18px", maxWidth: "250px", marginTop: "16px", lineHeight: "1.6" }}>
                    <p style={{ margin: "4px 0" }}>{"① ຫຼັກໜ່ວຍ: 2 - 6 ບໍ່ໄດ້, ຢືມ 10 ຈາກຫຼັກສິບມາເປັນ 12. 12 - 6 = 6."}</p>
                    <p style={{ margin: "4px 0" }}>{"② ຫຼັກສິບ: ຖືກຢືມໄປເຫຼືອ 2. 2 - 5 ບໍ່ໄດ້ ຢືມຮ້ອຍມາເປັນ 12. 12 - 5 = 7."}</p>
                    <p style={{ margin: "4px 0" }}>{"③ ຫຼັກຮ້ອຍ: ຖືກຢືມໄປເຫຼືອ 6. 6 - 4 = 2."}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )
      }
    ],`;

content = content.replace(oldKeyPoints, newKeyPoints);

fs.writeFileSync('src/data/units3.tsx', content, 'utf8');
console.log('Unit 6 keyPoints split into 2 pages');
