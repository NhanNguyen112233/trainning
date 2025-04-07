import { ELoadingStatus } from './global.const';

export interface GenericState<T> {
  data: T;
  status: ELoadingStatus;
  errorMsg: string | null;
}
