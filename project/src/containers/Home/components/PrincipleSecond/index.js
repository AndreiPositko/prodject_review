import React from 'react'
import { Link } from 'react-scroll'

import { Container, Grid } from '@material-ui/core'

import styles from '../common/style.module.scss'

function PrincipleSecond() {
  return (
    <>
      <div className={styles.section} id="principle_2">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <div className={styles['info-block']}>
                <div className={styles['info-title']}>
                  <p className={styles['info-text']}>Advanced shouldn’t mean complex.</p>
                </div>
                <div className={styles['info-subtitle']}>
                  <p className={styles['subtitle-text']}>
                    People don't care about wallet addresses, algorithms, and protocols. They expect
                    to be delighted by useful products that can bond with
                  </p>
                </div>
                <Link to="principle_3" smooth="true" className={styles['info-link']}>
                  Makes sense, next
                </Link>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>Stone</div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default PrincipleSecond
