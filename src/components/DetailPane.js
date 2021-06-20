/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import Icon from './Icon'

const DetailPane = ({ category = true }) =>
  category && (
    <div
      css={css`
        height: 475px;
        background: black;
        width: 100%;
        position: absolute;
        border: 2px solid white;
        z-index: 99;
        .Icon {
          font-size: 32px;
          color: white;
          position: absolute;
          right: 20px;
          top: 20px;
          cursor: pointer;
        }
      `}
    >

    </div>
  )

export default DetailPane