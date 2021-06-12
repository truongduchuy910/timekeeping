import React from "react";
import UI from "./UI";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react/cjs/react.development";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const WORKS_QUERY = gql`
  query ($where: WorkWhereInput) {
    allWorks(where: $where) {
      id
      createdAt
      price
      onTime
    }
  }
`;
export default function SalaryScreen({
  navigation,
  route: {
    params: { screen },
  },
}) {
  if (screen) AsyncStorage.setItem("@screen", screen);
  else AsyncStorage.removeItem("@screen");
  const [where, setWhere] = useState({
    createdAt_lt: null,
    createdAt_gt: null,
  });
  const [diff, setDiff] = useState(0);
  function onChange(month) {
    var date = new Date();
    //
    var lt = new Date(date.getFullYear(), Number(month), 0);

    const createdAt_lt = lt.toISOString();
    //
    var gt = new Date(date.getFullYear(), Number(month) - 1, 0);

    const createdAt_gt = gt.toISOString();
    const t = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diff = Math.round(Math.abs((lt - gt) / t));
    setDiff(diff);
    setWhere({ createdAt_lt, createdAt_gt });

    //
  }
  const {
    loading,
    error,
    data = {},
    previousData = {},
  } = useQuery(WORKS_QUERY, {
    variables: { where },
  });
  const { allWorks = [] } = data || previousData;
  var salary = 0;
  var working = allWorks.length;
  var late = 0;
  allWorks.map((work) => {
    if (!work.onTime) late++;
    salary += work.price * (work.onTime ? 1 : 0.99);
  });
  return (
    <UI
      onChange={onChange}
      salary={salary}
      working={working}
      late={late}
      diff={diff}
    />
  );
}
