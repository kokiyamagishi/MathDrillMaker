"use client";

import React, { createContext, useContext } from "react";

interface EditorContextProps {
  isEditing: boolean;
}

export const EditorContext = createContext<EditorContextProps>({
  isEditing: false,
});

export const useEditor = () => useContext(EditorContext);
