import {Addiction} from "@/types/Addiction";
import {SeverityLevel} from "@/types/SeverityLevel";

const EFFECTS: Record<Addiction, Record<SeverityLevel, string>> = {
  [Addiction.alkohol]: {
    [SeverityLevel.none]: "alkohol - none",
    [SeverityLevel.low]: "alkohol - low",
    [SeverityLevel.medium]: "alkohol - medium",
    [SeverityLevel.high]: "alkohol - high",
  },
  [Addiction.music]: {
    [SeverityLevel.none]: "music - none",
    [SeverityLevel.low]: "music - low",
    [SeverityLevel.medium]: "music - medium",
    [SeverityLevel.high]: "music - high",
  },
  [Addiction.cigarettes]: {
    [SeverityLevel.none]: "cigarettes - none",
    [SeverityLevel.low]: "cigarettes - low",
    [SeverityLevel.medium]: "cigarettes - medium",
    [SeverityLevel.high]: "cigarettes - high",
  },
  [Addiction.drugs]: {
    [SeverityLevel.none]: "drugs - none",
    [SeverityLevel.low]: "drugs - low",
    [SeverityLevel.medium]: "drugs - medium",
    [SeverityLevel.high]: "drugs - high",
  },
  [Addiction.energizers]: {
    [SeverityLevel.none]: "energizers - none",
    [SeverityLevel.low]: "energizers - low",
    [SeverityLevel.medium]: "energizers - medium",
    [SeverityLevel.high]: "energizers - high",
  }
}

export const resolveSeverityEffect = (addiction: Addiction, level: SeverityLevel) => {
  return EFFECTS[addiction][level];
}