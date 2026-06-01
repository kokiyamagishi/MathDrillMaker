import { DrillBook } from "@/components/DrillBook";
import { secondary4Data } from "@/data/secondary4";

export default function Secondary4Home() {
  return (
    <main style={{ maxWidth: "210mm", margin: "0 auto", padding: "20px" }}>
      <DrillBook
        gradeLabel="ມ.4"
        title="ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"
        subtitle="ແບບຝຶກຫັດຄະນິດສາດ ມ.4"
        units={secondary4Data}
      />
    </main>
  );
}
