type ActivePage = "accounts" | "support";
type UserError = "network" | "server";
type AccountType = "regular" | "pocket";
type AccountsError = "network" | "server";
type Currency = "DKK" | "SEK" | "NOK" | "USD" | "EUR";
type ChatStatus = "connecting" | "waiting" | "connected" | "closed";
type ChatWindowState = "minimized" | "open" | "fullscreen";

interface AppState {
  isLoggedIn: boolean;
  user: UserState | null;
  currentPage: ActivePage;
  chat: ChatState;
}

interface UserState {
  loading: boolean;
  name: string | null;
  email: string | null;
  error: UserError | null;
}

interface Message {
  sender: "user" | "agent";
  content: string;
}

interface BusyInfo {
  times: BusyTime[];
  days: BusyDay[];
}

interface BusyDay {
  dayOfWeek:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  level: "low" | "medium" | "high";
}

interface ChatState {
  status: ChatStatus;
  queuePosition: number | null;
  busyInfo: BusyInfo | null;
  thread: Message[] | null;
  windowState: ChatWindowState;
}

interface BusyTime {
  start: string;
  end: string;
}

interface Account {
  type: AccountType;
  name: string;
  iban: string;
  amount: number;
  currency: "DKK";
}

interface AccountsState {
  loading: boolean;
  error: AccountsError | null;
  accounts: Account[];
}

interface Pocket {
  amount: number;
  currency: Currency;
}

interface PocketAccount extends Account {
  type: "pocket";
  pockets: Pocket[];
}

// Runtime check to ensure that we have at least one regular account
function hasRegularAccount(accounts: Account[]): boolean {
  return accounts.some((account) => account.type === "regular");
}
