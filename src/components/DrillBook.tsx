"use client";

import React, { useState } from "react";
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
import { EditorContext } from "./EditorContext";

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
  isScience?: boolean;
}

export const DrillBook: React.FC<DrillBookProps> = ({
  gradeLabel,
  title,
  subtitle,
  units,
  isScience = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

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

  // Grade mapping to directory name
  const gradeMap: Record<string, string> = {
    "ປ.1": "grade1",
    "ປ.2": "grade2",
    "ປ.3": "grade3",
    "ປ.4": "grade4",
    "ປ.5": "grade5",
    "ມ.1": "secondary1",
    "ມ.2": "secondary2",
    "ມ.3": "secondary3",
    "ມ.4": "secondary4",
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const gradeDir = gradeMap[gradeLabel] || "grade1";
      // We only support saving Unit 1 currently since it's the only one backed by JSON
      // In the future, we can load dynamically or detect unit from elements.
      const targetUnit = 1;

      // 1. Fetch current JSON from the server to get original structure
      const loadRes = await fetch(`http://localhost:3001/load?grade=${gradeDir}&unit=${targetUnit}`);
      if (!loadRes.ok) {
        throw new Error("Could not fetch original unit data. Is the editor server running?");
      }
      const { data } = await loadRes.json();

      // 2. Read values from DOM contentEditable and number inputs
      const editableElements = document.querySelectorAll("[data-path]");
      editableElements.forEach((el) => {
        const pathStr = el.getAttribute("data-path");
        if (!pathStr) return;
        const path = pathStr.split(".");
        
        // Extract text or value
        let val: any;
        const type = el.getAttribute("data-type");
        if (type === "number") {
          val = Number((el as HTMLInputElement).value || 0);
        } else {
          val = el.textContent || "";
        }

        // Apply path nesting updates
        let current = data;
        for (let i = 0; i < path.length - 1; i++) {
          if (!current[path[i]]) current[path[i]] = {};
          current = current[path[i]];
        }
        current[path[path.length - 1]] = val;
      });

      // 3. POST JSON back to disk
      const saveRes = await fetch("http://localhost:3001/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grade: gradeDir,
          unit: targetUnit,
          data,
        }),
      });

      if (!saveRes.ok) {
        throw new Error("Failed to write to disk.");
      }

      alert("🎉 saved successfully! Reloading page...");
      setIsEditing(false);
      window.location.reload();
    } catch (err: any) {
      console.error(err);
      alert(`Error saving changes: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <EditorContext.Provider value={{ isEditing }}>
      {/* Editor Styles and Floating Toolbar */}
      <style jsx global>{`
        @media print {
          .editor-toolbar {
            display: none !important;
          }
        }
      `}</style>
      
      <div className="editor-toolbar" style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
        display: "flex",
        gap: "10px",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
        padding: "12px 18px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        alignItems: "center",
        fontFamily: "sans-serif"
      }}>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#2196F3",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            ✏️ Edit Content
          </button>
        ) : (
          <>
            <span style={{ fontSize: "13px", color: "#666", fontWeight: "bold" }}>Editing Mode</span>
            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: "#4CAF50",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
                opacity: saving ? 0.7 : 1
              }}
            >
              {saving ? "Saving..." : "💾 Save Changes"}
            </button>
            <button
              onClick={() => {
                if (confirm("Discard unsaved changes?")) {
                  setIsEditing(false);
                  window.location.reload();
                }
              }}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: "#f44336",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px"
              }}
            >
              ❌ Cancel
            </button>
          </>
        )}
      </div>

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
                      isScience={isScience}
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
                  isScience={isScience}
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
    </EditorContext.Provider>
  );
};
