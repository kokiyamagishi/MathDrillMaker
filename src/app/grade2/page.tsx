import { DrillBook } from "@/components/DrillBook";
import { unitsData } from "@/data/units2";

export default function Grade2Home() {
  return (
    <main style={{ maxWidth: "210mm", margin: "0 auto", padding: "20px" }}>
      <DrillBook
        gradeLabel="ປ.2"
        title="ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"
        subtitle="ແບບຝຶກຫັດຄະນິດສາດ ປ.2"
        units={unitsData}
      />
    </main>
  );
}
