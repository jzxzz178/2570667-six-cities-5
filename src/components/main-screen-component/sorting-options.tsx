import React from 'react';

export type SortOption =
  | 'popular'
  | 'priceLowToHigh'
  | 'priceHighToLow'
  | 'topRated';

interface SortingOptionsProps {
  selectedSort: SortOption;
  onSortChange: (option: SortOption) => void;
}

const SortingOptions: React.FC<SortingOptionsProps> = ({
  selectedSort,
  onSortChange,
}) => (
  <div className="places__sorting">
    <span className="places__sorting-caption">Sort by</span>
    <select
      className="places__sorting-type"
      value={selectedSort}
      onChange={(e) => onSortChange(e.target.value as SortOption)}
    >
      <option value="popular">Popular</option>
      <option value="priceLowToHigh">Price: low to high</option>
      <option value="priceHighToLow">Price: high to low</option>
      <option value="topRated">Top rated first</option>
    </select>
  </div>
);

export default SortingOptions;
