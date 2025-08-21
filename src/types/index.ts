export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  priority: string;
  createdAt: string;
  dueDate: string | null;
}
