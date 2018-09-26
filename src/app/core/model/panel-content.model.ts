export interface PanelContent {
  header: {
    icon?: string;
    title: string;
  };
  body: {
    type: PanelContentType;
    content: string | string[] | { [key: string]: string }[]
  };
}

export type PanelContentType = 'text' | 'list' | 'rating';
