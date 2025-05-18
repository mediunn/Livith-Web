export type StateWithSetter<T> = {
  value: T;
  setValue: (value: T) => void;
};
