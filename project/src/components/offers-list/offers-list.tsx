import { useState } from 'react';
import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offers,
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(offers[0].id);

  return (
    <>
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} onActivate={(id) => setActiveOfferId(id)} />)}
      <p className='visually-hidden'>{activeOfferId}</p>
    </>
  );
}

export default OffersList;
