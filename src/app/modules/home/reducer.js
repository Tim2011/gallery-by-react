import {loop, Effects} from 'redux-loop';

const initialState = {
  data: [
    {
      filename: '1.png',
      title: 'This is first picture',
      description: 'AHA...this picture is so beutiful......'
    },
    {
      filename: '2.png',
      title: 'This is second picture',
      description: 'AHA...this picture is so beutiful......'
    },
    {
      filename: '3.png',
      title: 'This is first picture',
      description: 'AHA...this picture is so beutiful......'
    },
    {
      filename: '4.png',
      title: 'This is first picture',
      description: 'AHA...this picture is so beutiful......'
    },
    {
      filename: '5.png',
      title: 'This is first picture',
      description: 'AHA...this picture is so beutiful......'
    },
    {
      filename: '6.png',
      title: 'This is first picture',
      description: 'AHA...this picture is so beutiful......'
    },
    {
      filename: '7.png',
      title: 'This is first picture',
      description: 'AHA...this picture is so beutiful......'
    },
    {
      filename: '8.png',
      title: 'This is first picture',
      description: 'AHA...this picture is so beutiful......'
    },
  ],
};

export default (state = initialState, action) => {
  return loop(state, Effects.none());
}