import { PanelContent } from './panel-content.model';
import { Bloc } from './bloc.model';

export interface CV {
  name: string;
  picture?: string;
  jobTitle: string;
  presentation?: string;

  blocs?: Bloc[];
  panels?: PanelContent[];
}
