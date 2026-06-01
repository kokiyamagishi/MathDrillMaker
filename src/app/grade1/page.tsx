import { DrillBook } from "@/components/DrillBook";
import { unitsData1 } from "@/data/units1";

export default function Grade1Home() {
  return (
    <main style={{ maxWidth: "210mm", margin: "0 auto", padding: "20px" }}>
      <DrillBook
        gradeLabel="ປ.1"
        title="ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"
        subtitle="ແບບຝຶກຫັດຄະນິດສາດ ປ.1"
        units={unitsData1}
      />
    </main>
  );
}
