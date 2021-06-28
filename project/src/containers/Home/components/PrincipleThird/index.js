import React from 'react'
import { Link } from 'react-scroll'

import { Container, Grid } from '@material-ui/core'

import styles from '../common/style.module.scss'

function PrincipleThird() {
  return (
    <>
      <div className={styles.section} id="principle_3">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <div className={styles['info-block']}>
                <div className={styles['info-title']}>
                  <p className={styles['info-text']}>Blockchain needs network effect.</p>
                </div>
                <div className={styles['info-subtitle']}>
                  <p className={styles['subtitle-text']}>
                    Today, blockchain is stuck at the engineering level. It needs to be easier,
                    simpler, and more inclusive in order to scale the world.
                  </p>
                </div>
                <Link to="principle_4" smooth="true" className={styles['info-link']}>
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

export default PrincipleThird
