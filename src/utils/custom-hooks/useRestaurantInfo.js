import { useEffect, useState } from "react";
import { RES_INFO_API_URL } from "../constants";
import { useParams } from "react-router";

const useRestaurantInfo = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const data = await fetch(RES_INFO_API_URL(resId));
    const json = await data.json();
    setResInfo(json?.data?.cards);
  };

  return resInfo;
};

export default useRestaurantInfo;
