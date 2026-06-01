import { DrillBook } from "@/components/DrillBook";
import { unitsData3 } from "@/data/units3";

export default function Grade3Home() {
  return (
    <main style={{ maxWidth: "210mm", margin: "0 auto", padding: "20px" }}>
      <DrillBook
        gradeLabel="ປ.3"
        title="ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"
        subtitle="ແບບຝຶກຫັດຄະນິດສາດ ປ.3"
        units={unitsData3}
      />
    </main>
  );
}
