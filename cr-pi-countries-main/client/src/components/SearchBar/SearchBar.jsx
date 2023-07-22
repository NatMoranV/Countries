import { useDispatch, useSelector } from "react-redux";
import { setId, clearId } from "../../redux/actions";


const SearchBar = ({ onSearch }) => {
  const getRandomID = () => {
    return Math.floor(Math.random() * (826 - 1 + 1) + 1);
  };

  const dispatch = useDispatch();
  const id = useSelector((state) => state.id);

  const handleInputChange = (value) => {
    dispatch(setId(value));
  };

  const handleSearch = () => {
    onSearch(id);
    dispatch(clearId());
  };

  return (
    <div>
      <button onClick={() => onSearch(getRandomID())} />
      <input onChange={handleInputChange} />
      <button onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;