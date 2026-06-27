import React from "react";
import {
  FruitGraph,
  AnimalTable,
  VerticalMath,
  Ruler,
  PlaceValueTable,
  Shape,
  TapeDiagram,
  LaoBanknote,
} from "@/components/illustrations";

import { unit1Data } from "./units2/unit1";
import { unit2Data } from "./units2/unit2";
import { unit3Data } from "./units2/unit3";
import { unit4Data } from "./units2/unit4";
import { unit5Data } from "./units2/unit5";
import { unit6Data } from "./units2/unit6";
import { unit7Data } from "./units2/unit7";
import { unit8Data } from "./units2/unit8";
import { unit9Data } from "./units2/unit9";
import { unit10Data } from "./units2/unit10";
import { unit11Data } from "./units2/unit11";
import { unit12Data } from "./units2/unit12";
import { unit13Data } from "./units2/unit13";
import { unit14Data } from "./units2/unit14";
import { unit15Data } from "./units2/unit15";

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
  problems: {
    number: number;
    content: React.ReactNode;
  }[];
}

export interface UnitData {
  unitNumber: number;
  unitTitle: string;
  unitGoal: string;
  textbookRef: string;
  keyPoints?:
    | {
        title?: string;
        content: React.ReactNode;
        hint?: {
          text: string;
          isBlue?: boolean;
        };
      }
    | {
        title?: string;
        content: React.ReactNode;
        hint?: {
          text: string;
          isBlue?: boolean;
        };
      }[];
  basicProblems?: {
    number: number;
    content: React.ReactNode;
  }[];
  subSections?: SubSection[];
  challengeProblems: {
    problems: {
      number: number;
      content: React.ReactNode;
    }[];
    hintIndex?: number;
    hintText: string;
  };
  summaryProblems: {
    number: number;
    content: React.ReactNode;
  }[];
  answers: {
    items: {
      questionNumber: number | string;
      answers: React.ReactNode[];
    }[];
    advice: string | React.ReactNode;
  };
}

export const unitsData: UnitData[] = [
  unit1Data,
  unit2Data,
  unit3Data,
  unit4Data,
  unit5Data,
  unit6Data,
  unit7Data,
  unit8Data,
  unit9Data,
  unit10Data,
  unit11Data,
  unit12Data,
  unit13Data,
  unit14Data,
  unit15Data,
];
