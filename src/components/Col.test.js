/* eslint-env mocha */

import {expect} from 'chai'
import React from 'react'

import Col from './Col'

describe('Col', () => {
  it('should works', () => {
    expect(<Col />).to.be.ok
  })
})
