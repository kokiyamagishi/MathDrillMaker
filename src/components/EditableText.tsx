"use client";

import React from "react";
import { useEditor } from "./EditorContext";

interface EditableTextProps {
  dataPath: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const EditableText: React.FC<EditableTextProps> = ({ dataPath, children, style }) => {
  const { isEditing } = useEditor();

  return (
    <span
      data-path={dataPath}
      contentEditable={isEditing}
      suppressContentEditableWarning
      style={{
        outline: "none",
        display: isEditing ? "inline-block" : "inline",
        ...(isEditing ? {
          borderBottom: "2px dashed #4caf50",
          backgroundColor: "rgba(76, 175, 80, 0.05)",
          padding: "0 4px",
          borderRadius: "4px",
          cursor: "text",
        } : {}),
        ...style
      }}
    >
      {children}
    </span>
  );
};
