import { create } from 'zustand';
import type { ProcessTask, ToolId } from './types/tools';

export type WorkspaceSettings = {
  pageSize: 'A3' | 'A4' | 'A5' | 'Letter' | 'Passport' | 'Custom';
  orientation: 'Portrait' | 'Landscape' | 'Auto' | 'Mixed';
  margin: number;
  quality: 'High' | 'Medium' | 'Low';
  background: string;
  format: 'PDF' | 'PNG' | 'JPG';
};

type DocbitState = {
  activeTool: ToolId | null;
  tasks: ProcessTask[];
  settings: WorkspaceSettings;
  openTool: (toolId: ToolId) => void;
  closeTool: () => void;
  enqueueTask: (task: Omit<ProcessTask, 'id' | 'status' | 'progress'>) => string;
  updateTask: (id: string, patch: Partial<ProcessTask>) => void;
  updateSettings: (patch: Partial<WorkspaceSettings>) => void;
};

export const useDocbitStore = create<DocbitState>((set) => ({
  activeTool: null,
  tasks: [],
  settings: {
    pageSize: 'A4',
    orientation: 'Auto',
    margin: 16,
    quality: 'High',
    background: '#ffffff',
    format: 'PDF',
  },
  openTool: (toolId) => set({ activeTool: toolId }),
  closeTool: () => set({ activeTool: null }),
  enqueueTask: (task) => {
    const id = `task-${Date.now()}-${Math.floor(Math.random() * 1_000)}`;
    set((state) => ({
      tasks: [...state.tasks, { ...task, id, progress: 0, status: 'queued' }],
    }));
    return id;
  },
  updateTask: (id, patch) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...patch } : task)),
    })),
  updateSettings: (patch) =>
    set((state) => ({
      settings: { ...state.settings, ...patch },
    })),
}));
