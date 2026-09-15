import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { JiraIssueType } from "@/data/types";

export interface TicketDraft {
  id: string;
  createdAt: string;
  issueType: JiraIssueType;
  summary: string;
  description: string;
  source: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface JiraModalState {
  open: boolean;
  issueType: JiraIssueType;
  summary: string;
  description: string;
  source: string;
}

interface BmsState {
  tourDone: boolean;
  setTourDone: (v: boolean) => void;
  chatOpen: boolean;
  setChatOpen: (v: boolean) => void;
  commandOpen: boolean;
  setCommandOpen: (v: boolean) => void;
  jiraBaseUrl: string;
  setJiraBaseUrl: (v: string) => void;
  pdmUrl: string;
  setPdmUrl: (v: string) => void;
  netsuiteUrl: string;
  setNetsuiteUrl: (v: string) => void;
  polarionUrl: string;
  setPolarionUrl: (v: string) => void;
  gitUrl: string;
  setGitUrl: (v: string) => void;
  ukgUrl: string;
  setUkgUrl: (v: string) => void;
  jiraModal: JiraModalState;
  openJira: (partial: Partial<JiraModalState>) => void;
  closeJira: () => void;
  drafts: TicketDraft[];
  addDraft: (draft: Omit<TicketDraft, "id" | "createdAt">) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  recent: string[];
  pushRecent: (id: string) => void;
}

const defaultJira: JiraModalState = {
  open: false,
  issueType: "Internal Discrepancy",
  summary: "",
  description: "",
  source: "Skyryse BMS",
};

const memoryStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useBms = create<BmsState>()(
  persist(
    (set, get) => ({
      tourDone: false,
      setTourDone: (v) => set({ tourDone: v }),
      chatOpen: false,
      setChatOpen: (v) => set({ chatOpen: v }),
      commandOpen: false,
      setCommandOpen: (v) => set({ commandOpen: v }),
      jiraBaseUrl: "https://skyryse.atlassian.net",
      setJiraBaseUrl: (v) => set({ jiraBaseUrl: v }),
      pdmUrl: "https://pdm.skyryse.com",
      setPdmUrl: (v) => set({ pdmUrl: v }),
      netsuiteUrl: "https://system.netsuite.com",
      setNetsuiteUrl: (v) => set({ netsuiteUrl: v }),
      polarionUrl: "https://polarion.skyryse.com",
      setPolarionUrl: (v) => set({ polarionUrl: v }),
      gitUrl: "https://github.com/skyryse",
      setGitUrl: (v) => set({ gitUrl: v }),
      ukgUrl: "https://uv.ultipro.com",
      setUkgUrl: (v) => set({ ukgUrl: v }),
      jiraModal: defaultJira,
      openJira: (partial) =>
        set({ jiraModal: { ...defaultJira, ...partial, open: true } }),
      closeJira: () => set({ jiraModal: { ...get().jiraModal, open: false } }),
      drafts: [],
      addDraft: (draft) =>
        set({
          drafts: [
            {
              ...draft,
              id: `draft-${Date.now()}`,
              createdAt: new Date().toISOString(),
            },
            ...get().drafts,
          ].slice(0, 40),
        }),
      favorites: [],
      toggleFavorite: (id) => {
        const has = get().favorites.includes(id);
        set({
          favorites: has
            ? get().favorites.filter((x) => x !== id)
            : [id, ...get().favorites],
        });
      },
      recent: [],
      pushRecent: (id) =>
        set({
          recent: [id, ...get().recent.filter((x) => x !== id)].slice(0, 12),
        }),
    }),
    {
      name: "skyryse-bms",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
      partialize: (s) => ({
        tourDone: s.tourDone,
        jiraBaseUrl: s.jiraBaseUrl,
        pdmUrl: s.pdmUrl,
        netsuiteUrl: s.netsuiteUrl,
        polarionUrl: s.polarionUrl,
        gitUrl: s.gitUrl,
        ukgUrl: s.ukgUrl,
        drafts: s.drafts,
        favorites: s.favorites,
        recent: s.recent,
      }),
    },
  ),
);
