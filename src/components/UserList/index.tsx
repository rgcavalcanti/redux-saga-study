import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../../store';
import { User } from '../../store/ducks/users/types';
import * as UserActions from '../../store/ducks/users/actions';

interface StateProps {
  users: User[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

const UserList = (props: Props) => {
  const { users, loadRequest } = props;

  useEffect(() => {
    () => console.log(users.length);
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.id} - {user.name}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  users: state.users.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
