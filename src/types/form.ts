import { FormEvent } from "react";

export interface iForm {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}