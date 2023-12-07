'use client'

import React from "react";

const TopFilterBar = ({setCurrentSortingOption,setColstyle,colstyle,pageContentTrac}) => {
  return (
    <>
      <div className="col-sm-6">
        <div className="text-center text-sm-start">
          <p className="pagination_page_count mb-0">
          Показывать {pageContentTrac[0]}–{pageContentTrac[2] < pageContentTrac[1] ? pageContentTrac[2] : pageContentTrac[1]} of {pageContentTrac[2]} результаты
          </p>
        </div>
      </div>
      {/* End .col-sm-6 */}

      <div className="col-sm-6">
        <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
          <div className="pcs_dropdown pr10 d-flex align-items-center">
            <span style={{ minWidth: "60px" }}>Сортировать</span>
            <select className="form-select"  onChange={(e)=>setCurrentSortingOption && setCurrentSortingOption(e.target.value)} >
               {/* <option>По новизне</option>
               <option>Бестселлер</option>
               <option>Лучшее совпадение</option>
               <option>Низкая цена</option>
               <option>Высокая цена</option> */}
              <option>Newest</option>
              <option>Best Seller</option>
              <option>Best Match</option>
              <option>Price Low</option>
              <option>Price High</option>
            </select>
          </div>
          <div className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block cursor  ${!colstyle? 'menuActive':'#' } `}  onClick={()=>setColstyle(false)}>
            Сетка
          </div>
          <div className={`pl15 d-none d-md-block cursor  ${colstyle? 'menuActive':'#' }`}   onClick={()=>setColstyle(true)}>
            Список
          </div>
        </div>
      </div>
      {/* End .col-sm-6 */}
    </>
  );
};

export default TopFilterBar;
