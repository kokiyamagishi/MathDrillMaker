import { DrillBook } from "@/components/DrillBook";
import { secondary3Data } from "@/data/secondary3";

export default function Secondary3Home() {
  return (
    <main style={{ maxWidth: "210mm", margin: "0 auto", padding: "20px" }}>
      <DrillBook
        gradeLabel="ມ.3"
        title="ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"
        subtitle="ແບບຝຶກຫັດຄະນິດສາດ ມ.3"
        units={secondary3Data}
      />
    </main>
  );
}
