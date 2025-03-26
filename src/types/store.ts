import store from '../store';

// Тип для всего состояния приложения
export type State = ReturnType<typeof store.getState>;

// Тип для dispatch (например, для использования в React компонентах)
export type AppDispatch = typeof store.dispatch;
