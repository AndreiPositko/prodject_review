import React from 'react'
import { Link } from 'react-scroll'

import { Container, Grid } from '@material-ui/core'

import styles from '../common/style.module.scss'

function PrincipleFourth() {
  return (
    <>
      <div className={styles.section} id="principle_4">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <div className={styles['info-block']}>
                <div className={styles['info-title']}>
                  <p className={styles['info-text']}>Decentralization is just a concept.</p>
                </div>
                <div className={styles['info-subtitle']}>
                  <p className={styles['subtitle-text']}>
                    Centralization and decentralization are not "either-or" conditions. Balance is a
                    necessity in all systems. Not everything can or needs to be decentralized.
                  </p>
                </div>
                <Link to="principle_5" smooth="true" className={styles['info-link']}>
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

export default PrincipleFourth
