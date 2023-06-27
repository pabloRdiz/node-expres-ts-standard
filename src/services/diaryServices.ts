import { DiaryEntry } from "../types";
import diaryData from "./diaries.json";

export const getEntries = (): DiaryEntry[] => diaryData as DiaryEntry[];

export const addEntry = (): null => null;
