import React from "react";
import { SuroboCelebrating } from "@/components/surobo";

interface CertificateProps {
  gradeLabel: string;
  totalUnits: number;
}

export const Certificate: React.FC<CertificateProps> = ({ gradeLabel, totalUnits }) => {
  return (
    <div className="drill-page drill-page--cover">
      <div className="certificate">
        <h1 className="certificate__title">ໃບຢັ້ງຢືນ</h1>
        <div className="certificate__body">
          <p>ຂໍສະແດງຄວາມຍິນດີ！</p>
          <div className="certificate__name-area">
            <span className="certificate__name-line"></span>
          </div>
          <p>
            ໄດ້ສຳເລັດແບບຝຶກຫັດຄະນິດສາດ {gradeLabel}
            <br />ທັງໝົດ {totalUnits} ບົດຮຽນ ຢ່າງດີເລີດ！
          </p>
        </div>
        <div className="certificate__date">
          <span>ວັນທີ: </span>
          <span className="cover__input-line"></span>
        </div>
        <div className="certificate__surobo">
          <SuroboCelebrating width={120} height={144} />
        </div>
      </div>
    </div>
  );
};
