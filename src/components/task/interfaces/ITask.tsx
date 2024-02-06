import { ITaskHeader } from "./ITaskHeader";
import { ITaskDescription } from "./ITaskDescription";
import { ITaskFooter } from "./ITaskFooter";

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  id?: number;
  priority?: string;
  status?: string;
}