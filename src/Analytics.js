import ReactGA from 'react-ga';

ReactGA.initialize('UA-96041324-2');

const entry = new Date().getTime();

export default {
  ...ReactGA,
  event: args => ReactGA({
    ...args,
    value: new Date().getTime() - entry,
  }),
};
