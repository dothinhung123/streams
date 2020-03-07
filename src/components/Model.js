import React from 'react';
import ReactDOM from 'react-dom';

const Model = props =>{
      return ReactDOM.createPortal(<div onClick={props.onDismiss}  className="ui dimmer modals visibel active">
          <div onClick={e=>e.stopPropagation()}className ="ui standard modal visible active">
              <div className="header">Delete Stream</div>
              <div className="content">
                  Are you sure you want to delete this stream
              </div>
              <div className="actions">
                    {props.actions}
              </div>
          </div>
      </div>,
      document.querySelector('#modal')
      )
}
export default Model