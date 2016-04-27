import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import Figure from './Figure';

import './style.css';

const container = connect(
  (state) => ({
    images: _.get(state, 'images.data')
  }),
)

class Gallery extends Component {

  constant = {
    center: {
      left: 0,
      top: 0,
    },
    hRange: {
      leftX: [0, 0],
      rightX: [0, 0],
      y: [0, 0]
    },
    vRange: {
      x: [0, 0],
      topY: [0, 0]
    }
  }

  state = {
    list: _.map(this.props.images, (d) => ({data: d})),
  }

  getRangeRandom = (low, high) => {
    return Math.ceil(Math.random() * (high - low) + low);
  }

  get30DegRandom = () => {
    return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
  }

  freshList = (index) => {
    const {list} = this.state;

    const _list = _.map(list, (d, i) => {

      const j = list.length / 2;
      const range = (j < i) ? this.constant.hRange.leftX : this.constant.hRange.rightX;

      return {
        ...d,
        position: {
          left: this.getRangeRandom(...range),
          top: this.getRangeRandom(...this.constant.hRange.y),
        },
        rotate: this.get30DegRandom(),
        isCenter: false,
        isInverse: false,
      }
    });

    _list[index] = {
      ...list[index],
      position: this.constant.center,
      rotate: 0,
      isCenter: true,
    };

    this.setState({
      list: _list,
    })
  };

  setCenter = (index) => {
    return () => {
      this.freshList(index);
    }
  }

  setInverse = (index) => {
    return () => {
      console.log('hehe')
      let {list} = this.state;
      list[index] = {
        ...list[index],
        isInverse: !list[index].isInverse,
      }
      this.setState({
        list: list,
      })
    }
  }

  componentDidMount() {
    const stageDOM = this.refs.stage;
    const stageWidth = stageDOM.scrollWidth,
          stageHeight = stageDOM.scrollHeight,
          halfStageWidth = stageWidth / 2,
          halfStageHeight = stageHeight / 2;

    const figureDOM = ReactDOM.findDOMNode(this.refs.figure0);
    const figureWidth = figureDOM.scrollWidth,
          figureHeight = figureDOM.scrollHeight,
          halfFigureWidth = figureWidth / 2,
          halfFigureHeight = figureHeight / 2;

    this.constant.center = {
      left: halfStageWidth - halfFigureWidth - 80,
      top: halfStageHeight - halfFigureHeight,
    };

    this.constant.hRange = {
      leftX: [-halfFigureWidth, (halfStageWidth - halfFigureWidth * 3)],
      rightX: [(halfStageWidth + halfFigureWidth), (stageWidth - halfFigureWidth)],
      y: [-halfFigureHeight, (stageHeight - halfFigureHeight)],
    }

    this.constant.vRange = {
      x: [(halfStageWidth - figureWidth), halfStageWidth],
      topY: [-halfFigureHeight, (halfStageHeight - halfFigureHeight * 3)],
    }

    this.freshList(0);
  }

  render() {
    const {list} = this.state;
    if (!list.length) return (<div>no data</div>);

    return (
      <section className="stage">
        <section className="images" ref="stage">
        {
          _.map(list, (d, i) => 
            <Figure
              key={i}
              ref={`figure${i}`}
              model={d} 
              setCenter={this.setCenter(i)}
              setInverse={this.setInverse(i)}
            />
          )
        }
        </section>
        <nav className="controller"></nav>
      </section>
    );
  }
}

export default container(Gallery);
