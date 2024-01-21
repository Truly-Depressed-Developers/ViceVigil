import {Addiction} from "@/types/Addiction";
import {SeverityLevel} from "@/types/SeverityLevel";

const EFFECTS: Record<Addiction, Record<SeverityLevel, string>> = {
  [Addiction.drinking]: {
    [SeverityLevel.none]: "None - no interaction with the user",
    [SeverityLevel.low]: "Low - shows a reminder if user is detected to be under the influence",
    [SeverityLevel.medium]: "Medium - ",
    [SeverityLevel.high]: "High - ",
  },
  [Addiction.music]: {
    [SeverityLevel.none]: "None - no interaction with the user",
    [SeverityLevel.low]: "Low - ",
    [SeverityLevel.medium]: "Medium - ",
    [SeverityLevel.high]: "High - ",
  },
  [Addiction.smoking]: {
    [SeverityLevel.none]: "None - no interaction with the user",
    [SeverityLevel.low]: "Low - ",
    [SeverityLevel.medium]: "Medium - ",
    [SeverityLevel.high]: "High - ",
  },
  [Addiction.drugs]: {
    [SeverityLevel.none]: "None - no interaction with the user",
    [SeverityLevel.low]: "Low - ",
    [SeverityLevel.medium]: "Medium - ",
    [SeverityLevel.high]: "High - ",
  },
  [Addiction.energyDrinks]: {
    [SeverityLevel.none]: "None - no interaction with the user",
    [SeverityLevel.low]: "Low - ",
    [SeverityLevel.medium]: "Medium - ",
    [SeverityLevel.high]: "High - ",
  },
  [Addiction.doomScrolling]: {
    [SeverityLevel.none]: "None - no interaction with the user",
    [SeverityLevel.low]: "Low - shows warnings when recommended time is exceeded",
    [SeverityLevel.medium]: "Medium - before certain apps open, there is now a timeout screen",
    [SeverityLevel.high]: "High - closes certain apps if recommended time is exceeded",
  }
}

export const resolveSeverityEffect = (addiction: Addiction, level: SeverityLevel) => {
  return EFFECTS[addiction][level];
}