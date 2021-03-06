/**
 * Page TODO stub
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import React from 'react'
import T from 'i18n-react'
import PageTemplate from 'components/templates/PageTemplate'

import CurrentUser from 'containers/user/CurrentUser'

type UserProps = {
  data: {
    viewer: {
      agent: {
        name: string,
      },
    },
    loading: bool,
    error: ?Error,
  },
};

/* eslint no-nested-ternary: 0 */
const UsernameDisplay = CurrentUser(({ data: { viewer, loading, error } }: UserProps) => (
  loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> : <p>Hello, {viewer ? viewer.agent.name : 'nobody'}.</p>)
))

const Todo = () => (
  <PageTemplate>
    <h1 style={{ color: '#F0F', fontWeight: 'bold', textAlign: 'center' }}><T.text text="todo_text" /></h1>
    <UsernameDisplay />
  </PageTemplate>
)

export default Todo
