export interface MenuItem {
  id: number;
  imageSource: string;
  title: string;
  price: number;
  quantity?: number;
  isAvailable?: boolean;
  isAdvertised?: boolean;
}

export interface ProductProps {
  id: number;
  imageSource: string;
  title: string;
  leftDescription: string; // prix FORMATÉ
}