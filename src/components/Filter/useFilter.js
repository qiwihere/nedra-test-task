import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearFilter } from "../../store/actions";

export default function useFilter() {
  const { filter, collection, selectedItems } = useSelector(
    (state) => state.collection
  );
  const dispatch = useDispatch();

  const onChange = (event) => {
    const { id, value } = event;
    dispatch(setFilter(id, value));
  };

  const filterAvailable = !!Object.values(filter).filter((v) => !!v).length;
  const resetAvailable = !(collection.length === selectedItems.length);

  const clear = () => dispatch(clearFilter());

  return { filter, onChange, clear, filterAvailable, resetAvailable };
}
