/* eslint-env mocha */

import {expect} from 'chai'

import {BASE_CONF, Grid, Row, Col} from '.'

describe('index', () => {
  it('should correctly exports', () => {
    expect(BASE_CONF).to.be.ok
    expect(Grid).to.be.ok
    expect(Row).to.be.ok
    expect(Col).to.be.ok
  })
})
