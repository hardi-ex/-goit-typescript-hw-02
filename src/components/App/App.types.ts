type Children = {
  children: React.ReactNode;
};

type Toggle = true | false;

type Cards = {
  [key: string]: any;
};

type APIResponse = {
  results: Cards[];
  total: number;
};

type ModalImage = Cards | null;
