import { ToolGrid } from './components/ToolGrid';
import { Workspace } from './components/Workspace';
import { useDocbitStore } from './store';

export function App() {
  const activeTool = useDocbitStore((s) => s.activeTool);

  return (
    <div className="min-h-screen bg-bg text-slate-100">
      <ToolGrid />
      {activeTool && <Workspace />}
    </div>
  );
}
