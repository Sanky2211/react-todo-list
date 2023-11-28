import PreferencesMenu from './PreferencesMenu.jsx';

export default function Preferences({
  preferences,
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
