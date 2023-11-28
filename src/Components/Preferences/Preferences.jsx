import PreferencesMenu from './PreferencesMenu.jsx';

export default function Preferences({
  preferences,
  handleTheme,
  user,
  handleHideLastDeletedTodoNotifications,
  handleDate,
  handleSortType,
  handleShowTodos,
}) {
  return (
    <div className='flex flex-col gap-6'>
      <PreferencesMenu
        preferences={preferences}
        user={user}
        handleTheme={handleTheme}
        handleHideLastDeletedTodoNotifications={
          handleHideLastDeletedTodoNotifications
        }
        handleDate={handleDate}
        handleSortType={handleSortType}
        handleShowTodos={handleShowTodos}
      />

    </div>
  );
}
