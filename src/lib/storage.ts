// Utils para Local Storage

export interface UserPreferences {
  name?: string;
  weight?: number;
  height?: number;
  goal?: string;
}

export interface ActivityHistory {
  id: string;
  title: string;
  date: string;
  duration: number;
  calories: number;
}

export interface ProgressEntry {
  date: string;
  weight: number;
  notes?: string;
}

const PREFERENCES_KEY = 'fitlife_preferences';
const HISTORY_KEY = 'fitlife_history';
const PROGRESS_KEY = 'fitlife_progress';

export const storage = {
  // Preferências do usuário
  getPreferences(): UserPreferences {
    if (typeof window === 'undefined') return {};
    const data = localStorage.getItem(PREFERENCES_KEY);
    return data ? JSON.parse(data) : {};
  },

  setPreferences(preferences: UserPreferences): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
  },

  // Histórico de atividades
  getActivityHistory(): ActivityHistory[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  },

  addActivityToHistory(activity: ActivityHistory): void {
    if (typeof window === 'undefined') return;
    const history = this.getActivityHistory();
    history.push(activity);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  },

  // Progresso de peso
  getProgress(): ProgressEntry[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(PROGRESS_KEY);
    return data ? JSON.parse(data) : [];
  },

  addProgressEntry(entry: ProgressEntry): void {
    if (typeof window === 'undefined') return;
    const progress = this.getProgress();
    progress.push(entry);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  },
};