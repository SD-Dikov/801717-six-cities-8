export type Location = {
    latitude: number,
    longitude: number,
    zoom: number,
  };

export type City = {
    location: Location,
    name: string
  };

export type Goods = string;

export type Host = {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  };

export type Images = string;

export type Offer = {
    bedrooms: number,
    city: City,
    description: string,
    goods: Goods[],
    host: Host,
    id: number,
    images: Images[],
    isFavorite: boolean,
    isPremium: boolean,
    location: Location,
    maxAdults: number,
    previewImage: string,
    price: number,
    rating: number,
    title: string,
    type: string
  };

export type Offers = Offer[];
