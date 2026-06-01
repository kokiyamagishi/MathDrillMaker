import { DrillBook } from "@/components/DrillBook";
import { unitsData4 } from "@/data/units4";

export default function Grade4Home() {
  return (
    <main style={{ maxWidth: "210mm", margin: "0 auto", padding: "20px" }}>
      <DrillBook
        gradeLabel="ປ.4"
        title="ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"
        subtitle="ແບບຝຶກຫັດຄະນິດສາດ ປ.4"
        units={unitsData4}
      />
    </main>
  );
}
