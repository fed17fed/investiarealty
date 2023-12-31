const Amenities = () => {
  const amenities = [
    [
      { label: "Мебель" },
      { label: "Паркинг", defaultChecked: true },
      { label: "Сигнализация"},
      { label: "Водоснабжение", defaultChecked: true },
      { label: "Санузел", defaultChecked: true },
    ],
    [
      { label: "Оборудование" },
      { label: "Интернет" },
      { label: "Видеонаблюдение" },
      { label: "Кухня" },
      { label: "Душевые" },
    ],
    [
      { label: "Кондиционер" },
      { label: "Телефон" },
      { label: "Электроснабжение" },
      { label: "Комнаты" },
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

export default Amenities;
