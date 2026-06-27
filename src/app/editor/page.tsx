"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function EditorPage() {
  const [selectedGrade, setSelectedGrade] = useState("grade1");
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [drillData, setDrillData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Load drill data
  const loadDrill = async (grade: string, unit: number) => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch(`http://localhost:3001/load?grade=${grade}&unit=${unit}`);
      const result = await res.json();
      if (res.ok) {
        setDrillData(result.data);
      } else {
        setDrillData(null);
        setMessage({ type: "error", text: result.error || "Failed to load drill data." });
      }
    } catch (err) {
      setDrillData(null);
      setMessage({ type: "error", text: "Network error loading drill data. Is the editor server running?" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDrill(selectedGrade, selectedUnit);
  }, [selectedGrade, selectedUnit]);

  // Handle nested text/numeric field change
  const handleFieldChange = (path: string[], value: any) => {
    if (!drillData) return;
    const updated = { ...drillData };
    let current = updated;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    current[path[path.length - 1]] = typeof value === "number" ? Number(value) : value;
    setDrillData(updated);
  };

  // Save changes
  const saveDrill = async () => {
    if (!drillData) return;
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("http://localhost:3001/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grade: selectedGrade,
          unit: selectedUnit,
          data: drillData,
        }),
      });
      const result = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: "Saved successfully!" });
        // Refresh preview iframe if visible
        const iframe = document.getElementById("preview-frame") as HTMLIFrameElement;
        if (iframe) {
          iframe.src = iframe.src;
        }
      } else {
        setMessage({ type: "error", text: result.error || "Failed to save." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Network error saving data." });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1e1e2f 0%, #111119 100%)",
      color: "#f5f5fa",
      fontFamily: "var(--font-lao), sans-serif",
      padding: "20px"
    }}>
      {/* Header */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        background: "rgba(30, 30, 47, 0.7)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        marginBottom: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#64b5f6", fontWeight: "bold" }}>
            ← Back to Home
          </Link>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
            Drill Content Editor ✏️
          </h1>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#2a2a40",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer"
            }}
          >
            <option value="grade1">Grade 1 (ປ.1)</option>
            <option value="grade2">Grade 2 (ປ.2)</option>
            <option value="grade3">Grade 3 (ປ.3)</option>
          </select>
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(Number(e.target.value))}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background: "#2a2a40",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer"
            }}
          >
            {Array.from({ length: 18 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>Unit {num}</option>
            ))}
          </select>
          <button
            onClick={saveDrill}
            disabled={saving || !drillData}
            style={{
              padding: "8px 24px",
              borderRadius: "8px",
              background: "#4caf50",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              opacity: saving || !drillData ? 0.6 : 1,
              transition: "transform 0.2s"
            }}
          >
            {saving ? "Saving..." : "Save to Disk 💾"}
          </button>
        </div>
      </header>

      {message && (
        <div style={{
          padding: "12px 20px",
          borderRadius: "8px",
          marginBottom: "20px",
          background: message.type === "success" ? "rgba(76, 175, 80, 0.2)" : "rgba(244, 67, 54, 0.2)",
          border: `1px solid ${message.type === "success" ? "#4caf50" : "#f44336"}`,
          color: message.type === "success" ? "#81c784" : "#e57373",
          fontWeight: "bold"
        }}>
          {message.text}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", height: "calc(100vh - 140px)" }}>
        {/* Editor Form Section */}
        <div style={{
          background: "rgba(30, 30, 47, 0.5)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          overflowY: "auto"
        }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>Loading drill configuration...</div>
          ) : !drillData ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#aaa" }}>
              No JSON file found for this unit. Ensure the unit has been migrated.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Unit Meta */}
              <div>
                <h3 style={{ borderBottom: "1px solid #444", paddingBottom: "8px", color: "#64b5f6" }}>Unit Basic Information</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>Unit Title (Lao)</span>
                    <input
                      type="text"
                      value={drillData.unitTitle}
                      onChange={(e) => handleFieldChange(["unitTitle"], e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>Unit Goal</span>
                    <textarea
                      value={drillData.unitGoal}
                      onChange={(e) => handleFieldChange(["unitGoal"], e.target.value)}
                      rows={2}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>Textbook Reference</span>
                    <input
                      type="text"
                      value={drillData.textbookRef}
                      onChange={(e) => handleFieldChange(["textbookRef"], e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                </div>
              </div>

              {/* Key Points */}
              <div>
                <h3 style={{ borderBottom: "1px solid #444", paddingBottom: "8px", color: "#64b5f6" }}>Key Points (ຮຽນຮູ້ສິ່ງໃໝ່)</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>Explanation Paragraph</span>
                    <textarea
                      value={drillData.keyPoints.paragraph}
                      onChange={(e) => handleFieldChange(["keyPoints", "paragraph"], e.target.value)}
                      rows={2}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <label>
                      <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>🐶 Dog Count</span>
                      <input
                        type="number"
                        value={drillData.keyPoints.dogCount}
                        onChange={(e) => handleFieldChange(["keyPoints", "dogCount"], Number(e.target.value))}
                        style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                      />
                    </label>
                    <label>
                      <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>🐱 Cat Count</span>
                      <input
                        type="number"
                        value={drillData.keyPoints.catCount}
                        onChange={(e) => handleFieldChange(["keyPoints", "catCount"], Number(e.target.value))}
                        style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                      />
                    </label>
                  </div>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>Result Text Label</span>
                    <input
                      type="text"
                      value={drillData.keyPoints.resultText}
                      onChange={(e) => handleFieldChange(["keyPoints", "resultText"], e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>Hint Text</span>
                    <input
                      type="text"
                      value={drillData.keyPoints.hintText}
                      onChange={(e) => handleFieldChange(["keyPoints", "hintText"], e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                </div>
              </div>

              {/* Basic Problems */}
              <div>
                <h3 style={{ borderBottom: "1px solid #444", paddingBottom: "8px", color: "#64b5f6" }}>Basic Problems (ບົດຝຶກຫັດພື້ນຖານ)</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>P1 Question Title</span>
                    <input
                      type="text"
                      value={drillData.basicProblems.p1Title}
                      onChange={(e) => handleFieldChange(["basicProblems", "p1Title"], e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                    <label>
                      <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>🚗 vs 🚲 (Item 1 Count)</span>
                      <input
                        type="number"
                        value={drillData.basicProblems.p1Item1Count}
                        onChange={(e) => handleFieldChange(["basicProblems", "p1Item1Count"], Number(e.target.value))}
                        style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                      />
                    </label>
                    <label>
                      <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>🚗 vs 🚲 (Item 2 Count)</span>
                      <input
                        type="number"
                        value={drillData.basicProblems.p1Item2Count}
                        onChange={(e) => handleFieldChange(["basicProblems", "p1Item2Count"], Number(e.target.value))}
                        style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                      />
                    </label>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                    <label>
                      <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>🍎 vs 🍌 (Item 1 Count)</span>
                      <input
                        type="number"
                        value={drillData.basicProblems.p2Item1Count}
                        onChange={(e) => handleFieldChange(["basicProblems", "p2Item1Count"], Number(e.target.value))}
                        style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                      />
                    </label>
                    <label>
                      <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>🍎 vs 🍌 (Item 2 Count)</span>
                      <input
                        type="number"
                        value={drillData.basicProblems.p2Item2Count}
                        onChange={(e) => handleFieldChange(["basicProblems", "p2Item2Count"], Number(e.target.value))}
                        style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Answers */}
              <div>
                <h3 style={{ borderBottom: "1px solid #444", paddingBottom: "8px", color: "#64b5f6" }}>Answers & Advice</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>Advice Box Text</span>
                    <textarea
                      value={drillData.answers.advice}
                      onChange={(e) => handleFieldChange(["answers", "advice"], e.target.value)}
                      rows={2}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>P1-1 Answer</span>
                    <input
                      type="text"
                      value={drillData.answers.a1_1}
                      onChange={(e) => handleFieldChange(["answers", "a1_1"], e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                  <label>
                    <span style={{ fontSize: "0.85rem", color: "#aaa", display: "block", marginBottom: "4px" }}>P1-2 Answer</span>
                    <input
                      type="text"
                      value={drillData.answers.a1_2}
                      onChange={(e) => handleFieldChange(["answers", "a1_2"], e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "#202030", border: "1px solid #444", color: "#fff" }}
                    />
                  </label>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Live Preview Section */}
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{
            background: "#f0f0f5",
            padding: "8px 16px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#333",
            fontWeight: "bold"
          }}>
            <span>Live Layout Preview 👁️</span>
            <button
              onClick={() => {
                const iframe = document.getElementById("preview-frame") as HTMLIFrameElement;
                if (iframe) iframe.src = iframe.src;
              }}
              style={{ padding: "4px 8px", background: "#ddd", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "0.8rem" }}
            >
              Refresh
            </button>
          </div>
          <iframe
            id="preview-frame"
            src={`/${selectedGrade}`}
            style={{ width: "100%", height: "100%", border: "none", background: "#f8f9fa" }}
          />
        </div>
      </div>
    </div>
  );
}
