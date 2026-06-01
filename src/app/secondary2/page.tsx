import { DrillBook } from "@/components/DrillBook";
import { secondary2Data } from "@/data/secondary2";

export default function Secondary2Home() {
  return (
    <main style={{ maxWidth: "210mm", margin: "0 auto", padding: "20px" }}>
      <DrillBook
        gradeLabel="ມ.2"
        title="ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"
        subtitle="ແບບຝຶກຫັດຄະນິດສາດ ມ.2"
        units={secondary2Data}
      />
    </main>
  );
}
