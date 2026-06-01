import { DrillBook } from "@/components/DrillBook";
import { secondary1Data } from "@/data/secondary1";

export default function Secondary1Home() {
  return (
    <main style={{ maxWidth: "210mm", margin: "0 auto", padding: "20px" }}>
      <DrillBook
        gradeLabel="ມ.1"
        title="ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"
        subtitle="ແບບຝຶກຫັດຄະນິດສາດ ມ.1"
        units={secondary1Data}
      />
    </main>
  );
}
