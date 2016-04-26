import React, {Component, PropTypes} from 'react';

export default class Figure extends Component {

  static propTypes = {
    model: PropTypes.object,
  };

  render() {
    const {model} = this.props;
    return (
      <figure className="figure">
        <img src={require(`./images/${model.filename}`)} alt={model.title} />
        <figureCaption className="title">{model.title}</figureCaption>
      </figure>
    )
  }
}