import React, {Component} from 'react';
import classnames from 'classnames';

export default class Figure extends Component {

  handleClick = (e) => {
    const {setCenter, setInverse, model} = this.props;
    model.isCenter ? setInverse() : setCenter();
  }

  render() {
    const {model} = this.props;
    let style = model.position || {};

    if (model.rotate) {
      ['MozTransform', 'msTransform', 'WebkitTransform', 'transform'].forEach((value) => {
        style[value] = `rotate(${model.rotate}deg)`;
      })
    }

    if (model.isCenter) {
      style.zIndex = 11;
    }

    return (
      <figure
        className={classnames("figure", {'is-inverse': model.isInverse})}
        style={style}>
        <img 
          src={require(`./images/${model.data.filename}`)} 
          alt={model.data.title} 
          onClick={this.handleClick}
        />
        <figureCaption className="title">
          <h2 className="title">{model.data.title}</h2>
          <div 
            className="img-back"
            onClick={this.handleClick}
          >
            <p>{model.data.description}</p>
          </div>
        </figureCaption>
      </figure>
    );
  }
}
