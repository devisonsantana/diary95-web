import type { Entry } from "@/types/entry";
import { createContext, useContext, useEffect, useReducer } from "react";

const STORAGE_KEY = "diary:entries";

function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

type Action =
  | { type: "ADD_ENTRY"; payload: Entry }
  | { type: "UPDATE_ENTRY"; payload: Entry }
  | { type: "DELETE_ENTRY"; payload: { id: string } };

function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case "ADD_ENTRY":
      return { ...state, entries: [action.payload, ...state.entries] };

    case "UPDATE_ENTRY":
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry.id === action.payload.id ? action.payload : entry,
        ),
      };

    case "DELETE_ENTRY":
      return {
        ...state,
        entries: state.entries.filter(
          (entry) => entry.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

type AppState = {
  entries: Entry[];
};

type AppContextValue = AppState & {
  dispatch: React.Dispatch<Action>;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

const initialState: AppState = {
  entries: loadEntries(),
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.entries));
  }, [state.entries]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used inside of AppProvider");
  }
  return ctx;
}
