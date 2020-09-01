import React, { Fragment, Component } from 'react';
import Sprinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Sprinner />;

    return (
      <Fragment>
        <Link to='/'>Back to Search</Link>
      </Fragment>
    );
  }
}

export default User;
