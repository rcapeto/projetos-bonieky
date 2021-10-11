export interface Item {
   category: string;
   date: Date;
   value: number;
   title: string;
};

export interface Categories {
   [key: string] : {
      title: string;
      color: string;
      expense: boolean;
   }
}