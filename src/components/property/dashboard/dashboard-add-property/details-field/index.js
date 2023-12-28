import React from "react";
import MultiSelectField from "./MultiSelectField";
import StructureType from "./StructureType";

const DetailsFiled = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">          
            <StructureType />
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Количество спален
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Количество ванних комнат
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Состояние
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Год постройки
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Площадь объекта, м²
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0"
            />
          </div>
        </div>
        {/* End .col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Площадь участка, м²
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="0"
            />
          </div>
        </div>
        {/* End .col-4 */}

        

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Available from (date)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="99.aa.yyyy"
            />
          </div>
        </div>
       
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Basement
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div>
        

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Extra details
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div>
        

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Roofing
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div>
        

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Exterior Material
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div> */}

        <div className="row">
          <div className="mt20">
            <h4 class="title fz17 mb20">Ваши контакты</h4>
          </div> 
        </div>   

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-4">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Имя
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </div>
            </div>
            {/* End .col-4 */}

            <div className="col-sm-6 col-xl-4">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Телефон
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </div>
            </div>
            {/* End .col-4 */}

            <div className="col-sm-6 col-xl-4">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Эл. почта
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            {/* End .col-4 */}
          </div>
        </div>

        
      </div>
      {/* End .row */}

      {/* <div className="row">
        <MultiSelectField />

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Owner/ Agent nots (not visible on front end)
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="There are many variations of passages."
              defaultValue={""}
            />
          </div>
        </div>        
      </div> */}
    </form>
  );
};

export default DetailsFiled;
