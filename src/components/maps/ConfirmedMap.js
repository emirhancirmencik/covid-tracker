import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";

function ConfirmedMap() {
  const countries = useSelector((state) => state.case.countries);
  const confirmedValues = useSelector((state) => state.case.confirmedValues);
  const isNamesLoading = useSelector((state) => state.case.isNamesLoading);
  const map = useRef(null);
  useEffect(() => {
    if (document.getElementById("svgMap") === null) {
      return;
    }
    console.log(confirmedValues);
    map.current = new svgMap({
      targetElementID: "svgMap",
      data: {
        data: {
          confirmed: {
            name: "Confirmed Cases",
          },
        },
        applyData: "confirmed",
        values: confirmedValues,
      },
    });
    console.log(confirmedValues);
    console.log(map.current);
  }, [isNamesLoading]);

  return (
    <div>
      {isNamesLoading ? (
        "loading..."
      ) : (
        <div className="map" id={"svgMap"}></div>
      )}
    </div>
  );
}

export default ConfirmedMap;
