export interface IFeaturedProject1State {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const FeaturedProject1DefaultState = (): IFeaturedProject1State => {
  return {
    incrementPending: false,
    decrementPending: false,
    count: 0,
  };
};
