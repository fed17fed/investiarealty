"use client";
import Select from "react-select";
import PriceRange from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import Condition from "./Condition";
import { useRouter } from "next/navigation";

const AdvanceFilterModal = () => {
  const router = useRouter();
  const catOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
  ];
  const locationOptions = [
    { value: "1", label: "2000-2005" },
    { value: "2", label: "2006-2010" },
    { value: "3", label: "2011-2015" },
    { value: "4", label: "2016-2020" },
    { value: "5", label: "2020-2022" },
    { value: "6", label: "2023-2024" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#6c757d"
          : isHovered
          ? "#728597"
          : isFocused
          ? "#728597"
          : undefined,
      };
    },
  };

  return (
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header pl30 pr30">
          <h5 className="modal-title" id="exampleModalLabel">
            Больше фильтров
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* End modal-header */}

        <div className="modal-body pb-0">
          <div className="row">
          <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Площадь объекта, м²</h6>
                <div className="space-area">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-style1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Мін"
                      />
                    </div>
                    <span className="dark-color">-</span>
                    <div className="form-style1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Макс"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Площадь участка, м²</h6>
                <div className="space-area">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form-style1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Мін"
                      />
                    </div>
                    <span className="dark-color">-</span>
                    <div className="form-style1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Макс"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>   
          </div>         

          <div className="row">            
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Количество этажей</h6>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[catOptions[1]]}
                    name="colors"
                    options={catOptions}
                    styles={customStyles}
                    className="select-custom"
                    classNamePrefix="select"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Год постройки</h6>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[locationOptions[0]]}
                    name="colors"
                    styles={customStyles}
                    options={locationOptions}
                    className="select-custom"
                    classNamePrefix="select"
                    required
                  />
                </div>
              </div>
            </div>                       
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="widget-wrapper mb0">
                <h6 className="list-title mb10">Состояние</h6>
              </div>
            </div>
            <Condition />
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="widget-wrapper mb0">
                <h6 className="list-title mb10">Другие особенности</h6>
              </div>
            </div>
            <Amenities />
          </div>
        </div>
        {/* End modal body */}

        <div className="modal-footer justify-content-between">
          <button className="reset-button">
            <span className="flaticon-turn-back" />
            <u>Сбросить все фильтры</u>
          </button>
          <div className="btn-area filter_modal_btn">
            <button data-bs-dismiss="modal" type="submit" className="ud-btn btn-thm" onClick={() => router.push("/grid-default")} >
              <span className="flaticon-search align-text-top pr10" />
                Искать
            </button>
          </div>
        </div>
        {/* End modal-footer */}
      </div>
    </div>
  );
};

export default AdvanceFilterModal;
