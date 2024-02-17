import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../redux/operations";
import { СarCard } from "./СarCard/СarCard";
import { selectAdverts } from "../../redux/selectors";

export const CarList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAll({ page: 1, limit: 12 }));
  }, [dispatch]);

  return (
    <div>
      {adverts.map((item) => (
        <СarCard key={item.id} item={item} />
      ))}
    </div>
  );
};
