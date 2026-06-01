import { DrillBook } from "@/components/DrillBook";
import { unitsData5 } from "@/data/units5";

export default function Grade5Home() {
  return (
    <main style={{ maxWidth: "210mm", margin: "0 auto", padding: "20px" }}>
      <DrillBook
        gradeLabel="ປ.5"
        title="ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"
        subtitle="ແບບຝຶກຫັດຄະນິດສາດ ປ.5"
        units={unitsData5}
      />
    </main>
  );
}
