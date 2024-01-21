import {Addiction} from "@/types/Addiction";
import {SeverityLevel} from "@/types/SeverityLevel";

const EFFECTS: Record<Addiction, Record<SeverityLevel, string>> = {
  [Addiction.drinking]: {
    [SeverityLevel.none]: "drinking - none",
    [SeverityLevel.low]: "drinking - low",
    [SeverityLevel.medium]: "drinking - medium",
    [SeverityLevel.high]: "drinking - high",
  },
  [Addiction.music]: {
    [SeverityLevel.none]: "music - none",
    [SeverityLevel.low]: "music - low",
    [SeverityLevel.medium]: "music - medium",
    [SeverityLevel.high]: "music - high",
  },
  [Addiction.smoking]: {
    [SeverityLevel.none]: "smoking - none",
    [SeverityLevel.low]: "smoking - low",
    [SeverityLevel.medium]: "smoking - medium",
    [SeverityLevel.high]: "smoking - high",
  },
  [Addiction.drugs]: {
    [SeverityLevel.none]: "drugs - none",
    [SeverityLevel.low]: "drugs - low",
    [SeverityLevel.medium]: "drugs - medium",
    [SeverityLevel.high]: "drugs - high",
  },
  [Addiction.energyDrinks]: {
    [SeverityLevel.none]: "energy drinks - none",
    [SeverityLevel.low]: "energy drinks - low",
    [SeverityLevel.medium]: "energy drinks - medium",
    [SeverityLevel.high]: "energy drinks - high",
  }
}

export const resolveSeverityEffect = (addiction: Addiction, level: SeverityLevel) => {
  return EFFECTS[addiction][level];
}