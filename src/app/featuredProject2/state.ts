export interface IFeaturedProject2State {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const FeaturedProject2DefaultState = (): IFeaturedProject2State => {
  return {
    incrementPending: false,
    decrementPending: false,
    count: 0,
  };
};
