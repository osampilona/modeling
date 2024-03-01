// Helper types
type Currency = "DKK" | "SEK" | "NOK" | "USD" | "EUR";
type Page = "ACCOUNTS" | "SUPPORT";
type ErrorType = "NETWORK" | "SERVER";

// User State
interface User {
  name: string;
  email: string;
}

type UserState =
  | { status: "authenticated"; user: User }
  | { status: "loading" }
  | { status: "error"; error: ErrorType };

// Account Types
type RegularAccount = {
  type: "REGULAR";
  IBAN: string;
  name: string;
  balance: number;
};

interface PocketAccount {
  type: "POCKET";
  IBAN: string;
  name: string;
  pockets: { [currency in Currency]?: number };
}

type Account = RegularAccount | PocketAccount;

// Page States
interface LoadingState {
  state: "loading";
}

interface ErrorState {
  state: "error";
  error: ErrorType;
}

interface AccountContentState {
  state: "content";
  accounts: Account[];
}

type AccountPageState = AccountContentState | (LoadingState & ErrorState);

interface SupportPageState {
  state: "content";
}

type PageState = AccountPageState | SupportPageState | LoadingState;

// Chat State
interface ChatMessage {
  id: string;
  timestamp: Date;
  sender: "user" | "support";
  text: string;
}

interface Chat {
  status: "minimized" | "open" | "full-screen" | "closed";
  messages: ChatMessage[];
  queuePosition?: number;
  busyInfo?: {
    leastBusy: string;
    mostBusy: string;
  };
}

// Global State
type GlobalState = "loading" | "error";

// App State
interface AppState {
  user: UserState;
  currentPage: Page;
  pageState: {
    accounts: AccountPageState;
    support: SupportPageState;
  };
  chat?: Chat;
  globalState?: GlobalState;
}
