import { AppDefaultState, IAppState } from './app/state';
import { AuthDefaultState, IAuthState } from './shared/modules/auth/state';
import { ICounterState } from './counter/state';
import { IFeaturedProject1State } from './featuredProject1/state';
import { IFeaturedProject2State } from './featuredProject2/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  auth?: IAuthState;
  counter?: ICounterState;
  featuredProject1?: IFeaturedProject1State;
  featuredProject2?: IFeaturedProject2State;
}

export const DefaultState: IState = {
  app: {
    ...AppDefaultState(),
    ...AuthDefaultState(),
  },
};
