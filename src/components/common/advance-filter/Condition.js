const Condition = () => {
  const amenities = [
    [
      { label: "Новое", defaultChecked: true },
    //   { label: "Хорошее", defaultChecked: true },
    //   { label: "Требуется ремонт" },
    ],
    [
      { label: "Хорошее"},
    //   { label: "Dryer" },
    //   { label: "Outdoor Shower" },
    //   { label: "Washer" },
    ],
    [
      { label: "Требуется ремонт" },
    //   { label: "Wine cellar" },
    //   { label: "Front yard" },
    //   { label: "Refrigerator" },
    ],
  ];

  return (
    <>
      {amenities.map((column, columnIndex) => (
        <div className="col-sm-4" key={columnIndex}>
          <div className="widget-wrapper mb20">
            <div className="checkbox-style1">
              {column.map((amenity, amenityIndex) => (
                <label className="custom_checkbox" key={amenityIndex}>
                  {amenity.label}
                  <input
                    type="checkbox"
                    defaultChecked={amenity.defaultChecked}
                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Condition;
