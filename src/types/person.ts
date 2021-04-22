type Gender = "Masculino" | "Femenino" | "Otro"

export const genderList: Array<{ value: number, name: Gender }> = [
  {
    value: 0, 
    name: "Masculino"
  },
  {
    value: 1,
    name: "Femenino",
  },
  {
    value: 2,
    name: "Otro",
  },
];

export interface iPerson {
  id: number;
  name: string;
  lastname: string;
  photo: string;
  description: string;
  found: boolean;
  contactTelephone: string;
  contactName: string;
  contactEmail: string;
  lastSeen: string;
  height?: number;
  gender: Gender;
  zone: string;
  coords: string;
  birthday: string;
}

export type iPeople = Array<iPerson>;
