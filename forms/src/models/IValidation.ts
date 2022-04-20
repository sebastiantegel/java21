export interface IValidation {
  age: IAgeValidation;
}

export interface IAgeValidation {
  error: boolean;
  message: string;
}
