export interface QuoteFormState {
  status: "idle" | "success" | "error";
  message: string;
  errors: Record<string, string>;
}

export const initialQuoteState: QuoteFormState = {
  status: "idle",
  message: "",
  errors: {},
};
