export enum Addiction {
  drinking = "drinking",
  smoking = "smoking",
  music = "music",
  energyDrinks = "energy drinks",
  drugs = "drugs"
}

export type AppState = AddictionData[];
type AddictionData = { addiction: Addiction, data: AddictionOccurences[] }

type AddictionOccurences = {
  date: string,
  times: number
}

export type LabelType = {
  date: string,
  label: string
}