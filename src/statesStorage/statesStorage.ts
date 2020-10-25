import { Dispatch, SetStateAction } from "react";

type SetStateType = Dispatch<SetStateAction<any>>;
type StatesStorageType = Record<string, { state: any, setState: SetStateType }>;

interface IStatesStorageType {
  registState<T>(stateKeyName: string, value: { state: T, setState: SetStateType }): void;
  getState<T>(stateKeyName: string): T | undefined;
  setState(stateKeyName: string, value: any): void;
  getStateStorage(): StatesStorageType;
}

const stateKeyNameError = "Write a name of a state.";

/**
  * @description The main class to create new storage with states specific module.
  * @example ```typescript
    const CommonStateStorage = new StateStorage({
      language: {
        state: "en",
        setState: Dispatch<SetStateAction<any»
      }
    });
  ```
*/
class StatesStorage implements IStatesStorageType {
  private statesStorage: StatesStorageType;

  constructor(initialValue: StatesStorageType = {}) {
    this.statesStorage = initialValue;
  }

  /**
  * @description To add new state and setState to the storage.
  * @param stateKeyName - Name of the key in the storage that keeps state and setState.
  * @param value - State and setState received after useState hook.
  */
  registState<T>(stateKeyName: string, value: { state: T, setState: SetStateType }): void {
    if (!stateKeyName) throw new Error(stateKeyNameError);

    this.statesStorage[stateKeyName] = {
      state: value.state,
      setState: value.setState
    };
  }

  /**
  * @description To get state field from the storage collection.
  * @param stateKeyName - Name of the key with state and setState fields.
  * @returns Any type.
  */
  getState<T>(stateKeyName: string): T | undefined {
    if (!stateKeyName) throw new Error(stateKeyNameError);

    try {
      return this.statesStorage[stateKeyName].state;
    } catch (e) {
      return undefined;
    };
  }

  /**
  * @description To change state and re-render tree.
  * @param stateKeyName - Name of the key with state and setState fields.
  * @param value - New state.
  */
  setState(stateKeyName: string, value: any): void {
    const stateKey = this.statesStorage[stateKeyName];
    const stateType = typeof stateKey.state;
    const valueType = typeof value;

    if (!stateKeyName)
      throw new Error(stateKeyNameError);
    if (stateType !== valueType)
      throw new Error(`New value must be ${stateType} type.`);
    if (stateKey.state === value)
      console.warn(`State ${JSON.stringify(stateKey)} has already been given value - ${value}.`);

    stateKey.setState(value);
  }

  getStateStorage(): StatesStorageType {
    return this.statesStorage;
  }
}

export default StatesStorage;