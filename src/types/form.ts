import { iPerson } from "./person";

export interface iForm {
  onSubmit: (data: iPerson) => void;
}