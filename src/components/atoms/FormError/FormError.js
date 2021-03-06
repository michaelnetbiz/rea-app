/**
 * Container element for form error messages
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 * @flow
 */

import type { Element } from 'react'

import React from 'react'
import themeable from 'react-themeable'

type Props = {
  theme: Object,
  children: Element<*>,
};

const FormError = ({ theme, children }: Props) => (
  <div {...themeable(theme)(1, 'formError')}>{children}</div>
)

export default FormError
