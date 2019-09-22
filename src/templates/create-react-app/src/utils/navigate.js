import history from 'config/history';

const navigate = {
  to: path => {
    history.push(path);
  }
};

export default navigate;
