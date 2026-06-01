import React from "react";
import {
  CoverPage,
  KeyPoints,
  BasicProblems,
  ChallengeProblems,
  UnitSummary,
  AnswerSheet,
  Certificate,
} from "@/components/pages";
import { ProblemData } from "@/components/pages/BasicProblems";

export interface SubSection {
  title: string;
  keyPoint: {
    title?: string;
    content: React.ReactNode;
    hint?: {
      text: string;
      isBlue?: boolean;
    };
  };
  problems: ProblemData[];
}

export interface UnitData {
  unitNumber: number;
  unitTitle: string;
  unitGoal: string;
  textbookRef: string;
  keyPoints?: {
    title?: string;
    content: React.ReactNode;
    hint?: {
      text: string;
      isBlue?: boolean;
    };
  } | {
    title?: string;
    content: React.ReactNode;
    hint?: {
      text: string;
      isBlue?: boolean;
    };
  }[];
  basicProblems?: ProblemData[];
  subSections?: SubSection[];
  challengeProblems: {
    problems: ProblemData[];
    hintIndex?: number;
    hintText?: string | React.ReactNode;
  };
  summaryProblems: ProblemData[];
  answers: {
    items: {
      questionNumber: number | string;
      answers: React.ReactNode[];
    }[];
    advice?: string | React.ReactNode;
  };
}

interface DrillBookProps {
  gradeLabel: string;
  title: string;
  subtitle: string;
  units: UnitData[];
}

export const DrillBook: React.FC<DrillBookProps> = ({
  gradeLabel,
  title,
  subtitle,
  units,
}) => {
  // Pre-calculate page ranges for each unit
  let currentUnitPage = 2;
  const unitPageRanges = units.map((unit) => {
    if (unit.subSections && unit.subSections.length > 0) {
      const numPages = unit.subSections.length * 2 + 2;
      const start = currentUnitPage;
      const end = currentUnitPage + numPages - 1;
      currentUnitPage += numPages;
      return { start, end };
    } else {
      const kpArray = unit.keyPoints
        ? Array.isArray(unit.keyPoints)
          ? unit.keyPoints
          : [unit.keyPoints]
        : [];
      const numPages = kpArray.length + 3;
      const start = currentUnitPage;
      const end = currentUnitPage + numPages - 1;
      currentUnitPage += numPages;
      return { start, end };
    }
  });

  const answerStartPage = currentUnitPage;

  return (
    <div className="drill-book">
      {/* Cover Page */}
      <CoverPage title={title} subtitle={subtitle} />
      
      {/* Unit Pages */}
      {units.map((unit, index) => {
        const startPage = unitPageRanges[index].start;

        if (unit.subSections && unit.subSections.length > 0) {
          const N = unit.subSections.length;
          return (
            <React.Fragment key={unit.unitNumber}>
              {unit.subSections.map((sub, idx) => (
                <React.Fragment key={`sub-${idx}`}>
                  {/* Subsection Key Points */}
                  <KeyPoints
                    pageNumber={startPage + idx * 2}
                    unitNumber={unit.unitNumber}
                    unitTitle={unit.unitTitle}
                    unitGoal={unit.unitGoal}
                    textbookRef={unit.textbookRef}
                    title={sub.title}
                    content={sub.keyPoint.content}
                    hint={sub.keyPoint.hint}
                  />
                  {/* Subsection Basic Problems */}
                  <BasicProblems
                    pageNumber={startPage + idx * 2 + 1}
                    unitNumber={unit.unitNumber}
                    unitTitle={unit.unitTitle}
                    problems={sub.problems}
                  />
                </React.Fragment>
              ))}
              {/* Challenge Problems */}
              <ChallengeProblems
                pageNumber={startPage + N * 2}
                unitNumber={unit.unitNumber}
                unitTitle={unit.unitTitle}
                problems={unit.challengeProblems.problems}
                hintIndex={unit.challengeProblems.hintIndex}
                hintText={unit.challengeProblems.hintText}
              />
              {/* Unit Summary Test */}
              <UnitSummary
                pageNumber={startPage + N * 2 + 1}
                unitNumber={unit.unitNumber}
                unitTitle={unit.unitTitle}
                problems={unit.summaryProblems}
              />
            </React.Fragment>
          );
        }

        const kpArray = unit.keyPoints
          ? Array.isArray(unit.keyPoints)
            ? unit.keyPoints
            : [unit.keyPoints]
          : [];
        
        return (
          <React.Fragment key={unit.unitNumber}>
            {/* Unit Key Points */}
            {kpArray.map((kp, idx) => (
              <KeyPoints
                key={`kp-${idx}`}
                pageNumber={startPage + idx}
                unitNumber={unit.unitNumber}
                unitTitle={unit.unitTitle}
                unitGoal={unit.unitGoal}
                textbookRef={unit.textbookRef}
                title={kp.title}
                content={kp.content}
                hint={kp.hint}
              />
            ))}
            {/* Basic Problems */}
            <BasicProblems
              pageNumber={startPage + kpArray.length}
              unitNumber={unit.unitNumber}
              unitTitle={unit.unitTitle}
              problems={unit.basicProblems || []}
            />
            {/* Challenge Problems */}
            <ChallengeProblems
              pageNumber={startPage + kpArray.length + 1}
              unitNumber={unit.unitNumber}
              unitTitle={unit.unitTitle}
              problems={unit.challengeProblems.problems}
              hintIndex={unit.challengeProblems.hintIndex}
              hintText={unit.challengeProblems.hintText}
            />
            {/* Unit Summary Test */}
            <UnitSummary
              pageNumber={startPage + kpArray.length + 2}
              unitNumber={unit.unitNumber}
              unitTitle={unit.unitTitle}
              problems={unit.summaryProblems}
            />
          </React.Fragment>
        );
      })}

      {/* Answer Sheets (one per unit) */}
      {units.map((unit, index) => {
        const answerPageNumber = answerStartPage + index;
        const answerData = {
          unitNumber: unit.unitNumber,
          unitTitle: unit.unitTitle,
          items: unit.answers.items,
          advice: unit.answers.advice,
          startPage: unitPageRanges[index].start,
          endPage: unitPageRanges[index].end,
        };
        return <AnswerSheet key={`answer-${unit.unitNumber}`} pageNumber={answerPageNumber} unitData={answerData} />;
      })}

      {/* Certificate */}
      <Certificate gradeLabel={gradeLabel} totalUnits={units.length} />
    </div>
  );
};
