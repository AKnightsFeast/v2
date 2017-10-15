import React from 'react';

export default ({ selectedmenu, selecteddate, selectedmonth }) => {
    if (selectedmenu == null || selectedmenu.length == 0)
      return <div></div>

    return (
      <div id="card-container">
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-content white-text">
              <div className="card__date">
                <span className="card__date__day">{ selecteddate }</span>
                <span className="card__date__month">{ selectedmonth }</span>
              </div>
              <div className="card__meta">
                <a href="#"><i className="small material-icons">room</i>Savoy dance club</a>
                <time>17th March</time>
              </div>
              <span className="card-title grey-text text-darken-4">Savoy swing up</span>

              <p className="card-subtitle grey-text text-darken-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...lacus eleifend lacinia... go!</p>
              <div className="row card-row">
                <span className="text-darken-2 card-info"><i className="small material-icons">label</i>&nbsp;lindy hop, balboa, charleston</span>
              </div>
              <div className="row card-row">
                <span className="text-darken-2 card-info"><i className="small material-icons">place</i>&nbsp;lindy hop, balboa, charleston</span>
              </div>
              <div className="row card-row">
                <span className="text-darken-2 card-info"><i className="small material-icons">event</i>&nbsp;lindy hop, balboa, charleston</span>
              </div>
              <div className="row card-row">
                <span className="text-darken-2 card-info"><i className="small material-icons">schedule</i>&nbsp;lindy hop, balboa, charleston</span>
              </div>
            </div>
            <div className="card-action">
              <a href="#"><i className="material-icons">&nbsp;language</i>VISIT WEB</a>
              <a href="#" className="card-action-right"><i className="material-icons">&nbsp;share</i>SHARE</a>
            </div>
          </div>
        </div>
      </div>
    )
};