import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectIsLoading,
  selectPage,
  selectTotalCampers,
} from '../../redux/campers/selectors.js';
import VehiclesListItem from '../VehiclesListItem/VehiclesListItem.jsx';
import css from './VehiclesList.module.css';
import { getCampers } from '../../redux/campers/api.js';
import { setPage } from '../../redux/campers/slice.js'; // Імпортуємо екшен setPage
import { useEffect } from 'react';
import Loader from '../Loader/Loader.jsx';
import Button from '../Button/Button.jsx';

const VehiclesList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers); // Масив кемперів
  const totalCampers = useSelector(selectTotalCampers); // Загальна кількість кемперів
  const isLoading = useSelector(selectIsLoading);

  const page = useSelector(selectPage);
  const limit = 4; // Кількість елементів на сторінку
  const totalPages = Math.ceil(totalCampers / limit); // Кількість сторінок
  const buttonIsActive = page < totalPages;

  // Отримуємо фільтри з Redux
  const filters = useSelector(state => state.campers.filters);

  // Використовуємо useEffect для завантаження даних після зміни сторінки або фільтрів
  useEffect(() => {
    dispatch(getCampers({ page, limit, filterParams: filters }));
  }, [dispatch, page, filters]); // Залежності: зміна сторінки або фільтрів

  const loadMore = () => {
    if (buttonIsActive) {
      dispatch(setPage(page + 1)); // Збільшуємо сторінку
    }
  };

  return (
    <>
      {isLoading && !campers.length ? (
        <div className={css.campers_item_list_wrapper}>
          <Loader />
        </div>
      ) : campers.length > 0 ? (
        <div className={css.campers_item_list_wrapper}>
          <ul className={css.campers_item_list}>
            {campers.map(camper => (
              <VehiclesListItem key={camper.id} {...camper} />
            ))}
          </ul>
          {isLoading && <Loader />}

          {buttonIsActive && (
            <Button
              className={isLoading ? css.load_more_button_loading : css.load_more_button}
              text={isLoading ? 'Loading...' : 'Load more'}
              onClick={loadMore}
            />
          )}
        </div>
      ) : (
        <div className={css.campers_item_list_wrapper}>
          <p className={css.no_results_message}>No campers found</p>
        </div>
      )}
    </>
  );
};

export default VehiclesList;
