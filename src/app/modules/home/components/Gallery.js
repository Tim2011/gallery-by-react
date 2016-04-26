import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import Figure from './Figure';

import './style.css';

const container = connect(
  (state) => ({
    images: _.get(state, 'images.data')
  }),
)

const Gallery = ({images}) => {
  console.log(images)

  return (
    <section className="stage">
      <section className="images">
      {
        _.map(images, (d) => 
          <Figure model={d} />
        )
      }
      </section>
      <nav className="controller"></nav>
    </section>
  );
}

export default container(Gallery);
