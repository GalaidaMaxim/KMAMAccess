import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useLevel } from "@/redux/selectors";
import { useDispatch } from "react-redux";
import { setLevel } from "@/redux/slises";

export const LevelSelector = () => {
  const dispatch = useDispatch();
  const level = useLevel();

  const setLevelHandler = (value) => {
    dispatch(setLevel(value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel>ОС</InputLabel>
      <Select
        value={level}
        onChange={(event) => setLevelHandler(event.target.value)}
        label="ОС"
      >
        <MenuItem value={"All"}>Всі</MenuItem>
        <MenuItem value={"молодший бакалавр"}>молодший бакалавр</MenuItem>
        <MenuItem value={"бакалавр"}>бакалавр</MenuItem>
        <MenuItem value={"магістр"}>магістр</MenuItem>
      </Select>
    </FormControl>
  );
};
