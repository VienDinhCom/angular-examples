import { Draft } from "immer";
import { CoolStore } from "./cool-store";

interface AsyncCoolState<Data, Error> {
  loading: boolean;
  data: Data | null;
  error: Error | null;
}

export class AsyncCoolStore<Data, Error> extends CoolStore<
  AsyncCoolState<Data, Error>
> {
  emitRequest(data?: Draft<Data>) {
    this.setState(state => {
      state.loading = true;
      state.error = null;

      if (data !== undefined) {
        state.data = data;
      }
    });
  }

  emitSuccess(data: Draft<Data>) {
    this.setState(state => {
      state.loading = false;
      state.error = null;
      state.data = data;
    });
  }

  emitFailure(error: Draft<Error>, data?: Draft<Data>) {
    this.setState(state => {
      state.loading = false;
      state.error = error;

      if (data !== undefined) {
        state.data = data;
      }
    });
  }
}
