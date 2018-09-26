export interface Bloc {
  title: string;
  data: BlocData[];
}

export interface BlocData {
  title?: string;
  date?: {
    from: string;
    to?: string;
  };
  content: BlocDataContent;
}

export interface BlocDataContent {
  title?: string;
  summary?: string;
  list?: string[];
}
