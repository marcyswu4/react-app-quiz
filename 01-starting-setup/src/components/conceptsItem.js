import React from 'react';

function ConceptsItem(props) {
    return ( 
        <div className="row">
        <ul id="concepts">
          <li className="concept">
            <img src={props.image} alt="TODO: TITLE" />
            <h2>{props.title}</h2>
            <p>{props.decription}</p>
          </li>
        </ul>
      </div>
    )
}

export default ConceptsItem