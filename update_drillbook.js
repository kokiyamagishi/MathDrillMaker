const fs = require('fs');

let content = fs.readFileSync('src/components/DrillBook.tsx', 'utf8');

const oldInterface = `  keyPoints: {
    content: React.ReactNode;
    hint?: {
      text: string;
      isBlue?: boolean;
    };
  };`;

const newInterface = `  keyPoints: {
    content: React.ReactNode;
    hint?: {
      text: string;
      isBlue?: boolean;
    };
  } | {
    content: React.ReactNode;
    hint?: {
      text: string;
      isBlue?: boolean;
    };
  }[];`;

content = content.replace(oldInterface, newInterface);

const oldMap = `      {/* Unit Pages */}
      {units.map((unit, index) => {
        const basePage = 2 + index * 4;
        
        return (
          <React.Fragment key={unit.unitNumber}>
            {/* Unit Key Points */}
            <KeyPoints
              pageNumber={basePage}
              unitNumber={unit.unitNumber}
              unitTitle={unit.unitTitle}
              unitGoal={unit.unitGoal}
              textbookRef={unit.textbookRef}
              content={unit.keyPoints.content}
              hint={unit.keyPoints.hint}
            />
            {/* Basic Problems */}
            <BasicProblems
              pageNumber={basePage + 1}
              unitNumber={unit.unitNumber}
              unitTitle={unit.unitTitle}
              problems={unit.basicProblems}
            />
            {/* Challenge Problems */}
            <ChallengeProblems
              pageNumber={basePage + 2}
              unitNumber={unit.unitNumber}
              unitTitle={unit.unitTitle}
              problems={unit.challengeProblems.problems}
              hintIndex={unit.challengeProblems.hintIndex}
              hintText={unit.challengeProblems.hintText}
            />
            {/* Unit Summary Test */}
            <UnitSummary
              pageNumber={basePage + 3}
              unitNumber={unit.unitNumber}
              unitTitle={unit.unitTitle}
              problems={unit.summaryProblems}
            />
          </React.Fragment>
        );
      })}`;

const newMap = `      {/* Unit Pages */}
      {(() => {
        let currentPage = 2;
        return units.map((unit) => {
          const kpArray = Array.isArray(unit.keyPoints) ? unit.keyPoints : [unit.keyPoints];
          
          const unitPages = (
            <React.Fragment key={unit.unitNumber}>
              {/* Unit Key Points */}
              {kpArray.map((kp, idx) => (
                <KeyPoints
                  key={\`kp-\${idx}\`}
                  pageNumber={currentPage + idx}
                  unitNumber={unit.unitNumber}
                  unitTitle={unit.unitTitle}
                  unitGoal={unit.unitGoal}
                  textbookRef={unit.textbookRef}
                  content={kp.content}
                  hint={kp.hint}
                />
              ))}
              {/* Basic Problems */}
              <BasicProblems
                pageNumber={currentPage + kpArray.length}
                unitNumber={unit.unitNumber}
                unitTitle={unit.unitTitle}
                problems={unit.basicProblems}
              />
              {/* Challenge Problems */}
              <ChallengeProblems
                pageNumber={currentPage + kpArray.length + 1}
                unitNumber={unit.unitNumber}
                unitTitle={unit.unitTitle}
                problems={unit.challengeProblems.problems}
                hintIndex={unit.challengeProblems.hintIndex}
                hintText={unit.challengeProblems.hintText}
              />
              {/* Unit Summary Test */}
              <UnitSummary
                pageNumber={currentPage + kpArray.length + 2}
                unitNumber={unit.unitNumber}
                unitTitle={unit.unitTitle}
                problems={unit.summaryProblems}
              />
            </React.Fragment>
          );
          
          currentPage += kpArray.length + 3;
          return unitPages;
        });
      })()}`;

content = content.replace(oldMap, newMap);

fs.writeFileSync('src/components/DrillBook.tsx', content, 'utf8');
console.log('DrillBook.tsx updated');
